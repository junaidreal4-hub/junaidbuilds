'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Skills',    href: '#skills'        },
  { label: 'About',     href: '#about'          },
  { label: 'Work',      href: '#work'           },
  { label: 'Reviews',   href: '#testimonials'   },
]

export default function BottomNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-center gap-1 bg-heading rounded-full px-2 py-2 shadow-2xl">
        {/* Home icon */}
        <a
          href="#"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Home"
        >
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>

        {/* Nav links */}
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-4 py-2 rounded-full text-white/80 hover:text-white font-mono text-[11px] tracking-widest uppercase hover:bg-white/10 transition-all duration-200"
          >
            <span className="hover-slide">
              <span>{l.label}</span>
              <span>{l.label}</span>
            </span>
          </a>
        ))}

        {/* Orange CTA */}
        <a
          href="#contact"
          className="ml-1 bg-orange text-white font-mono text-[11px] tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-orange/90 transition-colors"
        >
          Contact me
        </a>
      </div>
    </nav>
  )
}
