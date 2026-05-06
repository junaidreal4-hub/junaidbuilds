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
    status: 'Live',
    image: '/projects/visualsbyriju.jpg',
  },
  {
    index: '02', title: 'Cookie & Dough',
    tag: 'Business Website', year: '2025',
    desc: 'Full brochure website for a Berlin bakery. Warm design, menu showcase, location info, and order inquiry form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Cookie-Dough',
    status: 'Live',
    image: '/projects/cookiedough.jpg',
  },
  {
    index: '03', title: 'N88E Build',
    tag: 'Corporate Website', year: '2025',
    desc: '8-page corporate site with Google Sheets lead capture, data visualisations, SEO optimisation, and Vercel deployment.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Google Sheets API'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/N88E-Build-Website',
    status: 'Live',
    image: '/projects/n88e.jpg',
  },
  {
    index: '04', title: 'Strebo',
    tag: 'Full-Stack SaaS', year: '2025–26',
    desc: 'AI-powered job application assistant. Next.js, FastAPI, PostgreSQL, OpenAI API — built solo end to end.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Render'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Strebo',
    status: 'In Progress',
    image: '/projects/strebo.jpg',
  },
  {
    index: '05', title: 'mdjk.dev',
    tag: 'Personal Portfolio', year: '2026',
    desc: 'This portfolio — built with Next.js, Tailwind CSS, and GSAP scroll animations. Deployed on Vercel.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'GSAP', 'Vercel'],
    live: 'https://mdjk.vercel.app',
    github: 'https://github.com/junaidreal4-hub/junaidbuilds',
    status: 'Live',
    image: '/projects/mdjk.jpg',
  },
]

export default function Works() {
  const sectionRef  = useRef<HTMLElement>(null)
  const listRef     = useRef<HTMLDivElement>(null)
  const itemRefs    = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    let ctx: import('gsap').Context | null = null

    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Pin the whole section while scrolling through all projects
        ScrollTrigger.create({
          trigger:  sectionRef.current,
          start:    'top top',
          end:      `+=${window.innerHeight * (projects.length + 0.5)}`,
          pin:      true,
          anticipatePin: 1,
        })

        // Each project row gets its own ScrollTrigger to set active index
        itemRefs.current.forEach((el, i) => {
          if (!el) return
          ScrollTrigger.create({
            trigger:  sectionRef.current,
            start:    `top+=${(i / projects.length) * window.innerHeight * (projects.length + 0.5)} top`,
            end:      `top+=${((i + 1) / projects.length) * window.innerHeight * (projects.length + 0.5)} top`,
            onEnter:       () => setActive(i),
            onEnterBack:   () => setActive(i),
          })
        })
      }, sectionRef)
    }

    init()
    return () => { ctx?.revert() }
  }, [])

  const p = projects[active]

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen bg-surface overflow-hidden"
    >
      <div className="container-width h-screen flex flex-col py-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 shrink-0">
          <div>
            <p className="label mb-3">/ Selected Work</p>
            <h2 className="font-sans font-black text-[clamp(2rem,5vw,4rem)] text-heading tracking-tight leading-none">
              Projects
            </h2>
          </div>
          <p className="text-sm text-muted hidden md:block">Scroll to explore</p>
        </div>

        {/* Body: detail card LEFT + project list RIGHT */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 min-h-0">

          {/* LEFT — sticky detail + image card */}
          <div className="hidden md:flex flex-col gap-6 justify-center">
            <div
              key={active}
              className="bg-card border border-white/[0.08] rounded-2xl overflow-hidden animate-fade-up"
            >
              {/* Project image */}
              <div className="relative h-52 bg-canvas">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  onError={() => {}}
                />
                {/* Colour overlay so missing images still look nice */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-canvas/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono font-bold text-4xl text-orange/20">{p.index}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((t) => (
                    <span key={t} className="label border border-white/10 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <h3 className="font-sans font-black text-2xl text-heading tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-body leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-[10px]">Live Site →</a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-[10px]">GitHub →</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — project list, active row highlighted */}
          <div
            ref={listRef}
            className="flex flex-col justify-center divide-y divide-white/[0.05]"
          >
            {projects.map((proj, i) => (
              <div
                key={proj.title}
                ref={el => { itemRefs.current[i] = el }}
                className={`py-7 flex items-center justify-between transition-all duration-500 ${
                  active === i
                    ? 'opacity-100'
                    : 'opacity-20 hover:opacity-50'
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`font-mono text-xs transition-colors duration-300 ${
                    active === i ? 'text-orange' : 'text-muted'
                  }`}>{proj.index}</span>
                  <span className={`font-sans font-bold tracking-tight transition-all duration-300 ${
                    active === i
                      ? 'text-[clamp(1.8rem,4vw,3rem)] text-heading'
                      : 'text-[clamp(1.4rem,3vw,2.4rem)] text-subtle'
                  }`}>
                    {proj.title}
                  </span>
                  <span className="label border border-white/10 px-3 py-1 rounded-full hidden lg:inline">
                    {proj.tag}
                  </span>
                </div>
                <span className="label">{proj.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile fallback — simple stacked cards */}
      <div className="md:hidden container-width pb-20 flex flex-col gap-6">
        {projects.map((proj) => (
          <div key={proj.title} className="bg-card border border-white/[0.08] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="label text-orange">{proj.index}</span>
              <h3 className="font-sans font-bold text-xl text-heading tracking-tight">{proj.title}</h3>
              <span className="label border border-white/10 px-2 py-0.5 rounded-full">{proj.status}</span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2">
              {proj.stack.map((t) => (
                <span key={t} className="label border border-white/10 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
