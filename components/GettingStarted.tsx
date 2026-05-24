const REQUIREMENTS = [
  { item: 'TwinCAT 3', detail: 'Build 4024.56 or newer' },
  { item: 'DAC-ECAT Studio', detail: 'Single .exe — no installer needed' },
  { item: 'FB_Queue library', detail: 'Beckhoff TwinCAT 3 library' },
  { item: 'FB_StateMachine library', detail: 'Beckhoff TwinCAT 3 library' },
  { item: 'DacEcat library', detail: 'Provided with DAC-ECAT Studio' },
  { item: 'EtherCAT drive or virtual axis', detail: 'Hardware or TC3 simulation axis' },
]

const PART1_STEPS = [
  {
    num: '01',
    title: 'Create a new TwinCAT 3 project',
    detail: 'Open TwinCAT XAE in Visual Studio. Create a new TwinCAT project and add a PLC project beneath it.',
  },
  {
    num: '02',
    title: 'Add library references',
    detail: 'In the PLC project, open References → Add Library. Add Tc3_MC2 (motion), FB_Queue, FB_StateMachine, and DacEcat.',
  },
  {
    num: '03',
    title: 'Define the axis state enum',
    detail: null,
    code: `TYPE E_Axis :
(
    Idle      := 0,
    Homing    := 1,
    Moving    := 2,
    Error     := 99
);
END_TYPE`,
  },
  {
    num: '04',
    title: 'Implement FB_MotionController',
    detail: 'Create a function block that inherits from the DacEcat base class and overrides the four standard methods:',
    code: `FUNCTION_BLOCK FB_MotionController EXTENDS FB_DacEcatAxis
VAR
    _axis : AXIS_REF;
    _mcPower : MC_Power;
    _mcHome  : MC_Home;
    _mcMove  : MC_MoveAbsolute;
END_VAR

METHOD UpdateInputs
    _axis.ReadStatus();

METHOD UpdateOutputs
    _mcPower(Axis := _axis, Enable := TRUE, BufferMode := MC_Aborting);
    _mcHome(Axis := _axis, Execute := FALSE);
    _mcMove(Axis := _axis, Execute := FALSE);

METHOD OnEStop
    _mcPower(Axis := _axis, Enable := FALSE, BufferMode := MC_Aborting);

METHOD State_Home : BOOL
    _mcHome(Axis := _axis, Execute := TRUE, HomingMode := MC_DefaultHoming);
    State_Home := _mcHome.Done;

METHOD State_Move : BOOL
    _mcMove(Axis := _axis, Execute := TRUE,
            Position := CommandPosition,
            Velocity := CommandVelocity,
            BufferMode := MC_Aborting);
    State_Move := _mcMove.Done;`,
  },
  {
    num: '05',
    title: 'Declare global variables (GVL_IO)',
    detail: 'Create a Global Variable List and declare the axis and controller instances:',
    code: `VAR_GLOBAL
    Axis1       : AXIS_REF;
    Controller1 : FB_MotionController;
    Queue1      : FB_Queue;
END_VAR`,
  },
  {
    num: '06',
    title: 'Wire MAIN program',
    detail: 'Call the controller and queue cyclic methods from the main task:',
    code: `PROGRAM MAIN
VAR END_VAR

Controller1.Axis := GVL_IO.Axis1;
Controller1.Queue := GVL_IO.Queue1;
GVL_IO.Queue1();
GVL_IO.Controller1();`,
  },
  {
    num: '07',
    title: 'Link EtherCAT axis to hardware',
    detail: 'In the I/O tree, map Axis1 to your EtherCAT drive or NC axis. For a virtual axis, create a simulated axis in the NC configuration and link it the same way.',
  },
  {
    num: '08',
    title: 'Activate, build, and run',
    detail: 'Click Activate Configuration, confirm the download, then set the TwinCAT system to Run Mode. Verify the axis powers up and the DacEcat symbols appear in the ADS symbol browser.',
  },
]

const PART2_STEPS = [
  'Open your TwinCAT project and add a new HMI project (TwinCAT HMI Server).',
  'In the HMI project, add the DacEcatHMI control library via the NuGet package reference.',
  'Drop a DacEcatHMI panel onto your HMI page and bind it to the Controller1 symbol.',
  'Set the HMI server port (default 1010) and configure the ADS route if running on a remote IPC.',
  'Publish the HMI — it will be accessible at http://localhost:1010 and can be embedded directly in DAC-ECAT Studio.',
]

const PART3_STEPS = [
  {
    num: '10',
    title: 'Launch DAC-ECAT Studio',
    detail: 'Double-click the DAC-ECAT Studio executable. No installation required — the app extracts its runtime on first launch. Create a new project and give it a name; the folder structure (Config/, Scripts/, Outputdata/, Calibrations/) is created automatically.',
  },
  {
    num: '11',
    title: 'Connect and explore variables',
    detail: 'In the Variable Explorer panel, enter the AMS Net ID of your TwinCAT runtime (e.g. 127.0.0.1.1.1 for localhost). Click Scan — the full PLC symbol tree appears with live values, type badges, and DAC-ECAT structured type annotations. Click the record button on any variable to begin logging to a timestamped CSV.',
  },
  {
    num: '12',
    title: 'Embed the TwinCAT HMI',
    detail: 'Open a new Embedded Panel view. Paste the HMI URL (http://localhost:1010). The HMI docks as a first-class panel in your workspace alongside the variable explorer and scope charts. Drag, resize, or float it like any other panel.',
  },
  {
    num: '13',
    title: 'Use Claude to generate a data logging script',
    detail: 'Open an integrated terminal panel and launch Claude Code (or any AI agent). Ask it to write a Python data logging script for your axis variables — the AI has full access to your variable list, ADS config, and project folder. Drop the generated script into the Script Editor, press Play, and watch the data flow into Outputdata/.',
  },
]

