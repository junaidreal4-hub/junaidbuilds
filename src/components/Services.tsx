'use client'
import { useEffect, useRef, useState } from 'react'

const PANELS = [
  {
    num: '01',
    title: 'Design',
    sub: '( it\'s intention )',
    desc: 'Every pixel has a reason. I work at the intersection of aesthetics and function — sharp layouts, editorial typography, and interfaces that feel inevitable. No decoration for decoration\'s sake.',
    tools: ['Figma', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Responsive UI', 'Dark / Light Systems'],
  },
  {
    num: '02',
    title: 'Engineering',
    sub: '( it\'s precision )',
    desc: 'Clean, typed, maintainable code built to last. React, Next.js, FastAPI, PostgreSQL — full stack from frontend to database. Deployed, monitored, and production-ready from day one.',
    tools: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Vercel', 'Render', 'REST APIs'],
  },
  {
    num: '03',
    title: 'Strategy',
    sub: '( it\'s clarity )',
    desc: 'I help you define what to build and why before writing a single line of code. Goal alignment, audience mapping, scope definition — so every decision compounds toward results, not just features.',
    tools: ['Project Scoping', 'SEO Strategy', 'Performance Audits', 'Roadmap Planning', 'Direct Communication'],
  },
]

const SERVICES = [
  {
    index: '01', title: 'Web Development', sub: 'React / Next.js / TypeScript',
    desc: 'Fully custom websites built with React and Next.js. Fast, accessible, responsive, and SEO-ready from the ground up.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vercel'],
  },
  {
    index: '02', title: 'Backend & APIs', sub: 'FastAPI / Node.js / PostgreSQL',
    desc: 'REST APIs, auth systems, and complete database architecture. Deployed, monitored, and production-ready.',
    tools: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Render', 'Google Cloud'],
  },
  {
    index: '03', title: 'Full-Stack SaaS', sub: 'End-to-End Product Development',
    desc: 'Custom web applications with auth, dashboards, subscriptions, and business logic. Zero to production-ready MVP.',
    tools: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Stripe', 'JWT Auth'],
  },
  {
    index: '04', title: 'E-Commerce', sub: 'Shops / Payments / CMS',
    desc: 'Full online stores with product catalogues, cart, checkout, and Stripe integration. Built for conversion.',
    tools: ['Next.js', 'Stripe', 'Sanity CMS', 'Vercel'],
  },
  {
    index: '05', title: 'Maintenance & Support', sub: 'Monthly Retainer from €150',
    desc: 'Ongoing updates, performance monitoring, bug fixes, and new feature additions. Priority support included.',
    tools: ['Performance Audits', 'Bug Fixes', 'New Features', 'Priority Support'],
  },
]

const TOTAL = PANELS.length.toString().padStart(2, '0')

export default function Services() {
  const trackRef   = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [open, setOpen]     = useState<number | null>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let ctx: import('gsap').Context | null = null
    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        const panels = trackRef.current
        if (!panels) return
        const totalWidth = panels.scrollWidth - panels.offsetWidth
        gsap.to(panels, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start:   'top top',
            end:     () => `+=${totalWidth * 1.2}`,
            pin:     true,
            scrub:   1,
            anticipatePin: 1,
            onUpdate(self) {
              setActive(Math.min(PANELS.length - 1, Math.floor(self.progress * PANELS.length)))
            },
          },
        })
      })
    }
    init()
    return () => { ctx?.revert() }
  }, [])

  return (
    <section id="services" className="bg-[#080808]">

      {/* PART 1: horizontal scroll panels */}
      <div ref={sectionRef} className="relative overflow-hidden">
        <div className="container-width pt-24 pb-6 shrink-0">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-2">/ What I Offer</p>
        </div>

        <div ref={trackRef} className="flex" style={{ width: `${PANELS.length * 100}vw` }}>
          {PANELS.map((panel, i) => (
            <div
              key={panel.num}
              className="flex flex-col justify-between"
              style={{ width: '100vw', minHeight: '100vh', padding: '6rem 3rem 4rem' }}
            >
              <div>
                {/* ✅ Dynamic counter */}
                <p className="font-mono text-xs text-white/20 mb-6">{panel.num} / {TOTAL}</p>
                <h2
                  className={`font-sans font-black uppercase leading-none tracking-tighter transition-colors duration-500 ${
                    active === i ? 'text-white' : 'text-white/20'
                  }`}
                  style={{ fontSize: 'clamp(4rem, 14vw, 12rem)' }}
                >
                  {panel.title}
                </h2>
                <p className="font-mono text-sm text-orange/70 italic mt-4">{panel.sub}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-10 border-t border-white/[0.06]">
                <p className="text-white/50 text-base leading-relaxed max-w-md">{panel.desc}</p>
                <div className="flex flex-wrap gap-3 content-start">
                  {panel.tools.map((t) => (
                    <span key={t} className="font-mono text-xs text-white/30 border border-white/10 px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {PANELS.map((_, i) => (
            <span key={i} className={`block h-px transition-all duration-500 ${
              active === i ? 'w-8 bg-orange' : 'w-4 bg-white/20'
            }`} />
          ))}
        </div>
      </div>

      {/* PART 2: services accordion */}
      <div className="container-width py-24 border-t border-white/[0.06]">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-16">/ Services & Pricing</p>
        <div className="flex flex-col">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="border-b border-white/[0.06]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-7 flex items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text-xs text-white/20">{s.index}</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
                    <span className={`font-sans font-black uppercase tracking-tight transition-colors duration-300 group-hover:text-orange ${
                      open === i ? 'text-orange' : 'text-white'
                    }`} style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}>
                      {s.title}
                    </span>
                    <span className="font-mono text-xs text-white/30 uppercase tracking-widest">{s.sub}</span>
                  </div>
                </div>
                <span className={`font-mono text-white/30 text-xl transition-transform duration-500 shrink-0 ${
                  open === i ? 'rotate-45' : ''
                }`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                open === i ? 'max-h-64 pb-8' : 'max-h-0'
              }`}>
                <div className="flex flex-col md:flex-row gap-10 pl-14">
                  <p className="text-white/40 text-sm leading-relaxed max-w-md">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 content-start">
                    {s.tools.map((t) => (
                      <span key={t} className="font-mono text-xs text-orange/60 border border-orange/20 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
