'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Preview', href: '/#preview' },
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Get Started', href: '/getting-started' },
]

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brand-border bg-brand-bg/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <Image
            src="/brand/svg/brand/app-icon-128px.svg"
            alt="DAC-ECAT Studio"
            width={30}
            height={30}
            className="group-hover:animate-glow-pulse transition-all"
          />
          <div className="flex items-baseline gap-2">
            <span className="font-orbitron font-bold text-brand-teal tracking-[0.2em] text-sm uppercase">
              DAC-ECAT
            </span>
            <span className="font-mono text-brand-dim text-xs tracking-widest hidden sm:block">
              STUDIO
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xs tracking-[0.15em] text-brand-text hover:text-brand-teal transition-colors uppercase"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social icons + CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Social icons — desktop only */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://x.com/dacecatstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DAC-ECAT Studio on X"
              className="p-1.5 text-brand-dim hover:text-brand-teal transition-colors"
            >
              <XIcon />
            </a>
            <a
              href="https://www.instagram.com/dacecatstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DAC-ECAT Studio on Instagram"
              className="p-1.5 text-brand-dim hover:text-brand-teal transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>

          <a
            href="/#early-access"
            className="hidden sm:flex items-center gap-2 font-mono text-xs tracking-[0.15em] px-4 py-2 rounded border border-brand-teal/60 text-brand-teal hover:bg-brand-teal/10 hover:border-brand-teal transition-all uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
            Request Access
          </a>
          <button
            className="md:hidden text-brand-text hover:text-brand-teal transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-brand-border bg-brand-surface/95 backdrop-blur-md px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xs tracking-[0.15em] text-brand-text hover:text-brand-teal transition-colors uppercase py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex items-center gap-4 py-1">
            <a
              href="https://x.com/dacecatstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-brand-dim hover:text-brand-teal transition-colors uppercase"
              onClick={() => setMenuOpen(false)}
            >
              <XIcon /> X
            </a>
            <a
              href="https://www.instagram.com/dacecatstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-brand-dim hover:text-brand-teal transition-colors uppercase"
              onClick={() => setMenuOpen(false)}
            >
              <InstagramIcon /> Instagram
            </a>
          </div>
          <a
            href="/#early-access"
            className="font-mono text-xs tracking-[0.15em] px-4 py-2.5 rounded border border-brand-teal/60 text-brand-teal hover:bg-brand-teal/10 transition-all uppercase text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Request Access
          </a>
        </div>
      )}
    </header>
  )
}
