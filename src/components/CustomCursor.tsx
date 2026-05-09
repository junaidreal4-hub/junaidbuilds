'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse   = useRef({ x: -100, y: -100 })
  const ring    = useRef({ x: -100, y: -100 })
  const [visible,  setVisible]  = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicked,  setClicked]  = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setHovering(!!el?.closest('a, button, [data-hover]'))
    }
    const onDown  = () => setClicked(true)
    const onUp    = () => setClicked(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove',  onMove)
    window.addEventListener('mousedown',  onDown)
    window.addEventListener('mouseup',    onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    let raf: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouse.current.x}px, ${mouse.current.y}px)`
      }
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1)
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mousedown',  onDown)
      window.removeEventListener('mouseup',    onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [visible])

  const ringSize = clicked ? 20 : hovering ? 48 : 36

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          zIndex: 99999, pointerEvents: 'none',
          willChange: 'transform',
          marginLeft: '-4px', marginTop: '-4px',
          width: '8px', height: '8px',
          borderRadius: '50%',
          background: hovering ? '#f97316' : '#080808',
          opacity: visible ? 1 : 0,
          transition: 'background 0.2s ease, opacity 0.3s ease',
        }}
      />

      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          zIndex: 99998, pointerEvents: 'none',
          willChange: 'transform',
          marginLeft: `-${ringSize / 2}px`,
          marginTop:  `-${ringSize / 2}px`,
          width:  `${ringSize}px`,
          height: `${ringSize}px`,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? '#f97316' : 'rgba(8,8,8,0.35)'}`,
          opacity: visible ? 1 : 0,
          transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, border-color 0.2s ease, opacity 0.3s ease',
        }}
      />
    </>
  )
}
