'use client'
import { useEffect, useState } from 'react'
import { SplineScene } from '@/components/ui/spline'
import { SpecialText } from '@/components/ui/SpecialText'
import { Waves } from '@/components/ui/waves'

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-DE', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      timeZone: 'Europe/Berlin', hour12: false,
    }))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const disp = {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    letterSpacing: '0.04em',
    lineHeight: 0.88,
    WebkitFontSmoothing: 'auto' as const,
  }

  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
  }

  return (
    <section className="relative overflow-hidden bg-white" style={{ minHeight: '100dvh' }}>

      {/* ── z-0: Waves ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Waves strokeColor="rgba(0,0,0,0.055)" backgroundColor="#ffffff" pointerSize={0} />
      </div>

      {/* ── z-10: 3D scene — centered, inset so text has room ── */}
      <div className="absolute z-10 pointer-events-auto"
        style={{ top: '12%', bottom: '12%', left: '12%', right: '12%' }}
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── z-20: edge vignette ── */}
      <div className="absolute inset-0 z-20 pointer-events-none" style={{
        background: [
          'linear-gradient(to bottom, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.0) 18%, rgba(255,255,255,0.0) 78%, rgba(255,255,255,0.97) 100%)',
        ].join(',')
      }} />

      {/* ── z-30: ALL text & UI ── */}

      {/* TOP-LEFT: headline line 1 */}
      <div className="absolute top-0 left-0 z-30 pointer-events-none"
        style={{ paddingTop: 'clamp(2.2rem, 5vh, 4rem)', paddingLeft: 'clamp(1.5rem, 3.5vw, 3rem)' }}
      >
        <h1 className="uppercase" style={{ ...disp, fontSize: 'clamp(1.8rem, 4.2vw, 4.8rem)', color: 'rgba(8,8,8,0.72)' }}>
          <SpecialText speed={10} delay={0.05}>Turning Ideas</SpecialText>
        </h1>
      </div>

      {/* TOP-RIGHT: headline line 2 */}
      <div className="absolute top-0 right-0 z-30 pointer-events-none text-right"
        style={{ paddingTop: 'clamp(2.2rem, 5vh, 4rem)', paddingRight: 'clamp(1.5rem, 3.5vw, 3rem)' }}
      >
        <h1 className="uppercase" style={{ ...disp, fontSize: 'clamp(1.8rem, 4.2vw, 4.8rem)', color: 'rgba(8,8,8,0.18)' }}>
          <SpecialText speed={10} delay={0.2}>Into Reality</SpecialText>
        </h1>
      </div>

      {/* LEFT SIDE: vertical label */}
      <div className="absolute left-0 top-1/2 z-30 pointer-events-none"
        style={{ transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center center', left: '-3.5rem' }}
      >
        <span style={{ ...mono, color: 'rgba(8,8,8,0.2)' }}>Full-Stack · Berlin · 2026</span>
      </div>

      {/* RIGHT SIDE: vertical label */}
      <div className="absolute right-0 top-1/2 z-30 pointer-events-none"
        style={{ transform: 'translateY(-50%) rotate(90deg)', transformOrigin: 'center center', right: '-4rem' }}
      >
        <span style={{ ...mono, color: 'rgba(8,8,8,0.2)' }}>React · Next.js · Node</span>
      </div>

      {/* BOTTOM-LEFT: name + tagline + CTA */}
      <div className="absolute bottom-0 left-0 z-30 pointer-events-none"
        style={{ paddingBottom: 'clamp(2.5rem, 6vh, 4.5rem)', paddingLeft: 'clamp(1.5rem, 3.5vw, 3rem)' }}
      >
        {/* big WEBSITES. */}
        <h1 className="uppercase" style={{ ...disp, fontSize: 'clamp(1.8rem, 4.2vw, 4.8rem)', color: 'rgba(8,8,8,0.72)' }}>
          <SpecialText speed={10} delay={0.38}>Websites.</SpecialText>
        </h1>
        <div className="mt-3 flex flex-col gap-1">
          <span style={{ ...mono, color: 'rgba(8,8,8,0.35)', fontSize: '0.58rem' }}>
            Md Junaid Khan — Freelance Developer
          </span>
          <span style={{ ...mono, color: 'rgba(8,8,8,0.2)', fontSize: '0.58rem' }}>
            Available for projects
          </span>
        </div>
      </div>

      {/* BOTTOM-RIGHT: CTA button + clock */}
      <div className="absolute bottom-0 right-0 z-30"
        style={{ paddingBottom: 'clamp(2.5rem, 6vh, 4.5rem)', paddingRight: 'clamp(1.5rem, 3.5vw, 3rem)' }}
      >
        <div className="flex flex-col items-end gap-3">
          {/* CTA */}
          <a
            href="mailto:junaidreal4@gmail.com"
            className="pointer-events-auto group flex items-center gap-2 border border-black/15 rounded-full px-5 py-2.5 hover:border-black/40 hover:bg-black hover:text-white transition-all duration-300"
          >
            <span style={{ ...mono, fontSize: '0.58rem', color: 'inherit' }}>Let’s Work Together</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </a>
          {/* clock */}
          <span style={{ ...mono, color: 'rgba(8,8,8,0.18)', fontSize: '0.58rem' }}>{time} CET · Berlin, DE</span>
        </div>
      </div>

      {/* TOP meta strip — thin horizontal rule with copyright */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none"
        style={{ paddingTop: 'clamp(2.2rem, 5vh, 4rem)', paddingLeft: 'clamp(1.5rem, 3.5vw, 3rem)', paddingRight: 'clamp(1.5rem, 3.5vw, 3rem)' }}
      >
        {/* thin rule below top text — offset down one line height */}
        <div style={{ marginTop: 'clamp(2.8rem, 6vw, 6.5rem)', borderTop: '1px solid rgba(0,0,0,0.06)' }} />
      </div>

      {/* BOTTOM thin rule */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none"
        style={{
          paddingBottom: 'clamp(2.5rem, 6vh, 4.5rem)',
          paddingLeft: 'clamp(1.5rem, 3.5vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 3.5vw, 3rem)',
        }}
      >
        <div style={{ marginBottom: 'clamp(3.2rem, 7vw, 7rem)', borderBottom: '1px solid rgba(0,0,0,0.06)' }} />
      </div>

    </section>
  )
}
