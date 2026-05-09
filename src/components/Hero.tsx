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
      {/* ── Spline 3D ── */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── Fade top & bottom ── */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.0) 30%, rgba(8,8,8,0.0) 58%, rgba(8,8,8,0.97) 82%)',
      }} />

      {/* ══ TOP: 4 info columns ══ */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <div className="grid grid-cols-4 border-b border-white/[0.06]">

          {/* Col 1: Name + tagline */}
          <div className="px-6 md:px-8 py-6 border-r border-white/[0.06]">
            <p className="font-mono text-xs text-white uppercase tracking-widest mb-3">Md Junaid</p>
            <p className="font-mono text-xs text-white uppercase tracking-widest">Khan</p>
            <p className="font-mono text-[10px] text-white/30 mt-3 leading-relaxed">
              mdjk.dev is my personal brand &mdash; building fast, bespoke digital experiences since 2022.
            </p>
          </div>

          {/* Col 2: Discipline headline */}
          <div className="px-6 md:px-8 py-6 border-r border-white/[0.06]">
            <p className="font-mono text-xs text-white uppercase tracking-widest leading-snug">
              Full-Stack<br />Development<br />&amp; Design
            </p>
          </div>

          {/* Col 3: What I do */}
          <div className="px-6 md:px-8 py-6 border-r border-white/[0.06]">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">What I do</p>
            <p className="font-mono text-[10px] text-white/60 leading-relaxed">
              I build high-performance websites and web apps for startups and businesses &mdash; from concept to deployment.
            </p>
          </div>

          {/* Col 4: Services */}
          <div className="px-6 md:px-8 py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Services</p>
            <ul className="font-mono text-[10px] text-white/60 space-y-1">
              <li>Web Design &amp; Branding</li>
              <li>React / Next.js Development</li>
              <li>Full-Stack Applications</li>
              <li>API &amp; Backend (Node, FastAPI)</li>
              <li>Deployment &amp; DevOps</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ══ BOTTOM: large headline + CTAs ══ */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="px-5 md:px-8 pt-6">
          <h1 className="uppercase subpixel-antialiased leading-[0.88] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-mono)', fontWeight: 300, fontSize: 'clamp(3rem, 8.5vw, 9rem)', WebkitFontSmoothing: 'auto' }}>
            <SpecialText speed={12} delay={0.1}>Turning Ideas Into</SpecialText>
          </h1>
          <h1 className="uppercase subpixel-antialiased leading-[0.88] tracking-tight"
            style={{ fontFamily: 'var(--font-mono)', fontWeight: 300, fontSize: 'clamp(3rem, 8.5vw, 9rem)', color: 'rgba(255,255,255,0.22)', WebkitFontSmoothing: 'auto' }}>
            <SpecialText speed={12} delay={0.4}>Modern &amp; Interactive</SpecialText>
          </h1>
          <h1 className="uppercase subpixel-antialiased leading-[0.88] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-mono)', fontWeight: 300, fontSize: 'clamp(3rem, 8.5vw, 9rem)', WebkitFontSmoothing: 'auto' }}>
            <SpecialText speed={12} delay={0.7}>Websites.</SpecialText>
          </h1>
        </div>

        <div className="mt-4 px-5 md:px-8 py-4 border-t border-white/[0.06] flex items-center justify-between pointer-events-auto">
          <div className="flex gap-3">
            <a href="#work" className="btn-primary">See my work →</a>
            <a href="#contact" className="btn-ghost">Start a project</a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">{time} CET</span>
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">Berlin, DE</span>
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">mdjk.dev © 2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}
