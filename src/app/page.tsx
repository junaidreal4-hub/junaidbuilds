import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import AboutStrip      from '@/components/AboutStrip'
import FeaturedWork    from '@/components/FeaturedWork'
import Works           from '@/components/Works'
import DynamicSections from '@/components/DynamicSections'
import Services        from '@/components/Services'
import Team            from '@/components/Team'
import Testimonials    from '@/components/Testimonials'
import Contact         from '@/components/Contact'
import Footer          from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <Hero />
      <AboutStrip />
      <FeaturedWork />
      <Works />
      <DynamicSections />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
