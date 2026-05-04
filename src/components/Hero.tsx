'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-DE', {
          hour:     '2-digit',
          minute:   '2-digit',
          second:   '2-digit',
          timeZone: 'Europe/Berlin',
          hour12:   false,
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col bg-canvas overflow-hidden">

      {/* Top status bar */}
      <div className="container-width pt-8 flex items-center justify-between">
        <span className="label">Freelance Web Developer & Full-Stack Engineer</span>
        <div className="hidden md:flex items-center gap-4">
          <span className="label">Berlin, Germany</span>
          <span className="label tabular-nums">{time}</span>
          <span className="label">GMT+2</span>
        </div>
      </div>

      {/* Giant stacked name — nikolaradeski hero style */}
      <div className="container-width flex-1 flex flex-col justify-center pt-10 pb-6">
        <h1 className="font-display italic text-[clamp(5.5rem,17vw,15rem)] leading-[0.88] tracking-[-0.03em] text-heading">
          JUNAID
        </h1>

        {/* Descriptor row between the two names */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-4 md:my-6">
          <span className="label">Developer &amp; Builder</span>
          <p className="text-body text-sm leading-relaxed max-w-sm">
            I build fast, bespoke websites for businesses that want to stand out.
            No templates. No agency markup. Based in Berlin.
          </p>
        </div>

        <h1 className="font-display italic text-[clamp(5.5rem,17vw,15rem)] leading-[0.88] tracking-[-0.03em] text-heading">
          BUILDS
        </h1>
      </div>

      {/* Bottom bar — availability + CTAs */}
      <div className="container-width pb-10 divider pt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-heading opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-heading" />
            </span>
            <span className="label">Available for new projects — Berlin &amp; Remote</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="label border border-heading text-heading px-6 py-3 hover:bg-heading hover:text-canvas transition-all duration-200"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="label border border-border px-6 py-3 hover:border-heading hover:text-heading transition-all duration-200"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
