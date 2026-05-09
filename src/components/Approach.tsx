'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    desc: 'We start with a deep-dive call to map your goals, audience, and constraints. No templates — every brief is treated as a first principle.',
    tag: 'Strategy',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'High-fidelity Figma concepts built around your brand. We iterate fast in the open — you see every frame before a line of code is written.',
    tag: 'UI / UX',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Next.js + Tailwind + clean TypeScript. Animations, CMS integration, auth — everything production-grade from day one.',
    tag: 'Engineering',
  },
  {
    number: '04',
    title: 'Launch',
    desc: 'Deployed to Vercel with monitoring, analytics and a 30-day support window. You own the code. We stay available.',
    tag: 'Delivery',
  },
]

export default function Approach() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef    = useRef<HTMLDivElement>(null)
  const stepsRef     = useRef<(HTMLDivElement | null)[]>([])
  const lineRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = stepsRef.current.filter(Boolean) as HTMLDivElement[]
      const totalSteps = steps.length

      // --- pin the sticky wrapper for (totalSteps * 100)vh of scroll ---
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalSteps * 100}%`,
        pin: stickyRef.current,
        pinSpacing: true,
        anticipatePin: 1,
      })

      steps.forEach((step, i) => {
        const progress = i / (totalSteps - 1)
        const nextProgress = (i + 1) / (totalSteps - 1)

        // Fade IN
        gsap.fromTo(
          step,
          { autoAlpha: 0, y: 60, filter: 'blur(8px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            ease: 'power3.out',
            duration: 0.01, // driven by scroll not time
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${i * 100}% top`,
              end: `top+=${i * 100 + 30}% top`,
              scrub: 0.8,
              toggleActions: 'play none none reverse',
            },
          }
        )

        // Fade OUT (except last step)
        if (i < totalSteps - 1) {
          gsap.to(step, {
            autoAlpha: 0,
            y: -60,
            filter: 'blur(8px)',
            ease: 'power3.in',
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${i * 100 + 70}% top`,
              end: `top+=${(i + 1) * 100}% top`,
              scrub: 0.8,
            },
          })
        }

        // Dot active state
        const dot = document.querySelector(`[data-dot="${i}"]`)
        if (dot) {
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: `top+=${i * 100}% top`,
            end: `top+=${(i + 1) * 100}% top`,
            onEnter: () => dot.classList.add('active'),
            onLeave: () => dot.classList.remove('active'),
            onEnterBack: () => dot.classList.add('active'),
            onLeaveBack: () => dot.classList.remove('active'),
          })
        }
      })

      // Progress line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: `+=${totalSteps * 100}%`,
              scrub: true,
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    /* outer wrapper — tall enough for all steps */
    <div
      ref={containerRef}
      id="approach"
      style={{ height: `${STEPS.length * 100 + 100}vh` }}
      className="relative bg-[#080808]"
    >
      {/* sticky viewport */}
      <div
        ref={stickyRef}
        className="h-screen w-full flex flex-col justify-center px-6 md:px-10 overflow-hidden"
      >
        {/* Section label */}
        <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-10">
          <span className="text-orange mr-2">03</span> My Approach
        </p>

        <div className="flex gap-10 md:gap-20 items-start">

          {/* Left — step cards stacked absolutely */}
          <div className="relative flex-1" style={{ height: 'clamp(260px, 40vh, 400px)' }}>
            {STEPS.map((s, i) => (
              <div
                key={s.number}
                ref={el => { stepsRef.current[i] = el }}
                className="absolute inset-0 flex flex-col justify-start"
                style={{ opacity: 0, visibility: 'hidden' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs text-orange">{s.number}</span>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <h3
                  className="font-sans font-black uppercase text-white tracking-tighter leading-[0.88] mb-6"
                  style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
                >
                  {s.title}
                </h3>
                <p className="font-mono text-sm text-white/50 leading-relaxed max-w-lg">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right — step tracker */}
          <div className="hidden md:flex flex-col items-center gap-0 pt-1 shrink-0">
            {/* progress line container */}
            <div className="relative flex flex-col items-center gap-0">
              <div className="absolute top-3 bottom-3 w-px bg-white/10" />
              <div
                ref={lineRef}
                className="absolute top-3 bottom-3 w-px bg-orange origin-top"
                style={{ transform: 'scaleY(0)' }}
              />
              {STEPS.map((s, i) => (
                <div
                  key={s.number}
                  className="relative flex flex-col items-center"
                  style={{ paddingBottom: i < STEPS.length - 1 ? '4rem' : 0 }}
                >
                  <div
                    data-dot={i}
                    className="w-2 h-2 rounded-full border border-white/20 bg-[#080808] z-10 transition-all duration-300 [&.active]:bg-orange [&.active]:border-orange [&.active]:scale-150"
                  />
                  <span className="font-mono text-[10px] text-white/20 mt-2">{s.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom hint */}
        <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest mt-12">
          Scroll to explore
          <span className="inline-block ml-2 animate-bounce">↓</span>
        </p>
      </div>
    </div>
  )
}
