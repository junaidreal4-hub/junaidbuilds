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

  const hl = {
    fontSize: 'clamp(1.6rem, 3.5vw, 3.8rem)',
    fontWeight: 300,
    WebkitFontSmoothing: 'auto' as const,
    MozOsxFontSmoothing: 'auto' as const,
  }

  return (
    <section
      className="relative overflow-hidden bg-[#080808]"
      style={{ minHeight: '100dvh' }}
    >
      {/* ── Spline 3D background ── */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.25) 45%, rgba(8,8,8,0.08) 100%)',
        }}
      />

      {/* ── TOP-LEFT: name / role tag ── */}
      <div className="absolute top-24 left-6 md:left-10 z-20 pointer-events-none">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-1" style={{ color: '#f97316' }}>
          <SpecialText speed={18} delay={0.2}>mdjk.dev</SpecialText>
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          <SpecialText speed={18} delay={0.5}>Full-Stack Dev & Designer</SpecialText>
        </p>
      </div>

      {/* ── TOP-RIGHT: availability ── */}
      <div className="absolute top-24 right-6 md:right-10 z-20 pointer-events-none flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#f97316' }} />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#f97316' }} />
        </span>
        <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
          <SpecialText speed={18} delay={0.8}>Available for work</SpecialText>
        </span>
      </div>

      {/* ── BOTTOM-LEFT: main headlines ── */}
      <div className="absolute bottom-20 left-6 md:left-10 z-20 pointer-events-none max-w-lg">
        <h1
          className="subpixel-antialiased uppercase tracking-tight leading-[0.92] block"
          style={{ ...hl, color: '#ffffff' }}
        >
          <SpecialText speed={15} delay={0.3}>Turning Ideas</SpecialText>
        </h1>
        <h1
          className="subpixel-antialiased uppercase tracking-tight leading-[0.92] block"
          style={{ ...hl, color: 'rgba(255,255,255,0.2)' }}
        >
          <SpecialText speed={15} delay={0.55}>Into Interactive</SpecialText>
        </h1>
        <h1
          className="subpixel-antialiased uppercase tracking-tight leading-[0.92] block"
          style={{ ...hl, color: '#ffffff' }}
        >
          <SpecialText speed={15} delay={0.8}>Websites.</SpecialText>
        </h1>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mt-6 pointer-events-auto">
          <a href="#work" className="btn-primary">See my work →</a>
          <a href="#contact" className="btn-ghost">Start a project</a>
        </div>
      </div>

      {/* ── BOTTOM-RIGHT: descriptor ── */}
      <div className="absolute bottom-20 right-6 md:right-10 z-20 pointer-events-none text-right max-w-[200px]">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/25 leading-relaxed">
          <SpecialText speed={18} delay={1.1}>React & Next.js</SpecialText>
          <br />
          <SpecialText speed={18} delay={1.4}>Berlin, Germany</SpecialText>
        </p>
      </div>

      {/* ── Bottom bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-auto">
        <div className="w-full px-6 md:px-10 py-3 border-t border-white/[0.06] flex items-center justify-between">
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">mdjk.dev</span>
          <span className="font-mono text-[10px] text-white/20 tabular-nums">{time} CET</span>
        </div>
      </div>
    </section>
  )
}
