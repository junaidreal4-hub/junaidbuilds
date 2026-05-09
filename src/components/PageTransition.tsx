'use client'
import { useEffect, useRef } from 'react'

export default function PageTransition() {
  const curtainRef = useRef<HTMLDivElement>(null)
  const labelRef   = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const curtain  = curtainRef.current
      const label    = labelRef.current
      if (!curtain || !label) return

      // Make sure it's fully covering on start
      gsap.set(curtain, { yPercent: 0 })
      gsap.set(label,   { opacity: 1, y: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } })

      // 1) Hold briefly so user reads the label
      tl.to(label, { opacity: 0, y: -12, duration: 0.35, delay: 0.3 })
      // 2) Curtain slides UP to reveal the page
        .to(curtain, { yPercent: -100, duration: 1, ease: 'power4.inOut' }, '-=0.05')
    }

    init()
  }, [])

  // Also hook into anchor clicks for exit animation
  useEffect(() => {
    const handleClick = async (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      // Only intercept real page navigations (not hash links, not external)
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return

      e.preventDefault()
      const { gsap } = await import('gsap')
      const curtain  = curtainRef.current
      const label    = labelRef.current
      if (!curtain || !label) { window.location.href = href; return }

      gsap.set(curtain, { yPercent: 100 })
      gsap.set(label,   { opacity: 0, y: 12 })

      const tl = gsap.timeline({
        defaults: { ease: 'power4.inOut' },
        onComplete: () => { window.location.href = href },
      })
      tl.to(curtain, { yPercent: 0,  duration: 0.85 })
        .to(label,   { opacity: 1, y: 0, duration: 0.3 }, '-=0.3')
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[9999] bg-[#080808] flex items-center justify-center pointer-events-none"
    >
      <span
        ref={labelRef}
        className="font-mono font-bold text-white/30 text-xs tracking-[0.3em] uppercase"
      >
        mdjk.dev
      </span>
    </div>
  )
}
