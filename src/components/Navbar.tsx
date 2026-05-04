'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#work'     },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-canvas/90 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-width flex items-center justify-between h-16 md:h-20">

        {/* Wordmark */}
        <a href="/" className="font-mono text-sm font-bold tracking-tight text-heading">
          junaid<span className="italic font-serif-display text-base">builds</span>
        </a>

        {/* Desktop nav — hover slide-up effect like nikolaradeski.com */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover-slide label hover:text-heading">
              <span>{l.label}</span>
              <span>{l.label}</span>
            </a>
          ))}
          <a href="#contact" className="hover-slide label border border-border px-5 py-2.5 hover:border-heading hover:text-heading transition-colors">
            <span>Get a Quote</span>
            <span>Get a Quote</span>
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-heading transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-px w-6 bg-heading transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-heading transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-canvas border-t border-border px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="label text-base hover:text-heading transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="label border border-border px-5 py-3 text-center hover:border-heading hover:text-heading transition-colors mt-2"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}
