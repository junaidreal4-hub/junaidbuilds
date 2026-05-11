'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(photoRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
      gsap.from(bioRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        delay: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const mono = {
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white"
      style={{ padding: 'clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,5rem)' }}
    >
      {/* section label */}
      <div className="flex items-center gap-4 mb-16">
        <span style={{ ...mono, fontSize: '0.6rem', color: 'rgba(8,8,8,0.3)' }}>02 — About</span>
        <div className="flex-1" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
      </div>

      {/* photo + bio grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-12 md:gap-20 items-start">

        {/* Photo */}
        <div ref={photoRef}>
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
            <Image
              src="/photo.png"
              alt="Md Junaid Khan"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 35vw"
              priority
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 50%)'
            }} />
          </div>
          <div className="mt-4 flex flex-col gap-0.5">
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.04em', color: 'rgba(8,8,8,0.9)' }}>
              Md Junaid Khan
            </span>
            <span style={{ ...mono, fontSize: '0.52rem', color: 'rgba(8,8,8,0.35)' }}>
              Freelance Developer · Berlin, DE
            </span>
          </div>
        </div>

        {/* Bio */}
        <div ref={bioRef} className="flex flex-col justify-center gap-8">
          <div>
            <h2
              className="uppercase mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 4.5rem)',
                letterSpacing: '0.04em',
                lineHeight: 0.9,
                color: 'rgba(8,8,8,0.9)',
              }}
            >
              Builder.<br />
              <span style={{ color: 'rgba(8,8,8,0.2)' }}>Designer.</span><br />
              Developer.
            </h2>

            <div className="flex flex-col gap-5" style={{ maxWidth: '52ch' }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9rem,1.1vw,1.05rem)',
                color: 'rgba(8,8,8,0.65)',
                lineHeight: 1.75,
                fontWeight: 400,
              }}>
                I’m a full-stack web developer based in Berlin, currently doing my Master’s in Data Analytics. I build fast, interactive websites and applications — from a blank canvas to a live product.
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9rem,1.1vw,1.05rem)',
                color: 'rgba(8,8,8,0.38)',
                lineHeight: 1.75,
                fontWeight: 400,
              }}>
                I work with startups and businesses worldwide, taking full ownership of the product — design, development and deployment. I care deeply about clean code, sharp UI and performance.
              </p>
            </div>
          </div>

          {/* stats */}
          <div className="flex gap-10 pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {[
              { num: '10+', label: 'Projects Shipped' },
              { num: '3+',  label: 'Years Coding'     },
              { num: '5+',  label: 'Happy Clients'    },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem,2.5vw,2.8rem)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: 'rgba(8,8,8,0.88)',
                }}>{num}</span>
                <span style={{ ...mono, fontSize: '0.5rem', color: 'rgba(8,8,8,0.3)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
