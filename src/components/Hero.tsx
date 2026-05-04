'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString('en-DE', {
        hour:   '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Berlin',
        hour12: false,
      })
      setTime(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const stats = [
    { num: '5+',    label: 'Sites Built'       },
    { num: '3',     label: 'Live Client Sites'  },
    { num: '100%',  label: 'On-Time Delivery'   },
    { num: '2+',    label: 'Years Building'     },
  ]

  return (
    <section className="relative min-h-screen flex flex-col bg-canvas overflow-hidden">

      {/* Subtle noise grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Main hero content */}
      <div className="container-width relative z-10 flex-1 flex flex-col justify-center pt-32 pb-16">

        {/* Location + live clock — exactly like nikolaradeski.com */}
        <div className="flex items-center gap-6 mb-10">
          <span className="label">Berlin, Germany</span>
          <span className="label">GMT+2</span>
          <span className="label font-mono tabular-nums">{time}</span>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-body opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-body" />
          </span>
          <span className="label">Available for new projects</span>
        </div>

        {/* Giant stacked name — nikolaradeski style */}
        <div className="mb-6">
          <div className="label mb-3">Freelance Web Developer &amp; Full-Stack Engineer</div>
          <h1 className="font-serif-display text-[clamp(5rem,16vw,14rem)] leading-[0.88] tracking-[-0.02em] text-heading">
            JUNAID
          </h1>
          <div className="label my-2 md:my-3 ml-1">Developer &amp; Builder</div>
          <h1 className="font-serif-display text-[clamp(5rem,16vw,14rem)] leading-[0.88] tracking-[-0.02em] text-heading">
            BUILDS
          </h1>
        </div>

        {/* Sub-line */}
        <p className="text-body text-base md:text-lg leading-relaxed max-w-lg mt-8 mb-10">
          I build fast, bespoke websites for businesses that want to stand out.
          No templates. No agency markup. Based in Berlin.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="label border border-heading text-heading px-6 py-3 hover:bg-heading hover:text-canvas transition-all duration-200">
            Start a Project
          </a>
          <a href="#work" className="label border border-border px-6 py-3 hover:border-heading hover:text-heading transition-all duration-200">
            View Work
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-border">
        <div className="container-width py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="">
                <div className="font-serif-display text-3xl text-heading mb-1">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
