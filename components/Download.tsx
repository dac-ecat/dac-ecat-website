import Link from 'next/link'
import Image from 'next/image'

const SYSTEM_REQUIREMENTS = [
  { label: 'OS', value: 'Windows 10 or Windows 11 (x64)' },
  { label: 'TwinCAT', value: 'TwinCAT 3.1 Build 4024 or newer (for ADS connectivity)' },
  { label: 'RAM', value: '4 GB minimum · 8 GB recommended' },
  { label: 'Disk', value: '~20 MB — single portable executable, no installer' },
  { label: 'Network', value: 'Local or remote AMS Net ID routing (ADS port 48898)' },
  { label: 'Runtime', value: 'Optional: Python, Node, Lua, R, Julia, or any PATH-accessible tool for scripting' },
]

const INCLUDED = [
  'DAC-ECAT Studio executable (~20 MB)',
  'Bundled Monaco editor engine',
  'Bundled GoldenLayout 2 workspace engine',
  'Bundled Pyodide runtime (Python in-process)',
  'Auto-created project folder structure on first launch',
  'DacEcat PLC library reference files',
]

export default function Download() {
  return (
    <section className="pt-28 pb-24 px-6 min-h-screen relative">
      <div className="absolute inset-0 bg-hero-radial opacity-20 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
            — Download —
          </p>
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-wider text-brand-bright uppercase mb-5">
            DAC-ECAT Studio
          </h1>
          <p className="font-mono text-brand-text text-sm leading-relaxed max-w-md mx-auto">
            A single portable executable. No installer. No dependencies. Drop it on your engineering workstation and run.
          </p>
        </div>

        {/* Coming soon card */}
        <div className="mb-12 rounded-xl border border-brand-teal/20 bg-brand-surface p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-teal-radial opacity-20" />
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/brand/svg/brand/app-icon-512px.svg"
                alt="DAC-ECAT Studio"
                width={72}
                height={72}
                className="animate-glow-pulse"
              />
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-brand-amber uppercase px-3 py-1 rounded border border-brand-amber/30 bg-brand-amber/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse" />
              Early Access — In Development
            </div>
            <h2 className="font-orbitron font-bold text-2xl tracking-wider text-brand-bright uppercase mb-3">
              v1.0.0
            </h2>
            <p className="font-mono text-brand-text text-xs leading-relaxed mb-6 max-w-sm mx-auto">
              The first build is in active development. Join the waitlist and you&apos;ll receive a direct download link the moment it ships.
            </p>
            <Link
              href="/#early-access"
              className="inline-flex items-center gap-2 font-orbitron font-bold text-xs tracking-widest px-8 py-3 rounded-lg bg-brand-teal text-brand-bg hover:bg-brand-teal/90 active:scale-[0.98] transition-all shadow-teal-glow uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-bg animate-pulse" />
              Join the Waitlist
            </Link>
          </div>
        </div>

        {/* Two-column info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

          {/* System requirements */}
          <div className="rounded-lg border border-brand-border bg-brand-surface p-6">
            <h2 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-4">
              System Requirements
            </h2>
            <div className="divide-y divide-brand-border">
              {SYSTEM_REQUIREMENTS.map(({ label, value }) => (
                <div key={label} className="py-2.5">
                  <p className="font-mono text-[10px] tracking-widest text-brand-dim uppercase mb-0.5">{label}</p>
                  <p className="font-mono text-xs text-brand-text leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What&apos;s included */}
          <div className="rounded-lg border border-brand-border bg-brand-surface p-6">
            <h2 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-4">
              What&apos;s Included
            </h2>
            <ul className="space-y-2.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <svg className="w-3.5 h-3.5 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-xs text-brand-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Platform note */}
        <div className="rounded-lg border border-brand-border bg-brand-surface/50 p-5 flex gap-4 items-start">
          <svg className="w-4 h-4 text-brand-dim flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeLinecap="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
          </svg>
          <div>
            <p className="font-mono text-xs text-brand-text leading-relaxed">
              <span className="text-brand-bright">Windows only.</span>{' '}
              DAC-ECAT Studio requires Windows because TwinCAT ADS runs on Windows. Linux and macOS support is on the long-term roadmap for non-ADS workflows (Modbus TCP, EtherCAT SOEM, scripting-only mode).
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
