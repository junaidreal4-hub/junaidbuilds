import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import AboutStrip   from '@/components/AboutStrip'
import Works        from '@/components/Works'
import Services     from '@/components/Services'
import Team         from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <Hero />
      <AboutStrip />
      <Works />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
