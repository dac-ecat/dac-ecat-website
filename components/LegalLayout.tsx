import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { LEGAL } from '@/lib/legal'

export default function LegalLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <header className="border-b border-brand-border bg-brand-bg/95 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/brand/svg/brand/app-icon-128px.svg"
              alt={LEGAL.siteName}
              width={28}
              height={28}
            />
            <span className="font-orbitron font-bold text-brand-teal tracking-[0.15em] text-xs uppercase hidden sm:inline">
              {LEGAL.siteName}
            </span>
          </Link>
          <Link
            href="/"
            className="font-mono text-[11px] tracking-wider text-brand-dim hover:text-brand-teal transition-colors uppercase"
          >
            ← Startseite
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-6 py-14 md:py-20">
          <p className="font-mono text-[10px] tracking-[0.25em] text-brand-teal uppercase mb-3">
            Rechtliches
          </p>
          <h1 className="font-orbitron font-bold text-2xl md:text-3xl tracking-wider text-brand-bright uppercase mb-2">
            {title}
          </h1>
          <p className="font-mono text-brand-dim text-xs mb-10">
            Stand: {LEGAL.lastUpdated}
          </p>
          <div className="legal-content space-y-8 font-mono text-sm text-brand-text leading-relaxed">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
