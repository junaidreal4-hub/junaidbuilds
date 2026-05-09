import Navbar           from '@/components/Navbar'
import Hero             from '@/components/Hero'
import AboutStrip       from '@/components/AboutStrip'
import PlusTransition   from '@/components/PlusTransition'
import Works            from '@/components/Works'
import Services         from '@/components/Services'
import Testimonials     from '@/components/Testimonials'
import Contact          from '@/components/Contact'
import Footer           from '@/components/Footer'
import CustomCursor     from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="bg-canvas">
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutStrip />
      <PlusTransition />
      <Works />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
