import dynamic from 'next/dynamic'
import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import AboutStrip    from '@/components/AboutStrip'
import FeaturedWork  from '@/components/FeaturedWork'
import Works         from '@/components/Works'
import Services      from '@/components/Services'
import Team          from '@/components/Team'
import Testimonials  from '@/components/Testimonials'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'

// GSAP ScrollTrigger uses window/document — must be client-only, no SSR
const Approach       = dynamic(() => import('@/components/Approach'),       { ssr: false })
const PlusTransition = dynamic(() => import('@/components/PlusTransition'), { ssr: false })

export default function Home() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <Hero />
      <AboutStrip />
      <FeaturedWork />
      <Works />
      <Approach />
      <PlusTransition />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
