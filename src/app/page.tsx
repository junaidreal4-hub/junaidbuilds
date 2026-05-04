import BottomNav   from '@/components/BottomNav'
import Hero        from '@/components/Hero'
import Skills      from '@/components/Skills'
import StatsStrip  from '@/components/StatsStrip'
import Awards      from '@/components/Awards'
import About       from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ         from '@/components/FAQ'
import Contact     from '@/components/Contact'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <BottomNav />
      <Hero />
      <Skills />
      <StatsStrip />
      <Awards />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
