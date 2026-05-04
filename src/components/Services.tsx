'use client'
import { useState } from 'react'

const services = [
  {
    index: '01',
    tag: 'Fast Turnaround',
    title: 'Landing Page',
    price: '€800 – €1,500',
    timeline: '3–5 days',
    desc: 'A single, high-converting page to promote your product, service, or event. Mobile-first, fast-loading, SEO-optimised.',
    features: ['Responsive design', 'Contact / lead form', 'SEO meta tags', 'Vercel deployment'],
  },
  {
    index: '02',
    tag: 'Most Popular',
    title: 'Business Website',
    price: '€1,200 – €2,500',
    timeline: '1–2 weeks',
    desc: 'A complete multi-page website for your business. Built entirely custom — no Wix, no WordPress templates.',
    features: ['Up to 6 pages', 'Mobile responsive', 'Contact form', 'Google Analytics'],
  },
  {
    index: '03',
    tag: 'Premium Design',
    title: 'Portfolio / Creative Site',
    price: '€1,500 – €3,000',
    timeline: '1–2 weeks',
    desc: 'For photographers, designers, videographers, and creatives. Cinematic layouts, smooth animations, built to impress.',
    features: ['Custom animations', 'Gallery / showreel', 'Mobile optimised', 'Fast CDN delivery'],
  },
  {
    index: '04',
    tag: 'Full Commerce',
    title: 'E-Commerce / Shop',
    price: '€3,000 – €6,000',
    timeline: '3–5 weeks',
    desc: 'A full online store with product listings, cart, checkout, and payment integration.',
    features: ['Product catalogue', 'Stripe payments', 'Admin dashboard', 'Order management'],
  },
  {
    index: '05',
    tag: 'Custom Build',
    title: 'Full-Stack Web App',
    price: '€3,000 – €6,000',
    timeline: '4–8 weeks',
    desc: 'Custom web applications with user authentication, database, and backend logic. Built with React and FastAPI.',
    features: ['User authentication', 'Database + API', 'Cloud deployment', 'Custom logic'],
  },
  {
    index: '06',
    tag: 'Ongoing',
    title: 'Maintenance & Support',
    price: '€150 – €400 / mo',
    timeline: 'Monthly retainer',
    desc: 'Monthly retainer for updates, fixes, performance monitoring, and new feature additions.',
    features: ['Monthly updates', 'Bug fixes', 'Performance checks', 'Priority support'],
  },
]

export default function Services() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="services" className="section-pad bg-canvas">
      <div className="container-width">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="label mb-4">What I Offer</p>
            <h2 className="font-serif-display text-[clamp(2.5rem,5vw,4.5rem)] text-heading leading-none">
              Services &amp; Pricing
            </h2>
          </div>
          <p className="text-body max-w-xs leading-relaxed text-sm">
            Fixed-price packages. No surprise invoices.
            You know exactly what you&apos;re getting before we start.
          </p>
        </div>

        {/* Accordion rows — like nikolaradeski.com skills section */}
        <div className="divide-y divide-border">
          {services.map((s, i) => (
            <div key={s.title}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left group py-8 flex items-start md:items-center justify-between gap-6 hover:text-heading transition-colors duration-200"
              >
                <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
                  <span className="label w-8 shrink-0 pt-0.5">{s.index}</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1">
                    <span className="label text-muted">{s.tag}</span>
                    <span className="font-serif-display text-2xl md:text-3xl text-heading">{s.title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-8 shrink-0">
                  <span className="label hidden md:block">{s.price}</span>
                  <span className={`label text-heading transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </div>
              </button>

              {/* Expanded content */}
              <div className={`overflow-hidden transition-all duration-400 ${
                open === i ? 'max-h-96 pb-8' : 'max-h-0'
              }`}>
                <div className="ml-0 md:ml-[88px] grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-body leading-relaxed text-sm mb-6">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span key={f} className="label border border-border px-3 py-1.5">{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <div className="font-serif-display text-2xl text-heading mb-1">{s.price}</div>
                      <div className="label">{s.timeline}</div>
                    </div>
                    <a
                      href="#contact"
                      className="inline-block label border border-heading text-heading px-6 py-3 hover:bg-heading hover:text-canvas transition-all duration-200 w-fit"
                    >
                      Get a Quote &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="label mt-12">
          All prices exclude domain, hosting, and third-party service costs. VAT not included.
        </p>
      </div>
    </section>
  )
}
