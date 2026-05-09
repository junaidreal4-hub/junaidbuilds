'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)

      const el = document.elementFromPoint(e.clientX, e.clientY)
      const link = el?.closest('a, button, [data-cursor]')
      if (link) {
        const attr = link.getAttribute('data-cursor')
        setLabel(attr || 'VIEW')
      } else {
        setLabel('')
      }
    }

    const onDown = () => setClicked(true)
    const onUp   = () => setClicked(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    let raf: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.12)
      current.current.y = lerp(current.current.y, pos.current.y, 0.12)
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${current.current.x}px, ${current.current.y}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [visible])

  const hasLabel = label.length > 0
  const size = clicked ? 44 : hasLabel ? 72 : 12

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Cursor element */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: 'none',
          willChange: 'transform',
          marginLeft: `-${size / 2}px`,
          marginTop: `-${size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.25s ease, height 0.25s ease, margin 0.25s ease, background 0.25s ease, border-color 0.25s ease',
          opacity: visible ? 1 : 0,
          background: hasLabel ? '#080808' : 'transparent',
          border: hasLabel ? '1.5px solid #080808' : '1.5px solid rgba(8,8,8,0.5)',
          mixBlendMode: hasLabel ? 'normal' : 'normal',
        }}
      >
        {hasLabel && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#ffffff',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}>
            {label}
          </span>
        )}
      </div>
    </>
  )
}
