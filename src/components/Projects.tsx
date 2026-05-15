'use client'
import Image from 'next/image'
import FlowArt, { FlowSection } from '@/components/ui/flow-art'

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
    bg: '#111110',
    color: 'rgba(240,234,220,0.9)',
    accent: '#c8a96e',
    divider: 'rgba(200,169,110,0.18)',
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
    bg: '#0d1117',
    color: 'rgba(240,234,220,0.9)',
    accent: '#7b9cff',
    divider: 'rgba(123,156,255,0.18)',
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
    bg: '#1a1208',
    color: 'rgba(249,196,107,0.92)',
    accent: '#f9c46b',
    divider: 'rgba(249,196,107,0.15)',
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
    bg: '#0a1310',
    color: 'rgba(168,230,207,0.9)',
    accent: '#a8e6cf',
    divider: 'rgba(168,230,207,0.15)',
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
    bg: '#120d10',
    color: 'rgba(232,180,184,0.9)',
    accent: '#e8b4b8',
    divider: 'rgba(232,180,184,0.15)',
  },
]

const mono = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
}

export default function Projects() {
  return (
    <div id="work">
      <FlowArt aria-label="Selected work">
        {projects.map((p, i) => (
          <FlowSection
            key={p.num}
            aria-label={p.title}
            style={{ backgroundColor: p.bg, color: p.color }}
          >
            {/* ── header row ── */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ ...mono, fontSize: '0.58rem', color: p.accent, opacity: 0.7 }}>
                {p.num} — Work
              </span>
              <span style={{ ...mono, fontSize: '0.52rem', opacity: 0.4 }}>{p.year}</span>
            </div>

            <hr style={{ border: 'none', borderTop: `1px solid ${p.divider}` }} />

            {/* ── big title ── */}
            <div>
              <h2
                className="uppercase"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(3.5rem, 10vw, 12rem)',
                  lineHeight: 0.85,
                  letterSpacing: '0.04em',
                  color: p.color,
                }}
              >
                {p.title}
              </h2>
            </div>

            <hr style={{ border: 'none', borderTop: `1px solid ${p.divider}` }} />

            {/* ── screenshot + meta side by side ── */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              alignItems: 'start',
            }}>
              {/* plain image — no browser chrome */}
              <div style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: `0 24px 70px rgba(0,0,0,0.6), 0 0 0 1px ${p.accent}18`,
                position: 'relative',
                width: '100%',
                aspectRatio: '16/10',
              }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  sizes="(max-width:768px) 90vw, 45vw"
                  priority={i === 0}
                />
              </div>

              {/* meta */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', paddingTop: '0.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ ...mono, fontSize: '0.5rem', opacity: 0.5 }}>Role</span>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
                    fontStyle: 'italic',
                    opacity: 0.8,
                  }}>{p.role}</span>
                </div>

                <div style={{ borderTop: `1px solid ${p.divider}`, paddingTop: '1.2rem' }}>
                  <span style={{ ...mono, fontSize: '0.5rem', opacity: 0.5, display: 'block', marginBottom: '0.6rem' }}>About</span>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.82rem, 1.1vw, 1rem)',
                    lineHeight: 1.75,
                    opacity: 0.65,
                    maxWidth: '38ch',
                  }}>{p.desc}</p>
                </div>

                <div style={{ borderTop: `1px solid ${p.divider}`, paddingTop: '1.2rem' }}>
                  <span style={{ ...mono, fontSize: '0.5rem', opacity: 0.5, display: 'block', marginBottom: '0.6rem' }}>Stack</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{
                        ...mono,
                        fontSize: '0.45rem',
                        color: p.accent,
                        border: `1px solid ${p.accent}30`,
                        borderRadius: '2px',
                        padding: '0.2rem 0.55rem',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>

                {p.url !== '#' && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...mono,
                      fontSize: '0.5rem',
                      color: p.accent,
                      border: `1px solid ${p.accent}35`,
                      borderRadius: '3px',
                      padding: '0.5rem 1rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      alignSelf: 'flex-start',
                      marginTop: 'auto',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    Visit site ↗
                  </a>
                )}
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: `1px solid ${p.divider}` }} />

            {/* ── footer row ── */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ ...mono, fontSize: '0.5rem', opacity: 0.3 }}>
                {i + 1} / {projects.length}
              </span>
              <span style={{ ...mono, fontSize: '0.5rem', color: p.accent, opacity: 0.5 }}>
                scroll to explore
              </span>
            </div>
          </FlowSection>
        ))}
      </FlowArt>
    </div>
  )
}
