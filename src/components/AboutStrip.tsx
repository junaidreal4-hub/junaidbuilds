'use client'
import { useEffect, useRef } from 'react'

const SENTENCE = [
  'Based', 'in', 'Berlin.', 'I\u2019m', 'Junaid', '—', 'a',
  'full-stack', 'web', 'developer', 'and', 'designer.', 'I', 'work',
  'directly', 'with', 'founders,', 'startups,', 'and', 'businesses',
  'to', 'build', 'fast,', 'custom', 'websites', 'and', 'web',
  'applications', 'that', 'actually', 'move', 'the', 'needle.',
  'No', 'templates.', 'No', 'agency', 'overhead.', 'Just', 'clean',
  'code,', 'sharp', 'design,', 'and', 'results', 'you', 'can', 'measure.',
]

export default function AboutStrip() {
  const sectionRef = useRef<HTMLElement>(null)
  const wordRefs   = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    let ctx: import('gsap').Context | null = null

    async function init() {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const words = wordRefs.current.filter(Boolean) as HTMLSpanElement[]

        // Start all words invisible, offset to the right
        gsap.set(words, { opacity: 0, x: 40 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger:  sectionRef.current,
            start:    'top top',
            end:      `+=${window.innerHeight * 3.5}`,
            pin:      true,
            scrub:    1,
            anticipatePin: 1,
          },
        })

        // Each word flies in from the right and lands in place
        words.forEach((word) => {
          tl.to(word,
            { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
            '>-0.3' // slight overlap so it feels fluid not staccato
          )
        })

      }, sectionRef)
    }

    init()
    return () => { ctx?.revert() }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen flex flex-col justify-center bg-surface">
      <div className="container-width py-24">

        <p className="label mb-12 opacity-50">/ About mdjk.dev</p>

        {/* Word-by-word assembly paragraph */}
        <div className="flex flex-wrap gap-x-4 gap-y-3 mb-24">
          {SENTENCE.map((word, i) => (
            <span
              key={i}
              ref={el => { wordRefs.current[i] = el }}
              className="font-sans font-semibold text-[clamp(1.6rem,3.5vw,3rem)] text-heading leading-tight tracking-tight"
            >
              {word}
            </span>
          ))}
        </div>

        {/* 3-step process — no borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { num: '01', title: 'Understand',  desc: 'I start with your goal, your audience, and your constraints. No assumptions — just a clear brief that drives every decision.' },
            { num: '02', title: 'Build',       desc: 'Clean, maintainable code. Every component is purpose-built. I move fast without cutting corners.' },
            { num: '03', title: 'Ship',        desc: 'Tested, deployed, and live. I hand over clean documentation and stay on call for 30 days post-launch.' },
          ].map((s) => (
            <div key={s.num} className="flex flex-col gap-4">
              <span className="label text-orange">{s.num}</span>
              <h3 className="font-sans font-bold text-heading text-2xl tracking-tight">{s.title}</h3>
              <p className="text-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
