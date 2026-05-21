interface Step {
  number: string
  title: string
  description: string
  accent: string
  code: string
  lang: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Connect to Your PLC',
    accent: '#00e5c8',
    description:
      'Point DAC-ECAT Studio at your TwinCAT runtime — local (127.0.0.1.1.1) or remote via any AMS Net ID. The Variable Explorer auto-scans every symbol, shows live values, and exposes types for scripting.',
    lang: 'json',
    code: `// layout-manager.json — saved with your project
{
  "connections": [
    {
      "type": "ethercat-twincat",
      "id": "plc-runtime",
      "ads": {
        "amsNetId": "127.0.0.1.1.1",
        "amsPort": 851
      }
    }
  ]
}`,
  },
  {
    number: '02',
    title: 'Script With AI',
    accent: '#ffaa00',
    description:
      'Open the Claude terminal — it has access to your full variable list (variables.json) and connection config. Ask it to write a data logger and it produces runnable Python in seconds. Edit it in the Monaco panel and run it with one click.',
    lang: 'python',
    code: `# Claude generates this from your variable list:
import pyads, csv, time

plc = pyads.Connection('127.0.0.1.1.1', pyads.PORT_TC3_PLC1)
plc.open()

t0 = time.perf_counter()
with open('Outputdata/sine_log.csv', 'w', newline='') as f:
    w = csv.writer(f)
    w.writerow(['time_ms', 'GVL.sine_va2', 'GVL.motor_rpm'])
    for _ in range(5000):
        t = (time.perf_counter() - t0) * 1e3
        v = plc.read_by_name('GVL.sine_va2', pyads.PLCTYPE_LREAL)
        r = plc.read_by_name('GVL.motor_rpm', pyads.PLCTYPE_INT)
        w.writerow([f'{t:.3f}', v, r])
        time.sleep(0.001)

plc.close()`,
  },
  {
    number: '03',
    title: 'Log, Visualize & Analyze',
    accent: '#0088ff',
    description:
      'Run the script from the Monaco panel. Live charts show waveforms in real time. Outputdata CSVs are stamped and ready for post-processing in Python, MATLAB, or Excel.',
    lang: 'csv',
    code: `# Outputdata/sine_log_20260521_143022.csv
time_ms,GVL.sine_va2,GVL.motor_rpm
# GVL.sine_va2=LREAL, GVL.motor_rpm=INT
0.000,7.014,1480
1.001,7.892,1481
2.003,8.741,1482
3.002,9.558,1483
4.000,10.341,1484
...
# Read in Python:
# df = pd.read_csv('sine_log.csv', comment='#')`,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 border-t border-brand-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
            — Workflow —
          </p>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-wider text-brand-bright uppercase">
            From PLC to Insight
          </h2>
        </div>

        <div className="space-y-20">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-last' : ''
              }`}
            >
              {/* Text side */}
              <div>
                <p
                  className="font-orbitron font-black text-7xl md:text-8xl leading-none mb-4 select-none"
                  style={{ color: step.accent, opacity: 0.18 }}
                >
                  {step.number}
                </p>
                <h3 className="font-orbitron font-bold text-xl md:text-2xl tracking-wider text-brand-bright uppercase mb-5">
                  {step.title}
                </h3>
                <p className="font-mono text-brand-text text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Code side */}
              <div
                className="rounded-xl border bg-brand-surface overflow-hidden shadow-panel"
                style={{ borderColor: `${step.accent}28` }}
              >
                {/* Window chrome */}
                <div
                  className="flex items-center gap-2 px-4 py-2.5 border-b"
                  style={{ borderColor: `${step.accent}18`, background: `${step.accent}06` }}
                >
                  <div className="flex gap-1.5">
                    {[0.55, 0.4, 0.28].map((o, j) => (
                      <div
                        key={j}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: step.accent, opacity: o }}
                      />
                    ))}
                  </div>
                  <span
                    className="font-mono text-[10px] tracking-wider ml-1"
                    style={{ color: `${step.accent}70` }}
                  >
                    Step {step.number} · {step.lang}
                  </span>
                </div>
                {/* Code content */}
                <pre
                  className="p-5 font-mono text-[11px] leading-[1.7] overflow-x-auto text-brand-text/90"
                  style={{ tabSize: 2 }}
                >
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
