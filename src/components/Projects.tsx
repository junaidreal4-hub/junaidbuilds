'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: '01',
    title: 'N88E Build',
    url: 'https://n88ebuild.com',
    role: 'Web Design + Development',
    desc: 'Full-stack corporate site for a construction company — 8 pages, Google Sheets API, multilingual SEO.',
    tags: ['React', 'TypeScript', 'Vite', 'Vercel'],
    year: '2025',
    img: '/projects/n88e.png',
    accent: '#c8a96e',
  },
  {
    num: '02',
    title: 'mdjk.dev',
    url: 'https://mdjk.vercel.app',
    role: 'Design + Development',
    desc: 'Personal freelance portfolio with GSAP scroll animations, 3D Spline scene and smooth page transitions.',
    tags: ['Next.js', 'GSAP', 'Spline', 'Tailwind'],
    year: '2025',
    img: '/projects/mdjk.png',
    accent: '#7b9cff',
  },
  {
    num: '03',
    title: 'Cookie Dough',
    url: '#',
    role: 'E-Commerce Development',
    desc: 'Storefront for a Berlin dessert brand — cart system, Stripe checkout, CMS-driven content.',
    tags: ['Next.js', 'Stripe', 'Sanity', 'Tailwind'],
    year: '2025',
    img: '/projects/cookiedough.png',
    accent: '#f9c46b',
  },
  {
    num: '04',
    title: 'Strebo',
    url: '#',
    role: 'Full-Stack Development',
    desc: 'CV generation and document management app — PDF export, auth, role-based access, cloud storage.',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'Cloudinary'],
    year: '2024',
    img: '/projects/strebo.png',
    accent: '#a8e6cf',
  },
  {
    num: '05',
    title: 'Visuals by Riju',
    url: '#',
    role: 'Web Design + Development',
    desc: 'Photography portfolio with immersive lightbox gallery, lazy-loaded media and custom cursor.',
    tags: ['Next.js', 'Framer Motion', 'Cloudinary'],
    year: '2024',
    img: '/projects/visualsbyriju.png',
    accent: '#e8b4b8',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track   = trackRef.current
    const section = sectionRef.current
    if (!track || !section) return

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          id: 'horiz',
          trigger: section,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + window.innerWidth * 0.3}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const mono = {
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
  }

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{ background: '#0a0a0a', overflow: 'hidden' }}
    >
      {/* static header */}
      <div style={{
        padding: 'clamp(3rem,6vh,5rem) clamp(1.5rem,4vw,4rem) 0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ ...mono, fontSize: '0.55rem', color: 'rgba(255,255,255,0.25)' }}>03 — Work</span>
          <div style={{ width: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)' }} />
        </div>
        <span style={{ ...mono, fontSize: '0.5rem', color: 'rgba(255,255,255,0.18)' }}>
          {projects.length} projects → scroll
        </span>
      </div>

      {/* horizontal track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(2rem,3vw,3.5rem)',
          padding: 'clamp(2.5rem,5vh,4rem) clamp(1.5rem,4vw,4rem)',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="proj-card"
            style={{
              flexShrink: 0,
              width: 'clamp(300px, 36vw, 540px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* top meta */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '1rem',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <span style={{ ...mono, fontSize: '0.5rem', color: 'rgba(255,255,255,0.22)' }}>
                  {p.num} — {p.year}
                </span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.72rem,0.85vw,0.85rem)',
                  color: 'rgba(255,255,255,0.4)',
                  fontStyle: 'italic',
                }}>{p.role}</span>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.72rem,0.82vw,0.82rem)',
                  color: 'rgba(255,255,255,0.3)',
                  lineHeight: 1.7,
                  maxWidth: '34ch',
                  margin: 0,
                }}>{p.desc}</p>
              </div>
              {p.url !== '#' && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  style={{
                    ...mono, fontSize: '0.46rem',
                    color: 'rgba(255,255,255,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '2px',
                    padding: '0.28rem 0.65rem',
                    textDecoration: 'none',
                    flexShrink: 0,
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >Visit ↗</a>
              )}
            </div>

            {/* browser mockup frame */}
            <div style={{
              borderRadius: '10px',
              overflow: 'hidden',
              background: '#161616',
              boxShadow: '0 24px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.05)',
            }}>
              {/* traffic lights bar */}
              <div style={{
                height: '1.9rem',
                background: '#1c1c1c',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 0.85rem',
                gap: '0.38rem',
              }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <div key={c} style={{
                    width: '0.52rem', height: '0.52rem',
                    borderRadius: '50%', background: c,
                  }} />
                ))}
                <div style={{
                  flex: 1, height: '0.85rem',
                  borderRadius: '3px',
                  background: 'rgba(255,255,255,0.04)',
                  margin: '0 0.5rem',
                }} />
              </div>
              {/* screenshot */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  sizes="(max-width:768px) 90vw, 36vw"
                  priority={i === 0}
                />
              </div>
            </div>

            {/* title + tags */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '0.75rem',
            }}>
              <h3
                className="uppercase"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.5rem,3.2vw,2.8rem)',
                  letterSpacing: '0.04em',
                  lineHeight: 0.9,
                  color: 'rgba(255,255,255,0.85)',
                  margin: 0,
                }}
              >{p.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', justifyContent: 'flex-end' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    ...mono, fontSize: '0.44rem',
                    color: p.accent,
                    border: `1px solid ${p.accent}35`,
                    borderRadius: '2px',
                    padding: '0.18rem 0.48rem',
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* accent line */}
            <div style={{
              height: '1px',
              background: `linear-gradient(to right, ${p.accent}55, transparent)`,
            }} />
          </div>
        ))}
        {/* end spacer */}
        <div style={{ flexShrink: 0, width: 'clamp(1.5rem,4vw,4rem)' }} />
      </div>
    </section>
  )
}
