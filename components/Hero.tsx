import Image from 'next/image'

const STATS = [
  { value: '1', label: 'exe — no install' },
  { value: '~20MB', label: 'app footprint' },
  { value: 'kHz', label: 'native Rust acquisition' },
  { value: '∞', label: 'runtimes — any CLI tool' },
]

const PROTOCOL_BADGES = [
  'TwinCAT ADS',
  'EtherCAT SOEM',
  'Modbus TCP',
  'Python + Pyodide',
  'Claude AI',
  'Tauri · Rust',
]

const MOCK_FILES = [
  { name: '/ workspace.dacat', color: 'text-brand-dim' },
  { name: '└ Config/', color: 'text-brand-dim' },
  { name: '└ Test Scripts/', color: 'text-brand-dim' },
  { name: '  └ log_sine.py', color: 'text-brand-amber' },
  { name: '  └ fft_analysis.py', color: 'text-brand-dim' },
  { name: '  └ pid_tune.py', color: 'text-brand-dim' },
  { name: '└ Outputdata/', color: 'text-brand-dim' },
]

const MOCK_VARS = [
  { type: 'LREAL', name: 'GVL.sine_va2', val: '7.014' },
  { type: 'LREAL', name: 'GVL.sine_va3', val: '94.002' },
  { type: 'INT', name: 'GVL.motor_rpm', val: '1480' },
  { type: 'BOOL', name: 'GVL.enable', val: 'TRUE' },
  { type: 'BOOL', name: 'GVL.fault', val: 'FALSE' },
  { type: 'REAL', name: 'GVL.temp_C', val: '42.3' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scanlines">
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-sm"
        style={{ backgroundSize: '44px 44px' }}
      />
      {/* Hero glow */}
      <div className="absolute inset-0 bg-hero-radial" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-bg to-transparent z-10" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-10 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-surface/80 text-brand-teal font-mono text-xs tracking-[0.2em] mb-12 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
          Early Access — Now Open
        </div>

        {/* App icon with ring animation */}
        <div className="flex justify-center mb-10">
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full border border-brand-teal/15 animate-spin-slow scale-[1.5]" />
            <div
              className="absolute inset-0 rounded-full border border-brand-amber/10 scale-[1.85]"
              style={{ animation: 'spin 30s linear infinite reverse' }}
            />
            {/* Glow backdrop */}
            <div className="absolute inset-0 rounded-full bg-teal-radial scale-[1.2]" />
            <Image
              src="/brand/svg/brand/app-icon-512px.svg"
              alt="DAC-ECAT Studio"
              width={160}
              height={160}
              className="relative z-10 animate-glow-pulse"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-orbitron font-black uppercase tracking-[0.15em] mb-2">
          <span className="text-gradient-brand text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            DAC-ECAT
          </span>
        </h1>
        <p className="font-orbitron font-bold text-brand-dim tracking-[0.5em] text-lg md:text-xl uppercase mb-8">
          Studio
        </p>

        {/* Acquire · Script · Visualize */}
        <p className="font-mono text-brand-teal text-sm tracking-[0.3em] uppercase mb-4">
          Acquire · Script · Visualize
        </p>

        {/* Tagline */}
        <p className="font-mono text-brand-bright text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
          The data acquisition and scripting IDE for TwinCAT and EtherCAT engineers.
        </p>
        <p className="font-mono text-brand-text text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10">
          Connect to your PLC, acquire live data at native speed, script in any language,
          visualize signals, and generate engineering tooling with AI assistance — all in one native app.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#early-access"
            className="font-orbitron font-bold text-sm tracking-widest px-8 py-4 rounded bg-brand-teal text-brand-bg hover:bg-brand-teal/90 active:scale-[0.98] transition-all shadow-teal-glow-lg uppercase min-w-[210px] text-center"
          >
            Request Access
          </a>
          <a
            href="/pricing"
            className="font-mono text-sm tracking-wider px-8 py-4 rounded border border-brand-border text-brand-text hover:border-brand-teal/60 hover:text-brand-teal transition-all uppercase min-w-[210px] text-center"
          >
            See Pricing →
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-orbitron font-black text-xl text-brand-teal">{value}</p>
              <p className="font-mono text-[10px] text-brand-dim tracking-wider uppercase mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Protocol badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {PROTOCOL_BADGES.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-widest px-3 py-1 rounded-sm border border-brand-border bg-brand-surface text-brand-dim uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Workspace mockup */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-xl border border-brand-border bg-brand-surface shadow-panel overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-brand-border bg-brand-bg/70">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-brand-error/50" />
              <div className="w-3 h-3 rounded-full bg-brand-amber/50" />
              <div className="w-3 h-3 rounded-full bg-brand-teal/50" />
            </div>
            <span className="font-mono text-[11px] text-brand-dim tracking-wider flex-1 text-center">
              DAC-ECAT Studio · workspace.dacat · TwinCAT ADS ●&nbsp;
              <span className="text-brand-teal">Connected</span>
            </span>
            <div className="flex gap-2 opacity-40">
              <Image src="/brand/svg/icons-v2/settings.svg" width={14} height={14} alt="settings" className="invert opacity-40" />
            </div>
          </div>

          {/* Panel layout */}
          <div className="grid h-80" style={{ gridTemplateColumns: '16% 1fr 1fr 22%' }}>
            {/* File explorer */}
            <div className="border-r border-brand-border p-3 overflow-hidden">
              <p className="font-mono text-[9px] text-brand-teal tracking-[0.2em] mb-3 uppercase flex items-center gap-1.5">
                <Image src="/brand/svg/icons-v2/file-explorer.svg" width={12} height={12} alt="" style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(61%) saturate(500%) hue-rotate(130deg)' }} />
                Explorer
              </p>
              {MOCK_FILES.map((f, i) => (
                <p key={i} className={`font-mono text-[9px] py-[2px] truncate ${f.color}`}>{f.name}</p>
              ))}
            </div>

            {/* Monaco editor */}
            <div className="border-r border-brand-border overflow-hidden">
              <div className="flex items-center border-b border-brand-border bg-brand-bg/40 px-3 py-1.5">
                <span className="font-mono text-[9px] text-brand-amber border-b border-brand-amber pb-1 mr-3">log_sine.py</span>
                <span className="font-mono text-[9px] text-brand-dim">fft_analysis.py</span>
              </div>
              <div className="p-3 font-mono text-[9px] leading-[1.6]">
                <p><span className="text-brand-blue">import</span> <span className="text-brand-teal">pyads</span><span className="text-brand-text">, json, time, csv</span></p>
                <p className="text-brand-dim/60">&nbsp;</p>
                <p className="text-brand-dim"># Connect via ADS</p>
                <p><span className="text-brand-teal">plc</span><span className="text-brand-text"> = pyads.Connection(</span></p>
                <p className="pl-4"><span className="text-brand-amber">&apos;127.0.0.1.1.1&apos;</span><span className="text-brand-text">, pyads.PORT_TC3_PLC1)</span></p>
                <p><span className="text-brand-teal">plc</span><span className="text-brand-text">.open()</span></p>
                <p className="text-brand-dim/60">&nbsp;</p>
                <p><span className="text-brand-blue">value</span><span className="text-brand-text"> = plc.read_by_name(</span></p>
                <p className="pl-4"><span className="text-brand-amber">&apos;GVL.sine_va2&apos;</span><span className="text-brand-text">, pyads.PLCTYPE_LREAL)</span></p>
                <p><span className="text-brand-text">print(</span><span className="text-brand-teal">f&apos;{`{value:.3f}`}&apos;</span><span className="text-brand-text">)</span></p>
              </div>
            </div>

            {/* Logger panel */}
            <div className="border-r border-brand-border overflow-hidden">
              <div className="flex items-center gap-2 border-b border-brand-border bg-brand-bg/40 px-3 py-1.5">
                <Image src="/brand/svg/icons-v2/logger-recorder.svg" width={12} height={12} alt="" style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(61%) saturate(500%) hue-rotate(130deg)' }} />
                <span className="font-mono text-[9px] text-brand-teal tracking-wider uppercase">Logger</span>
              </div>
              <div className="p-3 font-mono text-[9px] leading-[1.7] space-y-0.5">
                {[
                  { t: '14:30:22.001', msg: '[ADS] Connected 127.0.0.1.1.1:851', c: 'text-brand-teal' },
                  { t: '14:30:22.045', msg: '[VAR] Scanned 247 symbols', c: 'text-brand-text' },
                  { t: '14:30:23.112', msg: '[LOG] Recording started → log_2ch_…csv', c: 'text-brand-text' },
                  { t: '14:30:24.003', msg: '[SCR] Running log_sine.py', c: 'text-brand-amber' },
                  { t: '14:30:24.891', msg: '  > 7.014', c: 'text-brand-dim' },
                  { t: '14:30:25.002', msg: '  > 7.892', c: 'text-brand-dim' },
                  { t: '14:30:25.999', msg: '[LOG] 1000 rows written', c: 'text-brand-teal' },
                ].map((row, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-brand-dim/50 flex-shrink-0">{row.t}</span>
                    <span className={row.c}>{row.msg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Variable explorer */}
            <div className="overflow-hidden">
              <div className="flex items-center gap-2 border-b border-brand-border bg-brand-bg/40 px-3 py-1.5">
                <Image src="/brand/svg/icons-v2/variable-explorer.svg" width={12} height={12} alt="" style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(61%) saturate(500%) hue-rotate(130deg)' }} />
                <span className="font-mono text-[9px] text-brand-teal tracking-wider uppercase">Variables</span>
              </div>
              <div className="p-3">
                <p className="font-mono text-[8px] text-brand-dim mb-2 tracking-wider uppercase">GVL · 247 symbols</p>
                {MOCK_VARS.map((v) => (
                  <div key={v.name} className="flex items-center gap-1.5 py-[2px]">
                    <span
                      className="font-mono text-[8px] px-1 rounded-sm flex-shrink-0"
                      style={{
                        background: v.type === 'BOOL' ? 'rgba(0,136,255,0.15)' : v.type.startsWith('L') ? 'rgba(0,229,200,0.12)' : 'rgba(255,170,0,0.12)',
                        color: v.type === 'BOOL' ? '#0088ff' : v.type.startsWith('L') ? '#00e5c8' : '#ffaa00',
                      }}
                    >
                      {v.type}
                    </span>
                    <span className="font-mono text-[8px] text-brand-text flex-1 truncate">{v.name.replace('GVL.', '')}</span>
                    <span className="font-mono text-[8px] text-brand-teal">{v.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center font-mono text-xs text-brand-dim tracking-wider mt-4">
          DAC-ECAT Studio — a dockable workspace designed for EtherCAT engineering
        </p>
      </div>
    </section>
  )
}
