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

  const word = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 300,
    fontSize: 'clamp(0.9rem, 1.5vw, 1.4rem)',
    WebkitFontSmoothing: 'auto' as const,
    MozOsxFontSmoothing: 'auto' as const,
    lineHeight: 1,
    letterSpacing: '-0.01em',
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

      {/* ── Vignette ── */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(8,8,8,0.65) 100%)' }}
      />

      {/* ── TOP-LEFT meta ── */}
      <div className="absolute top-24 left-6 md:left-10 z-20 pointer-events-none">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: '#f97316' }}>mdjk.dev</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mt-1">Full-Stack Dev &amp; Designer</p>
      </div>

      {/* ── TOP-RIGHT meta ── */}
      <div className="absolute top-24 right-6 md:right-10 z-20 pointer-events-none text-right">
        <div className="flex items-center justify-end gap-2 mb-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#f97316' }} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#f97316' }} />
          </span>
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Available for work</span>
        </div>
        <p className="font-mono text-[10px] text-white/20 tabular-nums tracking-widest">{time} CET</p>
      </div>

      {/* ── SCENE TOP-LEFT: "Turning Ideas" ── */}
      <div className="absolute z-20 pointer-events-none" style={{ top: '28%', left: '6%' }}>
        <h1 className="subpixel-antialiased uppercase" style={{ ...word, color: '#ffffff' }}>
          <SpecialText speed={14} delay={0.2}>Turning</SpecialText>
        </h1>
        <h1 className="subpixel-antialiased uppercase mt-1" style={{ ...word, color: 'rgba(255,255,255,0.45)' }}>
          <SpecialText speed={14} delay={0.38}>Ideas</SpecialText>
        </h1>
      </div>

      {/* ── SCENE TOP-RIGHT: "Into" ── */}
      <div className="absolute z-20 pointer-events-none text-right" style={{ top: '28%', right: '6%' }}>
        <h1 className="subpixel-antialiased uppercase" style={{ ...word, color: '#ffffff' }}>
          <SpecialText speed={14} delay={0.5}>Into</SpecialText>
        </h1>
      </div>

      {/* ── SCENE BOTTOM-LEFT: "Modern &" ── */}
      <div className="absolute z-20 pointer-events-none" style={{ bottom: '28%', left: '6%' }}>
        <h1 className="subpixel-antialiased uppercase" style={{ ...word, color: 'rgba(255,255,255,0.45)' }}>
          <SpecialText speed={14} delay={0.65}>Modern</SpecialText>
        </h1>
        <h1 className="subpixel-antialiased uppercase mt-1" style={{ ...word, color: 'rgba(255,255,255,0.2)' }}>
          <SpecialText speed={14} delay={0.8}>&amp;</SpecialText>
        </h1>
      </div>

      {/* ── SCENE BOTTOM-RIGHT: "Interactive Websites" ── */}
      <div className="absolute z-20 pointer-events-none text-right" style={{ bottom: '28%', right: '6%' }}>
        <h1 className="subpixel-antialiased uppercase" style={{ ...word, color: 'rgba(255,255,255,0.45)' }}>
          <SpecialText speed={14} delay={0.9}>Interactive</SpecialText>
        </h1>
        <h1 className="subpixel-antialiased uppercase mt-1" style={{ ...word, color: '#ffffff' }}>
          <SpecialText speed={14} delay={1.05}>Websites.</SpecialText>
        </h1>
      </div>

      {/* ── BOTTOM-LEFT: CTAs ── */}
      <div className="absolute bottom-16 left-6 md:left-10 z-20 pointer-events-auto">
        <div className="flex flex-wrap gap-2">
          <a href="#work" className="btn-primary">See my work →</a>
          <a href="#contact" className="btn-ghost">Start a project</a>
        </div>
      </div>

      {/* ── BOTTOM-RIGHT: location ── */}
      <div className="absolute bottom-16 right-6 md:right-10 z-20 pointer-events-none text-right">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/25">Berlin, Germany</p>
      </div>

      {/* ── Bottom bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-auto">
        <div className="w-full px-6 md:px-10 py-3 border-t border-white/[0.06] flex items-center justify-between">
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">mdjk.dev</span>
          <span className="font-mono text-[10px] text-white/20 tabular-nums">© 2026</span>
        </div>
      </div>
    </section>
  )
}
