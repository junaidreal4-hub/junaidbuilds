'use client'
import {
  useState, useCallback, useRef, useEffect,
  type ReactNode, type CSSProperties,
} from 'react'

export type Theme = 'light' | 'dark'

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

const LIGHT_CURTAIN = '#f3ede1'
const DARK_CURTAIN  = '#0e0e0e'

const BTN_LIGHT: CSSProperties = {
  background: '#f3ede1',
  color: '#1a1a1a',
  boxShadow: '0 0 0 1.5px rgba(255,255,255,0.15)',
}
const BTN_DARK: CSSProperties = {
  background: '#0e0e0e',
  color: '#dfd8c6',
  boxShadow: '0 0 0 1.5px rgba(0,0,0,0.35)',
}

interface Props {
  /** Called after the theme switch completes so parent can react */
  onThemeChange?: (theme: Theme) => void
  /** Diameter of the button in px. Default: 36 */
  size?: number
  /** Curtain animation duration in ms. Default: 550 */
  duration?: number
  /** Extra className on the <button> element */
  className?: string
  /** Extra inline style on the <button> element */
  style?: CSSProperties
}

export function CurtainThemeToggle({
  onThemeChange,
  size     = 36,
  duration = 550,
  className,
  style,
}: Props) {
  const [theme, setTheme]     = useState<Theme>('light')
  const [phase, setPhase]     = useState<CurtainPhase>('idle')
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const curtainColorRef       = useRef<string>('')

  /* sync with Tailwind dark class on mount */
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  const toggle = useCallback(() => {
    if (phase !== 'idle') return
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    curtainColorRef.current = next === 'dark' ? DARK_CURTAIN : LIGHT_CURTAIN

    setPhase('falling')
    setTimeout(() => {
      setTheme(next)
      onThemeChange?.(next)
      if (next === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      setPhase('rising')
      setTimeout(() => setPhase('idle'), duration + 60)
    }, duration)
  }, [phase, theme, duration, onThemeChange])

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
    width: size,
    height: size,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: `scale(${pressed ? 0.92 : hovered ? 1.12 : 1})`,
    transition: 'transform 0.15s ease, background 0.3s ease, color 0.3s ease',
    ...(theme === 'light' ? BTN_LIGHT : BTN_DARK),
    ...style,
  }

  return (
    <>
      <div aria-hidden="true" style={curtainStyle} />
      <button
        style={btnStyle}
        className={className}
        onClick={toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false) }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        aria-pressed={theme === 'dark'}
      >
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </>
  )
}
