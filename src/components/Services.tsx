'use client'

const mono = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
}

const services = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'Pixel-precise UI/UX design — wireframes to high-fidelity Figma prototypes with a strong visual identity.',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Branding'],
  },
  {
    num: '02',
    title: 'Frontend Development',
    desc: 'Fast, accessible, animated interfaces built with React & Next.js — from landing pages to complex web apps.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    num: '03',
    title: '3D & Interactive',
    desc: 'Immersive 3D scenes and scroll-driven experiences using Spline and GSAP that make your site unforgettable.',
    tags: ['Spline', 'GSAP', 'Three.js', 'WebGL'],
  },
  {
    num: '04',
    title: 'Full-Stack',
    desc: 'End-to-end product development — APIs, databases, auth and deployment on Vercel or your own infra.',
    tags: ['FastAPI', 'PostgreSQL', 'Supabase', 'Vercel'],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: '#ffffff',
        color: 'var(--c-ink)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
      }}
    >
      {/* Section label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <span style={{ ...mono, fontSize: '0.55rem', color: 'var(--c-ink-faint)' }}>02 — Services</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--c-divider)' }} />
      </div>

      {/* Heading */}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.8rem, 7vw, 8rem)',
          lineHeight: 0.88,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          color: 'var(--c-ink)',
          marginBottom: 'clamp(3rem, 7vw, 6rem)',
          maxWidth: '14ch',
        }}
      >
        What I Do
      </h2>

      {/* Service rows */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {services.map((s, i) => (
          <div
            key={s.num}
            style={{
              display: 'grid',
              gridTemplateColumns: '3rem 1fr auto',
              gap: '2rem',
              alignItems: 'start',
              padding: 'clamp(1.4rem, 3vw, 2rem) 0',
              borderTop: i === 0 ? '1px solid var(--c-divider)' : 'none',
              borderBottom: '1px solid var(--c-divider)',
            }}
          >
            {/* Number */}
            <span style={{ ...mono, fontSize: '0.52rem', color: 'var(--c-ink-faint)', paddingTop: '0.3rem' }}>
              {s.num}
            </span>

            {/* Title + desc */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 3vw, 2.8rem)',
                  letterSpacing: '-0.01em',
                  color: 'var(--c-ink)',
                  lineHeight: 1,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.82rem, 1.1vw, 0.95rem)',
                  lineHeight: 1.7,
                  color: 'var(--c-ink-mid)',
                  maxWidth: '46ch',
                }}
              >
                {s.desc}
              </p>
            </div>

            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                alignItems: 'flex-end',
                paddingTop: '0.2rem',
              }}
            >
              {s.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    ...mono,
                    fontSize: '0.44rem',
                    color: 'var(--c-ink-faint)',
                    border: '1px solid var(--c-border)',
                    borderRadius: '2px',
                    padding: '0.2rem 0.5rem',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
