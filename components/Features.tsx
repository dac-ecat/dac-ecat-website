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
      'Auto-scan any TwinCAT ADS or EtherCAT SOEM target. Browse all PLC symbols with type-annotated badges — LREAL, INT, BOOL, DWORD, and more. Filter, search, and pin variables for logging.',
  },
  {
    icon: '/brand/svg/icons-v2/monaco-editor.svg',
    title: 'Python Script Editor',
    accent: 'blue',
    description:
      'Full Monaco editor with Python syntax highlighting and IntelliSense. Built-in Pyodide REPL to execute scripts without leaving the workspace. Tab-based multi-file editing.',
  },
  {
    icon: '/brand/svg/icons-v2/claude-ai-chat.svg',
    title: 'AI Code Assistants',
    accent: 'amber',
    description:
      'Claude AI and Cursor agent panels wired directly to your project context. AI sees your full variable list, ADS connection config, and all scripts — generates advanced data logging code on demand.',
  },
  {
    icon: '/brand/svg/icons-v2/logger-recorder.svg',
    title: 'Live Data Logger',
    accent: 'teal',
    description:
      'Record any PLC variables to timestamped CSVs with millisecond-precision timestamps. Multi-channel logs, auto-named output files, comment headers for easy pandas ingestion.',
  },
  {
    icon: '/brand/svg/icons-v2/ecat-network.svg',
    title: 'EtherCAT Native',
    accent: 'blue',
    description:
      'First-class TwinCAT ADS, EtherCAT SOEM, and Modbus TCP support. Connect to local TwinCAT runtime or any remote AMS target. Connection settings persist with the project.',
  },
  {
    icon: '/brand/svg/icons-v2/file-explorer.svg',
    title: 'Solution Explorer',
    accent: 'amber',
    description:
      'Project-aware file browser with custom icons for .py, .dacat, .dacvar, .csv, and calibration files. Double-click to open in the Monaco editor.',
  },
  {
    icon: '/brand/svg/icons-v2/terminal-shell.svg',
    title: 'AI Terminals',
    accent: 'teal',
    description:
      'PuTTY-piped terminal panels running Claude Code and Cursor CLI inside the project folder. AI agents can read your scripts, variable lists, and build advanced tooling autonomously.',
  },
  {
    icon: '/brand/svg/icons-v2/plot-waveform.svg',
    title: 'Live Waveform Charts',
    accent: 'blue',
    description:
      'Real-time scope charts backed by a ring-buffer engine with intelligent decimation. Visualize PLC signals live without dropping frames on high-frequency data.',
  },
  {
    icon: '/brand/svg/icons-v2/output-console.svg',
    title: 'HMI Panel Embedding',
    accent: 'amber',
    description:
      'Dock any web-based TwinCAT HMI or custom dashboard as an iframe panel. Your existing HMIs become first-class workspace citizens with no extra software.',
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
