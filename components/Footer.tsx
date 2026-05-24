import Image from 'next/image'
import Link from 'next/link'
import CookieSettingsLink from '@/components/CookieSettingsLink'

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Preview', href: '/#preview' },
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Get Started', href: '/getting-started' },
  { label: 'Early Access', href: '/#early-access' },
]

const LEGAL_LINKS = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
]

const TECH_BADGES = [
  'TwinCAT ADS',
  'EtherCAT SOEM',
  'Modbus TCP',
  'Tauri · Rust',
  'React · TypeScript',
  'Python · Pyodide',
  'Monaco Editor',
  'GoldenLayout',
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface/40">
      {/* Tech stack strip */}
      <div className="border-b border-brand-border py-5 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-brand-dim uppercase mr-2">Built With:</span>
          {TECH_BADGES.map((b) => (
            <span key={b} className="font-mono text-[10px] tracking-wider text-brand-dim/70 uppercase">
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/brand/svg/brand/app-icon-128px.svg"
              alt="DAC-ECAT Studio"
              width={32}
              height={32}
            />
            <div>
              <p className="font-orbitron font-bold text-brand-teal text-sm tracking-widest uppercase">
                DAC-ECAT Studio
              </p>
              <p className="font-mono text-brand-dim text-[10px] tracking-wider mt-0.5">
                Distributed Automation Control
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-mono text-[11px] tracking-wider text-brand-dim hover:text-brand-teal transition-colors uppercase"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-mono text-[10px] text-brand-dim tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} DAC-ECAT Studio
            <br className="hidden md:block" />
            <span className="hidden md:inline"> All rights reserved.</span>
          </p>
        </div>

        {/* Legal */}
        <nav className="mt-8 pt-6 border-t border-brand-border flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[10px] tracking-wider text-brand-dim hover:text-brand-teal transition-colors uppercase"
            >
              {label}
            </Link>
          ))}
          <CookieSettingsLink />
        </nav>

        {/* Bottom tagline */}
        <div className="mt-6 text-center">
          <p className="font-mono text-[10px] text-brand-dim/50 tracking-[0.2em] uppercase">
            Built for engineers who move fast
          </p>
        </div>
      </div>
    </footer>
  )
}
