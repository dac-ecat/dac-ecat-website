'use client'
import { useState } from 'react'
import Link from 'next/link'

const GITHUB_REPOS = [
  {
    name: 'dac-ecat-plc-lib',
    url: 'https://github.com/dac-ecat/dac-ecat-plc-lib',
    desc: 'PLC integration toolkit — TwinCAT structured types, telemetry, and scripting interfaces',
  },
  {
    name: 'dac-ecat-plc-demo',
    url: 'https://github.com/dac-ecat/dac-ecat-plc-demo',
    desc: 'Demonstration TwinCAT project — vertical wind tunnel with dual PLC architectures',
  },
  {
    name: 'dac-ecat-docs',
    url: 'https://github.com/dac-ecat/dac-ecat-docs',
    desc: 'Full product documentation',
  },
]

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    await new Promise<void>((res) => setTimeout(res, 900))
    setStatus('success')
  }

  return (
    <section className="pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
            — Contact —
          </p>
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-wider text-brand-bright uppercase mb-5">
            Get in Touch
          </h1>
          <p className="font-mono text-brand-text text-sm leading-relaxed max-w-lg mx-auto">
            Questions about the product, early access, or integration with your TwinCAT setup — send a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact form */}
          <div>
            <h2 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-5">Send a Message</h2>

            {status === 'success' ? (
              <div className="rounded-lg border border-brand-teal/30 bg-brand-teal/5 p-6">
                <p className="font-orbitron font-bold text-sm text-brand-teal tracking-wider uppercase mb-1">Message received.</p>
                <p className="font-mono text-xs text-brand-text">I&apos;ll reply to your email as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-brand-dim uppercase block mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    disabled={status === 'loading'}
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 font-mono text-sm text-brand-bright placeholder:text-brand-dim focus:outline-none focus:border-brand-teal/60 transition-colors disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-brand-dim uppercase block mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    disabled={status === 'loading'}
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 font-mono text-sm text-brand-bright placeholder:text-brand-dim focus:outline-none focus:border-brand-teal/60 transition-colors disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-brand-dim uppercase block mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    disabled={status === 'loading'}
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-3 font-mono text-sm text-brand-bright placeholder:text-brand-dim focus:outline-none focus:border-brand-teal/60 transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell me about your setup or what you're trying to do..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full font-orbitron font-bold text-xs tracking-widest px-6 py-3 rounded-lg bg-brand-teal text-brand-bg hover:bg-brand-teal/90 active:scale-[0.99] transition-all shadow-teal-glow uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Direct channels */}
          <div className="space-y-8">
            <div>
              <h2 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-4">Direct</h2>
              <div className="space-y-3">
                <a
                  href="mailto:diggs.it.accnt@gmail.com"
                  className="flex items-center gap-3 font-mono text-xs text-brand-text hover:text-brand-teal transition-colors group"
                >
                  <span className="w-5 h-5 flex items-center justify-center text-brand-dim group-hover:text-brand-teal transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  diggs.it.accnt@gmail.com
                </a>
                <a
                  href="https://x.com/dacecatstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-xs text-brand-text hover:text-brand-teal transition-colors group"
                >
                  <span className="w-5 h-5 flex items-center justify-center text-brand-dim group-hover:text-brand-teal transition-colors">
                    <XIcon />
                  </span>
                  @dacecatstudio
                </a>
                <a
                  href="https://www.instagram.com/dacecatstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-xs text-brand-text hover:text-brand-teal transition-colors group"
                >
                  <span className="w-5 h-5 flex items-center justify-center text-brand-dim group-hover:text-brand-teal transition-colors">
                    <InstagramIcon />
                  </span>
                  @dacecatstudio
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-4">Open Source</h2>
              <div className="space-y-3">
                {GITHUB_REPOS.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 group"
                  >
                    <span className="mt-0.5 text-brand-dim group-hover:text-brand-teal transition-colors flex-shrink-0">
                      <GithubIcon />
                    </span>
                    <div>
                      <p className="font-mono text-xs text-brand-text group-hover:text-brand-teal transition-colors">{repo.name}</p>
                      <p className="font-mono text-[10px] text-brand-dim mt-0.5 leading-relaxed">{repo.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-3">Early Access</h2>
              <p className="font-mono text-xs text-brand-text leading-relaxed mb-3">
                Joining the waitlist is the fastest way to get notified when the first build ships.
              </p>
              <Link
                href="/#early-access"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-4 py-2 rounded border border-brand-teal/60 text-brand-teal hover:bg-brand-teal/10 hover:border-brand-teal transition-all uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                Request Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
