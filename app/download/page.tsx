import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Download from '@/components/Download'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Download — DAC-ECAT Studio',
  description:
    'Download DAC-ECAT Studio — a single ~20MB portable executable for Windows. No installer required. TwinCAT ADS connectivity, Monaco editor, live data logging, and AI terminal integration out of the box.',
  openGraph: {
    title: 'Download DAC-ECAT Studio',
    description:
      'Single portable .exe, ~20 MB, Windows 10/11. No installer. Drop it on your engineering workstation and run. Currently in Early Access — join the waitlist.',
    type: 'website',
    images: ['/dac-ecat-splash.png'],
  },
}

export default function DownloadPage() {
  return (
    <main>
      <Navbar />
      <Download />
      <EarlyAccess />
      <Footer />
    </main>
  )
}
