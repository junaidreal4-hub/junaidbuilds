'use client'
import { useState } from 'react'

const skills = [
  {
    index: '01', tag: 'Custom Built',
    title: 'Web Development',
    desc:  'I build fully custom websites using React, Next.js and TypeScript — no templates, no builders. Every site is fast, accessible, and SEO-ready from the ground up.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Framer Motion', 'GSAP'],
  },
  {
    index: '02', tag: 'Full-Stack',
    title: 'Backend & Databases',
    desc:  'REST APIs, auth systems, and complete database architecture. I handle everything behind the scenes — deployed, monitored, and production-ready.',
    tools: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Google Cloud', 'Render', 'Supabase'],
  },
  {
    index: '03', tag: 'SaaS / Apps',
    title: 'Web Applications',
    desc:  'Custom web apps with auth, dashboards, and complex business logic. From MVP to production — designed, built, and deployed.',
    tools: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Cloudinary', 'Stripe', 'JWT Auth'],
  },
  {
    index: '04', tag: 'E-Commerce',
    title: 'Online Shops',
    desc:  'Full online stores with product catalogues, cart, checkout, and payment integration. Built for performance and conversion.',
    tools: ['Next.js', 'Stripe', 'Sanity CMS', 'Vercel', 'Tailwind CSS'],
  },
  {
    index: '05', tag: 'Ongoing',
    title: 'Maintenance & Support',
    desc:  'Monthly retainer for updates, performance monitoring, bug fixes, and new features. You focus on your business, I keep the site running.',
    tools: ['Performance audits', 'Bug fixes', 'Feature additions', 'Priority support'],
  },
]

export default function Skills() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="skills" className="section-pad bg-canvas">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label mb-3">/ Services, Skills, Abilities</p>
            <h2 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] text-heading leading-none tracking-tight">
              What I do<br />best?
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-subtle">
            I build websites, apps, and digital products that help businesses grow.
          </p>
        </div>

        <div className="divide-y divide-border">
          {skills.map((s, i) => (
            <div key={s.title}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-8 flex items-start md:items-center justify-between gap-6 group"
              >
                <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
                  <span className="label w-8 shrink-0">{s.index}</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <span className="label border border-border px-2 py-1 rounded-full">{s.tag}</span>
                    <span className={`font-sans font-bold text-2xl md:text-3xl tracking-tight transition-colors duration-200 ${
                      open === i ? 'text-heading' : 'text-subtle group-hover:text-heading'
                    }`}>
                      {s.title}
                    </span>
                  </div>
                </div>
                <span className={`text-heading text-2xl font-light shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open === i ? 'max-h-80 pb-10' : 'max-h-0'
              }`}>
                <div className="ml-0 md:ml-[112px] grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className="text-sm leading-relaxed text-subtle">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span key={t} className="label border border-border px-3 py-1.5 rounded-full">{t}</span>
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
