'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen bg-brand-bg flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[10px] tracking-[0.25em] text-brand-teal uppercase mb-3">
        — Fehler —
      </p>
      <h1 className="font-orbitron font-bold text-xl text-brand-bright uppercase tracking-wider mb-4">
        Seite konnte nicht geladen werden
      </h1>
      <p className="font-mono text-sm text-brand-text max-w-md mb-8">{error.message}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          type="button"
          onClick={() => reset()}
          className="font-orbitron font-bold text-[10px] tracking-widest px-5 py-2.5 rounded-lg bg-brand-teal text-brand-bg uppercase"
        >
          Erneut versuchen
        </button>
        <Link
          href="/"
          className="font-mono text-[10px] tracking-wider px-5 py-2.5 rounded-lg border border-brand-border text-brand-dim hover:text-brand-teal uppercase"
        >
          Startseite
        </Link>
      </div>
    </main>
  )
}
