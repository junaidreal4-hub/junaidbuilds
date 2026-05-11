'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const plusRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(bioRef.current, {
        y: 50, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })

      // plus zoom — scrubbed to scroll
      gsap.to(plusRef.current, {
        scale: 120,
        ease: 'power2.in',
        transformOrigin: 'center center',
        scrollTrigger: {
          trigger: plusRef.current,
          start: 'center 70%',
          end: 'center -30%',
          scrub: 1,
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
      className="bg-white relative overflow-hidden"
      style={{ padding: 'clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,5rem)', paddingBottom: 'clamp(6rem,14vh,12rem)' }}
    >
      {/* section label */}
      <div className="flex items-center gap-4 mb-16">
        <span style={{ ...mono, fontSize: '0.6rem', color: 'rgba(8,8,8,0.3)' }}>02 — About</span>
        <div className="flex-1" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
      </div>

      {/* Bio two-col */}
      <div ref={bioRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start mb-24">
        <div>
          <h2
            className="uppercase"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 6rem)',
              letterSpacing: '0.04em',
              lineHeight: 0.88,
              color: 'rgba(8,8,8,0.9)',
            }}
          >
            Builder.<br />
            <span style={{ color: 'rgba(8,8,8,0.18)' }}>Designer.</span><br />
            Developer.
          </h2>
        </div>

        <div className="flex flex-col gap-8 pt-2">
          <div className="flex flex-col gap-5">
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9rem,1.1vw,1.05rem)',
              color: 'rgba(8,8,8,0.65)',
              lineHeight: 1.8, fontWeight: 400,
            }}>
              I’m a full-stack web developer based in Berlin, currently doing my Master’s in Data Analytics. I build fast, interactive websites and applications — from a blank canvas to a live product.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9rem,1.1vw,1.05rem)',
              color: 'rgba(8,8,8,0.38)',
              lineHeight: 1.8, fontWeight: 400,
            }}>
              I work with startups and businesses worldwide, taking full ownership of the product — design, development and deployment. I care deeply about clean code, sharp UI and performance.
            </p>
          </div>

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
                  fontWeight: 700, letterSpacing: '0.04em',
                  color: 'rgba(8,8,8,0.88)',
                }}>{num}</span>
                <span style={{ ...mono, fontSize: '0.5rem', color: 'rgba(8,8,8,0.3)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ╌╌ PLUS PORTAL ╌╌ */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '4rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          ref={plusRef}
          style={{
            width: 'clamp(3rem,6vw,5rem)',
            height: 'clamp(3rem,6vw,5rem)',
            background: '#0a0a0a',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            willChange: 'transform',
            flexShrink: 0,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            style={{ width: '55%', height: '55%' }}
          >
            <path d="M12 4v16M4 12h16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
