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
    letterSpacing: '0.03em',
    WebkitFontSmoothing: 'auto' as const,
    lineHeight: 0.88,
  }

  return (
    <section className="relative overflow-hidden bg-white" style={{ minHeight: '100dvh' }}>

      {/* ── z-0: Waves background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Waves
          strokeColor="rgba(0,0,0,0.08)"
          backgroundColor="#ffffff"
          pointerSize={0}
        />
      </div>

      {/* ── z-10: Spline 3D — right half ── */}
      <div className="absolute bottom-0 z-10 pointer-events-auto" style={{ top: '5%', left: '38%', right: 0 }}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── z-20: vignette fade edges ── */}
      <div className="absolute inset-0 z-20 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.95) 100%)',
      }} />

      {/* ── z-30: hero text — top-left, large, low opacity ── */}
      <div className="absolute top-0 left-0 z-30 pointer-events-none flex flex-col justify-start"
        style={{ paddingTop: 'clamp(5rem, 12vh, 9rem)', paddingLeft: 'clamp(1.5rem, 4vw, 3.5rem)' }}
      >
        <h1 style={{ ...displayFont, fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'rgba(8,8,8,0.65)' }}
          className="uppercase block">
          <SpecialText speed={10} delay={0.1}>Turning</SpecialText>
        </h1>
        <h1 style={{ ...displayFont, fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'rgba(8,8,8,0.15)' }}
          className="uppercase block">
          <SpecialText speed={10} delay={0.25}>Ideas Into</SpecialText>
        </h1>
        <h1 style={{ ...displayFont, fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'rgba(8,8,8,0.65)' }}
          className="uppercase block">
          <SpecialText speed={10} delay={0.4}>Modern &amp;</SpecialText>
        </h1>
        <h1 style={{ ...displayFont, fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'rgba(8,8,8,0.15)' }}
          className="uppercase block">
          <SpecialText speed={10} delay={0.55}>Interactive</SpecialText>
        </h1>
        <h1 style={{ ...displayFont, fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'rgba(8,8,8,0.65)' }}
          className="uppercase block">
          <SpecialText speed={10} delay={0.7}>Websites.</SpecialText>
        </h1>
      </div>

      {/* ── z-30: bottom meta bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
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
