import Link from 'next/link'

interface TierFeature {
  text: string
  highlight?: boolean
}

interface Tier {
  id: string
  name: string
  badge?: string
  price: string
  priceSub: string
  annualNote?: string
  description: string
  accent: 'dim' | 'teal' | 'blue' | 'amber'
  features: TierFeature[]
  cta: string
  ctaHref: string
  ctaStyle: 'ghost' | 'primary' | 'secondary' | 'outline'
}

const TIERS: Tier[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    priceSub: 'forever',
    description: 'For evaluation, open source projects, and students. No time limit.',
    accent: 'dim',
    ctaStyle: 'ghost',
    cta: 'Download Free',
    ctaHref: '#early-access',
    features: [
      { text: 'Single ADS connection — local runtime only (127.0.0.1.1.1)' },
      { text: 'Variable explorer — up to 50 symbols' },
      { text: 'Python and Lua script editor' },
      { text: 'Single terminal panel' },
      { text: 'Two scope windows' },
      { text: 'Basic CSV logging (no custom headers)' },
      { text: 'Community support' },
      { text: 'DAC-ECAT watermark on exported files' },
    ],
  },
  {
    id: 'individual',
    name: 'Individual',
    badge: 'Most Popular',
    price: '$49',
    priceSub: '/month',
    annualNote: 'or $490 / year (save 17%)',
    description: 'For solo engineers and consultants. The price of a dinner, billed monthly.',
    accent: 'teal',
    ctaStyle: 'primary',
    cta: 'Get Early Access',
    ctaHref: '#early-access',
    features: [
      { text: 'Unlimited ADS connections — local and remote', highlight: true },
      { text: 'Full variable explorer — unlimited symbols', highlight: true },
      { text: 'Full Monaco editor — all runtime types', highlight: true },
      { text: 'Unlimited terminal panels + AI CLI agents', highlight: true },
      { text: 'Unlimited scope windows' },
      { text: 'Full logging with custom headers' },
      { text: 'Embedded HMI panel views' },
      { text: 'DAC-ECAT PLC + HMI library license (single developer)', highlight: true },
      { text: 'Email support — 48-hour response' },
      { text: 'All product updates included' },
      { text: 'Licensed for commercial use', highlight: true },
    ],
  },
  {
    id: 'team',
    name: 'Team',
    price: '$29',
    priceSub: '/seat/month',
    annualNote: 'min. 3 seats · billed annually',
    description: 'For engineering teams at a single facility. Requires annual commitment.',
    accent: 'blue',
    ctaStyle: 'secondary',
    cta: 'Contact for Team',
    ctaHref: 'mailto:info@dacecat.com?subject=DAC-ECAT%20Team%20License',
    features: [
      { text: 'Everything in Individual' },
      { text: 'Centralized team license management', highlight: true },
      { text: 'Shared project templates and scripting blocks', highlight: true },
      { text: 'DAC-ECAT PLC + HMI library — team deployment rights', highlight: true },
      { text: 'Priority email support — 24-hour response' },
      { text: 'Early access to roadmap features' },
      { text: 'Up to 10 seats (above 10 → Enterprise)' },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$8,400',
    priceSub: '/year',
    annualNote: 'single facility · unlimited seats',
    description: 'One purchase decision. Unlimited deployment across the whole facility.',
    accent: 'amber',
    ctaStyle: 'outline',
    cta: 'Contact Sales',
    ctaHref: 'mailto:info@dacecat.com?subject=DAC-ECAT%20Enterprise%20License',
    features: [
      { text: 'Unlimited seats at one facility / site', highlight: true },
      { text: 'Everything in Team' },
      { text: 'Site license — DAC-ECAT PLC + HMI libraries', highlight: true },
      { text: 'Dedicated support channel — 8-hour SLA', highlight: true },
      { text: 'Onboarding session included (2 hours)' },
      { text: 'Custom connection profile templates for facility PLC network' },
      { text: 'Volume pricing for multi-site organisations' },
      { text: 'Invoiced annually — NET 30' },
    ],
  },
]

