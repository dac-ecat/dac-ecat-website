'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'AI-Powered', href: '#ai-section' },
]

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
        <a href="#" className="flex items-center gap-3 group">
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

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#early-access"
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
          <a
            href="#early-access"
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
