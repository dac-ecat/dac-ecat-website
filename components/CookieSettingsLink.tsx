'use client'

import { openCookieSettings } from '@/lib/cookies'

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => openCookieSettings()}
      className="font-mono text-[10px] tracking-wider text-brand-dim hover:text-brand-teal transition-colors uppercase"
    >
      Cookies
    </button>
  )
}