const ACCENT = {
  dim: {
    border: 'border-brand-border',
    hoverBorder: 'hover:border-brand-border/80',
    badge: '',
    label: 'text-brand-dim',
    featureDot: 'bg-brand-border',
    highlight: 'text-brand-text',
  },
  teal: {
    border: 'border-brand-teal/40',
    hoverBorder: 'hover:border-brand-teal/70',
    badge: 'bg-brand-teal/10 text-brand-teal border-brand-teal/30',
    label: 'text-brand-teal',
    featureDot: 'bg-brand-teal/60',
    highlight: 'text-brand-bright',
  },
  blue: {
    border: 'border-brand-blue/30',
    hoverBorder: 'hover:border-brand-blue/60',
    badge: 'bg-brand-blue/10 text-brand-blue border-brand-blue/30',
    label: 'text-brand-blue',
    featureDot: 'bg-brand-blue/60',
    highlight: 'text-brand-bright',
  },
  amber: {
    border: 'border-brand-amber/30',
    hoverBorder: 'hover:border-brand-amber/60',
    badge: 'bg-brand-amber/10 text-brand-amber border-brand-amber/30',
    label: 'text-brand-amber',
    featureDot: 'bg-brand-amber/60',
    highlight: 'text-brand-bright',
  },
}

const CTA_STYLES = {
  primary:
    'bg-brand-teal text-brand-bg hover:bg-brand-teal/90 shadow-teal-glow font-orbitron font-bold tracking-widest',
  secondary:
    'bg-brand-blue/15 border border-brand-blue/50 text-brand-blue hover:bg-brand-blue/25 font-orbitron font-bold tracking-widest',
  outline:
    'border border-brand-amber/50 text-brand-amber hover:bg-brand-amber/10 font-orbitron font-bold tracking-widest',
  ghost:
    'border border-brand-border text-brand-text hover:border-brand-teal/40 hover:text-brand-teal font-mono tracking-wider',
}

const FAQ = [
  {
    q: 'Why per-seat pricing instead of per-tag or per-device?',
    a: 'Tag-based and device-count pricing punishes engineers for connecting to more machines — the opposite of what an IDE should do. DAC-ECAT prices per engineer seat so you can connect to every PLC on the network without worrying about license counting.',
  },
  {
    q: 'Can I expense the Individual plan without a purchase order?',
    a: 'At $49/month, most engineering companies allow this as a direct expense. It is comparable to GitHub Copilot ($19/mo) or JetBrains All Products ($28/mo), and far below TwinCAT HMI Engineering ($1,000+ per seat). An engineer who saves two hours per month has already covered the cost.',
  },
  {
    q: 'When does Enterprise make financial sense over Team?',
    a: 'Enterprise breaks even with Team pricing at approximately 17 seats. Most facilities that standardise on DAC-ECAT have more than 17 engineers across shifts and departments. Enterprise also eliminates seat counting, license management overhead, and per-engineer approval.',
  },
  {
    q: 'Is data logged through DAC-ECAT stored on your servers?',
    a: 'No. DAC-ECAT Studio is a single downloadable executable. PLC variable data stays entirely on the engineer\'s machine and local network. The only outbound network call is license validation on startup. The application works fully offline once validated.',
  },
  {
    q: 'What happens to the free tier — does it expire?',
    a: 'The free tier has no time limit. It is restricted to a single local ADS connection (127.0.0.1.1.1) and 50 variables so you can evaluate the full scripting IDE against your own TwinCAT runtime before committing to a subscription.',
  },
  {
    q: 'Are product updates included?',
    a: 'Yes. All Individual, Team, and Enterprise plans include product updates for the duration of the subscription. There are no separate version upgrade fees.',
  },
]

