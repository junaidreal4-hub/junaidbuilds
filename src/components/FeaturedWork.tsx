export default function FeaturedWork() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-width">
        <p className="label mb-10">/ Featured Project</p>

        {/* Full-width dark card — exact sirnik.co style */}
        <div className="bg-surface border border-white/[0.08] rounded-2xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Full-Stack Development', 'Next.js', 'FastAPI', 'OpenAI API'].map((t) => (
                <span key={t} className="label border border-white/10 px-3 py-1.5 rounded-full">{t}</span>
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

          {/* Right — info grid */}
          <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
            {[
              { label: 'Industry',   value: 'Career Tech / SaaS'      },
              { label: 'Year',       value: '2025 – 2026'              },
              { label: 'Stack',      value: 'Next.js, FastAPI, PG'     },
              { label: 'Status',     value: 'In Progress'              },
            ].map((i) => (
              <div key={i.label} className="bg-card p-6">
                <p className="label mb-2">{i.label}</p>
                <p className="font-sans font-semibold text-heading text-sm">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
