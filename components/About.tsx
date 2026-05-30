const TIMELINE = [
  {
    period: '2017 – 2023',
    role: 'Senior Aerospace Engineer',
    org: 'Bihrle Applied Research, Inc. & GmbH',
    location: 'Berlin, Germany & Wright-Patterson AFB, Ohio',
    accent: 'teal',
    points: [
      'Responsible for full migration of legacy electrical, mechanical, and software systems for a vertical wind tunnel test facility in central Germany — reverse engineered the original system with zero documentation.',
      'Designed and developed new analysis software integrating TwinCAT toolchains with MATLAB: real-time control, front-end and back-end development, and post-processing functionality.',
      'Supported aircraft testing activities at both the German facility and Wright-Patterson Air Force Base.',
      'Co-author on a NAVAIR tiltrotor low-speed obstacle-induced downwash recirculation study — responsible for all electrical, software, motor control, system integration, and training efforts.',
    ],
  },
  {
    period: '2015 – 2017',
    role: 'Mechanical Engineer II',
    org: 'Canon Virginia, Inc.',
    location: 'Virginia, USA',
    accent: 'blue',
    points: [
      'Migrated a 100-foot, three-story production line to a new process — eight separate processing areas, full reconstruction of hardware enclosures and equipment.',
      'Planned, designed, and tested automated production equipment and control systems. Created detailed schematics, panel layouts, and system architecture drawings; wrote and verified associated PLC/HMI programs.',
    ],
  },
  {
    period: '2013 – 2015',
    role: 'Electrical Engineer / Designer',
    org: 'PSC',
    location: 'USA',
    accent: 'amber',
    points: [
      'Power stage and PLC-based control design for single, split, and three-phase systems.',
      'Software development using LabVIEW NI PXI embedded controller platforms for DAQ applications.',
      'Design applications: frequency converters, fuel management systems, UPS/diesel engine automation, fiber optic monitoring, and HMI design.',
    ],
  },
  {
    period: '2010 – 2012',
    role: 'Lead Electronic Systems Engineer',
    org: 'Aker Wade Power Technologies',
    location: 'USA',
    accent: 'teal',
    points: [
      'System design of Level III 50kW–80kW DC fast-charge stations for electric vehicles — schematic design, multi-layer PCB layout, prototype vehicle simulators, and user interface electronics.',
      'Global commissioning and CE standards testing; supervised environmental testing of units overseas.',
    ],
  },
  {
    period: '2004 – 2008',
    role: 'Research Assistant',
    org: 'Virginia Tech',
    location: 'Blacksburg, Virginia',
    accent: 'blue',
    points: [
      'Morphing Wing UAVs: structural, power, communication, and electrical system design for small-scale piezo-morphing aircraft. Scanning Laser Doppler Vibrometer (SLDV) experimentation for structural identification.',
      'Designed and developed optically isolated power electronics (2500V) for piezoelectric actuation systems. Designed RF proportional PWM-to-DC converter hardware and firmware.',
      'Optical Coherence Tomography: designed a working prototype medical imaging device with multithreaded, state-driven UI in three months.',
    ],
  },
]

const PUBLICATIONS = [
  'O. Bilgen, K. Kochersberger, E.C. Diggs et al. Morphing Wing Micro-Air-Vehicles via Macro-Fiber-Composite Actuators. AIAA/ASME/ASCE/AHS/ASC Structures, Structural Dynamics, and Materials Conference, 2007.',
  'O. Bilgen, K. Kochersberger, E.C. Diggs et al. Morphing Wing Aerodynamic Control via Macro-Fiber-Composite Actuators in an Unmanned Aircraft. AIAA Infotech 2007.',
  'E.C. Diggs, O. Bilgen et al. Structural Characteristics via SLDV for a Class of Morphing Micro-Air-Vehicles. Proc. SPIE 6561, 2007.',
  'M. Johnson and E.C. Diggs. Development of an Analog Controller for Tuning an Adaptive-Passive Control Device. ASME International Mechanical Engineering Congress.',
  'Mark Silva, Michael Corbett, Richard Prevost, E.C. Diggs et al. Model-Scale Investigation of Tiltrotor Low-speed Obstacle-Induced Downwash Recirculation. NAVAIR Public Release 2023.',
]

