const services = [
  {
    index: '01',
    title: 'Landing Page',
    price: '€800 – €1,500',
    timeline: '3–5 days',
    desc:
      'A single, high-converting page to promote your product, service, or event. Mobile-first, fast-loading, SEO-optimised.',
    features: ['Responsive design', 'Contact / lead form', 'SEO meta tags', 'Vercel deployment'],
  },
  {
    index: '02',
    title: 'Business Website',
    price: '€1,200 – €2,500',
    timeline: '1–2 weeks',
    desc:
      'A complete multi-page website for your business. Built entirely custom — no Wix, no WordPress templates.',
    features: ['Up to 6 pages', 'Mobile responsive', 'Contact form', 'Google Analytics'],
    highlight: true,
  },
  {
    index: '03',
    title: 'Portfolio / Creative Site',
    price: '€1,500 – €3,000',
    timeline: '1–2 weeks',
    desc:
      'For photographers, designers, videographers, and creatives. Cinematic layouts, smooth animations, built to impress.',
    features: ['Custom animations', 'Gallery / showreel', 'Mobile optimised', 'Fast CDN delivery'],
  },
  {
    index: '04',
    title: 'E-Commerce / Shop',
    price: '€3,000 – €6,000',
    timeline: '3–5 weeks',
    desc:
      'A full online store with product listings, cart, checkout, and payment integration.',
    features: ['Product catalogue', 'Stripe payments', 'Admin dashboard', 'Order management'],
  },
  {
    index: '05',
    title: 'Full-Stack Web App',
    price: '€3,000 – €6,000',
    timeline: '4–8 weeks',
    desc:
      'Custom web applications with user authentication, database, and backend logic. Built with React and FastAPI.',
    features: ['User authentication', 'Database + API', 'Cloud deployment', 'Custom logic'],
  },
  {
    index: '06',
    title: 'Maintenance & Support',
    price: '€150 – €400 / mo',
    timeline: 'Ongoing',
    desc:
      'Monthly retainer for updates, fixes, performance monitoring, and new feature additions.',
    features: ['Monthly updates', 'Bug fixes', 'Performance checks', 'Priority support'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad bg-canvas">
      <div className="container-width">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="label mb-4">What I Offer</p>
            <h2 className="heading-xl text-[clamp(2.5rem,5vw,4rem)]">
              Services &amp; Pricing
            </h2>
          </div>
          <p className="text-body max-w-xs leading-relaxed">
            Fixed-price packages. No surprise invoices. You know exactly what you&apos;re getting before we start.
          </p>
        </div>

        {/* Services list */}
        <div className="divide-y divide-border">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 py-10 transition-colors duration-200 ${
                s.highlight ? 'md:-mx-6 md:px-6 bg-surface' : 'hover:bg-surface'
              }`}
            >
              {/* Index */}
              <div className="label pt-1">{s.index}</div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h3 className="font-display font-bold text-2xl text-heading">{s.title}</h3>
                  {s.highlight && (
                    <span className="label border border-accent text-accent px-2 py-0.5">Most Popular</span>
                  )}
                </div>
                <p className="text-body leading-relaxed mb-5 max-w-lg">{s.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="font-mono text-xs text-muted border border-border px-3 py-1.5"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex flex-col items-start md:items-end justify-between gap-4 min-w-[160px]">
                <div>
                  <div className="font-display font-bold text-xl text-heading">{s.price}</div>
                  <div className="label mt-1">{s.timeline}</div>
                </div>
                <a
                  href="#contact"
                  className="label text-accent hover:text-heading transition-colors"
                >
                  Get a Quote &rarr;
                </a>
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
