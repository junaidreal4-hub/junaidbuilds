'use client'
import { useState } from 'react'

const services = [
  {
    index: '01', title: 'Web Development',
    sub: 'React / Next.js / TypeScript',
    desc: 'Fully custom websites built with React and Next.js. No drag-and-drop builders, no templates. Every site is fast, accessible, responsive, and SEO-ready from the ground up.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Vercel'],
  },
  {
    index: '02', title: 'Backend & APIs',
    sub: 'FastAPI / Node.js / PostgreSQL',
    desc: 'REST APIs, auth systems, and complete database architecture. I handle the full backend stack — deployed, monitored, and production-ready.',
    tools: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Render', 'Supabase', 'Google Cloud'],
  },
  {
    index: '03', title: 'Full-Stack SaaS',
    sub: 'End-to-End Product Development',
    desc: 'Custom web applications with auth, dashboards, subscriptions, and complex business logic. From zero to production-ready MVP.',
    tools: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Stripe', 'Cloudinary', 'JWT Auth'],
  },
  {
    index: '04', title: 'E-Commerce',
    sub: 'Shops / Payments / CMS',
    desc: 'Full online stores with product catalogues, cart, checkout, and Stripe payment integration. Built for conversion.',
    tools: ['Next.js', 'Stripe', 'Sanity CMS', 'Vercel', 'Tailwind CSS'],
  },
  {
    index: '05', title: 'Maintenance & Support',
    sub: 'Monthly Retainer',
    desc: 'Ongoing updates, performance monitoring, bug fixes, and new feature additions. Monthly retainer from €150/mo.',
    tools: ['Performance audits', 'Bug fixes', 'New features', 'Priority support'],
  },
]

export default function Services() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="services" className="section-pad bg-canvas">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label mb-4">/ Core Services</p>
            <h2 className="font-sans font-black text-[clamp(2rem,5vw,4rem)] text-heading tracking-tight leading-none">What I offer</h2>
          </div>
          <p className="text-sm text-muted max-w-xs">Handcrafted digital solutions for founders and businesses.</p>
        </div>

        <div className="divide-y divide-white/[0.06]">
          {services.map((s, i) => (
            <div key={s.title}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-8 flex items-start md:items-center justify-between gap-6 group"
              >
                <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
                  <span className="label w-8 shrink-0 text-orange">{s.index}</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                    <span className={`font-sans font-bold text-2xl md:text-3xl tracking-tight transition-colors duration-200 ${
                      open === i ? 'text-heading' : 'text-subtle group-hover:text-heading'
                    }`}>{s.title}</span>
                    <span className="label">{s.sub}</span>
                  </div>
                </div>
                <span className={`text-heading text-2xl font-light shrink-0 transition-transform duration-300 ${
                  open === i ? 'rotate-45' : ''
                }`}>+</span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open === i ? 'max-h-72 pb-10' : 'max-h-0'
              }`}>
                <div className="ml-0 md:ml-[112px] grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className="text-sm leading-relaxed text-body">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span key={t} className="label border border-white/10 px-3 py-1.5 rounded-full">{t}</span>
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
