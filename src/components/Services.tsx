const services = [
  {
    icon: '⚡',
    title: 'Landing Page',
    price: '€800 – €1,500',
    timeline: '3–5 days',
    desc: 'A single, high-converting page to promote your product, service, or event. Mobile-first, fast-loading, SEO-optimised.',
    features: ['Responsive design', 'Contact/lead form', 'SEO meta tags', 'Vercel deployment'],
  },
  {
    icon: '🏢',
    title: 'Business Website',
    price: '€1,200 – €2,500',
    timeline: '1–2 weeks',
    desc: 'A complete multi-page website for your business. Built custom — no Wix, no WordPress templates.',
    features: ['Up to 6 pages', 'Mobile responsive', 'Contact form', 'Google Analytics'],
    highlight: true,
  },
  {
    icon: '🎨',
    title: 'Portfolio / Creative Site',
    price: '€1,500 – €3,000',
    timeline: '1–2 weeks',
    desc: 'For photographers, designers, videographers, and creatives. Cinematic layouts, smooth animations, built to impress.',
    features: ['Custom animations', 'Gallery/showreel', 'Mobile optimised', 'Fast CDN delivery'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce / Shop',
    price: '€3,000 – €6,000',
    timeline: '3–5 weeks',
    desc: 'A full online store with product listings, cart, checkout, and payment integration.',
    features: ['Product catalogue', 'Stripe payments', 'Admin dashboard', 'Order management'],
  },
  {
    icon: '⚙️',
    title: 'Full-Stack Web App',
    price: '€3,000 – €6,000',
    timeline: '4–8 weeks',
    desc: 'Custom web applications with user auth, database, and backend logic. Built with React and FastAPI.',
    features: ['User authentication', 'Database + API', 'Cloud deployment', 'Custom logic'],
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    price: '€150 – €400 / mo',
    timeline: 'Ongoing',
    desc: 'Monthly retainer for updates, fixes, performance monitoring, and new feature additions.',
    features: ['Monthly updates', 'Bug fixes', 'Performance checks', 'Priority support'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-width">

        <div className="mb-14">
          <p className="font-mono text-sm text-sky-500 font-semibold tracking-widest uppercase mb-3">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services &amp; Pricing</h2>
          <p className="text-lg text-gray-500 max-w-xl">Fixed-price packages. No surprise invoices. You know exactly what you&apos;re getting before we start.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title}
              className={`relative rounded-2xl p-7 border transition-shadow hover:shadow-lg ${
                s.highlight
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white border-gray-200'
              }`}>

              {s.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
              )}

              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className={`text-xl font-bold mb-1 ${s.highlight ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
              <div className={`text-2xl font-bold mb-1 ${s.highlight ? 'text-sky-400' : 'text-sky-500'}`}>{s.price}</div>
              <div className={`text-xs font-mono mb-4 ${s.highlight ? 'text-gray-400' : 'text-gray-400'}`}>⏱ {s.timeline}</div>
              <p className={`text-sm leading-relaxed mb-5 ${s.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{s.desc}</p>

              <ul className="space-y-2 mb-6">
                {s.features.map(f => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${
                    s.highlight ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <svg className="w-4 h-4 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-colors ${
                  s.highlight
                    ? 'bg-sky-500 text-white hover:bg-sky-400'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                Get a Quote →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">All prices exclude domain, hosting, and third-party service costs. VAT not included.</p>
      </div>
    </section>
  )
}
