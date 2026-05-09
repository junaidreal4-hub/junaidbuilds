'use client'
import { useEffect, useState } from 'react'
import { Waves } from './Waves'

export default function Hero() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-DE', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      timeZone: 'Europe/Berlin', hour12: false,
    }))
    update(); const id = setInterval(update, 1000); return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative flex flex-col pt-16 overflow-hidden bg-[#080808]"
      style={{ minHeight: '100dvh' }}
    >
      <Waves strokeColor="rgba(255,255,255,0.05)" backgroundColor="transparent" pointerSize={0.3} />

      {/* Cyan glow blob */}
      <div className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] bg-cyan/[0.04] rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Main content */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="w-full px-6 md:px-10">

          {/* Line 1: I BUILD MODERN WEBSITES — all one line */}
          <div className="overflow-hidden">
            <p
              className="font-sans font-black uppercase text-white tracking-tighter opacity-0 animate-fade-up"
              style={{
                fontSize: 'clamp(2.6rem, min(9.5vw, 12vh), 10rem)',
                lineHeight: 0.88,
                animationDelay: '0ms',
                animationFillMode: 'forwards',
              }}
            >
              I Build{' '}
              <span className="text-cyan italic">Modern</span>{' '}
              Websites
            </p>
          </div>

          {/* Line 2: That Works — pushed to the right */}
          <div className="overflow-hidden flex justify-end">
            <p
              className="font-sans font-black uppercase text-white tracking-tighter opacity-0 animate-fade-up"
              style={{
                fontSize: 'clamp(2.6rem, min(9.5vw, 12vh), 10rem)',
                lineHeight: 0.88,
                animationDelay: '80ms',
                animationFillMode: 'forwards',
              }}
            >
              That Works.
            </p>
          </div>

          {/* Tagline */}
          <p
            className="font-mono text-[11px] md:text-xs text-white/40 uppercase tracking-widest opacity-0 animate-fade-up mt-8"
            style={{ animationDelay: '180ms', animationFillMode: 'forwards' }}
          >
            Full-Stack Developer &amp; Designer &nbsp;·&nbsp; Berlin, Germany
          </p>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 w-full px-6 md:px-10 py-5 border-t border-white/[0.06] shrink-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Available</span>
            </div>
            <span className="font-mono text-xs text-white/30 tabular-nums">{time} CET</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">See my work →</a>
            <a href="#contact" className="btn-ghost">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
