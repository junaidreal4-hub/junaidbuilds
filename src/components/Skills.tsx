'use client'
import { useState } from 'react'

const skills = [
  {
    index:    '01',
    tag:      'Custom Built',
    title:    'Web Development',
    desc:     'I build fully custom websites using React, Next.js and TypeScript — no drag-and-drop builders, no templates. Every site is fast, responsive, and SEO-ready from the ground up.',
    tools:    ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS', 'Vercel', 'Framer Motion', 'GSAP'],
  },
  {
    index:    '02',
    tag:      'Full-Stack',
    title:    'Backend & Databases',
    desc:     'From REST APIs to full database architecture — I handle the complete backend stack. Auth systems, cloud deployments, and everything that runs behind the scenes.',
    tools:    ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Google Cloud', 'Render', 'Supabase'],
  },
  {
    index:    '03',
    tag:      'SaaS / Apps',
    title:    'Web Applications',
    desc:     'Custom web applications with user authentication, dashboards, and complex business logic. From MVP to production — designed, built, and deployed.',
    tools:    ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Cloudinary', 'Stripe', 'JWT Auth'],
  },
  {
    index:    '04',
    tag:      'E-Commerce',
    title:    'Online Shops',
    desc:     'Full online stores with product catalogues, cart, checkout, and payment integration. Built for performance and conversion.',
    tools:    ['Next.js', 'Stripe', 'Sanity CMS', 'Vercel', 'Tailwind CSS'],
  },
  {
    index:    '05',
    tag:      'Ongoing',
    title:    'Maintenance & Support',
    desc:     'Monthly retainer for updates, performance monitoring, bug fixes, and new feature additions. You focus on your business, I keep the site running perfectly.',
    tools:    ['Performance audits', 'Bug fixes', 'Feature additions', 'Priority support'],
  },
]

export default function Skills() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="services" className="section-pad bg-canvas">
      <div className="container-width">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="label mb-4">/ Services, Skills, Abilities</p>
            <h2 className="font-display italic text-[clamp(2.2rem,4.5vw,4rem)] text-heading leading-none">
              What I do<br />best?
            </h2>
          </div>
          <p className="text-body text-sm leading-relaxed max-w-xs">
            I build websites, apps, and digital products that help businesses grow and make a real impact.
          </p>
        </div>

        {/* Accordion rows */}
        <div className="divide-y divide-border">
          {skills.map((s, i) => (
            <div key={s.title}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-8 flex items-start md:items-center justify-between gap-6 group"
              >
                <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
                  <span className="label w-8 shrink-0 pt-0.5">{s.index}</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <span className="label">{s.tag}</span>
                    <span className={`font-display italic text-2xl md:text-3xl transition-colors duration-200 ${
                      open === i ? 'text-heading' : 'text-subtle group-hover:text-heading'
                    }`}>
                      {s.title}
                    </span>
                  </div>
                </div>
                <span className={`label text-heading text-xl leading-none transition-transform duration-300 shrink-0 ${
                  open === i ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open === i ? 'max-h-80 pb-10' : 'max-h-0'
              }`}>
                <div className="ml-0 md:ml-[88px] grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className="text-body text-sm leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span key={t} className="label border border-border px-3 py-1.5">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
