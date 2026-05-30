type EntryStatus = 'upcoming' | 'released'
type TagType = 'feature' | 'improvement' | 'fix' | 'breaking'

interface ChangeItem {
  tag: TagType
  text: string
}

interface ChangelogEntry {
  version: string
  date: string
  status: EntryStatus
  summary: string
  changes: ChangeItem[]
}

const ENTRIES: ChangelogEntry[] = [
  {
    version: 'v1.0.0',
    date: 'Coming Soon — Early Access',
    status: 'upcoming',
    summary: 'First public release of DAC-ECAT Studio. Single portable executable for TwinCAT and EtherCAT engineers.',
    changes: [
      { tag: 'feature', text: 'Variable Explorer — live TwinCAT ADS symbol browsing with type badges, live values, and one-click CSV logging' },
      { tag: 'feature', text: 'Multi-language Script Editor powered by Monaco (the VS Code engine) with automatic runtime detection from file extension' },
      { tag: 'feature', text: 'Live Data Logger — millisecond-precision multi-channel logging with auto-named, structured CSV output' },
      { tag: 'feature', text: 'Integrated PTY terminal panels — Claude Code, Cursor, and any CLI AI agent run natively in the workspace' },
      { tag: 'feature', text: 'Live Waveform Scopes — real-time charts with range, warning, and alarm band overlays from variable explorer' },
      { tag: 'feature', text: 'Embedded Panel views — TwinCAT HMIs, Streamlit apps, Plotly Dash dashboards dock as first-class panels' },
      { tag: 'feature', text: 'GoldenLayout 2 dockable workspace — drag, resize, tab, float, and pop out any panel; layout saved per project' },
      { tag: 'feature', text: 'Project Workspace — auto-created Config/, Scripts/, Outputdata/, Calibrations/ folder structure' },
      { tag: 'feature', text: 'First-class TwinCAT ADS connectivity — local and remote AMS Net ID routing, DAC-ECAT structured type auto-enumeration' },
    ],
  },
  {
    version: 'v1.1.0',
    date: 'Near Term Roadmap',
    status: 'upcoming',
    summary: 'Extended protocol support and scope export capabilities.',
    changes: [
      { tag: 'feature', text: 'EtherCAT SOEM direct device scan — enumerate slaves without a TwinCAT runtime' },
      { tag: 'feature', text: 'Modbus TCP device support — read coils, registers, and diagnostics directly from the variable explorer' },
      { tag: 'feature', text: 'Multi-variable scope overlay export — PNG and CSV export from waveform scope windows' },
      { tag: 'improvement', text: 'DAC-ECAT structured type alarm limit rendering on scope overlays' },
    ],
  },
  {
    version: 'v1.2.0',
    date: 'Long Term Roadmap',
    status: 'upcoming',
    summary: 'Collaboration, cloud logging, and expanded AI integration.',
    changes: [
      { tag: 'feature', text: 'Cloud project sync — share workspaces and logged data sets across team members' },
      { tag: 'feature', text: 'AI auto-script generation from variable selection — generate a complete logging script from a right-click' },
      { tag: 'feature', text: 'Annotation layer for scope charts — mark events, faults, and calibration points on live data' },
      { tag: 'feature', text: 'OPC-UA browser — connect to any OPC-UA server alongside existing ADS targets' },
    ],
  },
]

const TAG_STYLES: Record<TagType, string> = {
  feature: 'text-brand-teal border-brand-teal/30 bg-brand-teal/10',
  improvement: 'text-brand-blue border-brand-blue/30 bg-brand-blue/10',
  fix: 'text-brand-amber border-brand-amber/30 bg-brand-amber/10',
  breaking: 'text-red-400 border-red-400/30 bg-red-400/10',
}

export default function Changelog() {
  return (
    <section className="pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
            — Release Notes —
          </p>
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-wider text-brand-bright uppercase mb-5">
            Changelog
          </h1>
          <p className="font-mono text-brand-text text-sm leading-relaxed max-w-md mx-auto">
            DAC-ECAT Studio is in active development. This changelog will be updated with every release starting from v1.0.0 Early Access.
          </p>
        </div>

        {/* Entries */}
        <div className="space-y-12">
          {ENTRIES.map((entry) => (
            <div key={entry.version} className="flex gap-6">
              {/* Timeline spine */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-3 h-3 rounded-full border-2 mt-1 ${
                  entry.status === 'released'
                    ? 'bg-brand-teal border-brand-teal'
                    : 'bg-brand-bg border-brand-dim'
                }`} />
                <div className="w-px flex-1 bg-brand-border mt-2" />
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <span className="font-orbitron font-bold text-lg tracking-wider text-brand-bright">
                    {entry.version}
                  </span>
                  <span className={`font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded border ${
                    entry.status === 'released'
                      ? 'text-brand-teal border-brand-teal/30 bg-brand-teal/10'
                      : 'text-brand-dim border-brand-dim/30 bg-brand-dim/10'
                  }`}>
                    {entry.status === 'released' ? 'Released' : 'Upcoming'}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-brand-dim tracking-wider mb-3">{entry.date}</p>
                <p className="font-mono text-xs text-brand-text leading-relaxed mb-4">{entry.summary}</p>

                <ul className="space-y-2">
                  {entry.changes.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 rounded border mt-0.5 ${TAG_STYLES[c.tag]}`}>
                        {c.tag}
                      </span>
                      <span className="font-mono text-xs text-brand-text leading-relaxed">{c.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 font-mono text-xs text-brand-dim text-center tracking-wider">
          Subscribed to Early Access? You&apos;ll be the first to know when v1.0.0 ships.
        </p>
      </div>
    </section>
  )
}
