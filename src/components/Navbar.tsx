'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Work',     href: '#work'     },
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 pointer-events-none">

      {/* Wordmark — left */}
      <a
        href="/"
        className="pointer-events-auto font-mono font-bold text-[#080808] text-sm tracking-widest uppercase"
      >
        mdjk.dev
      </a>

      {/* Bubble nav — center */}
      <nav
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.06)' : 'rgba(8,8,8,0.04)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(8,8,8,0.1)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setActive(l.href)}
            className="relative px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-widest transition-all duration-200"
            style={{
              color: active === l.href ? '#ffffff' : 'rgba(8,8,8,0.55)',
              background: active === l.href ? '#080808' : 'transparent',
            }}
            onMouseEnter={e => {
              if (active !== l.href) (e.currentTarget as HTMLElement).style.color = '#080808'
            }}
            onMouseLeave={e => {
              if (active !== l.href) (e.currentTarget as HTMLElement).style.color = 'rgba(8,8,8,0.55)'
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* CTA — right */}
      <a
        href="#contact"
        className="pointer-events-auto font-mono text-[11px] uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-200"
        style={{
          background: '#f97316',
          color: '#ffffff',
        }}
      >
        Let’s Talk
      </a>
    </header>
  )
}
