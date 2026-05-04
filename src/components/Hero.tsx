export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-sky-50 pt-16">
      <div className="container-width w-full">
        <div className="max-w-3xl">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-700">Available for new projects — Berlin &amp; Remote</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
            Websites that<br />
            <span className="text-sky-500">win clients</span><br />
            for your business.
          </h1>

          <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
            I&apos;m Junaid — a Berlin-based full-stack web developer. I build fast, clean, custom websites for small businesses, startups, and creatives. No agency markup. No templates.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-700 transition-colors text-base">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#work"
              className="inline-flex items-center gap-2 text-gray-700 font-semibold px-7 py-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors text-base">
              See My Work
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-gray-100">
            {[
              { num: '5+',    label: 'Websites Built'   },
              { num: '3',     label: 'Live Client Sites' },
              { num: '100%',  label: 'On-Time Delivery'  },
              { num: '€1.2k', label: 'Starting Price'    },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-gray-900">{stat.num}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
