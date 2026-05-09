'use client'
import { useEffect, useRef } from 'react'

const APPROACH = [
  {
    num: '01',
    title: 'Performance First',
    desc: 'Every site I build is optimised for speed out of the box. Fast load times, clean code, no bloat. Your users notice — and so does Google.',
    bg: '#f5f5f0',
    fg: '#080808',
  },
  {
    num: '02',
    title: 'Clean Engineering',
    desc: 'Maintainable, typed, documented code. No copy-paste spaghetti. Every component is purpose-built and yours to own long after I hand it over.',
    bg: '#2d4a38',
    fg: '#ffffff',
  },
  {
    num: '03',
    title: 'Sharp Design',
    desc: 'Design that serves the goal. Not decoration — intention. I work at the intersection of aesthetics and function so your brand lands the right way.',
    bg: '#f5f5f0',
    fg: '#080808',
  },
  {
    num: '04',
    title: 'Direct Communication',
    desc: 'No middlemen, no account managers. You work directly with me. Fast replies, clear updates, and no surprises on delivery day.',
    bg: '#2d4a38',
    fg: '#ffffff',
  },
  {
    num: '05',
    title: 'Reliable Delivery',
    desc: '1–3 week turnaround on most projects. I scope honestly, commit firmly, and ship on time. If something changes — you hear it from me first.',
    bg: '#f97316',
    fg: '#080808',
  },
]

const PEEK = 100

export default function AboutStrip() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | null = null
    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.approach-card', cardsRef.current)
        cards.forEach((card) => {
          gsap.to(card, {
            scale: 0.92,
            filter: 'blur(3px)',
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          })
        })
      }, sectionRef)
    }
    init()
    return () => { ctx?.revert() }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative bg-[#0a0a0a]">

      {/* Approach label */}
      <div className="px-4 md:px-6 pt-20 pb-4">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest">/ My Approach</p>
      </div>

      {/* Stacked sticky cards */}
      <div ref={cardsRef} className="flex flex-col gap-0 px-4 md:px-6 pb-6">
        {APPROACH.map((item, i) => (
          <div
            key={item.num}
            className="approach-card sticky overflow-hidden"
            style={{
              top: `${80 + i * PEEK}px`,
              backgroundColor: item.bg,
              borderRadius: 0,
              zIndex: i + 1,
              transformOrigin: 'top center',
              willChange: 'transform, filter',
              marginBottom: '16px',
            }}
          >
            {/* Ghost number */}
            <span
              className="absolute right-4 bottom-0 font-black leading-none select-none pointer-events-none"
              style={{
                fontSize: 'clamp(5rem, 15vw, 12rem)',
                color: item.fg === '#080808' ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.06)',
                lineHeight: 1,
              }}
            >
              {item.num}
            </span>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-14 py-10 md:py-14">
              <h3
                className="font-black uppercase leading-none tracking-tighter mb-6"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 6rem)', color: item.fg }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  color: item.fg === '#080808' ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.55)',
                  maxWidth: '480px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  textAlign: 'center',
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
