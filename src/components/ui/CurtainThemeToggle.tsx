'use client'
import { useState, useCallback, useRef, type CSSProperties } from 'react'
import { useTheme } from '@/context/ThemeContext'

type CurtainPhase = 'idle' | 'falling' | 'rising'
const EASING = 'cubic-bezier(0.76, 0, 0.24, 1)'

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="1"   x2="12" y2="3"   />
      <line x1="12" y1="21"  x2="12" y2="23"  />
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"     y1="12"    x2="3"     y2="12"    />
      <line x1="21"    y1="12"    x2="23"    y2="12"    />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  )
}

interface Props {
  size?: number
  duration?: number
  style?: CSSProperties
  className?: string
}

export function CurtainThemeToggle({ size = 36, duration = 550, style, className }: Props) {
  const { theme, toggle: ctxToggle } = useTheme()
  const [phase, setPhase]     = useState<CurtainPhase>('idle')
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const curtainColorRef       = useRef<string>('')

  const isDark = theme === 'dark'

  const handleClick = useCallback(() => {
    if (phase !== 'idle') return
    curtainColorRef.current = isDark ? '#ffffff' : '#0a0a0a'
    setPhase('falling')
    setTimeout(() => {
      ctxToggle()
      setPhase('rising')
      setTimeout(() => setPhase('idle'), duration + 60)
    }, duration)
  }, [phase, isDark, duration, ctxToggle])

  const curtainStyle: CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: curtainColorRef.current,
    transformOrigin: 'top',
    transform: phase === 'falling' ? 'scaleY(1)' : 'scaleY(0)',
    transition: phase !== 'idle' ? `transform ${duration}ms ${EASING}` : 'none',
    zIndex: 9997,
    pointerEvents: 'none',
  }

  const btnStyle: CSSProperties = {
    width: size, height: size,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: isDark ? '#0a0a0a' : '#f3ede1',
    color:      isDark ? '#dfd8c6' : '#1a1a1a',
    boxShadow:  isDark ? '0 0 0 1.5px rgba(255,255,255,0.12)' : '0 0 0 1.5px rgba(0,0,0,0.10)',
    transform: `scale(${pressed ? 0.92 : hovered ? 1.12 : 1})`,
    transition: 'transform 0.15s ease, background 0.3s ease, color 0.3s ease',
    ...style,
  }

  return (
    <>
      <div aria-hidden="true" style={curtainStyle} />
      <button
        style={btnStyle}
        className={className}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false) }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDark}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  )
}
