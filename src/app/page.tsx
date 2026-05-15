import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </SmoothScroll>
  )
}
