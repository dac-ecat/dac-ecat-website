export const COOKIE_CONSENT_KEY = 'dacecat-cookie-consent-v1'
export const COOKIE_SETTINGS_EVENT = 'dacecat:open-cookie-settings'

export type CookiePreferences = {
  essential: true
  analytics: boolean
  marketing: boolean
  consentedAt: string
}

export function getDefaultPreferences(): CookiePreferences {
  return {
    essential: true,
    analytics: false,
    marketing: false,
    consentedAt: new Date().toISOString(),
  }
}

export function readCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CookiePreferences
    if (parsed.essential !== true) return null
    return parsed
  } catch {
    return null
  }
}

export function saveCookiePreferences(prefs: CookiePreferences): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs))
}

export function hasAnalyticsConsent(): boolean {
  return readCookiePreferences()?.analytics === true
}

export function openCookieSettings(): void {
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT))
}
