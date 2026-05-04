'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work',     href: '#work'     },
    { label: 'About',    href: '#about'    },
    { label: 'Contact',  href: '#contact'  },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-width flex items-center justify-between h-16">
        <a href="/" className="font-mono font-bold text-lg tracking-tight">junaid<span className="text-sky-500">builds</span></a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Get a Quote
          </a>
        </nav>

        {/* Mobile burger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-gray-900 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-900 transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-900 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-700">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg text-center">
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}
