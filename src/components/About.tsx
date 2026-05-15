'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const bioRef     = useRef<HTMLDivElement>(null)
  const svgWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(bioRef.current, {
        y: 50, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.from(svgWrapRef.current, {
        y: 30, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: svgWrapRef.current, start: 'top 85%' },
      })
      gsap.to(svgWrapRef.current, {
        scale: 40,
        ease: 'none',
        transformOrigin: '38% 50%',
        scrollTrigger: {
          trigger: '#svg-screen',
          start: 'top top',
          end: '+=150%',
          scrub: 1.2,
          pin: '#svg-screen',
          pinSpacing: true,
          anticipatePin: 1,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  const mono = {
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
  }

  return (
    <div style={{ background: 'var(--c-bg)', transition: 'background 0.35s ease' }}>

      <section
        id="about"
        ref={sectionRef}
        className="relative flex flex-col justify-center"
        style={{
          minHeight: '100dvh',
          padding: 'clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,5rem)',
          background: 'var(--c-bg)',
          transition: 'background 0.35s ease',
        }}
      >
        <div className="flex items-center gap-4 mb-16">
          <span style={{ ...mono, fontSize: '0.6rem', color: 'var(--c-ink-dim)' }}>02 — About</span>
          <div className="flex-1" style={{ borderTop: '1px solid var(--c-divider)' }} />
        </div>

        <div ref={bioRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2
              className="uppercase"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 5vw, 6rem)',
                letterSpacing: '0.04em',
                lineHeight: 0.88,
                color: 'var(--c-ink)',
              }}
            >
              Builder.<br />
              <span style={{ color: 'var(--c-ink-ghost)' }}>Designer.</span><br />
              Developer.
            </h2>
          </div>

          <div className="flex flex-col gap-8 pt-2">
            <div className="flex flex-col gap-5">
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9rem,1.1vw,1.05rem)',
                color: 'var(--c-ink-mid)',
                lineHeight: 1.8,
              }}>
                I&apos;m a full-stack web developer based in Berlin, currently doing my Master&apos;s in Data Analytics. I build fast, interactive websites and applications — from a blank canvas to a live product.
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.9rem,1.1vw,1.05rem)',
                color: 'var(--c-ink-faint)',
                lineHeight: 1.8,
              }}>
                I work with startups and businesses worldwide, taking full ownership of the product — design, development and deployment. I care deeply about clean code, sharp UI and performance.
              </p>
            </div>

            <div className="flex gap-10 pt-6" style={{ borderTop: '1px solid var(--c-divider)' }}>
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
                    color: 'var(--c-ink)',
                  }}>{num}</span>
                  <span style={{ ...mono, fontSize: '0.5rem', color: 'var(--c-ink-dim)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
        id="svg-screen"
        style={{
          width: '100%',
          height: '100dvh',
          background: 'var(--c-bg)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          transition: 'background 0.35s ease',
        }}
      >
        <div
          ref={svgWrapRef}
          style={{ width: '100%', willChange: 'transform', transformOrigin: '39% 50%', lineHeight: 0 }}
        >
          <Image
            src="/title.svg"
            alt="Clarity + Performance"
            width={1920}
            height={400}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </div>
      </div>
    </div>
  )
}
