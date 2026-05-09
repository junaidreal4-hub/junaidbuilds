'use client'
import { useEffect, useState } from 'react'
import { SplineScene } from '@/components/ui/spline'

export default function Hero() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-DE', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      timeZone: 'Europe/Berlin', hour12: false,
    }))
    update(); const id = setInterval(update, 1000); return () => clearInterval(id)
  }, [])

  const headlineStyle = {
    fontSize: 'clamp(1.6rem, 3.5vw, 3.8rem)',
    fontWeight: 300,
    WebkitFontSmoothing: 'auto' as const,
    MozOsxFontSmoothing: 'auto' as const,
  }

  return (
    <section
      className="relative flex flex-col pt-16 overflow-hidden bg-[#080808]"
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
          background:
            'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.3) 40%, rgba(8,8,8,0.1) 100%)',
        }}
      />

      {/* ── Top-right availability badge ── */}
      <div className="absolute top-24 right-6 md:right-10 z-20 pointer-events-none flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#f97316' }} />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#f97316' }} />
        </span>
        <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Available for work</span>
      </div>

      {/* ── Bottom-left hero text ── */}
      <div className="absolute bottom-24 left-6 md:left-10 z-20 pointer-events-none max-w-xl">

        {/* Eyebrow */}
        <p
          className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 opacity-0 animate-fade-up"
          style={{ color: '#f97316', animationDelay: '0ms', animationFillMode: 'forwards' }}
        >
          Full-Stack Developer &amp; Designer &nbsp;/&nbsp; Berlin
        </p>

        {/* Headline line 1 */}
        <div className="overflow-hidden">
          <h1
            className="subpixel-antialiased uppercase tracking-tight leading-[0.92] opacity-0 animate-fade-up"
            style={{ ...headlineStyle, color: '#ffffff', animationDelay: '80ms', animationFillMode: 'forwards' }}
          >
            Turning Ideas
          </h1>
        </div>

        {/* Headline line 2 */}
        <div className="overflow-hidden">
          <h1
            className="subpixel-antialiased uppercase tracking-tight leading-[0.92] opacity-0 animate-fade-up"
            style={{ ...headlineStyle, color: 'rgba(255,255,255,0.18)', animationDelay: '140ms', animationFillMode: 'forwards' }}
          >
            Into Interactive
          </h1>
        </div>

        {/* Headline line 3 */}
        <div className="overflow-hidden">
          <h1
            className="subpixel-antialiased uppercase tracking-tight leading-[0.92] opacity-0 animate-fade-up"
            style={{ ...headlineStyle, color: '#ffffff', animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            Websites.
          </h1>
        </div>

        {/* CTA row */}
        <div
          className="flex flex-wrap gap-3 mt-6 opacity-0 animate-fade-up pointer-events-auto"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          <a href="#work" className="btn-primary">See my work →</a>
          <a href="#contact" className="btn-ghost">Start a project</a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-auto">
        <div className="w-full px-6 md:px-10 py-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest">mdjk.dev</span>
          <span className="font-mono text-[10px] text-white/25 tabular-nums">{time} CET</span>
        </div>
      </div>
    </section>
  )
}
