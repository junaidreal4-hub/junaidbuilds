'use client'
import { useEffect, useRef } from 'react'

export default function PlusTransition() {
  const sectionRef = useRef<HTMLElement>(null)
  const plusRef    = useRef<HTMLDivElement>(null)
  const fillRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | null = null

    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: 1,
            pin: true,
          },
        })

        // Phase 1 (0 → 0.4): plus scales up
        tl.to(plusRef.current, {
          scale: 40,
          ease: 'power2.in',
        }, 0)

        // Phase 2 (0.35 → 0.5): white fill expands from centre
        tl.to(fillRef.current, {
          scale: 1,
          ease: 'power2.in',
        }, 0.35)

      }, sectionRef)
    }

    init()
    return () => { ctx?.revert() }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden bg-[#080808]"
      style={{ height: '100vh' }}
    >
      {/* White fill that expands from the plus */}
      <div
        ref={fillRef}
        className="absolute inset-0 bg-white"
        style={{
          transform: 'scale(0)',
          transformOrigin: 'center center',
          borderRadius: '50%',
          zIndex: 2,
        }}
      />

      {/* Text row: CLARITY + PERFORMANCE */}
      <div className="relative z-10 w-full flex items-center justify-between px-6 md:px-12 select-none">
        {/* Left text */}
        <span
          className="font-black uppercase tracking-tighter text-white leading-none"
          style={{ fontSize: 'clamp(2rem, 6vw, 6rem)' }}
        >
          Clarity

        </span>

        {/* Centre plus — this is the one that scales */}
        <div
          ref={plusRef}
          className="flex-shrink-0 flex items-center justify-center text-white font-black"
          style={{
            fontSize: 'clamp(2rem, 6vw, 6rem)',
            lineHeight: 1,
            transformOrigin: 'center center',
            zIndex: 3,
            position: 'relative',
          }}
        >
          +
        </div>

        {/* Right text */}
        <span
          className="font-black uppercase tracking-tighter text-white leading-none"
          style={{ fontSize: 'clamp(2rem, 6vw, 6rem)' }}
        >
          Performance
        </span>
      </div>
    </section>
  )
}
