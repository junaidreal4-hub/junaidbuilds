'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // bio fade in
      gsap.from(bioRef.current, {
        y: 50, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })

      // ── DOT ZOOM WIPE ────────────────────────────────────────────
      // Pin the section, then scale the SVG square from ~font-size
      // all the way up until it covers the entire viewport.
      // Because the SVG bg is #0a0a0a and Projects is #0a0a0a,
      // the transition is seamless — no pixelation (SVG scales infinitely).
      gsap.to(dotRef.current, {
        scale: 200,
        ease: 'none',
        transformOrigin: '50% 50%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom bottom',
          end: '+=150%',
          scrub: 1.5,
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
    <div ref={wrapRef} style={{ background: '#fff', overflow: 'hidden' }}>
      <section
        id="about"
        ref={sectionRef}
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

          {/* left: headline + SVG fullstop */}
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
              <span style={{ whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'baseline', gap: '0.05em' }}>
                Developer
                {/* SVG fullstop — inline, same visual weight as the font's full stop */}
                <div
                  ref={dotRef}
                  style={{
                    display: 'inline-block',
                    width:  '0.22em',
                    height: '0.22em',
                    flexShrink: 0,
                    alignSelf: 'flex-end',
                    marginBottom: '0.08em',
                    willChange: 'transform',
                    transformOrigin: '50% 50%',
                    // SVG as background — infinitely scalable, zero pixelation
                    backgroundImage: 'url(/fullstop.svg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </span>
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
