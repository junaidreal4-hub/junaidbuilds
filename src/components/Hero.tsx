'use client'
import { useEffect, useState } from 'react'

const WORDS = [
  { text: 'I',          size: 'text-5xl md:text-7xl', weight: 'font-light',  color: 'text-muted'   },
  { text: 'build',      size: 'text-6xl md:text-8xl', weight: 'font-black',  color: 'text-heading' },
  { text: 'websites',   size: 'text-5xl md:text-7xl', weight: 'font-bold',   color: 'text-heading' },
  { text: 'through',    size: 'text-4xl md:text-5xl', weight: 'font-light',  color: 'text-muted'   },
  { text: 'logic,',     size: 'text-5xl md:text-6xl', weight: 'font-bold',   color: 'text-subtle'  },
  { text: 'clean',      size: 'text-6xl md:text-8xl', weight: 'font-black',  color: 'text-heading' },
  { text: 'code,',      size: 'text-5xl md:text-7xl', weight: 'font-bold',   color: 'text-orange'  },
  { text: 'and',        size: 'text-3xl md:text-4xl', weight: 'font-light',  color: 'text-muted'   },
  { text: 'human',      size: 'text-5xl md:text-6xl', weight: 'font-bold',   color: 'text-subtle'  },
  { text: 'precision.', size: 'text-6xl md:text-8xl', weight: 'font-black',  color: 'text-heading' },
]

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString('en-DE', {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        timeZone: 'Europe/Berlin', hour12: false,
      }))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden bg-canvas">

      {/* Subtle radial glow top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Scattered word-by-word hero — exact sirnik.co style */}
      <div className="relative flex-1 flex items-center">
        <div className="container-width w-full">
          <div className="flex flex-wrap items-end gap-x-5 gap-y-2 leading-none py-16">
            {WORDS.map((w, i) => (
              <span
                key={i}
                className={`${w.size} ${w.weight} ${w.color} tracking-tight leading-none animate-fade-up`}
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both', opacity: 0 }}
              >
                {w.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — location left, CTA right */}
      <div className="relative container-width pb-10 divider pt-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
              </span>
              <span className="label">Available for new projects</span>
            </div>
            <p className="label">Berlin, Germany &nbsp;·&nbsp; <span className="tabular-nums">{time}</span> &nbsp;GMT+2</p>
            <p className="label">Founded in India &nbsp;·&nbsp; Based in Berlin since 2022</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="btn-primary">Explore my work →</a>
            <a href="#contact" className="btn-ghost">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
