'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const wrapRef   = useRef<HTMLDivElement>(null)  // pinned wrapper
  const bioRef    = useRef<HTMLDivElement>(null)
  const dotRef    = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // bio fade-in on first enter
      gsap.from(bioRef.current, {
        y: 50, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: wrapRef.current, start: 'top 70%' },
      })

      // ── DOT ZOOM WIPE ──────────────────────────────────────────
      // Pin the whole about block, then scrub the dot from its
      // natural size → scale(80) so it fills & covers the screen.
      // The dark Projects section underneath is revealed naturally.
      gsap.to(dotRef.current, {
        scale: 80,
        ease: 'power2.in',
        transformOrigin: '50% 50%',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'bottom bottom',   // starts when bottom of section hits bottom of viewport
          end: '+=120%',            // slow – 1.2× viewport of scroll travel
          scrub: 1,
          pin: wrapRef.current,     // pins the about block during the zoom
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
    // outer shell — overflow hidden so zooming dot doesn't cause scrollbar
    <div style={{ background: '#fff', overflow: 'hidden' }}>
      <section
        id="about"
        ref={wrapRef}
        className="relative flex flex-col justify-center"
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
        <div ref={bioRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* left: headline — dot is isolated inside a span */}
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
                position: 'relative',
              }}
            >
              Builder.<br />
              <span style={{ color: 'rgba(8,8,8,0.18)' }}>Designer.</span><br />
              Developer
              {/*
                The dot — this is the zoom target.
                It must be inline-block so transform works,
                and have a background that matches the next section (#0a0a0a)
                so as it zooms it paints over everything.
              */}
              <span
                ref={dotRef}
                style={{
                  display: 'inline-block',
                  width:  '0.18em',
                  height: '0.18em',
                  background: '#0a0a0a',
                  borderRadius: '50%',
                  verticalAlign: 'middle',
                  marginLeft: '0.04em',
                  marginBottom: '0.22em',
                  willChange: 'transform',
                  transformOrigin: '50% 50%',
                }}
              />
            </h2>
          </div>

          {/* right: bio + stats */}
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
      </section>
    </div>
  )
}
