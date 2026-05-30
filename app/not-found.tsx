import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-bg flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-8">
          <Image
            src="/brand/svg/brand/app-icon-128px.svg"
            alt="DAC-ECAT Studio"
            width={56}
            height={56}
            className="opacity-40"
          />
        </div>

        <p className="font-mono text-[10px] tracking-[0.3em] text-brand-teal uppercase mb-3">
          — 404 —
        </p>
        <h1 className="font-orbitron font-bold text-4xl tracking-wider text-brand-bright uppercase mb-4">
          Signal Lost
        </h1>
        <p className="font-mono text-brand-text text-sm leading-relaxed mb-8">
          This route does not exist. The variable you&apos;re looking for may have been moved, renamed, or never mapped.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="font-orbitron font-bold text-xs tracking-widest px-6 py-3 rounded-lg bg-brand-teal text-brand-bg hover:bg-brand-teal/90 transition-all uppercase"
          >
            Back to Home
          </Link>
          <Link
            href="/getting-started"
            className="font-mono text-xs tracking-wider px-6 py-3 rounded-lg border border-brand-border text-brand-text hover:text-brand-teal hover:border-brand-teal/40 transition-all uppercase"
          >
            Getting Started
          </Link>
        </div>
      </div>
    </main>
  )
}
