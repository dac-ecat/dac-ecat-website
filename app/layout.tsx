import type { Metadata } from 'next'
import { Orbitron, DM_Mono } from 'next/font/google'
import CookieConsent from '@/components/CookieConsent'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dacecat.studio'),
  title: 'DAC-ECAT Studio — AI-Powered IDE for EtherCAT & TwinCAT Engineers',
  description:
    'Professional data acquisition and control workspace for TwinCAT/EtherCAT PLCs. Variable explorer, Python scripting, live data logging, and Claude AI built right in.',
  keywords: [
    'EtherCAT',
    'TwinCAT',
    'ADS',
    'data acquisition',
    'PLC',
    'Python',
    'AI',
    'IDE',
    'DAC-ECAT',
  ],
  openGraph: {
    title: 'DAC-ECAT Studio',
    description:
      'The AI-powered IDE for EtherCAT & TwinCAT engineering. Variable explorer, Python scripting, Claude AI terminals.',
    type: 'website',
    images: ['/dac-ecat-splash.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAC-ECAT Studio',
    description: 'The AI-powered IDE for EtherCAT & TwinCAT engineering.',
    images: ['/dac-ecat-splash.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${dmMono.variable}`}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
