import Image from 'next/image'
import Link from 'next/link'
import CookieSettingsLink from '@/components/CookieSettingsLink'

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Preview', href: '/#preview' },
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Get Started', href: '/getting-started' },
  { label: 'Download', href: '/download' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Early Access', href: '/#early-access' },
]

const LEGAL_LINKS = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
]

const GITHUB_REPOS = [
  {
    name: 'dac-ecat-plc-lib',
    url: 'https://github.com/dac-ecat/dac-ecat-plc-lib',
    desc: 'PLC integration toolkit',
  },
  {
    name: 'dac-ecat-plc-demo',
    url: 'https://github.com/dac-ecat/dac-ecat-plc-demo',
    desc: 'Wind tunnel demo project',
  },
  {
    name: 'dac-ecat-docs',
    url: 'https://github.com/dac-ecat/dac-ecat-docs',
    desc: 'Product documentation',
  },
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

function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

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
        {/* Top row: brand + nav columns + social */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/brand/svg/brand/app-icon-128px.svg"
                alt="DAC-ECAT Studio"
                width={28}
                height={28}
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
            <p className="font-mono text-brand-dim text-[10px] leading-relaxed mb-4">
              The data acquisition and scripting IDE for TwinCAT and EtherCAT engineers.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/dacecatstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DAC-ECAT Studio on X"
                className="p-1.5 rounded border border-brand-border text-brand-dim hover:text-brand-teal hover:border-brand-teal/40 transition-colors"
              >
                <XIcon />
              </a>
              <a
                href="https://www.instagram.com/dacecatstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DAC-ECAT Studio on Instagram"
                className="p-1.5 rounded border border-brand-border text-brand-dim hover:text-brand-teal hover:border-brand-teal/40 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://github.com/dac-ecat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DAC-ECAT on GitHub"
                className="p-1.5 rounded border border-brand-border text-brand-dim hover:text-brand-teal hover:border-brand-teal/40 transition-colors"
              >
                <GithubIcon />
              </a>
            </div>
          </div>

          {/* Product nav */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-brand-dim uppercase mb-3">Product</p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.slice(0, 6).map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-mono text-[11px] tracking-wider text-brand-dim hover:text-brand-teal transition-colors uppercase"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Company nav */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-brand-dim uppercase mb-3">Company</p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.slice(6).map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-mono text-[11px] tracking-wider text-brand-dim hover:text-brand-teal transition-colors uppercase"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Open Source */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-brand-dim uppercase mb-3">Open Source</p>
            <div className="flex flex-col gap-3">
              {GITHUB_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 group"
                >
                  <span className="mt-0.5 text-brand-dim group-hover:text-brand-teal transition-colors flex-shrink-0">
                    <GithubIcon />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] tracking-wider text-brand-dim group-hover:text-brand-teal transition-colors">
                      {repo.name}
                    </p>
                    <p className="font-mono text-[10px] text-brand-dim/60 mt-0.5">{repo.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-brand-dim tracking-wider">
            © {new Date().getFullYear()} DAC-ECAT Studio · All rights reserved.
          </p>

          {/* Legal */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
        </div>

        {/* Bottom tagline */}
        <div className="mt-5 text-center">
          <p className="font-mono text-[10px] text-brand-dim/50 tracking-[0.2em] uppercase">
            Built for engineers who move fast
          </p>
        </div>
      </div>
    </footer>
  )
}
