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

// How much of each card peeks above the next one (in px)
const PEEK = 72

export default function AboutStrip() {
  const sectionRef   = useRef<HTMLElement>(null)
  const statementRef = useRef<HTMLDivElement>(null)
  const cardsRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | null = null

    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {

        // Statement reveal
        const lines = statementRef.current?.querySelectorAll('.reveal-line')
        if (lines) {
          gsap.from(lines, {
            y: '110%', opacity: 0, duration: 1, stagger: 0.12, ease: 'power4.out',
            scrollTrigger: { trigger: statementRef.current, start: 'top 80%' },
          })
        }

        // Shrink + blur all cards as next slides over
        const cards = gsap.utils.toArray<HTMLElement>('.approach-card', cardsRef.current)
        cards.forEach((card) => {
          gsap.to(card, {
            scale: 0.9,
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

      {/* Bold statement */}
      <div className="container-width py-32 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div ref={statementRef}>
            <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-10">/ About</p>
            {['My work is', 'driven by', 'logic, design,', '& precision.'].map((line, i) => (
              <div key={i} className="overflow-hidden mb-2">
                <p
                  className={`reveal-line font-sans font-black uppercase leading-none tracking-tighter ${
                    i === 2 ? 'text-orange italic' : 'text-white'
                  }`}
                  style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}
                >
                  {line}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-white/50 text-base leading-relaxed">
              I&apos;m Junaid — a full-stack developer and designer based in Berlin.
              I work directly with founders, startups, and businesses to build fast,
              custom websites and web applications that actually move the needle.
              No templates. No agency overhead. Just clean code, sharp design, and results you can measure.
            </p>
            <div className="flex flex-col gap-0">
              {[
                ['Location',  'Berlin, Germany'],
                ['Available', 'New Projects ✔'],
                ['Stack',     'Next.js · FastAPI · PostgreSQL'],
                ['Education', 'M.Sc. Data Analytics, Berlin'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-4 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-white/30 uppercase tracking-widest">{k}</span>
                  <span className="font-mono text-xs text-white/70">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Approach label */}
      <div className="px-4 md:px-6 pt-20 pb-4">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest">/ My Approach</p>
      </div>

      {/* Stacked sticky cards — each one peeks PEEK px above the next */}
      <div ref={cardsRef} className="flex flex-col gap-0 px-4 md:px-6 pb-6">
        {APPROACH.map((item, i) => (
          <div
            key={item.num}
            className="approach-card sticky overflow-hidden"
            style={{
              // Each card pins at an offset so PEEK px of the card above stays visible
              top: `${80 + i * PEEK}px`,
              backgroundColor: item.bg,
              borderRadius: 0,
              zIndex: i + 1,
              transformOrigin: 'top center',
              willChange: 'transform, filter',
              marginBottom: '8px',
            }}
          >
            {/* Ghost number */}
            <span
              className="absolute right-4 bottom-0 font-sans font-black leading-none select-none pointer-events-none"
              style={{
                fontSize: 'clamp(5rem, 15vw, 12rem)',
                color: item.fg === '#080808' ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.06)',
                lineHeight: 1,
              }}
            >
              {item.num}
            </span>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-14 py-8 md:py-10">
              <h3
                className="font-sans font-black uppercase leading-none tracking-tighter mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: item.fg }}
              >
                {item.title}
              </h3>
              <p
                className="font-sans text-sm md:text-base leading-relaxed max-w-xl"
                style={{ color: item.fg === '#080808' ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.55)' }}
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
