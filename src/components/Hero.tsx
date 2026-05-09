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

  const displayFont = {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    letterSpacing: '0.02em',
    WebkitFontSmoothing: 'auto' as const,
  }

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ minHeight: '100dvh' }}
    >
      {/* ── Spline 3D ── */}
      <div className="absolute left-0 right-0 bottom-0 z-0 pointer-events-auto" style={{ top: '18%' }}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── Fade ── */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 22%, rgba(255,255,255,0.0) 45%, rgba(255,255,255,0.5) 100%)',
      }} />

      {/* ══ TOP: 4 info columns ══ */}
      <div className="absolute left-0 right-0 z-20 pointer-events-none" style={{ top: '8%' }}>
        <div className="grid grid-cols-4">
          <div className="px-6 md:px-8 py-6">
            <p className="text-sm text-[#080808] uppercase tracking-widest mb-1 font-medium">Mohammed Junaid</p>
            <p className="text-sm text-[#080808] uppercase tracking-widest font-medium">Khan</p>
            <p className="text-[11px] text-black/40 mt-3 leading-relaxed font-mono">
              Building fast, bespoke digital experiences since 2022.
            </p>
          </div>
          <div className="px-6 md:px-8 py-6">
            <p className="text-sm text-[#080808] uppercase tracking-widest leading-snug font-medium">
              Full-Stack<br />Development<br />&amp; Design
            </p>
          </div>
          <div className="px-6 md:px-8 py-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 mb-3 font-mono">What I do</p>
            <p className="text-[11px] text-black/60 leading-relaxed">
              I build high-performance websites and web apps for startups and businesses &mdash; from concept to deployment.
            </p>
          </div>
          <div className="px-6 md:px-8 py-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 mb-3 font-mono">Services</p>
            <ul className="text-[11px] text-black/60 space-y-1">
              <li>Web Design &amp; Branding</li>
              <li>React / Next.js Development</li>
              <li>Full-Stack Applications</li>
              <li>API &amp; Backend (Node, FastAPI)</li>
              <li>Deployment &amp; DevOps</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ══ BOTTOM: headline + meta bar ══ */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="px-5 md:px-8 pt-4">
          <h1 className="uppercase leading-[0.9] tracking-wide text-[#080808] block"
            style={{ ...displayFont, fontSize: 'clamp(1.4rem, 3vw, 3.2rem)' }}>
            <SpecialText speed={10} delay={0.1}>Turning Ideas Into</SpecialText>
          </h1>
          <h1 className="uppercase leading-[0.9] tracking-wide block"
            style={{ ...displayFont, fontSize: 'clamp(1.4rem, 3vw, 3.2rem)', color: 'rgba(8,8,8,0.22)' }}>
            <SpecialText speed={10} delay={0.35}>Modern &amp; Interactive</SpecialText>
          </h1>
          <h1 className="uppercase leading-[0.9] tracking-wide text-[#080808] block"
            style={{ ...displayFont, fontSize: 'clamp(1.4rem, 3vw, 3.2rem)' }}>
            <SpecialText speed={10} delay={0.6}>Websites.</SpecialText>
          </h1>
        </div>
        <div className="mt-4 px-5 md:px-8 py-4 border-t border-black/[0.06] flex items-center justify-end">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-black/20 uppercase tracking-widest">{time} CET</span>
            <span className="font-mono text-[10px] text-black/20 uppercase tracking-widest">Berlin, DE</span>
            <span className="font-mono text-[10px] text-black/20 uppercase tracking-widest">mdjk.dev © 2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}
