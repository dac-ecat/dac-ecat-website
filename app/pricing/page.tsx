import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing — DAC-ECAT Studio',
  description:
    'Simple per-seat pricing for TwinCAT and EtherCAT engineers. Free tier available. Individual, Team, and Enterprise plans with no tag limits and no device counts.',
  openGraph: {
    title: 'DAC-ECAT Studio Pricing',
    description: 'Per-seat IDE pricing for TwinCAT & EtherCAT engineers. Free to start, $49/mo Individual, $29/seat Team, $8,400/yr Enterprise.',
    type: 'website',
    images: ['/dac-ecat-splash.png'],
  },
}

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <Pricing />
      <EarlyAccess />
      <Footer />
    </main>
  )
}
