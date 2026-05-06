'use client'
import { useEffect, useRef, useState } from 'react'

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
  const sectionRef = useRef<HTMLElement>(null)
  const wordsRef   = useRef<(HTMLSpanElement | null)[]>([])
  const [time, setTime] = useState('')

  // Live clock
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

  // GSAP ScrollTrigger — pin section, reveal words one by one as user scrolls
  useEffect(() => {
    let ctx: import('gsap').Context | null = null

    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const words = wordsRef.current.filter(Boolean) as HTMLSpanElement[]

        // Start all words dim
        gsap.set(words, { opacity: 0.08 })

        // Scrub timeline — pin the section, reveal each word sequentially
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger:  sectionRef.current,
            start:    'top top',
            end:      `+=${window.innerHeight * 3}`,
            pin:      true,
            scrub:    0.8,
            anticipatePin: 1,
          },
        })

        words.forEach((word) => {
          tl.to(word, { opacity: 1, duration: 1, ease: 'none' }, '>')
        })

      }, sectionRef)
    }

    init()
    return () => { ctx?.revert() }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col pt-16 overflow-hidden bg-canvas"
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Words */}
      <div className="relative flex-1 flex items-center">
        <div className="container-width w-full">
          <div className="flex flex-wrap items-end gap-x-5 gap-y-2 leading-none py-16">
            {WORDS.map((w, i) => (
              <span
                key={i}
                ref={el => { wordsRef.current[i] = el }}
                className={`${w.cls} tracking-tight leading-none`}
              >
                {w.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative container-width pb-10 border-t border-white/[0.08] pt-8">
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
