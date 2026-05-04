// Navbar is intentionally empty — navigation lives in the footer like nikolaradeski.com
// A minimal floating top bar only shows the wordmark for brand anchoring
'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-canvas/90 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-width flex items-center justify-between h-14 md:h-16">
        <a href="/" className="font-display italic text-heading text-lg">
          Junaid Builds
        </a>
        {/* Back to top shortcut when scrolled */}
        {scrolled && (
          <a href="#" className="label hover:text-heading transition-colors">Back to Top &uarr;</a>
        )}
      </div>
    </header>
  )
}
