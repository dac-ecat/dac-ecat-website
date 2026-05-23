/**
 * Legal / Impressum — Edward Diggs, pre-launch (no company, no sales).
 * Not legal advice; have a lawyer review if scope changes.
 */
export const LEGAL = {
  siteName: 'DAC-ECAT Studio',
  siteUrl: 'https://dacecat.studio',
  lastUpdated: '21. Mai 2026',

  operatorName: 'Edward Diggs',
  operatorStreet: 'Chodowieckistraße 16',
  operatorCity: '10405 Berlin, Deutschland',
  operatorEmail: 'info@dacecat.com',
  operatorPhone: '+49 173 3965274',

  /** § 18 Abs. 2 MStV — same person, pre-launch */
  contentResponsible: 'Edward Diggs, Chodowieckistraße 16, 10405 Berlin',

  /** Pre-launch: no company, no product sales */
  isPrelaunch: true,
} as const

export function operatorAddressBlock(): string {
  return `${LEGAL.operatorStreet}, ${LEGAL.operatorCity}`
}