const NEXT_STEPS = [
  { label: 'Add more axes', detail: 'Repeat the FB_MotionController pattern for each additional drive — the queue and state machine scale to N axes with no architectural changes.' },
  { label: 'Build scope charts', detail: 'Right-click any variable in the explorer and choose Open Scope — a live waveform chart opens with warning and alarm band overlays pre-configured from your DAC-ECAT type annotations.' },
  { label: 'Create dashboards', detail: 'Ask the AI terminal to generate a Streamlit or Plotly Dash dashboard from your logged CSV data. Drop the dashboard URL into an Embedded Panel view — it live-reloads as new data arrives.' },
  { label: 'Explore the Product page', detail: 'See the full feature list, technical architecture, and competitive comparison on the Product Overview page.' },
]

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-3 rounded-md border border-brand-border bg-brand-bg p-4 overflow-x-auto">
      <code className="font-mono text-[11px] leading-relaxed text-brand-teal/90 whitespace-pre">
        {code}
      </code>
    </pre>
  )
}

export default function GettingStarted() {
  return (
    <section className="pt-28 pb-24 px-6 min-h-screen relative">
      <div className="absolute inset-0 bg-hero-radial opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
            — Workflow Guide —
          </p>
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-wider text-brand-bright uppercase mb-5">
            Getting Started
          </h1>
          <p className="font-mono text-brand-text max-w-xl mx-auto leading-relaxed text-sm">
            From zero to a moving motor with live data acquisition in three parts.
            TwinCAT PLC → TwinCAT HMI → DAC-ECAT Studio.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-16 rounded-lg border border-brand-border bg-brand-surface p-6">
          <h2 className="font-orbitron font-bold text-sm tracking-wider text-brand-teal uppercase mb-5">
            Requirements
          </h2>
          <div className="divide-y divide-brand-border">
            {REQUIREMENTS.map(({ item, detail }) => (
              <div key={item} className="flex items-center justify-between py-3 gap-6">
                <span className="font-mono text-xs text-brand-bright">{item}</span>
                <span className="font-mono text-xs text-brand-dim text-right">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded border border-brand-teal/40 bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
              <span className="font-orbitron font-bold text-brand-teal text-xs">1</span>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-brand-dim uppercase">Part One</p>
              <h2 className="font-orbitron font-bold text-lg tracking-wider text-brand-bright uppercase">
                TwinCAT PLC Setup
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {PART1_STEPS.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div className="flex-shrink-0 w-10 text-right">
                  <span className="font-orbitron font-bold text-xs text-brand-teal/50">{step.num}</span>
                </div>
                <div className="flex-1 border-l border-brand-border pl-5 pb-6">
                  <h3 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-2">
                    {step.title}
                  </h3>
                  {step.detail && (
                    <p className="font-mono text-xs text-brand-text leading-relaxed">{step.detail}</p>
                  )}
                  {step.code && <CodeBlock code={step.code} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded border border-brand-blue/40 bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
              <span className="font-orbitron font-bold text-brand-blue text-xs">2</span>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-brand-dim uppercase">Part Two</p>
              <h2 className="font-orbitron font-bold text-lg tracking-wider text-brand-bright uppercase">
                TwinCAT HMI Setup
              </h2>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0 w-10 text-right">
              <span className="font-orbitron font-bold text-xs text-brand-blue/50">09</span>
            </div>
            <div className="flex-1 border-l border-brand-border pl-5">
              <h3 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-3">
                Create and publish the TwinCAT HMI
              </h3>
              <ol className="space-y-3">
                {PART2_STEPS.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono text-xs text-brand-blue/60 flex-shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                    <span className="font-mono text-xs text-brand-text leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Part 3 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded border border-brand-amber/40 bg-brand-amber/10 flex items-center justify-center flex-shrink-0">
              <span className="font-orbitron font-bold text-brand-amber text-xs">3</span>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-brand-dim uppercase">Part Three</p>
              <h2 className="font-orbitron font-bold text-lg tracking-wider text-brand-bright uppercase">
                DAC-ECAT Studio
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {PART3_STEPS.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div className="flex-shrink-0 w-10 text-right">
                  <span className="font-orbitron font-bold text-xs text-brand-amber/50">{step.num}</span>
                </div>
                <div className="flex-1 border-l border-brand-border pl-5 pb-6">
                  <h3 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs text-brand-text leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary callout */}
        <div className="mb-16 rounded-lg border border-brand-teal/20 bg-brand-teal/5 p-6">
          <p className="font-mono text-[10px] tracking-[0.2em] text-brand-teal uppercase mb-2">Summary</p>
          <p className="font-mono text-sm text-brand-text leading-relaxed">
            You now have a TwinCAT PLC running a queue-based motion controller, a TwinCAT HMI serving live axis status,
            and DAC-ECAT Studio connected to both — with live variable logging, an embedded HMI panel, and an AI-generated
            data logging script running in the workspace.
          </p>
        </div>

        {/* Next Steps */}
        <div>
          <h2 className="font-orbitron font-bold text-sm tracking-wider text-brand-bright uppercase mb-6">
            Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {NEXT_STEPS.map(({ label, detail }) => (
              <div
                key={label}
                className="rounded-lg border border-brand-border bg-brand-surface p-5 hover:border-brand-teal/40 transition-colors duration-200"
              >
                <h3 className="font-orbitron font-bold text-xs tracking-wider text-brand-teal uppercase mb-2">
                  {label}
                </h3>
                <p className="font-mono text-xs text-brand-text leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
