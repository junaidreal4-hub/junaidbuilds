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
    fontSize: '0.58rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
  }

  return (
    <section className="relative overflow-hidden bg-white" style={{ minHeight: '100dvh' }}>

      {/* z-0: Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Waves strokeColor="rgba(0,0,0,0.055)" backgroundColor="#ffffff" pointerSize={0} />
      </div>

      {/* z-10: 3D scene — flush bottom, slight side inset */}
      <div className="absolute z-10 pointer-events-auto"
        style={{ top: '14%', bottom: 0, left: '6%', right: '6%' }}
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* z-20: top fade vignette */}
      <div className="absolute inset-0 z-20 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 12%, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 100%)',
      }} />

      {/* z-30: headline — centered just above midpoint */}
      <div
        className="absolute left-0 right-0 z-30 pointer-events-none px-6 md:px-10"
        style={{ top: '34%' }}
      >
        <div className="flex items-baseline justify-between w-full">
          <h1
            className="uppercase"
            style={{ ...disp, fontSize: 'clamp(2rem, 5vw, 5.5rem)', color: 'rgba(8,8,8,0.75)' }}
          >
            <SpecialText speed={10} delay={0.05}>Turning Ideas</SpecialText>
          </h1>
          <h1
            className="uppercase"
            style={{ ...disp, fontSize: 'clamp(2rem, 5vw, 5.5rem)', color: 'rgba(8,8,8,0.18)' }}
          >
            <SpecialText speed={10} delay={0.2}>Into Reality</SpecialText>
          </h1>
        </div>
        <div style={{ marginTop: '0.6rem', borderBottom: '1px solid rgba(0,0,0,0.07)' }} />
      </div>

      {/* z-30: bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between"
        style={{ padding: '0 clamp(1.5rem,3.5vw,3rem) 1.5rem' }}
      >
        <div className="pointer-events-none flex flex-col gap-0.5">
          <span style={{ ...mono, color: 'rgba(8,8,8,0.3)' }}>Md Junaid Khan — Freelance Developer</span>
          <span style={{ ...mono, color: 'rgba(8,8,8,0.18)' }}>Available for projects</span>
        </div>
        <div className="flex flex-col items-end gap-2">
          <a
            href="mailto:junaidreal4@gmail.com"
            className="group flex items-center gap-2 border border-black/15 rounded-full px-5 py-2.5 hover:border-black/40 hover:bg-black hover:text-white transition-all duration-300"
          >
            <span style={{ ...mono, color: 'inherit' }}>Let’s Work Together</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </a>
          <span style={{ ...mono, color: 'rgba(8,8,8,0.18)' }}>{time} CET · Berlin, DE</span>
        </div>
      </div>

    </section>
  )
}
