import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import GettingStarted from '@/components/GettingStarted'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Getting Started — DAC-ECAT Studio',
  description:
    'From zero to a moving motor with live data acquisition. A step-by-step workflow guide covering TwinCAT PLC setup, TwinCAT HMI, and DAC-ECAT Studio — all in one practical engineer workflow.',
  openGraph: {
    title: 'Getting Started with DAC-ECAT Studio',
    description:
      'Three-part engineer workflow guide: TwinCAT PLC motion controller, TwinCAT HMI, and DAC-ECAT Studio live data acquisition. Zero to moving motor in minutes.',
    type: 'website',
    images: ['/dac-ecat-splash.png'],
  },
}

export default function GettingStartedPage() {
  return (
    <main>
      <Navbar />
      <GettingStarted />
      <EarlyAccess />
      <Footer />
    </main>
  )
}
