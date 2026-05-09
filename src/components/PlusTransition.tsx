'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PlusTransition() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const plusRef     = useRef<HTMLDivElement>(null)
  const fillRef     = useRef<HTMLDivElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top -20%',
          scrub: 1,
        },
      })

      // 1. Plus icon scales up
      tl.fromTo(
        plusRef.current,
        { scale: 1, opacity: 1 },
        { scale: 60, opacity: 1, ease: 'power2.inOut' },
        0
      )

      // 2. White fill expands simultaneously via clip-path circle
      tl.fromTo(
        fillRef.current,
        { clipPath: 'circle(0% at 50% 50%)', opacity: 1 },
        { clipPath: 'circle(150% at 50% 50%)', ease: 'power2.inOut' },
        0.05
      )

      // 3. Content fades in after fill covers screen
      tl.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.3 },
        0.6
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} id="clarity" className="relative overflow-hidden bg-[#080808]">

      {/* Trigger panel — the text that initiates the transition */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-10">
        <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-6">
          <span className="text-orange mr-2">04</span> The Standard
        </p>
        <h2
          className="font-sans font-black uppercase text-white tracking-tighter leading-[0.88] mb-8"
          style={{ fontSize: 'clamp(3rem, min(11vw, 13vh), 10rem)' }}
        >
          Clarity +<br />
          <span className="text-orange">Performance</span>
        </h2>

        {/* The plus icon — positioned centrally, will scale to fill */}
        <div
          ref={plusRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
          style={{ willChange: 'transform' }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="21" y="4" width="6" height="40" rx="1" fill="white" />
            <rect x="4" y="21" width="40" height="6" rx="1" fill="white" />
          </svg>
        </div>
      </div>

      {/* White fill overlay */}
      <div
        ref={fillRef}
        className="fixed inset-0 z-30 bg-white pointer-events-none"
        style={{ clipPath: 'circle(0% at 50% 50%)', willChange: 'clip-path' }}
      />

      {/* Content that appears after the white fill */}
      <div
        ref={contentRef}
        className="fixed inset-0 z-40 bg-white flex flex-col items-start justify-center px-6 md:px-10 pointer-events-none"
        style={{ opacity: 0, visibility: 'hidden' }}
      >
        <p className="font-mono text-[10px] text-black/30 uppercase tracking-widest mb-6">
          What you always get
        </p>
        <h3
          className="font-sans font-black uppercase text-black tracking-tighter leading-[0.88] mb-12"
          style={{ fontSize: 'clamp(2.5rem, min(9vw, 12vh), 9rem)' }}
        >
          Fast.<br />Clean.<br />Yours.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          {[
            { stat: '< 1s', label: 'Time to First Byte' },
            { stat: '100', label: 'Lighthouse Performance' },
            { stat: '∞',   label: 'Scalability' },
          ].map((item) => (
            <div key={item.label} className="border-t border-black/10 pt-6">
              <p className="font-sans font-black text-black" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
                {item.stat}
              </p>
              <p className="font-mono text-[11px] text-black/40 uppercase tracking-widest mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
