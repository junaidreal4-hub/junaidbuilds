'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const target  = useRef({ x: -100, y: -100 })
  const ring    = useRef({ x: -100, y: -100 })
  const rafRef  = useRef<number | null>(null)
  const hovering = useRef(false)

  useEffect(() => {
    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const onEnter = () => { hovering.current = true }
    const onLeave = () => { hovering.current = false }

    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove)

    const loop = () => {
      // Dot: instant — no lag at all
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`
      }

      // Ring: gentle lag at 0.18 — noticeable trail but not slow
      ring.current.x += (target.current.x - ring.current.x) * 0.18
      ring.current.y += (target.current.y - ring.current.y) * 0.18

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`
        ringRef.current.style.width        = hovering.current ? '52px' : '36px'
        ringRef.current.style.height       = hovering.current ? '52px' : '36px'
        ringRef.current.style.borderColor  = hovering.current ? '#f97316' : 'rgba(255,255,255,0.5)'
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
      {/* Dot — locks to cursor with zero lag */}
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
      {/* Ring — trails slightly behind */}
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
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease',
        }}
      />
    </>
  )
}
