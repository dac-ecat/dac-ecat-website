import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import HowItWorks from '@/components/HowItWorks'
import AiSection from '@/components/AiSection'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <AiSection />
      <EarlyAccess />
      <Footer />
    </main>
  )
}
