'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Team() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="section-pad bg-surface">
      <div className="container-width">
        <p className="label mb-4">/ The Developer</p>
        <h2 className="font-sans font-black text-[clamp(2rem,5vw,4rem)] text-heading tracking-tight leading-none mb-20">
          The person<br />behind the code
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Photo */}
          <div>
            <div className="relative h-96 overflow-hidden rounded-xl bg-canvas mb-8">
              {!imgError ? (
                <Image src="/photo.png" alt="Junaid Khan" fill
                  className="object-cover object-top"
                  onError={() => setImgError(true)} />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange/10 to-surface flex items-center justify-center">
                  <span className="font-mono text-5xl font-bold text-orange/20">MJK</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
            </div>
            <h3 className="font-sans font-black text-2xl text-heading tracking-tight mb-1">Junaid Khan</h3>
            <p className="label text-orange mb-4">Full-Stack Developer & Designer</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
              {['Berlin, Germany', 'Remote-Ready', 'Available Now'].map((t) => (
                <span key={t} className="label">{t}</span>
              ))}
            </div>
            <p className="text-sm text-body leading-relaxed">
              Full-stack developer building bespoke websites and web applications.
              React, Next.js, FastAPI, PostgreSQL. Master&apos;s student in Data Analytics
              at a Berlin university.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-0">
            {[
              { num: '15+',      label: 'Projects Delivered'  },
              { num: '4+',       label: 'Years Experience'     },
              { num: '100%',     label: 'Client Satisfaction'  },
              { num: '\u20ac150/mo',  label: 'Maintenance Retainer' },
              { num: '1\u20133 wks',  label: 'Avg. Delivery Time'   },
              { num: '2',        label: 'Languages (EN / DE)'  },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between py-6 border-b border-white/[0.05]">
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
