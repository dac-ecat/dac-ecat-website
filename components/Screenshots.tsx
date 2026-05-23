'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

const SHOTS = [
  {
    src: '/screenshots/studio-workspace.png',
    alt: 'DAC-ECAT Studio workspace with solution explorer, Python editor, variable explorer, and live scope view',
    title: 'Full workspace',
    caption:
      'Solution explorer, Monaco Python editor, logger, variable tree, and live scope — one IDE for TwinCAT and EtherCAT.',
  },
  {
    src: '/screenshots/studio-scopes.png',
    alt: 'DAC-ECAT Studio live waveform scopes for ADC channels, balance temperature, and lift force',
    title: 'Live scopes',
    caption:
      'Multi-channel waveforms with range, warning, and alarm bands — ADC channels, temperature, and force in real time.',
  },
] as const

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex !== null ? SHOTS[activeIndex] : null

  const close = useCallback(() => setActiveIndex(null), [])

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeIndex, close])

  return (
    <section id="preview" className="py-28 px-6 border-t border-brand-border relative overflow-hidden">
      <div className="absolute inset-0 bg-feature-radial opacity-80" />
      <div
        className="absolute inset-0 bg-grid-sm opacity-20"
        style={{ backgroundSize: '44px 44px' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4 text-center">
          — Product Preview —
        </p>
        <h2 className="font-orbitron font-bold text-3xl md:text-4xl tracking-wider text-brand-bright uppercase mb-5 text-center">
          See DAC-ECAT Studio
        </h2>
        <p className="font-mono text-brand-text text-sm leading-relaxed max-w-2xl mx-auto text-center mb-14">
          Real screens from the app — PLC variables, scripting, logging, and live charts in a single
          desktop workspace. Click any image for full resolution.
        </p>

        <div className="space-y-12">
          {SHOTS.map((shot, index) => (
            <figure key={shot.src} className="group">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="w-full text-left rounded-xl border border-brand-border bg-brand-surface/60 shadow-panel overflow-hidden transition-all duration-300 group-hover:shadow-panel-hover group-hover:border-brand-teal/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/60 cursor-zoom-in"
                aria-label={`${shot.title} — view full size`}
              >
                <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-brand-border bg-brand-bg/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-error/80" />
                    <span className="w-2 h-2 rounded-full bg-brand-amber/80" />
                    <span className="w-2 h-2 rounded-full bg-brand-teal/80" />
                    <span className="font-mono text-[10px] text-brand-dim tracking-wider uppercase ml-2">
                      {shot.title}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-brand-teal/80 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to enlarge
                  </span>
                </div>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto block"
                  sizes="(max-width: 1152px) 100vw, 1152px"
                />
              </button>
              <figcaption className="font-mono text-xs text-brand-dim text-center mt-4 leading-relaxed max-w-3xl mx-auto">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-brand-bg/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — full resolution`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 font-mono text-[10px] tracking-wider uppercase px-3 py-2 rounded-lg border border-brand-border text-brand-dim hover:text-brand-teal hover:border-brand-teal/50 transition-colors bg-brand-surface/90"
            aria-label="Close"
          >
            Close · Esc
          </button>

          <div
            className="relative max-w-[min(100%,1920px)] max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-orbitron text-xs tracking-wider text-brand-teal uppercase mb-3">
              {active.title}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element -- full native resolution in lightbox */}
            <img
              src={active.src}
              alt={active.alt}
              className="max-w-full max-h-[calc(92vh-3rem)] w-auto h-auto object-contain rounded-lg border border-brand-border shadow-panel"
            />
          </div>
        </div>
      )}
    </section>
  )
}
