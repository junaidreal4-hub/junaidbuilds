'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    index: '01', title: 'VisualsbyRiju',
    tag: 'Creative Portfolio', year: '2025',
    desc: 'Cinematic portfolio for a professional video editor. Scroll animations, showreel section, premium editorial design.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    live: 'https://visualsbyriju.vercel.app',
    github: 'https://github.com/junaidreal4-hub/visualsbyriju',
    image: '/projects/visualsbyriju.png',
  },
  {
    index: '02', title: 'Cookie & Dough',
    tag: 'Business Website', year: '2025',
    desc: 'Full brochure website for a Berlin bakery. Warm design, menu showcase, location info, and order inquiry form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Cookie-Dough',
    image: '/projects/cookiedough.png',
  },
  {
    index: '03', title: 'N88E Build',
    tag: 'Corporate Website', year: '2025',
    desc: '8-page corporate site with Google Sheets lead capture, data visualisations, SEO optimisation, and Vercel deployment.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Google Sheets API'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/N88E-Build-Website',
    image: '/projects/n88e.png',
  },
  {
    index: '04', title: 'Strebo',
    tag: 'Full-Stack SaaS', year: '2025–26',
    desc: 'AI-powered job application assistant. Next.js, FastAPI, PostgreSQL, OpenAI API — built solo end to end.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Render'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Strebo',
    image: '/projects/strebo.png',
  },
  {
    index: '05', title: 'mdjk.dev',
    tag: 'Personal Portfolio', year: '2026',
    desc: 'This portfolio — built with Next.js, Tailwind CSS, and GSAP scroll animations. Deployed on Vercel.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'GSAP', 'Vercel'],
    live: 'https://mdjk.vercel.app',
    github: 'https://github.com/junaidreal4-hub/junaidbuilds',
    image: '/projects/mdjk.png',
  },
]

const N = projects.length

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [imgErrors, setImgErrors] = useState<boolean[]>(Array(N).fill(false))

  useEffect(() => {
    if (typeof window === 'undefined') return
    let st: import('gsap/ScrollTrigger').ScrollTrigger | undefined

    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      st = ScrollTrigger.create({
        trigger:       sectionRef.current,
        start:         'top top',
        end:           () => `+=${window.innerHeight * N}`,
        pin:           true,
        anticipatePin: 1,
        scrub:         false,
        onUpdate(self) {
          const idx = Math.min(N - 1, Math.floor(self.progress * N))
          setActive(idx)
        },
      })
    }

    init()
    return () => { st?.kill() }
  }, [])

  const p = projects[active]

  return (
    <section id="work" ref={sectionRef} className="relative bg-surface overflow-hidden">
      <div className="container-width h-screen flex flex-col py-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 shrink-0">
          <div>
            <p className="label mb-3">/ Selected Work</p>
            <h2 className="font-sans font-black text-[clamp(2rem,5vw,4rem)] text-heading tracking-tight leading-none">Projects</h2>
          </div>
          <p className="text-sm text-muted hidden md:block">Scroll to explore</p>
        </div>

        {/* Body */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 min-h-0">

          {/* LEFT — screenshot + detail */}
          <div className="hidden md:flex flex-col justify-center gap-6">
            <div key={active} className="animate-fade-up flex flex-col gap-6">

              {/* Screenshot */}
              <div className="relative w-full h-52 rounded-xl overflow-hidden bg-canvas">
                {!imgErrors[active] ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-top"
                    onError={() => setImgErrors(prev => { const n = [...prev]; n[active] = true; return n })}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange/10 to-canvas flex items-center justify-center">
                    <span className="font-mono font-bold text-4xl text-orange/20">{p.index}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent" />
              </div>

              {/* Detail */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2">
                {p.stack.map((t) => (
                  <span key={t} className="label text-orange">{t} &nbsp;·</span>
                ))}
              </div>
              <h3 className="font-sans font-black text-[clamp(2rem,4vw,3.5rem)] text-heading tracking-tight leading-none">
                {p.title}
              </h3>
              <p className="text-body text-sm leading-relaxed max-w-sm">{p.desc}</p>
              <div className="flex flex-wrap gap-4">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary">Live Site →</a>
                )}
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub →</a>
              </div>
            </div>
          </div>

          {/* RIGHT — project name list */}
          <div className="flex flex-col justify-center">
            {projects.map((proj, i) => (
              <div key={proj.title} className="py-6 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <span className={`font-mono text-xs transition-colors duration-300 ${
                    active === i ? 'text-orange' : 'text-white/20'
                  }`}>{proj.index}</span>
                  <span className={`font-sans font-bold tracking-tight transition-all duration-500 ${
                    active === i
                      ? 'text-[clamp(2rem,4.5vw,3.5rem)] text-heading'
                      : 'text-[clamp(1.2rem,2.5vw,2rem)] text-white/20'
                  }`}>{proj.title}</span>
                </div>
                <span className={`label transition-opacity duration-300 ${
                  active === i ? 'opacity-100' : 'opacity-20'
                }`}>{proj.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden container-width pb-20 pt-8 flex flex-col gap-0">
        {projects.map((proj, i) => (
          <div key={proj.title} className="py-6 border-b border-white/[0.05]">
            {/* Mobile screenshot */}
            <div className="relative w-full h-36 rounded-lg overflow-hidden bg-canvas mb-4">
              {!imgErrors[i] ? (
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover object-top"
                  onError={() => setImgErrors(prev => { const n = [...prev]; n[i] = true; return n })}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange/10 to-canvas flex items-center justify-center">
                  <span className="font-mono font-bold text-2xl text-orange/20">{proj.index}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="label text-orange">{proj.index}</span>
              <h3 className="font-sans font-bold text-xl text-heading tracking-tight">{proj.title}</h3>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-3">
              {proj.live && <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-[10px]">Live →</a>}
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-[10px]">GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
