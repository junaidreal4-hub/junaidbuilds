'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current!,
      content: content.current!,
      smooth: 0.8,
      effects: true,
      // normalizeScroll disabled — it intercepts native scroll and
      // breaks ScrollTrigger pins (e.g. FlowArt section stacking)
      normalizeScroll: false,
    })
    return () => smoother.kill()
  }, [])

  return (
    <div ref={wrapper} id="smooth-wrapper" style={{ overflow: 'hidden', position: 'fixed', width: '100%', height: '100%', top: 0, left: 0 }}>
      <div ref={content} id="smooth-content">
        {children}
      </div>
    </div>
  )
}
