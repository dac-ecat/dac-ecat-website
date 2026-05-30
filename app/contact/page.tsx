import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact — DAC-ECAT Studio',
  description:
    'Get in touch with DAC-ECAT Studio. Questions about TwinCAT integration, early access, pricing, or the product — send a message or reach out directly.',
  openGraph: {
    title: 'Contact DAC-ECAT Studio',
    description: 'Reach the DAC-ECAT Studio team for product questions, early access, or TwinCAT integration support.',
    type: 'website',
    images: ['/dac-ecat-splash.png'],
  },
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <Contact />
      <Footer />
    </main>
  )
}
