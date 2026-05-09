'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PlusTransition() {
  const sectionRef = useRef<HTMLElement>(null)
  const plusRef    = useRef<HTMLDivElement>(null)
  const fillRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !plusRef.current || !fillRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
        },
      })

      tl.to(plusRef.current, {
        scale: 40,
        ease: 'power2.in',
      }, 0)

      tl.to(fillRef.current, {
        scale: 1,
        ease: 'power2.in',
      }, 0.35)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden bg-[#080808]"
      style={{ height: '100vh' }}
    >
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

      <div className="relative z-10 w-full flex items-center justify-between px-6 md:px-12 select-none">
        <span
          className="font-black uppercase tracking-tighter text-white leading-none"
          style={{ fontSize: 'clamp(2rem, 6vw, 6rem)' }}
        >
          Clarity
        </span>

        <div
          ref={plusRef}
          className="flex-shrink-0 text-white font-black"
          style={{
            fontSize: 'clamp(2rem, 6vw, 6rem)',
            lineHeight: 1,
            transformOrigin: 'center center',
            position: 'relative',
            zIndex: 3,
          }}
        >
          +
        </div>

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
