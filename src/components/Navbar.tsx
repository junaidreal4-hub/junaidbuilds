'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '#services'    },
  { label: 'Work',     href: '#work'         },
  { label: 'About',    href: '#about'        },
  { label: 'Reviews',  href: '#reviews'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'
    }`}>
      <div className="container-width flex items-center justify-between h-16 md:h-18">

        {/* Logo */}
        <a href="/" className="font-mono font-bold text-heading text-sm tracking-widest uppercase">
          mdjk.dev
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover-slide label hover:text-heading transition-colors">
              <span>{l.label}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Start a project
        </a>

        {/* Mobile menu placeholder */}
        <a href="#contact" className="md:hidden btn-primary text-[10px] px-4 py-2">
          Contact
        </a>
      </div>
    </header>
  )
}
