'use client'
import Image from 'next/image'

const stack = [
  // Frontend
  { label: 'React',          cat: 'Frontend' },
  { label: 'Next.js',        cat: 'Frontend' },
  { label: 'TypeScript',     cat: 'Frontend' },
  { label: 'JavaScript',     cat: 'Frontend' },
  { label: 'Tailwind CSS',   cat: 'Frontend' },
  { label: 'Framer Motion',  cat: 'Frontend' },
  { label: 'HTML / CSS',     cat: 'Frontend' },
  // Backend
  { label: 'Node.js',        cat: 'Backend'  },
  { label: 'FastAPI',        cat: 'Backend'  },
  { label: 'REST APIs',      cat: 'Backend'  },
  { label: 'PostgreSQL',     cat: 'Backend'  },
  { label: 'Python',         cat: 'Backend'  },
  { label: 'Ruby on Rails',  cat: 'Backend'  },
  // Tooling
  { label: 'Git / GitHub',   cat: 'Tooling'  },
  { label: 'Vercel',         cat: 'Tooling'  },
  { label: 'Vite',           cat: 'Tooling'  },
  { label: 'Figma',          cat: 'Tooling'  },
  // Data
  { label: 'Pandas / NumPy', cat: 'Data'     },
  { label: 'Tableau',        cat: 'Data'     },
  { label: 'SQL',            cat: 'Data'     },
]

const experience = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 – Present',
    location: 'Berlin, Germany',
    bullets: [
      'Designing and building full-stack web apps for clients worldwide',
      'Delivering production-grade sites with React, Next.js and Node',
      'End-to-end ownership: design, development, deployment',
    ],
  },
  {
    role: 'Working Student — Data Operations',
    company: 'Sparrow.parts',
    period: 'Nov 2024 – Nov 2025',
    location: 'Berlin, Germany',
    bullets: [
      'Built Python automation reducing manual processing time by 60%',
      'Developed tracking systems to monitor operational status',
      'Proposed process improvements that enhanced workflow efficiency',
    ],
  },
  {
    role: 'Customer Service Representative',
    company: 'TTEC',
    period: 'Jun 2023 – May 2024',
    location: 'Ahmedabad, India',
    bullets: [
      'Resolved service inquiries through cross-departmental collaboration',
      'Maintained accurate records with strong attention to detail',
    ],
  },
]

export default function About() {
  const mono = {
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
  }

  const cats = ['Frontend', 'Backend', 'Tooling', 'Data']

  return (
    <section id="about" className="bg-white" style={{ padding: 'clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,5rem)' }}>

      {/* ── Section label ── */}
      <div className="flex items-center gap-4 mb-16">
        <span style={{ ...mono, fontSize: '0.6rem', color: 'rgba(8,8,8,0.3)' }}>02 — About</span>
        <div className="flex-1" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
      </div>

      {/* ── TOP: Photo + Bio ── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-12 md:gap-20 mb-24 items-start">

        {/* Photo */}
        <div className="relative">
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: '4/5', borderRadius: '2px' }}
          >
            <Image
              src="/photo.jpg"
              alt="Md Junaid Khan"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 35vw"
              priority
            />
            {/* subtle dark overlay at bottom */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 50%)'
            }} />
          </div>
          {/* name tag below photo */}
          <div className="mt-4 flex flex-col gap-0.5">
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.04em', color: 'rgba(8,8,8,0.9)' }}>Md Junaid Khan</span>
            <span style={{ ...mono, fontSize: '0.55rem', color: 'rgba(8,8,8,0.35)' }}>Freelance Developer · Berlin, DE</span>
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center gap-8">
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 4.5rem)',
                letterSpacing: '0.04em',
                lineHeight: 0.9,
                color: 'rgba(8,8,8,0.9)',
              }}
              className="uppercase mb-6"
            >
              Builder.
              <br />
              <span style={{ color: 'rgba(8,8,8,0.2)' }}>Designer.</span>
              <br />
              Developer.
            </h2>

            <div className="flex flex-col gap-4" style={{ maxWidth: '52ch' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem,1.1vw,1.05rem)', color: 'rgba(8,8,8,0.65)', lineHeight: 1.7, fontWeight: 400 }}>
                I’m a full-stack web developer based in Berlin, currently doing my Master’s in Data Analytics. I build fast, interactive websites and applications — from a blank canvas to a live product.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem,1.1vw,1.05rem)', color: 'rgba(8,8,8,0.4)', lineHeight: 1.7, fontWeight: 400 }}>
                I work with startups and businesses worldwide, taking full ownership of the product — design, development and deployment. I care deeply about clean code, sharp UI and performance.
              </p>
            </div>
          </div>

          {/* quick stats */}
          <div className="flex gap-10 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {[
              { num: '10+', label: 'Projects Shipped' },
              { num: '3+',  label: 'Years Coding' },
              { num: '5+',  label: 'Happy Clients' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.8rem)', fontWeight: 700, letterSpacing: '0.04em', color: 'rgba(8,8,8,0.88)' }}>{num}</span>
                <span style={{ ...mono, fontSize: '0.52rem', color: 'rgba(8,8,8,0.3)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MIDDLE: Tech Stack ── */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <span style={{ ...mono, fontSize: '0.6rem', color: 'rgba(8,8,8,0.3)' }}>Stack</span>
          <div className="flex-1" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
        </div>

        <div className="flex flex-col gap-8">
          {cats.map(cat => (
            <div key={cat} className="flex flex-col gap-3">
              <span style={{ ...mono, fontSize: '0.52rem', color: 'rgba(8,8,8,0.25)' }}>{cat}</span>
              <div className="flex flex-wrap gap-2">
                {stack.filter(s => s.cat === cat).map(({ label }) => (
                  <span
                    key={label}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      color: 'rgba(8,8,8,0.7)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '2px',
                      padding: '0.3rem 0.75rem',
                      background: 'rgba(0,0,0,0.02)',
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM: Experience ── */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <span style={{ ...mono, fontSize: '0.6rem', color: 'rgba(8,8,8,0.3)' }}>Experience</span>
          <div className="flex-1" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
        </div>

        <div className="flex flex-col" style={{ gap: '0' }}>
          {experience.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-8"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
            >
              {/* left: role meta */}
              <div className="flex flex-col gap-1">
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, color: 'rgba(8,8,8,0.85)', letterSpacing: '0.01em' }}>{exp.role}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'rgba(8,8,8,0.45)', fontWeight: 400 }}>{exp.company}</span>
                <div className="flex items-center gap-2 mt-1">
                  <span style={{ ...mono, fontSize: '0.5rem', color: 'rgba(8,8,8,0.3)' }}>{exp.period}</span>
                  <span style={{ color: 'rgba(0,0,0,0.15)', fontSize: '0.5rem' }}>·</span>
                  <span style={{ ...mono, fontSize: '0.5rem', color: 'rgba(8,8,8,0.25)' }}>{exp.location}</span>
                </div>
              </div>
              {/* right: bullets */}
              <ul className="flex flex-col gap-2 mt-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span style={{ color: 'rgba(0,0,0,0.2)', marginTop: '0.45rem', fontSize: '0.4rem' }}>■</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(8,8,8,0.5)', lineHeight: 1.6, fontWeight: 400 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
