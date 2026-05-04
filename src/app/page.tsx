import Hero         from '@/components/Hero'
import Skills       from '@/components/Skills'
import Work         from '@/components/Work'
import Timeline     from '@/components/Timeline'
import Testimonials from '@/components/Testimonials'
import FAQ          from '@/components/FAQ'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Work />
      <Timeline />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
