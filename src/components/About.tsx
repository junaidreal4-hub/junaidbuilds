'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const bioRef     = useRef<HTMLDivElement>(null)
  const plusRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // bio fade-in
      gsap.from(bioRef.current, {
        y: 50, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })

      // ── PLUS ZOOM WIPE ──────────────────────────────────────────
      // Pin section while plus scales from center outward.
      // transformOrigin '50% 50%' ensures it grows from dead center.
      // scale(60) guarantees full coverage on any screen size.
      gsap.to(plusRef.current, {
        scale: 60,
        ease: 'none',
        transformOrigin: '50% 50%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom bottom',
          end: '+=150%',
          scrub: 1.2,
          pin: sectionRef.current,
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
    <div style={{ background: '#fff', overflow: 'hidden' }}>
      <section
        id="about"
        ref={sectionRef}
        className="relative flex flex-col"
        style={{
          minHeight: '100dvh',
          padding: 'clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,5rem)',
          background: '#fff',
          overflow: 'hidden',
        }}
      >
        {/* section label */}
        <div className="flex items-center gap-4 mb-16">
          <span style={{ ...mono, fontSize: '0.6rem', color: 'rgba(8,8,8,0.3)' }}>02 — About</span>
          <div className="flex-1" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
        </div>

        {/* Bio two-col */}
        <div ref={bioRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-16">
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

        {/* SVG title — decorative, below content */}
        <div className="w-full mb-16">
          <Image
            src="/title.svg"
            alt="Builder. Designer. Developer."
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </div>

        {/* ── CENTERED PLUS — zoom portal ────────────────────────── */}
        {/* This is the actual zoom target — a dark square with a + */}
        {/* centered horizontally, GSAP scales it from center outward */}
        <div className="flex justify-center items-center pb-12">
          <div
            ref={plusRef}
            style={{
              width:  '3.5rem',
              height: '3.5rem',
              background: '#0a0a0a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: 'transform',
              transformOrigin: '50% 50%',
              flexShrink: 0,
            }}
          >
            {/* Plus icon — inline SVG so it's crisp at any scale */}
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '50%', height: '50%' }}>
              <path d="M12 4v16M4 12h16" stroke="white" strokeWidth="2.5" strokeLinecap="square"/>
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}
