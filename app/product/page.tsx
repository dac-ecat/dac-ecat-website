import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ProductOverview from '@/components/ProductOverview'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Product Overview — DAC-ECAT Studio',
  description:
    'DAC-ECAT Studio is a data acquisition and scripting IDE for TwinCAT and EtherCAT engineers. Native Rust acquisition, Monaco editor, any runtime, AI terminal integration — all in one 20MB executable.',
  openGraph: {
    title: 'DAC-ECAT Studio — Product Overview',
    description:
      'Live industrial data acquisition meets a fully programmable engineering IDE. Current features, planned roadmap, architecture, and competitive differentiation.',
    type: 'website',
    images: ['/dac-ecat-splash.png'],
  },
}

export default function ProductPage() {
  return (
    <main>
      <Navbar />
      <ProductOverview />
      <EarlyAccess />
      <Footer />
    </main>
  )
}