export default function Pricing() {
  return (
    <div className="pt-28 pb-0">
      {/* Header */}
      <section className="px-6 pb-20 text-center relative">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="relative max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
            — Licensing —
          </p>
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl tracking-wider text-brand-bright uppercase mb-5">
            Simple, Honest Pricing
          </h1>
          <p className="font-mono text-brand-text text-sm leading-relaxed max-w-xl mx-auto">
            Per-seat pricing. No tag counts. No device limits. No procurement
            headaches under $100/month.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section id="pricing" className="px-6 pb-24 relative">
        <div className="absolute inset-0 bg-feature-radial" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {TIERS.map((tier) => {
            const a = ACCENT[tier.accent]
            return (
              <div
                key={tier.id}
                className={`relative rounded-xl border bg-brand-surface flex flex-col transition-all duration-300 shadow-panel ${a.border} ${a.hoverBorder}`}
              >
                {/* Popular badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border ${a.badge}`}>
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Tier name */}
                  <p className={`font-orbitron font-bold text-xs tracking-[0.2em] uppercase mb-4 ${a.label}`}>
                    {tier.name}
                  </p>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="font-orbitron font-black text-3xl text-brand-bright">
                      {tier.price}
                    </span>
                    <span className="font-mono text-brand-dim text-sm ml-1">{tier.priceSub}</span>
                  </div>
                  {tier.annualNote && (
                    <p className="font-mono text-[11px] text-brand-dim mb-4">{tier.annualNote}</p>
                  )}

                  {/* Description */}
                  <p className="font-mono text-brand-text text-xs leading-relaxed mb-6 border-b border-brand-border pb-6">
                    {tier.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${a.featureDot}`} />
                        <span className={`font-mono text-[11px] leading-relaxed ${f.highlight ? a.highlight : 'text-brand-text'}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={tier.ctaHref}
                    className={`block text-center text-xs py-3 px-4 rounded-lg transition-all uppercase ${CTA_STYLES[tier.ctaStyle]}`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Annual pricing summary table */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-orbitron font-bold text-xl tracking-wider text-brand-bright uppercase mb-8 text-center">
            Annual Pricing Summary
          </h2>
          <div className="rounded-xl border border-brand-border bg-brand-surface overflow-hidden shadow-panel">
            <table className="w-full font-mono text-xs">
              <thead>
                <tr className="border-b border-brand-border bg-brand-bg/60">
                  <th className="text-left px-5 py-3 text-brand-dim tracking-wider uppercase">Tier</th>
                  <th className="text-right px-5 py-3 text-brand-dim tracking-wider uppercase">Monthly</th>
                  <th className="text-right px-5 py-3 text-brand-dim tracking-wider uppercase">Annual (per seat)</th>
                  <th className="text-right px-5 py-3 text-brand-dim tracking-wider uppercase hidden sm:table-cell">Saving</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {[
                  { tier: 'Free', monthly: '$0', annual: '$0', saving: '—', color: '' },
                  { tier: 'Individual (monthly)', monthly: '$49', annual: '$588', saving: '—', color: '' },
                  { tier: 'Individual (annual)', monthly: '$41', annual: '$490', saving: '$98 (17%)', color: 'text-brand-teal' },
                  { tier: 'Team — 3 seats (annual)', monthly: '$29 / seat', annual: '$1,044', saving: '$528 vs 3× Individual', color: 'text-brand-blue' },
                  { tier: 'Team — 10 seats (annual)', monthly: '$29 / seat', annual: '$3,480', saving: '$2,400 vs 10× Individual', color: 'text-brand-blue' },
                  { tier: 'Enterprise (unlimited seats)', monthly: '—', annual: '$8,400 flat', saving: 'Break-even at 17 seats vs Team', color: 'text-brand-amber' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-brand-surface-raised/30 transition-colors">
                    <td className={`px-5 py-3.5 text-brand-text ${row.color}`}>{row.tier}</td>
                    <td className="px-5 py-3.5 text-right text-brand-text">{row.monthly}</td>
                    <td className="px-5 py-3.5 text-right text-brand-bright">{row.annual}</td>
                    <td className={`px-5 py-3.5 text-right hidden sm:table-cell ${row.color || 'text-brand-dim'}`}>{row.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Positioning callout */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-brand-teal/20 bg-brand-teal/5 p-8">
            <p className="font-orbitron font-bold text-xs tracking-[0.2em] text-brand-teal uppercase mb-4">
              — Pricing Philosophy —
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'No Tag Limits',
                  body: 'Connect to every PLC on your network. Variable counts and device limits punish engineers for doing their job. Pricing is per seat, full stop.',
                },
                {
                  title: 'Below the Expense Threshold',
                  body: 'At $49/month, most engineers can expense this without a purchase order. Comparable to GitHub Copilot or JetBrains — far below TwinCAT HMI Engineering ($1,000+ per seat).',
                },
                {
                  title: 'One Facility, One Price',
                  body: 'Enterprise at $8,400/year is $700/month for unlimited engineers. No seat counting, no license management, no per-engineer approval. Breaks even at 17 seats.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-brand-text text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-28 border-t border-brand-border pt-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] text-brand-teal uppercase mb-4">
              — Common Questions —
            </p>
            <h2 className="font-orbitron font-bold text-2xl md:text-3xl tracking-wider text-brand-bright uppercase">
              FAQ
            </h2>
          </div>
          <div className="space-y-6">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-lg border border-brand-border bg-brand-surface p-6">
                <h3 className="font-orbitron font-bold text-xs tracking-wider text-brand-bright uppercase mb-3">
                  {item.q}
                </h3>
                <p className="font-mono text-brand-text text-xs leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-mono text-brand-dim text-xs">
              Questions not covered here?{' '}
              <a
                href="mailto:info@dacecat.com"
                className="text-brand-teal hover:underline underline-offset-2"
              >
                info@dacecat.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
