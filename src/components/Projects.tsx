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
    desc: 'Full-stack corporate site for a construction company. 8+ pages, Google Sheets API integration, multilingual SEO.',
    tags: ['React', 'TypeScript', 'Vite', 'Vercel'],
    year: '2025',
    img: '/projects/n88e.png',
    dark: false,
  },
  {
    num: '02',
    title: 'mdjk.dev',
    url: 'https://mdjk.vercel.app',
    desc: 'Personal freelance portfolio with GSAP scroll animations, 3D Spline scene and smooth page transitions.',
    tags: ['Next.js', 'GSAP', 'Spline', 'Tailwind'],
    year: '2025',
    img: '/projects/mdjk.png',
    dark: true,
  },
  {
    num: '03',
    title: 'Cookie Dough',
    url: '#',
    desc: 'E-commerce storefront for a Berlin-based dessert brand. Cart system, Stripe checkout, CMS-driven content.',
    tags: ['Next.js', 'Stripe', 'Sanity', 'Tailwind'],
    year: '2025',
    img: '/projects/cookiedough.png',
    dark: false,
  },
  {
    num: '04',
    title: 'Strebo',
    url: '#',
    desc: 'CV generation and document management app. PDF export, auth, role-based access and cloud storage.',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'Cloudinary'],
    year: '2024',
    img: '/projects/strebo.png',
    dark: true,
  },
  {
    num: '05',
    title: 'Visuals by Riju',
    url: '#',
    desc: 'Photography portfolio with immersive lightbox gallery, lazy-loaded media and custom cursor interactions.',
    tags: ['Next.js', 'Framer Motion', 'Cloudinary'],
    year: '2024',
    img: '/projects/visualsbyriju.png',
    dark: false,
  },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.proj-card')

    cards.forEach((card, i) => {
      // every card except the last one gets pinned
      if (i === cards.length - 1) return

      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end: () => `+=${(cards.length - i) * window.innerHeight}`,
        pin: true,
        pinSpacing: false,
      })

      // scale down as next card comes up
      gsap.to(card, {
        scale: 0.92,
        borderRadius: '20px',
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top top',
          end: `+=${window.innerHeight}`,
          scrub: true,
        },
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const mono = {
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
  }

  return (
    <section id="work" ref={containerRef}>
      {projects.map((p, i) => (
        <div
          key={i}
          className="proj-card"
          style={{
            position: 'relative',
            width: '100%',
            height: '100dvh',
            overflow: 'hidden',
            willChange: 'transform',
          }}
        >
          {/* ── BACKGROUND SCREENSHOT ────────────────────────────── */}
          <Image
            src={p.img}
            alt={p.title}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            priority={i === 0}
            sizes="100vw"
          />

          {/* dark overlay so text is always readable */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: p.dark
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.7) 100%)'
                : 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.6) 100%)',
            }}
          />

          {/* ── TOP META ───────────────────────────────────────── */}
          <div
            style={{
              position: 'absolute',
              top: 'clamp(2rem, 4vh, 3.5rem)',
              left:  'clamp(1.5rem, 4vw, 4rem)',
              right: 'clamp(1.5rem, 4vw, 4rem)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            {/* left: index + description + tags */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '55ch' }}>
              <span style={{ ...mono, fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)' }}>
                {p.num} — {p.year}
              </span>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: '48ch',
              }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    ...mono,
                    fontSize: '0.48rem',
                    color: 'rgba(255,255,255,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '2px',
                    padding: '0.2rem 0.55rem',
                    backdropFilter: 'blur(4px)',
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* right: visit link */}
            {p.url !== '#' && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                style={{
                  ...mono,
                  fontSize: '0.5rem',
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '2px',
                  padding: '0.35rem 0.8rem',
                  textDecoration: 'none',
                  backdropFilter: 'blur(4px)',
                  flexShrink: 0,
                  marginTop: '0.1rem',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                Visit ↗
              </a>
            )}
          </div>

          {/* ── BOTTOM TITLE ──────────────────────────────────────── */}
          <div
            style={{
              position: 'absolute',
              bottom: 'clamp(2rem, 4vh, 3.5rem)',
              left:   'clamp(1.5rem, 4vw, 4rem)',
              right:  'clamp(1.5rem, 4vw, 4rem)',
            }}
          >
            <h2
              className="uppercase"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(3rem, 8vw, 9rem)',
                letterSpacing: '0.03em',
                lineHeight: 0.85,
                color: 'rgba(255,255,255,0.92)',
                margin: 0,
              }}
            >
              {p.title}
            </h2>
          </div>
        </div>
      ))}
    </section>
  )
}
