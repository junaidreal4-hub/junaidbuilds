'use client'
import { useEffect, useRef, useState } from 'react'
import { Waves } from './Waves'

const STATS = [
  { value: 15,  suffix: '+',  label: 'Projects Delivered'  },
  { value: 4,   suffix: '+',  label: 'Years Experience'    },
  { value: 100, suffix: '%',  label: 'Client Satisfaction' },
  { value: 3,   suffix: 'wk', label: 'Avg. Delivery'       },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref     = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const step = (now: number) => {
          const p = Math.min((now - start) / 1400, 1)
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value))
          if (p < 1) requestAnimationFrame(step); else setCount(value)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [value])
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>
}

export default function Hero() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-DE', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      timeZone: 'Europe/Berlin', hour12: false,
    }))
    update(); const id = setInterval(update, 1000); return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative flex flex-col pt-16 overflow-hidden bg-[#080808]"
      style={{ minHeight: '100dvh' }}
    >
      <Waves strokeColor="rgba(255,255,255,0.05)" backgroundColor="transparent" pointerSize={0.3} />
      <div className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] bg-orange/[0.04] rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Main content — flex-1 centres vertically */}
      <div className="relative z-20 flex-1 flex items-center">
        {/* Wide padding — px-6 on mobile, px-10 on desktop (less than container-width so text spans wider) */}
        <div className="w-full px-6 md:px-10">

          {/* Hero heading — spans edge to edge */}
          <div className="overflow-hidden">
            <p
              className="font-sans font-black uppercase text-white tracking-tighter opacity-0 animate-fade-up"
              style={{
                fontSize: 'clamp(3.5rem, min(13vw, 15vh), 13rem)',
                lineHeight: 0.88,
                animationDelay: '0ms',
                animationFillMode: 'forwards',
              }}
            >I Build</p>
          </div>

          <div className="overflow-hidden">
            <p
              className="font-sans font-black uppercase tracking-tighter opacity-0 animate-fade-up flex flex-wrap items-baseline gap-x-5"
              style={{
                fontSize: 'clamp(3.5rem, min(13vw, 15vh), 13rem)',
                lineHeight: 0.88,
                animationDelay: '80ms',
                animationFillMode: 'forwards',
              }}
            >
              <span className="text-white">Modern</span>
              <span className="text-orange italic">Websites</span>
            </p>
          </div>

          <div className="overflow-hidden mb-6">
            <p
              className="font-sans font-black uppercase text-white tracking-tighter opacity-0 animate-fade-up"
              style={{
                fontSize: 'clamp(3.5rem, min(13vw, 15vh), 13rem)',
                lineHeight: 0.88,
                animationDelay: '160ms',
                animationFillMode: 'forwards',
              }}
            >That Work.</p>
          </div>

          {/* Tagline */}
          <p
            className="font-mono text-[11px] md:text-xs text-white/40 uppercase tracking-widest opacity-0 animate-fade-up mb-10"
            style={{ animationDelay: '260ms', animationFillMode: 'forwards' }}
          >
            Full-Stack Developer &amp; Designer  ·  Berlin, Germany
          </p>

          {/* Stats — full width, left-anchored */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 border-t border-white/[0.08] opacity-0 animate-fade-up w-full"
            style={{ animationDelay: '360ms', animationFillMode: 'forwards' }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 flex flex-col gap-2 pr-6 ${
                  i < STATS.length - 1 ? 'md:border-r border-white/[0.08]' : ''
                } ${ i > 0 ? 'md:pl-8' : '' }`}
              >
                <span
                  className="font-sans font-black text-white leading-none"
                  style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)' }}
                >
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — same wide padding, left-anchored */}
      <div className="relative z-20 w-full px-6 md:px-10 py-5 border-t border-white/[0.06] shrink-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
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
