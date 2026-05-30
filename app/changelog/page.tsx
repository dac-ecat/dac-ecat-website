import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Changelog from '@/components/Changelog'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Changelog — DAC-ECAT Studio',
  description:
    'Release notes and roadmap for DAC-ECAT Studio. Track what ships with each version — from v1.0.0 Early Access through future protocol and collaboration features.',
  openGraph: {
    title: 'DAC-ECAT Studio — Changelog',
    description: 'Release notes, roadmap, and upcoming features for DAC-ECAT Studio.',
    type: 'website',
    images: ['/dac-ecat-splash.png'],
  },
}

export default function ChangelogPage() {
  return (
    <main>
      <Navbar />
      <Changelog />
      <EarlyAccess />
      <Footer />
    </main>
  )
}
