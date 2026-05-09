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

  const FS = 'clamp(2.8rem, 10.5vw, 12rem)'

  return (
    <section
      className="relative flex flex-col pt-16 overflow-hidden bg-[#080808]"
      style={{ minHeight: '100dvh' }}
    >
      <Waves strokeColor="rgba(255,255,255,0.05)" backgroundColor="transparent" pointerSize={0.3} />
      <div
        className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-10"
        style={{ background: 'rgba(168,200,240,0.05)' }}
      />

      <div className="relative z-20 flex-1 flex items-center">
        <div className="w-full px-6 md:px-10">

          {/* Line 1: Turning Ideas Into */}
          <div className="overflow-hidden">
            <p
              className="font-sans font-black uppercase tracking-tighter opacity-0 animate-fade-up"
              style={{
                fontSize: FS,
                lineHeight: 0.9,
                color: '#f5f5f0',
                animationDelay: '0ms',
                animationFillMode: 'forwards',
              }}
            >
              Turning Ideas Into
            </p>
          </div>

          {/* Line 2: Modern (ice blue italic) + Websites. (white) */}
          <div className="overflow-hidden">
            <p
              className="font-sans font-black uppercase tracking-tighter opacity-0 animate-fade-up"
              style={{
                fontSize: FS,
                lineHeight: 0.9,
                color: '#f5f5f0',
                animationDelay: '80ms',
                animationFillMode: 'forwards',
              }}
            >
              <span style={{ color: '#A8C8F0', fontStyle: 'italic' }}>Modern </span>Websites.
            </p>
          </div>

          {/* Tagline */}
          <p
            className="font-mono text-[11px] md:text-xs uppercase tracking-widest opacity-0 animate-fade-up mt-8"
            style={{ color: 'rgba(255,255,255,0.4)', animationDelay: '180ms', animationFillMode: 'forwards' }}
          >
            Full-Stack Developer &amp; Designer &nbsp;&middot;&nbsp; Berlin, Germany
          </p>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 w-full px-6 md:px-10 py-5 border-t border-white/[0.06] shrink-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#A8C8F0' }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#A8C8F0' }} />
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
