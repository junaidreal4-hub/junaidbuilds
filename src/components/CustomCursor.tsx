'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)
  const pos      = useRef({ x: -100, y: -100 })
  const target   = useRef({ x: -100, y: -100 })
  const rafRef   = useRef<number | null>(null)
  const hovering = useRef(false)

  useEffect(() => {
    // Hide native cursor globally
    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const onEnter = () => { hovering.current = true }
    const onLeave = () => { hovering.current = false }

    // Attach hover detection to all interactive elements
    const addHover = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addHover()

    window.addEventListener('mousemove', onMove)

    // Smooth lerp loop
    const loop = () => {
      const lerpFactor = 0.12
      pos.current.x += (target.current.x - pos.current.x) * lerpFactor
      pos.current.y += (target.current.y - pos.current.y) * lerpFactor

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
        // Scale up ring on hover
        ringRef.current.style.width  = hovering.current ? '52px' : '36px'
        ringRef.current.style.height = hovering.current ? '52px' : '36px'
        ringRef.current.style.borderColor = hovering.current ? '#f97316' : 'rgba(255,255,255,0.5)'
        ringRef.current.style.opacity = hovering.current ? '1' : '0.6'
      }

      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Inner dot — snaps instantly to cursor */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#f97316',
          willChange: 'transform',
        }}
      />
      {/* Outer ring — lags behind for smooth feel */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.5)',
          backgroundColor: 'transparent',
          willChange: 'transform',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease',
          opacity: 0.6,
        }}
      />
    </>
  )
}
