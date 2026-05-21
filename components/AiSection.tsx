import Image from 'next/image'

const AI_FEATURES = [
  {
    icon: '/brand/svg/icons/claude.svg',
    name: 'Claude Code',
    tagline: 'Reads your variables. Builds your scripts.',
    description:
      'The Claude terminal panel runs Claude Code CLI inside your project folder. Claude can see variables.json (every PLC symbol with type and index), layout-manager.json (your ADS target), and all scripts in Test Scripts/. Ask it to build a logging pipeline, an FFT analyzer, or a PID test harness — it writes correct pyads code immediately.',
    accent: '#ffaa00',
  },
  {
    icon: '/brand/svg/icons/cursor.svg',
    name: 'Cursor Agent',
    tagline: 'AI-driven script iteration in the IDE.',
    description:
      'A dedicated Cursor Agent panel lets the AI iterate on Python scripts in the Monaco editor directly. It can refactor, extend, and debug your data logging scripts with full awareness of your project structure and EtherCAT variable types.',
    accent: '#0088ff',
  },
]

const CONTEXT_FILES = [
  { icon: '/brand/svg/icons/dacvar.svg', name: 'variables.json', desc: '247 PLC symbols · type + index offset' },
  { icon: '/brand/svg/icons/json.svg', name: 'layout-manager.json', desc: 'ADS target · AMS Net ID · port' },
  { icon: '/brand/svg/icons/py.svg', name: 'Test Scripts/*.py', desc: 'All your data logging scripts' },
  { icon: '/brand/svg/icons/csv.svg', name: 'Outputdata/*.csv', desc: 'Logged data · timestamped output' },
]

export default function AiSection() {
  return (
    <section id="ai-section" className="py-28 px-6 border-t border-brand-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-amber-radial opacity-60" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-brand-amber uppercase mb-4">
            — AI-First Design —
          </p>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-wider text-brand-bright uppercase mb-5">
            Built for AI-Assisted Engineering
          </h2>
          <p className="font-mono text-brand-text max-w-xl mx-auto leading-relaxed text-sm">
            Unlike generic tools that bolt AI on as an afterthought, DAC-ECAT Studio is designed from the ground up so AI assistants have full context about your PLC environment.
          </p>
        </div>

        {/* Context files card */}
        <div className="rounded-xl border border-brand-amber/20 bg-brand-surface shadow-panel p-6 mb-12 max-w-2xl mx-auto">
          <p className="font-mono text-xs tracking-[0.2em] text-brand-amber uppercase mb-5">
            What AI agents can see in your project:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CONTEXT_FILES.map((f) => (
              <div key={f.name} className="flex items-center gap-3 p-3 rounded-lg bg-brand-bg/60 border border-brand-border">
                <Image
                  src={f.icon}
                  alt={f.name}
                  width={20}
                  height={20}
                  style={{ filter: 'brightness(0) saturate(100%) invert(70%) sepia(80%) saturate(700%) hue-rotate(5deg)', flexShrink: 0 }}
                />
                <div>
                  <p className="font-mono text-xs text-brand-bright">{f.name}</p>
                  <p className="font-mono text-[10px] text-brand-dim">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI panels */}
        <div className="grid md:grid-cols-2 gap-6">
          {AI_FEATURES.map((ai) => (
            <div
              key={ai.name}
              className="rounded-xl border bg-brand-surface p-6 shadow-panel transition-all duration-300"
              style={{ borderColor: `${ai.accent}20` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center border"
                  style={{ background: `${ai.accent}10`, borderColor: `${ai.accent}25` }}
                >
                  <Image
                    src={ai.icon}
                    alt={ai.name}
                    width={26}
                    height={26}
                    style={{
                      filter: ai.accent === '#ffaa00'
                        ? 'brightness(0) saturate(100%) invert(70%) sepia(80%) saturate(700%) hue-rotate(5deg)'
                        : 'brightness(0) saturate(100%) invert(35%) sepia(100%) saturate(1200%) hue-rotate(196deg)',
                    }}
                  />
                </div>
                <div>
                  <h3
                    className="font-orbitron font-bold text-sm tracking-wider uppercase mb-1"
                    style={{ color: ai.accent }}
                  >
                    {ai.name}
                  </h3>
                  <p className="font-mono text-xs text-brand-bright mb-3">{ai.tagline}</p>
                  <p className="font-mono text-xs text-brand-text leading-relaxed">{ai.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center border-t border-brand-border pt-10">
          <blockquote className="font-mono text-brand-text text-sm max-w-2xl mx-auto leading-relaxed italic">
            &ldquo;Give Claude your AMS Net ID and ask it to write a multi-channel FFT logger — it produces ready-to-run pyads code in under 10 seconds.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
