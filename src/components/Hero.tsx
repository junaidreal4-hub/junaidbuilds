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

  const displayFont = {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    letterSpacing: '0.04em',
    WebkitFontSmoothing: 'auto' as const,
    lineHeight: 0.9,
  }

  return (
    <section className="relative overflow-hidden bg-white" style={{ minHeight: '100dvh' }}>

      {/* ── z-0: Waves background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Waves strokeColor="rgba(0,0,0,0.07)" backgroundColor="#ffffff" pointerSize={0} />
      </div>

      {/* ── z-10: Spline 3D — centered ── */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── z-20: vignette ── */}
      <div className="absolute inset-0 z-20 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.92) 100%)',
      }} />

      {/* ── z-30: TOP title rows — above the 3D scene ── */}
      <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none"
        style={{ paddingTop: 'clamp(3rem, 8vh, 6rem)', paddingBottom: '1.5rem' }}
      >
        <div className="flex flex-col gap-0 px-5 md:px-8">
          <h1
            className="uppercase w-full"
            style={{ ...displayFont, fontSize: 'clamp(2rem, 5.5vw, 5.5rem)', color: 'rgba(8,8,8,0.6)' }}
          >
            <SpecialText speed={10} delay={0.1}>Turning Ideas Into</SpecialText>
          </h1>
          <h1
            className="uppercase w-full"
            style={{ ...displayFont, fontSize: 'clamp(2rem, 5.5vw, 5.5rem)', color: 'rgba(8,8,8,0.15)' }}
          >
            <SpecialText speed={10} delay={0.3}>Modern &amp; Interactive</SpecialText>
          </h1>
        </div>
      </div>

      {/* ── z-30: BOTTOM title row + meta — below the 3D scene ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <div className="px-5 md:px-8 pb-2">
          <h1
            className="uppercase w-full"
            style={{ ...displayFont, fontSize: 'clamp(2rem, 5.5vw, 5.5rem)', color: 'rgba(8,8,8,0.6)' }}
          >
            <SpecialText speed={10} delay={0.55}>Websites.</SpecialText>
          </h1>
        </div>
        <div className="px-5 md:px-8 py-4 border-t border-black/[0.06] flex items-center justify-end">
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
