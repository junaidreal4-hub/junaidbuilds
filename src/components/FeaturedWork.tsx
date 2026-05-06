export default function FeaturedWork() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-width">
        <p className="label mb-10">/ Featured Project</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Full-Stack Development', 'Next.js', 'FastAPI', 'OpenAI API'].map((t) => (
                <span key={t} className="label text-orange">{t} &nbsp;·</span>
              ))}
            </div>
            <h2 className="font-sans font-black text-[clamp(2.5rem,6vw,5rem)] text-heading leading-none tracking-tight mb-6">
              Strebo
            </h2>
            <p className="text-body text-sm leading-relaxed mb-10">
              AI-powered job application assistant. Full-stack SaaS built with Next.js frontend,
              FastAPI backend, PostgreSQL database, and OpenAI API for intelligent CV and cover
              letter generation. Built from scratch — solo, end to end.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/junaidreal4-hub/Strebo" target="_blank" rel="noopener noreferrer" className="btn-primary">View on GitHub →</a>
              <a href="#work" className="btn-ghost">See all work</a>
            </div>
          </div>

          {/* Right — clean info list, no grid boxes */}
          <div className="flex flex-col gap-6">
            {[
              { label: 'Industry',   value: 'Career Tech / SaaS'  },
              { label: 'Year',       value: '2025 – 2026'          },
              { label: 'Stack',      value: 'Next.js · FastAPI · PostgreSQL · OpenAI' },
              { label: 'Status',     value: 'In Progress'          },
            ].map((item) => (
              <div key={item.label} className="flex items-start justify-between py-4 border-b border-white/[0.05]">
                <span className="label">{item.label}</span>
                <span className="font-sans font-semibold text-heading text-sm text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
