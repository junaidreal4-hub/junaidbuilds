'use client'
import { useState, useEffect } from 'react'
import { CurtainThemeToggle } from '@/components/ui/CurtainThemeToggle'

const links = [
  { label: 'Work',     href: '#work'     },
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [dark, setDark]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* keep dark state in sync (for wordmark colour) */
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const wordmarkColor = dark ? '#f3ede1' : '#080808'
  const navBg         = scrolled
    ? dark ? 'rgba(243,237,225,0.06)' : 'rgba(8,8,8,0.06)'
    : dark ? 'rgba(243,237,225,0.04)' : 'rgba(8,8,8,0.04)'
  const navBorder = dark ? 'rgba(243,237,225,0.12)' : 'rgba(8,8,8,0.1)'
  const linkBase  = dark ? 'rgba(243,237,225,0.45)' : 'rgba(8,8,8,0.55)'
  const linkHover = dark ? '#f3ede1' : '#080808'
  const linkActiveText = dark ? '#0e0e0e' : '#ffffff'
  const linkActiveBg   = dark ? '#dfd8c6' : '#080808'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 pointer-events-none">

      {/* Wordmark — left */}
      <a
        href="/"
        className="pointer-events-auto font-mono font-bold text-sm tracking-widest uppercase"
        style={{ color: wordmarkColor, transition: 'color 0.3s ease' }}
      >
        mdjk.dev
      </a>

      {/* Bubble nav — center */}
      <nav
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500"
        style={{
          background: navBg,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid ${navBorder}`,
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
              color: active === l.href ? linkActiveText : linkBase,
              background: active === l.href ? linkActiveBg : 'transparent',
              transition: 'color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={e => {
              if (active !== l.href) (e.currentTarget as HTMLElement).style.color = linkHover
            }}
            onMouseLeave={e => {
              if (active !== l.href) (e.currentTarget as HTMLElement).style.color = linkBase
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Theme toggle — right */}
      <div className="pointer-events-auto">
        <CurtainThemeToggle
          size={34}
          duration={550}
          onThemeChange={(t) => setDark(t === 'dark')}
        />
      </div>

    </header>
  )
}
