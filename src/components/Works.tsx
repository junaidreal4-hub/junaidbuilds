'use client'
import { useState } from 'react'

const projects = [
  {
    index: '01', title: 'VisualsbyRiju',
    tag: 'Creative Portfolio',   year: '2025',
    desc: 'Cinematic portfolio for a professional video editor. Scroll animations, showreel section, premium editorial design.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    link: 'https://visualsbyriju.vercel.app',
    github: 'https://github.com/junaidreal4-hub/visualsbyriju',
    status: 'Live',
  },
  {
    index: '02', title: 'Cookie & Dough',
    tag: 'Business Website',     year: '2025',
    desc: 'Full brochure website for a Berlin bakery. Warm design, menu showcase, location info, and order inquiry form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: null,
    github: 'https://github.com/junaidreal4-hub/Cookie-Dough',
    status: 'Live',
  },
  {
    index: '03', title: 'N88E Build',
    tag: 'Corporate Website',    year: '2025',
    desc: '8-page corporate site with Google Sheets lead capture, interactive data visualisations, SEO, and custom Vercel deployment.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Google Sheets API'],
    link: null,
    github: 'https://github.com/junaidreal4-hub/N88E-Build-Website',
    status: 'Live',
  },
  {
    index: '04', title: 'Strebo',
    tag: 'Full-Stack SaaS',      year: '2025–26',
    desc: 'AI-powered job application assistant. Next.js, FastAPI, PostgreSQL, OpenAI API — built solo end to end.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Render'],
    link: null,
    github: 'https://github.com/junaidreal4-hub/Strebo',
    status: 'In Progress',
  },
  {
    index: '05', title: 'mdjk.dev',
    tag: 'Personal Portfolio',   year: '2026',
    desc: 'This portfolio — built with Next.js, Tailwind CSS, and deployed on Vercel. Inspired by sirnik.co.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    link: 'https://mdjk.vercel.app',
    github: 'https://github.com/junaidreal4-hub/junaidbuilds',
    status: 'Live',
  },
]

export default function Works() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="work" className="section-pad bg-surface">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label mb-4">/ Selected Work</p>
            <h2 className="font-sans font-black text-[clamp(2rem,5vw,4rem)] text-heading tracking-tight leading-none">Projects</h2>
          </div>
          <p className="text-sm text-muted max-w-xs">Real websites, real clients, deployed live.</p>
        </div>

        {/* Desktop: hover-reveal card — sirnik.co style */}
        <div className="hidden md:grid grid-cols-[1fr_380px] gap-10 items-start">

          {/* Left: project list */}
          <div className="divide-y divide-white/[0.06]">
            {projects.map((p, i) => (
              <div
                key={p.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`flex items-center justify-between py-8 cursor-default transition-colors duration-200 ${
                  hovered === i ? 'text-heading' : 'text-muted hover:text-heading'
                }`}
              >
                <div className="flex items-center gap-8">
                  <span className="label w-8">{p.index}</span>
                  <span className="font-sans font-bold text-3xl tracking-tight">{p.title}</span>
                  <span className="label border border-white/10 px-3 py-1 rounded-full">{p.tag}</span>
                </div>
                <span className="label">{p.year}</span>
              </div>
            ))}
          </div>

          {/* Right: hover card */}
          <div className="sticky top-24">
            {hovered !== null ? (
              <div className="bg-card border border-white/[0.08] rounded-2xl p-8 animate-fade-up">
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[hovered].stack.map((t) => (
                    <span key={t} className="label border border-white/10 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <h3 className="font-sans font-black text-3xl text-heading mb-3 tracking-tight">{projects[hovered].title}</h3>
                <p className="text-body text-sm leading-relaxed mb-8">{projects[hovered].desc}</p>
                <div className="flex flex-wrap gap-3">
                  {projects[hovered].link && (
                    <a href={projects[hovered].link!} target="_blank" rel="noopener noreferrer" className="btn-primary text-[10px]">Live Site →</a>
                  )}
                  <a href={projects[hovered].github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-[10px]">GitHub →</a>
                </div>
              </div>
            ) : (
              <div className="bg-card border border-white/[0.04] rounded-2xl p-8 flex items-center justify-center h-64">
                <p className="label">Hover a project</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden flex flex-col divide-y divide-white/[0.06]">
          {projects.map((p) => (
            <div key={p.title} className="py-8">
              <div className="flex items-center gap-4 mb-3">
                <span className="label">{p.index}</span>
                <h3 className="font-sans font-bold text-2xl text-heading tracking-tight">{p.title}</h3>
                <span className="label border border-white/10 px-2 py-0.5 rounded-full">{p.status}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => <span key={t} className="label border border-white/10 px-2 py-1 rounded-full">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
