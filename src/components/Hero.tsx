'use client'
import { useEffect, useRef, useState } from 'react'
import { Waves } from './Waves'

const STATS = [
  { value: 15,  suffix: '+',  label: 'Projects Delivered'  },
  { value: 4,   suffix: '+',  label: 'Years Experience'    },
  { value: 100, suffix: '%', label: 'Client Satisfaction'  },
  { value: 3,   suffix: 'wk', label: 'Avg. Delivery'       },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref     = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1400
          const start    = performance.now()
          const step = (now: number) => {
            const p    = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            setCount(Math.floor(ease * value))
            if (p < 1) requestAnimationFrame(step)
            else setCount(value)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>
}

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
    <section className="relative h-screen max-h-screen flex flex-col pt-16 overflow-hidden bg-[#080808]">

      {/* Wave background */}
      <Waves strokeColor="rgba(255,255,255,0.06)" backgroundColor="transparent" pointerSize={0.3} />

      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[700px] h-[700px] bg-orange/[0.04] rounded-full blur-[140px] pointer-events-none z-10" />

      {/* ── MAIN HEADING ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center min-h-0">
        <div className="container-width w-full">

          <div className="overflow-hidden mb-1">
            <p className="font-sans font-black uppercase text-white leading-none tracking-tighter opacity-0 animate-fade-up"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 9.5rem)', animationDelay: '0ms', animationFillMode: 'forwards' }}>
              I Build
            </p>
          </div>

          <div className="overflow-hidden mb-1">
            <p className="font-sans font-black uppercase leading-none tracking-tighter opacity-0 animate-fade-up flex flex-wrap items-end gap-x-4"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 9.5rem)', animationDelay: '80ms', animationFillMode: 'forwards' }}>
              <span className="text-white">Modern</span>
              <span className="text-orange italic">Websites</span>
            </p>
          </div>

          <div className="overflow-hidden mb-4">
            <p className="font-sans font-black uppercase text-white leading-none tracking-tighter opacity-0 animate-fade-up"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 9.5rem)', animationDelay: '160ms', animationFillMode: 'forwards' }}>
              That Work.
            </p>
          </div>

          <div className="overflow-hidden">
            <p className="font-mono text-xs md:text-sm text-white/40 uppercase tracking-widest opacity-0 animate-fade-up"
              style={{ animationDelay: '280ms', animationFillMode: 'forwards' }}>
              Full-Stack Developer &amp; Designer &nbsp;·&nbsp; Berlin, Germany
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-8 border-t border-white/[0.08] opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            {STATS.map((s, i) => (
              <div key={s.label}
                className={`py-5 flex flex-col gap-1 ${
                  i < STATS.length - 1 ? 'md:border-r border-white/[0.08]' : ''
                } md:px-8 first:pl-0`}>
                <span className="font-sans font-black text-white text-3xl md:text-4xl leading-none">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-20 container-width py-5 border-t border-white/[0.06] shrink-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
              </span>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Available</span>
            </div>
            <span className="font-mono text-xs text-white/30 tabular-nums">{time} CET</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">See my work →</a>
            <a href="#contact" className="btn-ghost">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
