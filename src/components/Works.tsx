'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    index: '01',
    title: 'VisualsbyRiju',
    type: 'Creative Portfolio',
    year: '2025',
    desc: 'Cinematic portfolio for a professional video editor. Scroll animations, showreel section, and premium editorial design built for impact.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    live: 'https://visualsbyriju.vercel.app',
    github: 'https://github.com/junaidreal4-hub/visualsbyriju',
    bg: '#080808',
    fg: '#ffffff',
  },
  {
    index: '02',
    title: 'Cookie & Dough',
    type: 'Business Website',
    year: '2025',
    desc: 'Full brochure website for a Berlin bakery. Warm design system, menu showcase, location info, and an order inquiry form that converts.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Cookie-Dough',
    bg: '#f97316',
    fg: '#080808',
  },
  {
    index: '03',
    title: 'N88E Build',
    type: 'Corporate Website',
    year: '2025',
    desc: '8-page corporate site with Google Sheets lead capture, live data visualisations, full SEO optimisation, and Vercel deployment.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/N88E-Build-Website',
    bg: '#f5f5f0',
    fg: '#080808',
  },
  {
    index: '04',
    title: 'Strebo',
    type: 'Full-Stack SaaS',
    year: '2025–26',
    desc: 'AI-powered job application assistant. Next.js, FastAPI, PostgreSQL, OpenAI API — built solo end to end from zero to production.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Strebo',
    bg: '#111827',
    fg: '#ffffff',
  },
  {
    index: '05',
    title: 'mdjk.dev',
    type: 'Personal Portfolio',
    year: '2026',
    desc: 'This portfolio — built with Next.js, Tailwind CSS, and GSAP scroll animations. Every section crafted from scratch. Deployed on Vercel.',
    stack: ['Next.js', 'Tailwind', 'TypeScript', 'GSAP'],
    live: 'https://mdjk.vercel.app',
    github: 'https://github.com/junaidreal4-hub/junaidbuilds',
    bg: '#080808',
    fg: '#ffffff',
  },
]

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      sectionRef.current?.querySelectorAll('.panel-title').forEach((el) => {
        gsap.from(el, {
          x: -60, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })

      sectionRef.current?.querySelectorAll('.panel-body').forEach((el) => {
        gsap.from(el, {
          y: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
    }
    init()
  }, [])

  return (
    <section id="work" ref={sectionRef}>

      {/* Section label */}
      <div className="bg-[#080808] container-width pt-20 pb-6">
        <p className="font-mono text-xs text-white/30 uppercase tracking-widest">/ Selected Work</p>
      </div>

      {/* Alternating panels */}
      {projects.map((proj, i) => (
        <div
          key={proj.title}
          style={{ backgroundColor: proj.bg }}
          className="relative w-full overflow-hidden"
        >
          {/* Giant ghost index number */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 font-sans font-black leading-none select-none pointer-events-none"
            style={{
              fontSize:  'clamp(10rem, 28vw, 26rem)',
              color:     proj.fg === '#080808' ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.05)',
              lineHeight: 1,
            }}
          >
            {proj.index}
          </span>

          {/* Content */}
          <div className="relative z-10 container-width py-24 md:py-32">
            <div className="max-w-2xl">

              {/* Type + year */}
              <p className="panel-body font-mono text-xs uppercase tracking-widest mb-6"
                style={{ color: proj.fg === '#080808' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.35)' }}>
                {proj.type} &nbsp;·&nbsp; {proj.year}
              </p>

              {/* Title */}
              <h2
                className="panel-title font-sans font-black uppercase leading-none tracking-tighter mb-8"
                style={{
                  fontSize: 'clamp(3rem, 9vw, 8rem)',
                  color: proj.fg,
                }}
              >
                {proj.title}
              </h2>

              {/* Description */}
              <p
                className="panel-body font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg"
                style={{ color: proj.fg === '#080808' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.55)' }}
              >
                {proj.desc}
              </p>

              {/* Stack pills */}
              <div className="panel-body flex flex-wrap gap-2 mb-12">
                {proj.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border"
                    style={{
                      borderColor: proj.fg === '#080808' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.15)',
                      color:       proj.fg === '#080808' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.45)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="panel-body flex flex-wrap gap-4">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
                    style={{ color: proj.fg }}
                  >
                    View Live
                    <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
                  style={{ color: proj.fg === '#080808' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.35)' }}
                >
                  GitHub
                  <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
