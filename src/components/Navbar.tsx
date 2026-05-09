'use client'
import { useState, useEffect } from 'react'

const links = [
  { index: '01', label: 'Work',     href: '#work'     },
  { index: '02', label: 'About',    href: '#about'    },
  { index: '03', label: 'Services', href: '#services' },
  { index: '04', label: 'Contact',  href: '#contact'  },
]

const socials = [
  { label: 'GitHub',    href: 'https://github.com/junaidreal4-hub' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/junaidreal4' },
  { label: 'Instagram', href: 'https://instagram.com/junaidreal4'  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* Top bar — MDJK.DEV hard left, MENU hard right, full bleed */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between h-16 px-6 md:px-10">

          {/* Wordmark — far left */}
          <a
            href="/"
            onClick={close}
            className="font-mono font-bold text-white text-sm tracking-widest uppercase"
          >
            mdjk.dev
          </a>

          {/* Menu toggle — far right */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="font-mono text-white text-xs tracking-widest uppercase flex items-center gap-3 group"
          >
            <span className="relative w-6 h-3.5 flex flex-col justify-between">
              <span className={`block h-px bg-white transition-all duration-500 origin-center ${
                open ? 'rotate-45 translate-y-[7px]' : ''
              }`} />
              <span className={`block h-px bg-white transition-all duration-300 ${
                open ? 'opacity-0 scale-x-0' : ''
              }`} />
              <span className={`block h-px bg-white transition-all duration-500 origin-center ${
                open ? '-rotate-45 -translate-y-[7px]' : ''
              }`} />
            </span>
            <span>{open ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </header>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-between h-full pt-28 pb-12 px-6 md:px-10">
          <nav className="flex flex-col gap-0">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className={`group flex items-end justify-between border-b border-white/10 py-7 transition-all duration-700 ${
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: open ? `${150 + i * 80}ms` : '0ms' }}
              >
                <div className="flex items-end gap-6">
                  <span className="font-mono text-xs text-white/30 mb-1">{l.index}</span>
                  <span className="font-sans font-black text-[clamp(3rem,10vw,8rem)] text-white tracking-tight leading-none group-hover:text-cyan transition-colors duration-300">
                    {l.label}
                  </span>
                </div>
                <span className="font-mono text-xs text-white/30 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
            ))}
          </nav>

          <div
            className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 transition-all duration-700 ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: open ? '550ms' : '0ms' }}
          >
            <div className="flex gap-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white/40 hover:text-white tracking-widest uppercase transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase">
              Berlin, Germany &nbsp;·&nbsp; Available Now
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
