'use client'
import { useState, useEffect } from 'react'
import { CurtainThemeToggle } from '@/components/ui/CurtainThemeToggle'
import { useTheme } from '@/context/ThemeContext'

const links = [
  { label: 'Work',     href: '#work'     },
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const { theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const isDark = theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 pointer-events-none">

      {/* Wordmark */}
      <a href="/"
        className="pointer-events-auto font-mono font-bold text-sm tracking-widest uppercase"
        style={{ color: 'var(--c-ink)', transition: 'color 0.3s ease' }}
      >
        mdjk.dev
      </a>

      {/* Bubble nav */}
      <nav
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500"
        style={{
          background: scrolled
            ? (isDark ? 'rgba(240,234,220,0.06)' : 'rgba(8,8,8,0.06)')
            : (isDark ? 'rgba(240,234,220,0.04)' : 'rgba(8,8,8,0.04)'),
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid var(--c-divider)`,
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setActive(l.href)}
            className="relative px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-widest"
            style={{
              color: active === l.href ? 'var(--c-bg)' : 'var(--c-ink-dim)',
              background: active === l.href ? 'var(--c-ink)' : 'transparent',
              transition: 'color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={e => {
              if (active !== l.href) (e.currentTarget as HTMLElement).style.color = 'var(--c-ink)'
            }}
            onMouseLeave={e => {
              if (active !== l.href) (e.currentTarget as HTMLElement).style.color = 'var(--c-ink-dim)'
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Theme toggle */}
      <div className="pointer-events-auto">
        <CurtainThemeToggle size={34} duration={550} />
      </div>

    </header>
  )
}
