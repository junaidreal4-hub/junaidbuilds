'use client'
import { useEffect, useState } from 'react'
import { SplineScene } from '@/components/ui/spline'
import { SpecialText } from '@/components/ui/SpecialText'
import { EtherealShadow } from '@/components/ui/etheral-shadow'

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
      {/* ── Layer 0: Ethereal Shadow background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <EtherealShadow
          color="rgba(180,180,180,1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* ── Layer 1: Spline 3D — pushed to the right ── */}
      <div className="absolute bottom-0 z-10 pointer-events-auto" style={{ top: '10%', left: '30%', right: 0 }}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── Layer 2: Fade overlay ── */}
      <div className="absolute inset-0 z-20 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.4) 100%)',
      }} />

      {/* ══ Layer 3: Headline + meta ══ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <div className="px-5 md:px-8 pt-4">
          <h1
            className="uppercase leading-[0.88] tracking-wide block"
            style={{ ...displayFont, fontSize: 'clamp(2.8rem, 7vw, 7.5rem)', color: 'rgba(8,8,8,0.55)' }}
          >
            <SpecialText speed={10} delay={0.1}>Turning Ideas Into</SpecialText>
          </h1>
          <h1
            className="uppercase leading-[0.88] tracking-wide block"
            style={{ ...displayFont, fontSize: 'clamp(2.8rem, 7vw, 7.5rem)', color: 'rgba(8,8,8,0.18)' }}
          >
            <SpecialText speed={10} delay={0.35}>Modern &amp; Interactive</SpecialText>
          </h1>
          <h1
            className="uppercase leading-[0.88] tracking-wide block"
            style={{ ...displayFont, fontSize: 'clamp(2.8rem, 7vw, 7.5rem)', color: 'rgba(8,8,8,0.55)' }}
          >
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
