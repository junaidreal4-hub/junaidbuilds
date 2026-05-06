import Image from 'next/image'

export default function Team() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-width">
        <p className="label mb-4">/ The Developer</p>
        <h2 className="font-sans font-black text-[clamp(2rem,5vw,4rem)] text-heading tracking-tight leading-none mb-16">
          The person<br />behind the code
        </h2>

        {/* Team card — sirnik.co style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-white/[0.08] rounded-2xl overflow-hidden">
            {/* Photo area */}
            <div className="relative h-72 bg-canvas flex items-center justify-center overflow-hidden">
              <Image
                src="/photo.jpg"
                alt="Junaid Khan"
                fill
                className="object-cover object-top"
                onError={() => {}}
              />
              {/* Fallback overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            {/* Info */}
            <div className="p-8">
              <h3 className="font-sans font-black text-2xl text-heading tracking-tight mb-1">Junaid Khan</h3>
              <p className="label text-orange mb-4">Full-Stack Developer & Designer</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Berlin, Germany', 'Remote-Ready', 'Available Now'].map((t) => (
                  <span key={t} className="label border border-white/10 px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
              <p className="text-sm text-body leading-relaxed">
                Full-stack developer building bespoke websites and web applications.
                React, Next.js, FastAPI, PostgreSQL. Master&apos;s student in Data Analytics
                at a Berlin university.
              </p>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {[
              { num: '15+',     label: 'Projects Delivered'  },
              { num: '4+',      label: 'Years Experience'     },
              { num: '100%',    label: 'Client Satisfaction'  },
              { num: '€150/mo', label: 'Maintenance Retainer' },
              { num: '1–3 wks', label: 'Avg. Delivery Time'   },
              { num: '2',       label: 'Languages (EN / DE)'  },
            ].map((s) => (
              <div key={s.label} className="bg-card p-8 flex flex-col justify-between gap-4">
                <span className="font-sans font-black text-4xl text-heading tracking-tight">{s.num}</span>
                <span className="label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
