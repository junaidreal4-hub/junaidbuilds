'use client'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'

interface Point {
    x: number
    y: number
    wave: { x: number; y: number }
    cursor: {
        x: number
        y: number
        vx: number
        vy: number
    }
}

interface WavesProps {
    className?: string
    strokeColor?: string
    backgroundColor?: string
    pointerSize?: number
}

export function Waves({
    className = "",
    strokeColor = "rgba(255,255,255,0.12)",
    backgroundColor = "transparent",
    pointerSize = 0.4
}: WavesProps) {
    const containerRef  = useRef<HTMLDivElement>(null)
    const svgRef        = useRef<SVGSVGElement>(null)
    const mouseRef      = useRef({
        x: -10, y: 0, lx: 0, ly: 0,
        sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false,
    })
    const pathsRef    = useRef<SVGPathElement[]>([])
    const linesRef    = useRef<Point[][]>([])
    const noiseRef    = useRef<((x: number, y: number) => number) | null>(null)
    const rafRef      = useRef<number | null>(null)
    const boundingRef = useRef<DOMRect | null>(null)

    useEffect(() => {
        if (!containerRef.current || !svgRef.current) return
        noiseRef.current = createNoise2D()
        setSize()
        setLines()
        window.addEventListener('resize', onResize)
        window.addEventListener('mousemove', onMouseMove)
        containerRef.current.addEventListener('touchmove', onTouchMove, { passive: false })
        rafRef.current = requestAnimationFrame(tick)
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', onResize)
            window.removeEventListener('mousemove', onMouseMove)
            containerRef.current?.removeEventListener('touchmove', onTouchMove)
        }
    }, [])

    const setSize = () => {
        if (!containerRef.current || !svgRef.current) return
        boundingRef.current = containerRef.current.getBoundingClientRect()
        const { width, height } = boundingRef.current
        svgRef.current.style.width  = `${width}px`
        svgRef.current.style.height = `${height}px`
    }

    const setLines = () => {
        if (!svgRef.current || !boundingRef.current) return
        const { width, height } = boundingRef.current
        linesRef.current = []
        pathsRef.current.forEach(p => p.remove())
        pathsRef.current = []
        const xGap = 8
        const yGap = 8
        const oWidth  = width  + 200
        const oHeight = height + 30
        const totalLines  = Math.ceil(oWidth  / xGap)
        const totalPoints = Math.ceil(oHeight / yGap)
        const xStart = (width  - xGap * totalLines)  / 2
        const yStart = (height - yGap * totalPoints) / 2
        for (let i = 0; i < totalLines; i++) {
            const points: Point[] = []
            for (let j = 0; j < totalPoints; j++) {
                points.push({
                    x: xStart + xGap * i,
                    y: yStart + yGap * j,
                    wave: { x: 0, y: 0 },
                    cursor: { x: 0, y: 0, vx: 0, vy: 0 },
                })
            }
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            path.setAttribute('fill', 'none')
            path.setAttribute('stroke', strokeColor)
            path.setAttribute('stroke-width', '1')
            svgRef.current.appendChild(path)
            pathsRef.current.push(path)
            linesRef.current.push(points)
        }
    }

    const onResize    = () => { setSize(); setLines() }
    const onMouseMove = (e: MouseEvent) => updateMousePosition(e.pageX, e.pageY)
    const onTouchMove = (e: TouchEvent) => {
        e.preventDefault()
        updateMousePosition(e.touches[0].clientX, e.touches[0].clientY)
    }

    const updateMousePosition = (x: number, y: number) => {
        if (!boundingRef.current) return
        const mouse = mouseRef.current
        mouse.x = x - boundingRef.current.left
        mouse.y = y - boundingRef.current.top + window.scrollY
        if (!mouse.set) {
            mouse.sx = mouse.x; mouse.sy = mouse.y
            mouse.lx = mouse.x; mouse.ly = mouse.y
            mouse.set = true
        }
    }

    const movePoints = (time: number) => {
        const lines = linesRef.current
        const mouse = mouseRef.current
        const noise = noiseRef.current
        if (!noise) return
        lines.forEach((points) => {
            points.forEach((p) => {
                const move = noise(
                    (p.x + time * 0.008) * 0.003,
                    (p.y + time * 0.003) * 0.002
                ) * 8
                p.wave.x = Math.cos(move) * 12
                p.wave.y = Math.sin(move) * 6

                const dx = p.x - mouse.sx
                const dy = p.y - mouse.sy
                const d  = Math.hypot(dx, dy)
                // Larger influence radius + stronger force for more dramatic effect
                const l  = Math.max(220, mouse.vs)
                if (d < l) {
                    const s = 1 - d / l
                    const f = Math.cos(d * 0.001) * s
                    p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00045
                    p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00045
                }
                // Slower return-to-rest = longer trailing ripple
                p.cursor.vx += (0 - p.cursor.x) * 0.006
                p.cursor.vy += (0 - p.cursor.y) * 0.006
                // Less damping = smoother, longer wave tail
                p.cursor.vx *= 0.97
                p.cursor.vy *= 0.97
                p.cursor.x += p.cursor.vx
                p.cursor.y += p.cursor.vy
                p.cursor.x = Math.min(60, Math.max(-60, p.cursor.x))
                p.cursor.y = Math.min(60, Math.max(-60, p.cursor.y))
            })
        })
    }

    const moved = (point: Point, withCursorForce = true) => ({
        x: point.x + point.wave.x + (withCursorForce ? point.cursor.x : 0),
        y: point.y + point.wave.y + (withCursorForce ? point.cursor.y : 0),
    })

    const drawLines = () => {
        linesRef.current.forEach((points, lIndex) => {
            if (points.length < 2 || !pathsRef.current[lIndex]) return
            const first = moved(points[0], false)
            let d = `M ${first.x} ${first.y}`
            for (let i = 1; i < points.length; i++) {
                const cur  = moved(points[i])
                const prev = moved(points[i - 1])
                // Quadratic bezier instead of straight lines = smoother curves
                const mx = (prev.x + cur.x) / 2
                const my = (prev.y + cur.y) / 2
                d += ` Q ${prev.x} ${prev.y} ${mx} ${my}`
            }
            pathsRef.current[lIndex].setAttribute('d', d)
        })
    }

    const tick = (time: number) => {
        const mouse = mouseRef.current
        // Smoother lerp: 0.06 instead of 0.1 so pointer influence glides
        mouse.sx += (mouse.x - mouse.sx) * 0.06
        mouse.sy += (mouse.y - mouse.sy) * 0.06
        const dx = mouse.x - mouse.lx
        const dy = mouse.y - mouse.ly
        const d  = Math.hypot(dx, dy)
        mouse.v  = d
        mouse.vs += (d - mouse.vs) * 0.08
        mouse.vs  = Math.min(100, mouse.vs)
        mouse.lx  = mouse.x
        mouse.ly  = mouse.y
        mouse.a   = Math.atan2(dy, dx)
        if (containerRef.current) {
            containerRef.current.style.setProperty('--x', `${mouse.sx}px`)
            containerRef.current.style.setProperty('--y', `${mouse.sy}px`)
        }
        movePoints(time)
        drawLines()
        rafRef.current = requestAnimationFrame(tick)
    }

    return (
        <div
            ref={containerRef}
            className={`waves-component ${className}`}
            style={{
                backgroundColor,
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                '--x': '-0.5rem',
                '--y': '50%',
            } as React.CSSProperties}
        >
            <svg
                ref={svgRef}
                className="block w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            />
        </div>
    )
}
