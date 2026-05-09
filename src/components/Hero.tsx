'use client'
import { useEffect, useState } from 'react'
import { Waves } from './Waves'

const WORDS = [
  { text: 'I',          cls: 'text-5xl md:text-7xl  font-light  text-white/30'  },
  { text: 'build',      cls: 'text-6xl md:text-8xl  font-black  text-heading'   },
  { text: 'websites',   cls: 'text-5xl md:text-7xl  font-bold   text-heading'   },
  { text: 'through',    cls: 'text-4xl md:text-5xl  font-light  text-white/30'  },
  { text: 'logic,',     cls: 'text-5xl md:text-6xl  font-bold   text-white/60'  },
  { text: 'clean',      cls: 'text-6xl md:text-8xl  font-black  text-heading'   },
  { text: 'code,',      cls: 'text-5xl md:text-7xl  font-bold   text-orange'    },
  { text: 'and',        cls: 'text-3xl md:text-4xl  font-light  text-white/30'  },
  { text: 'human',      cls: 'text-5xl md:text-6xl  font-bold   text-white/60'  },
  { text: 'precision.', cls: 'text-6xl md:text-8xl  font-black  text-heading'   },
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

      {/* Wave background — sits behind everything */}
      <Waves
        strokeColor="rgba(255,255,255,0.07)"
        backgroundColor="transparent"
        pointerSize={0.4}
      />

      {/* Subtle orange glow — above waves, below text */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Hero text */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="container-width w-full">
          <div className="flex flex-wrap items-end gap-x-5 gap-y-2 leading-none py-16">
            {WORDS.map((w, i) => (
              <span
                key={i}
                className={`${w.cls} tracking-tight leading-none opacity-0 animate-fade-up`}
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'forwards' }}
              >
                {w.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 container-width pb-10 border-t border-white/[0.06] pt-8">
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