const ACCENT: Record<string, string> = {
  teal: 'border-brand-teal/20 text-brand-teal',
  blue: 'border-brand-blue/20 text-brand-blue',
  amber: 'border-brand-amber/20 text-brand-amber',
}

export default function About() {
  return (
    <section className="pt-28 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
            — About —
          </p>
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-wider text-brand-bright uppercase mb-5">
            Ed Diggs
          </h1>
          <p className="font-mono text-brand-text text-sm leading-relaxed max-w-xl mx-auto">
            Founder and developer of DAC-ECAT Studio. Aerospace engineer, control systems engineer, and TwinCAT integrator based in Berlin, Germany.
          </p>
        </div>

        {/* Origin story */}
        <div className="mb-14 rounded-lg border border-brand-teal/20 bg-brand-teal/5 p-6 md:p-8">
          <p className="font-mono text-[10px] tracking-[0.2em] text-brand-teal uppercase mb-3">Origin</p>
          <p className="font-mono text-sm text-brand-text leading-relaxed mb-4">
            I spent six years as a Senior Aerospace Engineer at a vertical wind tunnel test facility in Berlin — responsible for migrating legacy control systems, building TwinCAT integration software, and running data acquisition for military aircraft testing at Wright-Patterson Air Force Base.
          </p>
          <p className="font-mono text-sm text-brand-text leading-relaxed">
            Every day I worked around the gaps in TwinCAT tooling: fragmented data logging, no scripting environment, no way to put a live HMI and a Python script and a terminal in the same window. DAC-ECAT Studio is what I wish I had built six years ago.
          </p>
        </div>

        {/* Education */}
        <div className="mb-14">
          <h2 className="font-orbitron font-bold text-sm tracking-wider text-brand-bright uppercase mb-5">Education</h2>
          <div className="space-y-3">
            {[
              { degree: 'MS Aerospace Engineering', focus: 'Dynamics and Control', school: 'Virginia Tech', year: '2008' },
              { degree: 'MS Applied Mathematics', focus: 'Optimization and Control', school: 'Virginia Tech', year: '2008' },
              { degree: 'BS Mechanical Engineering', focus: 'Minor: Mathematics', school: 'Virginia Tech', year: '2005' },
            ].map((e) => (
              <div key={e.degree} className="flex items-start justify-between gap-4 py-3 border-b border-brand-border">
                <div>
                  <p className="font-mono text-xs text-brand-bright">{e.degree}</p>
                  <p className="font-mono text-[11px] text-brand-dim mt-0.5">{e.focus} · {e.school}</p>
                </div>
                <span className="font-mono text-[11px] text-brand-dim flex-shrink-0">{e.year}</span>
              </div>
            ))}
          </div>
          <p className="font-mono text-[10px] text-brand-dim mt-3 tracking-wider">
            ASME/Boeing Best Paper Award — AIAA Paper 2007-178
          </p>
        </div>

        {/* Experience timeline */}
        <div className="mb-14">
          <h2 className="font-orbitron font-bold text-sm tracking-wider text-brand-bright uppercase mb-6">Experience</h2>
          <div className="space-y-8">
            {TIMELINE.map((t) => (
              <div key={t.period} className={`rounded-lg border-l-2 pl-5 ${ACCENT[t.accent]}`}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <span className="font-orbitron font-bold text-xs tracking-wider text-brand-bright">{t.role}</span>
                  <span className="font-mono text-[11px] text-brand-dim">{t.period}</span>
                </div>
                <p className="font-mono text-[11px] text-brand-dim mb-3">{t.org} · {t.location}</p>
                <ul className="space-y-2">
                  {t.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-mono text-brand-dim text-xs flex-shrink-0">·</span>
                      <span className="font-mono text-xs text-brand-text leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h2 className="font-orbitron font-bold text-sm tracking-wider text-brand-bright uppercase mb-5">Publications</h2>
          <ul className="space-y-3">
            {PUBLICATIONS.map((pub, i) => (
              <li key={i} className="font-mono text-[11px] text-brand-text leading-relaxed border-b border-brand-border pb-3">
                {pub}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
