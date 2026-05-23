'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    setErrorMsg('')

    try {
      // TODO: uncomment once Supabase is configured (.env.local)
      // const { joinWaitlist } = await import('@/lib/supabase')
      // const { error } = await joinWaitlist(email.trim())
      // if (error) throw new Error(error)

      // Stub: simulate network call
      await new Promise<void>((res) => setTimeout(res, 900))
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="early-access" className="py-28 px-6 border-t border-brand-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-teal-radial opacity-70" />
      {/* Grid */}
      <div
        className="absolute inset-0 bg-grid-sm opacity-30"
        style={{ backgroundSize: '44px 44px' }}
      />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <Image
            src="/brand/svg/brand/app-icon-512px.svg"
            alt="DAC-ECAT Studio"
            width={88}
            height={88}
            className="animate-glow-pulse"
          />
        </div>

        <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
          — Early Access —
        </p>
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-wider text-brand-bright uppercase mb-5">
          Get Notified
        </h2>
        <p className="font-mono text-brand-text text-sm leading-relaxed mb-10">
          DAC-ECAT Studio is in active development. Sign up and we&apos;ll send you a link when the first build is ready for download.
        </p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-brand-teal/40 bg-brand-teal/10">
            <svg className="w-5 h-5 text-brand-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div className="text-left">
              <p className="font-orbitron font-bold text-sm text-brand-teal tracking-wider uppercase">You&apos;re on the list.</p>
              <p className="font-mono text-xs text-brand-text mt-0.5">We&apos;ll be in touch when it&apos;s ready.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              className="flex-1 bg-brand-surface border border-brand-border rounded-lg px-4 py-3 font-mono text-sm text-brand-bright placeholder:text-brand-dim focus:outline-none focus:border-brand-teal/60 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="font-orbitron font-bold text-xs tracking-widest px-6 py-3 rounded-lg bg-brand-teal text-brand-bg hover:bg-brand-teal/90 active:scale-[0.98] transition-all shadow-teal-glow uppercase disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin w-3 h-3" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending
                </span>
              ) : (
                'Request Access'
              )}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="font-mono text-brand-error text-xs mt-3">{errorMsg}</p>
        )}

        <p className="font-mono text-brand-dim text-xs mt-6 tracking-wider leading-relaxed">
          No spam. Just one notification when the build ships.
          <br />
          Mit der Anmeldung akzeptieren Sie unsere{' '}
          <Link href="/datenschutz" className="text-brand-teal hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
