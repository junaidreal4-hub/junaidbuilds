'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: '01',
    title: 'N88E Build',
    desc: 'Full-stack corporate website — React, TypeScript, Vite. 8+ pages, Google Sheets API, SEO optimised.',
    tags: ['React', 'TypeScript', 'Vite', 'Vercel'],
    year: '2025',
  },
  {
    num: '02',
    title: 'mdjk.dev',
    desc: 'Personal freelance portfolio — Next.js, Tailwind CSS, GSAP animations, 3D Spline scene.',
    tags: ['Next.js', 'GSAP', 'Spline', 'Tailwind'],
    year: '2025',
  },
  {
    num: '03',
    title: 'Customer Segmentation',
    desc: 'RFM analysis on 10k+ users via Python & SQL. Visualised cohorts in Tableau.',
    tags: ['Python', 'SQL', 'Tableau'],
    year: '2024',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef   = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        gsap.from(el, {
          y: 50, opacity: 0, duration: 1, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const mono = {
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
  }

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        background: '#0a0a0a',
        padding: 'clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,5rem)',
      }}
    >
      <div className="flex items-center gap-4 mb-16">
        <span style={{ ...mono, fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)' }}>03 — Work</span>
        <div className="flex-1" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
      </div>

      <div className="flex flex-col">
        {projects.map((p, i) => (
          <div
            key={i}
            ref={el => { itemsRef.current[i] = el }}
            className="group grid grid-cols-1 md:grid-cols-[4rem_1fr_auto] gap-4 md:gap-12 py-10 cursor-pointer"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span style={{ ...mono, fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)', paddingTop: '0.3rem' }}>{p.num}</span>
            <div className="flex flex-col gap-3">
              <h3
                className="uppercase group-hover:translate-x-2 transition-transform duration-300"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 3vw, 3.2rem)',
                  letterSpacing: '0.04em',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1,
                }}
              >{p.title}</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, maxWidth: '55ch' }}>{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    ...mono, fontSize: '0.5rem',
                    color: 'rgba(255,255,255,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '2px',
                    padding: '0.25rem 0.6rem',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
            <span style={{ ...mono, fontSize: '0.55rem', color: 'rgba(255,255,255,0.15)', alignSelf: 'start', paddingTop: '0.3rem' }}>{p.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
