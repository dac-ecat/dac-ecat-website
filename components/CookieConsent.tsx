'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  COOKIE_SETTINGS_EVENT,
  readCookiePreferences,
  saveCookiePreferences,
  type CookiePreferences,
} from '@/lib/cookies'

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean
  disabled?: boolean
  onChange: (v: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative w-11 h-6 rounded-full border transition-colors flex-shrink-0 ${
        disabled
          ? 'border-brand-teal/50 bg-brand-teal/20 cursor-not-allowed'
          : checked
            ? 'border-brand-teal bg-brand-teal/30'
            : 'border-brand-border bg-brand-surface'
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform ${
          checked ? 'translate-x-5 bg-brand-teal' : 'translate-x-0 bg-brand-dim'
        }`}
      />
    </button>
  )
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [draft, setDraft] = useState<Pick<CookiePreferences, 'analytics' | 'marketing'>>({
    analytics: false,
    marketing: false,
  })

  const applyPreferences = useCallback(
    (analytics: boolean, marketing: boolean) => {
      const prefs: CookiePreferences = {
        essential: true,
        analytics,
        marketing,
        consentedAt: new Date().toISOString(),
      }
      saveCookiePreferences(prefs)
      setVisible(false)
      setShowSettings(false)
    },
    [],
  )

  useEffect(() => {
    setMounted(true)
    if (!readCookiePreferences()) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    const onOpenSettings = () => {
      const stored = readCookiePreferences()
      setDraft({
        analytics: stored?.analytics ?? false,
        marketing: stored?.marketing ?? false,
      })
      setShowSettings(true)
      setVisible(true)
    }
    window.addEventListener(COOKIE_SETTINGS_EVENT, onOpenSettings)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, onOpenSettings)
  }, [])

  if (!mounted || !visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pointer-events-none"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="pointer-events-auto max-w-2xl mx-auto rounded-xl border border-brand-border bg-brand-surface/95 backdrop-blur-md shadow-panel">
        <div className="p-5 sm:p-6">
          <p className="font-mono text-[10px] tracking-[0.25em] text-brand-teal uppercase mb-2">
            — Cookies —
          </p>
          <h2
            id="cookie-consent-title"
            className="font-orbitron font-bold text-sm tracking-wider text-brand-bright uppercase mb-2"
          >
            {showSettings ? 'Cookie-Einstellungen' : 'Ihre Privatsphäre'}
          </h2>
          <p id="cookie-consent-desc" className="font-mono text-xs text-brand-text leading-relaxed mb-4">
            {showSettings ? (
              <>
                Wählen Sie, welche optionalen Cookies wir setzen dürfen. Notwendige Cookies speichern
                Ihre Auswahl (localStorage). Details in der{' '}
                <Link href="/datenschutz" className="text-brand-teal hover:underline">
                  Datenschutzerklärung
                </Link>
                .
              </>
            ) : (
              <>
                Wir nutzen notwendige Speicherung für Ihre Cookie-Auswahl. Optionale Statistik- und
                Marketing-Cookies setzen wir nur mit Ihrer Einwilligung ein (§ 25 TTDSG).{' '}
                <Link href="/datenschutz" className="text-brand-teal hover:underline">
                  Mehr erfahren
                </Link>
              </>
            )}
          </p>

          {showSettings && (
            <div className="space-y-4 mb-5 border border-brand-border rounded-lg p-4 bg-brand-bg/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-orbitron text-xs text-brand-bright uppercase tracking-wider">
                    Notwendig
                  </p>
                  <p className="font-mono text-[11px] text-brand-dim mt-1 leading-relaxed">
                    Speichert Ihre Cookie-Einstellungen (localStorage, 12 Monate).
                  </p>
                </div>
                <Toggle checked={true} disabled label="Notwendig — immer aktiv" onChange={() => {}} />
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-brand-border pt-4">
                <div>
                  <p className="font-orbitron text-xs text-brand-bright uppercase tracking-wider">
                    Statistik
                  </p>
                  <p className="font-mono text-[11px] text-brand-dim mt-1 leading-relaxed">
                    Z. B. Besuchszahlen (derzeit nicht aktiv; nur bei Zustimmung künftig).
                  </p>
                </div>
                <Toggle
                  checked={draft.analytics}
                  label="Statistik-Cookies"
                  onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
                />
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-brand-border pt-4">
                <div>
                  <p className="font-orbitron text-xs text-brand-bright uppercase tracking-wider">
                    Marketing
                  </p>
                  <p className="font-mono text-[11px] text-brand-dim mt-1 leading-relaxed">
                    Z. B. Werbe-Tracking (derzeit nicht aktiv; nur bei Zustimmung künftig).
                  </p>
                </div>
                <Toggle
                  checked={draft.marketing}
                  label="Marketing-Cookies"
                  onChange={(v) => setDraft((d) => ({ ...d, marketing: v }))}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            {showSettings ? (
              <>
                <button
                  type="button"
                  onClick={() => applyPreferences(draft.analytics, draft.marketing)}
                  className="font-orbitron font-bold text-[10px] tracking-widest px-5 py-2.5 rounded-lg bg-brand-teal text-brand-bg hover:bg-brand-teal/90 transition-all uppercase"
                >
                  Auswahl speichern
                </button>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="font-mono text-[10px] tracking-wider px-5 py-2.5 rounded-lg border border-brand-border text-brand-dim hover:text-brand-teal hover:border-brand-teal/40 transition-colors uppercase"
                >
                  Zurück
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => applyPreferences(false, false)}
                  className="font-mono text-[10px] tracking-wider px-5 py-2.5 rounded-lg border border-brand-border text-brand-text hover:border-brand-teal/50 hover:text-brand-teal transition-colors uppercase"
                >
                  Nur notwendige
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const stored = readCookiePreferences()
                    setDraft({
                      analytics: stored?.analytics ?? false,
                      marketing: stored?.marketing ?? false,
                    })
                    setShowSettings(true)
                  }}
                  className="font-mono text-[10px] tracking-wider px-5 py-2.5 rounded-lg border border-brand-border text-brand-dim hover:text-brand-bright transition-colors uppercase"
                >
                  Einstellungen
                </button>
                <button
                  type="button"
                  onClick={() => applyPreferences(true, true)}
                  className="font-orbitron font-bold text-[10px] tracking-widest px-5 py-2.5 rounded-lg bg-brand-teal text-brand-bg hover:bg-brand-teal/90 transition-all shadow-teal-glow uppercase sm:ml-auto"
                >
                  Alle akzeptieren
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
