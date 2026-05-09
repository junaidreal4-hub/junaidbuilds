'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    index: '01', title: 'VisualsbyRiju',
    type: 'Creative Portfolio', year: '2025',
    desc: 'Cinematic portfolio for a professional video editor. Scroll animations, showreel section, premium editorial design.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    live: 'https://visualsbyriju.vercel.app',
    github: 'https://github.com/junaidreal4-hub/visualsbyriju',
    image: '/projects/visualsbyriju.png',
  },
  {
    index: '02', title: 'Cookie & Dough',
    type: 'Business Website', year: '2025',
    desc: 'Full brochure website for a Berlin bakery. Warm design, menu showcase, location info, and order inquiry form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Cookie-Dough',
    image: '/projects/cookiedough.png',
  },
  {
    index: '03', title: 'N88E Build',
    type: 'Corporate Website', year: '2025',
    desc: '8-page corporate site with Google Sheets lead capture, data visualisations, SEO optimisation, and Vercel deployment.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/N88E-Build-Website',
    image: '/projects/n88e.png',
  },
  {
    index: '04', title: 'Strebo',
    type: 'Full-Stack SaaS', year: '2025–26',
    desc: 'AI-powered job application assistant. Next.js, FastAPI, PostgreSQL, OpenAI API — built solo end to end.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI'],
    live: null,
    github: 'https://github.com/junaidreal4-hub/Strebo',
    image: '/projects/strebo.png',
  },
  {
    index: '05', title: 'mdjk.dev',
    type: 'Personal Portfolio', year: '2026',
    desc: 'This portfolio — built with Next.js, Tailwind CSS, and GSAP scroll animations. Deployed on Vercel.',
    stack: ['Next.js', 'Tailwind', 'TypeScript', 'GSAP'],
    live: 'https://mdjk.vercel.app',
    github: 'https://github.com/junaidreal4-hub/junaidbuilds',
    image: '/projects/mdjk.png',
  },
]

export default function Works() {
  const [hovered, setHovered]   = useState<number | null>(null)
  const [imgError, setImgError] = useState<boolean[]>(Array(projects.length).fill(false))
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="work" ref={sectionRef} className="relative bg-[#080808] overflow-hidden" onMouseMove={handleMouseMove}>

      {/* Floating cursor image */}
      {hovered !== null && (
        <div
          className="pointer-events-none fixed z-30 w-64 aspect-video rounded-xl overflow-hidden shadow-2xl transition-[left,top] duration-100"
          style={{ left: mousePos.x + 24, top: mousePos.y - 60 }}
        >
          {!imgError[hovered] ? (
            <Image src={projects[hovered].image} alt={projects[hovered].title} fill className="object-cover"
              onError={() => setImgError(prev => { const n=[...prev]; n[hovered]=true; return n })} />
          ) : (
            <div className="w-full h-full bg-[#111] flex items-center justify-center">
              <span className="font-mono text-3xl text-white/10">{projects[hovered].index}</span>
            </div>
          )}
        </div>
      )}

      <div className="container-width py-24">
        <div className="flex items-end justify-between mb-4 pb-6 border-b border-white/[0.06]">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest">/ Selected Work</p>
          <p className="font-mono text-xs text-white/20 uppercase tracking-widest hidden md:block">Hover to preview</p>
        </div>

        <div className="flex flex-col">
          {projects.map((proj, i) => (
            <a
              key={proj.title}
              href={proj.live ?? proj.github}
              target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center justify-between py-7 border-b border-white/[0.06] transition-all duration-300 hover:pl-4"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-mono text-xs text-white/20 group-hover:text-orange transition-colors shrink-0">{proj.index}</span>
                <span className="font-sans font-black uppercase text-white tracking-tight leading-none transition-colors duration-300 group-hover:text-orange"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 3.2rem)' }}>
                  {proj.title}
                </span>
              </div>
              <div className="hidden md:flex items-center gap-10">
                <span className="font-mono text-xs text-white/30 uppercase tracking-widest">{proj.type}</span>
                <span className="font-mono text-xs text-white/20">{proj.year}</span>
                <span className="font-mono text-white/20 text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">↗</span>
              </div>
              <div className="md:hidden flex items-center gap-4">
                <span className="font-mono text-xs text-white/30">{proj.year}</span>
                <span className="font-mono text-white/20 text-sm">↗</span>
              </div>
            </a>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-20 overflow-hidden border-t border-white/[0.06] pt-8">
          <div className="flex gap-0 whitespace-nowrap animate-marquee">
            {Array(6).fill(null).map((_, i) => (
              <span key={i} className="font-sans font-black uppercase text-white/[0.04] tracking-tighter shrink-0"
                style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
                Be Creative  ✱  Build Bold  ✱  Ship Fast  ✱  
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
