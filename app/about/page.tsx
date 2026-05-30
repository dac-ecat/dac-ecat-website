import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — DAC-ECAT Studio',
  description:
    'Ed Diggs — aerospace engineer, control systems engineer, and the founder of DAC-ECAT Studio. Built from six years of TwinCAT integration work at a vertical wind tunnel test facility in Berlin.',
  openGraph: {
    title: 'About DAC-ECAT Studio',
    description:
      'Founder background: MS Aerospace Engineering, MS Applied Mathematics (Virginia Tech). Senior engineer at Bihrle Applied Research, Berlin — TwinCAT, wind tunnel, NAVAIR aircraft testing.',
    type: 'website',
    images: ['/dac-ecat-splash.png'],
  },
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <About />
      <EarlyAccess />
      <Footer />
    </main>
  )
}
