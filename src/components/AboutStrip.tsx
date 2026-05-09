'use client'
import { useEffect, useRef, useState } from 'react'

const APPROACH = [
  {
    num: '01',
    title: 'Performance First',
    desc: 'Every site I build is optimised for speed out of the box. Fast load times, clean code, no bloat. Your users notice — and so does Google.',
    tag: 'Core Value',
  },
  {
    num: '02',
    title: 'Clean Engineering',
    desc: 'Maintainable, typed, documented code. No copy-paste spaghetti. Every component is purpose-built and yours to own long after I hand it over.',
    tag: 'Core Value',
  },
  {
    num: '03',
    title: 'Sharp Design',
    desc: 'Design that serves the goal. Not decoration — intention. I work at the intersection of aesthetics and function so your brand lands the right way.',
    tag: 'Core Value',
  },
  {
    num: '04',
    title: 'Direct Communication',
    desc: 'No middlemen, no account managers. You work directly with me. Fast replies, clear updates, and no surprises on delivery day.',
    tag: 'Core Value',
  },
  {
    num: '05',
    title: 'Reliable Delivery',
    desc: '1–3 week turnaround on most projects. I scope honestly, commit firmly, and ship on time. If something changes — you hear it from me first.',
    tag: 'Core Value',
  },
]

export default function AboutStrip() {
  const sectionRef   = useRef<HTMLElement>(null)
  const statementRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | null = null

    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Big statement line reveal
        const lines = statementRef.current?.querySelectorAll('.reveal-line')
        if (lines) {
          gsap.from(lines, {
            y: '110%',
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: statementRef.current,
              start: 'top 80%',
            },
          })
        }

        // Approach items fade up
        gsap.from('.approach-item', {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.approach-list',
            start: 'top 75%',
          },
        })
      }, sectionRef)
    }

    init()
    return () => { ctx?.revert() }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative bg-[#080808]">

      {/* ── SECTION 1 — Bold statement ── */}
      <div className="container-width py-32 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">

          {/* Left — big statement */}
          <div ref={statementRef}>
            <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-10">/ About</p>
            <div className="overflow-hidden mb-3">
              <p className="reveal-line font-sans font-black uppercase text-white leading-none tracking-tighter"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
                My work is
              </p>
            </div>
            <div className="overflow-hidden mb-3">
              <p className="reveal-line font-sans font-black uppercase text-white leading-none tracking-tighter"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
                driven by
              </p>
            </div>
            <div className="overflow-hidden mb-3">
              <p className="reveal-line font-sans font-black uppercase leading-none tracking-tighter text-orange italic"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
                logic, design,
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="reveal-line font-sans font-black uppercase text-white leading-none tracking-tighter"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
                &amp; precision.
              </p>
            </div>
          </div>

          {/* Right — bio + facts */}
          <div className="flex flex-col gap-8">
            <p className="text-white/50 text-base leading-relaxed">
              I&apos;m Junaid — a full-stack developer and designer based in Berlin. I work directly
              with founders, startups, and businesses to build fast, custom websites and web
              applications that actually move the needle. No templates. No agency overhead.
              Just clean code, sharp design, and results you can measure.
            </p>
            <div className="flex flex-col gap-0">
              {[
                ['Location',     'Berlin, Germany'],
                ['Available',    'New Projects ✔'],
                ['Stack',        'Next.js · FastAPI · PostgreSQL'],
                ['Education',    'M.Sc. Data Analytics, Berlin'],
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

      {/* ── SECTION 2 — Numbered approach accordion ── */}
      <div className="container-width py-24">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-16">/ My Approach</p>

        <div className="approach-list flex flex-col gap-0">
          {APPROACH.map((item, i) => (
            <div
              key={item.num}
              className="approach-item border-b border-white/[0.06]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-7 text-left group"
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text-xs text-white/20">{item.num}</span>
                  <span className={`font-sans font-black uppercase tracking-tight transition-colors duration-300 group-hover:text-orange ${
                    open === i ? 'text-orange' : 'text-white'
                  }`}
                    style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)' }}>
                    {item.title}
                  </span>
                </div>
                <span className={`font-mono text-white/30 text-xl transition-transform duration-500 ${
                  open === i ? 'rotate-45' : ''
                }`}>+</span>
              </button>

              {/* Expanded content */}
              <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                open === i ? 'max-h-48 pb-8' : 'max-h-0'
              }`}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-20 pl-14">
                  <p className="text-white/40 text-sm leading-relaxed max-w-lg">{item.desc}</p>
                  <span className="font-mono text-xs text-orange/60 uppercase tracking-widest shrink-0">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
