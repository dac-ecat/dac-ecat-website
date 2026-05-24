import Image from 'next/image'

type AccentColor = 'teal' | 'blue' | 'amber'

interface Feature {
  icon: string
  title: string
  accent: AccentColor
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: '/brand/svg/icons-v2/variable-explorer.svg',
    title: 'Variable Explorer',
    accent: 'teal',
    description:
      'Native Rust backend connects to any AMS Net ID — local or remote. Full PLC symbol tree with live values and type badges. Record button on any variable starts logging immediately to a timestamped CSV.',
  },
  {
    icon: '/brand/svg/icons-v2/monaco-editor.svg',
    title: 'Multi-Language Script Editor',
    accent: 'blue',
    description:
      'Monaco editor — the same engine powering VS Code — with automatic runtime detection from file extension. One Play button runs Python, Lua, Node, R, Julia, PowerShell, or any PATH-accessible tool.',
  },
  {
    icon: '/brand/svg/icons-v2/claude-ai-chat.svg',
    title: 'AI-Assisted Engineering',
    accent: 'amber',
    description:
      'AI agents run inside the live project folder with full access to your variable list, ADS config, scripts, and logged data. Describe what you need — AI generates correct, runnable industrial tooling in seconds.',
  },
  {
    icon: '/brand/svg/icons-v2/logger-recorder.svg',
    title: 'Live Data Logger',
    accent: 'teal',
    description:
      'Multi-channel logging with millisecond-precision timestamps. Auto-named CSV output in structured project folders. User-defined custom headers — ready for pandas, MATLAB, or Excel without post-processing.',
  },
  {
    icon: '/brand/svg/icons-v2/ecat-network.svg',
    title: 'TwinCAT ADS Native',
    accent: 'blue',
    description:
      'First-class TwinCAT ADS connectivity with Beckhoff AMS Net ID routing. Local or remote targets. DAC-ECAT structured types auto-enumerate on scan — alarm limits and warning bands render automatically.',
  },
  {
    icon: '/brand/svg/icons-v2/file-explorer.svg',
    title: 'Project Workspace',
    accent: 'amber',
    description:
      'GoldenLayout panel configuration saves with every project — every panel, position, tab, and size restored on next open. Project folder structure created automatically: Config/, Scripts/, Outputdata/, Calibrations/.',
  },
  {
    icon: '/brand/svg/icons-v2/terminal-shell.svg',
    title: 'Integrated Terminals',
    accent: 'teal',
    description:
      'Full PTY terminal panels piped directly into the workspace. Claude Code, Cursor, and any CLI-based AI agent run natively. Multiple terminals open simultaneously — one per script, one per AI agent, one for shell work.',
  },
  {
    icon: '/brand/svg/icons-v2/plot-waveform.svg',
    title: 'Live Waveform Scopes',
    accent: 'blue',
    description:
      'Real-time scope charts with range, warning, and alarm band overlays. Single-variable in-panel live plots for instant signal checking. Multi-variable scope windows right-click from the variable explorer.',
  },
  {
    icon: '/brand/svg/icons-v2/output-console.svg',
    title: 'Embedded Panel Views',
    accent: 'amber',
    description:
      'Any web-based interface docks as a first-class panel — TwinCAT HMIs, Streamlit dashboards, Plotly Dash apps, vendor tools. AI-generated dashboards launch with one click and embed automatically.',
  },
]

const ACCENT_STYLES: Record<AccentColor, { border: string; hover: string; shadow: string; label: string; iconFilter: string; badge: string }> = {
  teal: {
    border: 'border-brand-teal/15',
    hover: 'hover:border-brand-teal/45',
    shadow: 'hover:shadow-teal-glow',
    label: 'text-brand-teal',
    badge: 'bg-brand-teal/10',
    iconFilter:
      'brightness(0) saturate(100%) invert(85%) sepia(61%) saturate(500%) hue-rotate(130deg)',
  },
  blue: {
    border: 'border-brand-blue/15',
    hover: 'hover:border-brand-blue/45',
    shadow: 'hover:shadow-blue-glow',
    label: 'text-brand-blue',
    badge: 'bg-brand-blue/10',
    iconFilter:
      'brightness(0) saturate(100%) invert(35%) sepia(100%) saturate(1200%) hue-rotate(196deg)',
  },
  amber: {
    border: 'border-brand-amber/15',
    hover: 'hover:border-brand-amber/45',
    shadow: 'hover:shadow-amber-glow',
    label: 'text-brand-amber',
    badge: 'bg-brand-amber/10',
    iconFilter:
      'brightness(0) saturate(100%) invert(70%) sepia(80%) saturate(700%) hue-rotate(5deg)',
  },
}

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 border-t border-brand-border relative">
      <div className="absolute inset-0 bg-feature-radial" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
            — Workspace Panels —
          </p>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-wider text-brand-bright uppercase mb-5">
            Everything In One Place
          </h2>
          <p className="font-mono text-brand-text max-w-xl mx-auto leading-relaxed text-sm">
            A fully dockable IDE built for EtherCAT engineers. Drag, resize, tab, and pop out any panel. Your layout is saved with the project.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => {
            const s = ACCENT_STYLES[f.accent]
            return (
              <div
                key={f.title}
                className={`group rounded-lg border bg-brand-surface p-5 transition-all duration-300 shadow-panel cursor-default ${s.border} ${s.hover} ${s.shadow}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-md ${s.badge} border border-brand-border`}>
                    <Image
                      src={f.icon}
                      alt={f.title}
                      width={22}
                      height={22}
                      style={{ filter: s.iconFilter }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`font-orbitron font-bold text-xs tracking-wider uppercase mb-2 ${s.label}`}>
                      {f.title}
                    </h3>
                    <p className="font-mono text-brand-text text-xs leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center font-mono text-xs text-brand-dim tracking-wider">
          Powered by{' '}
          <span className="text-brand-teal">GoldenLayout 2</span> — drag, tab, pop out, or float any panel
        </p>
      </div>
    </section>
  )
}
