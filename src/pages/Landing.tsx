import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { LogoStrip } from '../sections/LogoStrip'
import { HowItWorks } from '../sections/HowItWorks'
import { TwoSides } from '../sections/TwoSides'
import { Categories } from '../sections/Categories'
import { Testimonials } from '../sections/Testimonials'
import { CtaBand } from '../sections/CtaBand'

export default function Landing() {
  return (
    <div className="relative z-10">
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <HowItWorks />
        <TwoSides />
        <Categories />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
