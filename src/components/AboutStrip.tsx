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
    bg: '#4a7c59',
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
    bg: '#080808',
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

export default function AboutStrip() {
  const sectionRef   = useRef<HTMLElement>(null)
  const statementRef = useRef<HTMLDivElement>(null)
  const panelsRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: import('gsap').Context | null = null

    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {

        // ── Statement reveal ──
        const lines = statementRef.current?.querySelectorAll('.reveal-line')
        if (lines) {
          gsap.from(lines, {
            y: '110%', opacity: 0, duration: 1, stagger: 0.12, ease: 'power4.out',
            scrollTrigger: { trigger: statementRef.current, start: 'top 80%' },
          })
        }

        // ── Stacked scroll panels ──
        // Each panel is position:sticky so it pins while the next slides over it.
        // GSAP only drives the subtle scale-back on the outgoing panel.
        if (panelsRef.current) {
          const panels = gsap.utils.toArray<HTMLElement>('.approach-panel', panelsRef.current)

          panels.forEach((panel, i) => {
            if (i === panels.length - 1) return // last panel never gets pushed

            gsap.to(panel, {
              scale: 0.94,
              borderRadius: '20px',
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            })
          })
        }
      }, sectionRef)
    }

    init()
    return () => { ctx?.revert() }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative bg-[#080808]">

      {/* ── Bold statement ── */}
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

      {/* ── Approach label ── */}
      <div className="bg-[#080808] container-width pt-20 pb-6">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest">/ My Approach</p>
      </div>

      {/* ── Stacked sticky panels ── */}
      {/* Outer wrapper: enough height so panels have scroll room */}
      <div ref={panelsRef} className="relative">
        {APPROACH.map((item, i) => (
          <div
            key={item.num}
            className="approach-panel sticky overflow-hidden"
            style={{
              top: `${i * 12}px`,          // slight cascade offset so panels peek behind each other
              backgroundColor: item.bg,
              zIndex: i + 1,
              transformOrigin: 'top center',
              willChange: 'transform',
              // give last panel extra bottom padding so page doesn't end abruptly
              marginBottom: i === APPROACH.length - 1 ? '0' : '0',
            }}
          >
            {/* Ghost number */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 font-sans font-black leading-none select-none pointer-events-none"
              style={{
                fontSize: 'clamp(8rem, 22vw, 20rem)',
                color: item.fg === '#080808' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)',
                lineHeight: 1,
              }}
            >
              {item.num}
            </span>

            {/* Content */}
            <div className="relative z-10 container-width py-24 md:py-32">
              <div className="max-w-2xl">
                <p
                  className="font-mono text-xs uppercase tracking-widest mb-6"
                  style={{ color: item.fg === '#080808' ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.35)' }}
                >
                  {item.num} / {APPROACH.length.toString().padStart(2, '0')}
                </p>
                <h3
                  className="font-sans font-black uppercase leading-none tracking-tighter mb-8"
                  style={{ fontSize: 'clamp(2.6rem, 7vw, 6.5rem)', color: item.fg }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans text-lg leading-relaxed max-w-lg"
                  style={{ color: item.fg === '#080808' ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.55)' }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
