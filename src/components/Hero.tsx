'use client'
import { useEffect, useState } from 'react'
import { SplineScene } from '@/components/ui/spline'
import { SpecialText } from '@/components/ui/SpecialText'

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
      className="relative overflow-hidden bg-[#080808]"
      style={{ minHeight: '100dvh' }}
    >
      {/* ── Spline 3D – centered, takes up middle band ── */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── Dark fade top & bottom ── */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.0) 25%, rgba(8,8,8,0.0) 60%, rgba(8,8,8,0.97) 85%)',
      }} />

      {/* ════════════════════════════════════
          TOP ROW – 4 info columns
      ════════════════════════════════════ */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <div className="grid grid-cols-4 border-b border-white/[0.06]">

          {/* Col 1: name */}
          <div className="px-6 md:px-8 py-6 border-r border-white/[0.06]">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Developer</p>
            <p className="font-mono text-xs text-white/80 uppercase tracking-widest">Md Junaid Khan</p>
          </div>

          {/* Col 2: role */}
          <div className="px-6 md:px-8 py-6 border-r border-white/[0.06]">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Discipline</p>
            <p className="font-mono text-xs text-white/80 uppercase tracking-widest">Full-Stack &amp; Design</p>
          </div>

          {/* Col 3: status */}
          <div className="px-6 md:px-8 py-6 border-r border-white/[0.06] pointer-events-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Status</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#f97316' }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#f97316' }} />
              </span>
              <span className="font-mono text-xs text-white/80 uppercase tracking-widest">Available</span>
            </div>
          </div>

          {/* Col 4: location + time */}
          <div className="px-6 md:px-8 py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Location</p>
            <p className="font-mono text-xs text-white/80 uppercase tracking-widest">Berlin &mdash; <span className="tabular-nums text-white/40">{time}</span></p>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          BOTTOM – large headline + CTAs
      ════════════════════════════════════ */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">

        {/* Big headline */}
        <div className="px-5 md:px-8 pt-6">
          <h1
            className="uppercase subpixel-antialiased leading-[0.88] tracking-tight text-white"
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 300,
              fontSize: 'clamp(3rem, 8.5vw, 9rem)',
              WebkitFontSmoothing: 'auto',
            }}
          >
            <SpecialText speed={12} delay={0.1}>Turning Ideas Into</SpecialText>
          </h1>
          <h1
            className="uppercase subpixel-antialiased leading-[0.88] tracking-tight"
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 300,
              fontSize: 'clamp(3rem, 8.5vw, 9rem)',
              color: 'rgba(255,255,255,0.22)',
              WebkitFontSmoothing: 'auto',
            }}
          >
            <SpecialText speed={12} delay={0.4}>Modern &amp; Interactive</SpecialText>
          </h1>
          <h1
            className="uppercase subpixel-antialiased leading-[0.88] tracking-tight text-white"
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 300,
              fontSize: 'clamp(3rem, 8.5vw, 9rem)',
              WebkitFontSmoothing: 'auto',
            }}
          >
            <SpecialText speed={12} delay={0.7}>Websites.</SpecialText>
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 px-5 md:px-8 py-4 border-t border-white/[0.06] flex items-center justify-between pointer-events-auto">
          <div className="flex gap-3">
            <a href="#work" className="btn-primary">See my work →</a>
            <a href="#contact" className="btn-ghost">Start a project</a>
          </div>
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest hidden md:block">mdjk.dev © 2026</span>
        </div>
      </div>
    </section>
  )
}
