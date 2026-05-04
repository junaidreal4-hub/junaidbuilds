'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString('en-DE', {
        hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin', hour12: false,
      }))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#ececea]">

      {/* Hexagonal SVG background */}
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon
                points="15,2 45,2 58,26 45,50 15,50 2,26"
                fill="none" stroke="#c8c8c4" strokeWidth="1"
              />
              <polygon
                points="45,2 75,2 88,26 75,50 45,50 32,26"
                fill="none" stroke="#c8c8c4" strokeWidth="1"
              />
              <polygon
                points="15,50 45,50 58,74 45,98 15,98 2,74"
                fill="none" stroke="#c8c8c4" strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      {/* Top labels — like nikolaradeski.com */}
      <div className="relative container-width pt-10 flex items-start justify-between">
        <div>
          <p className="label">Award Winning</p>
          <p className="label mt-0.5">Full-Stack Developer</p>
        </div>
        <div className="text-right">
          <p className="label">Developer &amp; Builder</p>
        </div>
      </div>

      {/* SPLIT NAME + PHOTO — exact nikolaradeski.com layout */}
      <div className="relative flex-1 flex items-center">
        <div className="w-full container-width grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8">

          {/* Left name */}
          <h1 className="font-sans font-black text-[clamp(3.5rem,12vw,9.5rem)] leading-none tracking-[-0.04em] text-heading text-left">
            JUNAID
          </h1>

          {/* Center photo */}
          <div className="relative w-[180px] md:w-[260px] lg:w-[320px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
            <Image
              src="/photo.jpg"
              alt="Junaid Khan"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Fallback gradient if no photo */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange/30 to-heading/60 mix-blend-multiply" />
          </div>

          {/* Right name */}
          <h1 className="font-sans font-black text-[clamp(3.5rem,12vw,9.5rem)] leading-none tracking-[-0.04em] text-heading text-right">
            BUILDS
          </h1>
        </div>
      </div>

      {/* Bottom location + clock — like nikolaradeski.com bottom-right */}
      <div className="relative container-width pb-10 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
          </span>
          <span className="label">Available for new projects</span>
        </div>
        <div className="text-right">
          <p className="label">Berlin, Germany &mdash;&nbsp;
            <span className="tabular-nums">{time}</span>
            &nbsp;GMT+2
          </p>
        </div>
      </div>
    </section>
  )
}
