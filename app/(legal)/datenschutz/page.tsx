import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'
import { COOKIE_CONSENT_KEY } from '@/lib/cookies'
import { LEGAL } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — DAC-ECAT Studio',
  description: 'Informationen zur Verarbeitung personenbezogener Daten',
  robots: { index: true, follow: true },
}

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <section>
        <h2 className="legal-h2">1. Verantwortlicher</h2>
        <p>
          Verantwortlicher im Sinne der Art. 4 Nr. 7 DSGVO:
          <br />
          <strong className="text-brand-bright">{LEGAL.operatorName}</strong>
          <br />
          {LEGAL.operatorStreet}, {LEGAL.operatorCity}
          <br />
          E-Mail:{' '}
          <a href={`mailto:${LEGAL.operatorEmail}`} className="legal-link">
            {LEGAL.operatorEmail}
          </a>
          <br />
          Telefon: {LEGAL.operatorPhone}
        </p>
        <p className="mt-3 text-brand-dim text-xs">
          Es besteht derzeit keine eingetragene Gesellschaft; die Website dient ausschließlich der
          Information und Pre-Launch-Marketing (kein Verkauf).
        </p>
      </section>

      <section>
        <h2 className="legal-h2">2. Übersicht der Verarbeitungen</h2>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website,
          zur Speicherung Ihrer Cookie-Einstellungen, zur Kommunikation oder zur Verwaltung der
          Warteliste erforderlich ist.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs border border-brand-border">
            <thead>
              <tr className="border-b border-brand-border bg-brand-surface/60">
                <th className="p-3 text-brand-bright font-orbitron uppercase tracking-wider">Zweck</th>
                <th className="p-3 text-brand-bright font-orbitron uppercase tracking-wider">Daten</th>
                <th className="p-3 text-brand-bright font-orbitron uppercase tracking-wider">Rechtsgrundlage</th>
              </tr>
            </thead>
            <tbody className="text-brand-text">
              <tr className="border-b border-brand-border">
                <td className="p-3">Betrieb der Website (Hosting)</td>
                <td className="p-3">IP-Adresse, Datum/Uhrzeit, User-Agent, Referrer, angeforderte URL</td>
                <td className="p-3">Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an stabiler Bereitstellung)</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">Cookie-Einwilligung</td>
                <td className="p-3">Gespeicherte Präferenzen (localStorage)</td>
                <td className="p-3">Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung § 25 TTDSG) bzw. lit. f</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">Warteliste / Early Access</td>
                <td className="p-3">E-Mail-Adresse</td>
                <td className="p-3">Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</td>
              </tr>
              <tr>
                <td className="p-3">Statistik / Marketing (optional)</td>
                <td className="p-3">Nur bei Einwilligung im Cookie-Banner; derzeit nicht eingesetzt</td>
                <td className="p-3">Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="legal-h2">3. Hosting (Vercel)</h2>
        <p>
          Diese Website wird bei <strong className="text-brand-bright">Vercel Inc.</strong> gehostet
          (440 N Barranca Ave #4133, Covina, CA 91723, USA). Der Betrieb kann in Rechenzentren in
          den USA erfolgen (z. B. Region Washington, D.C.). Beim Aufruf werden Server-Logfiles
          erhoben (z. B. IP-Adresse, Zeitstempel, Browsertyp).
        </p>
        <p className="mt-3">
          Die Übermittlung in die USA kann auf Standardvertragsklauseln der EU-Kommission und ggf.
          dem EU-US Data Privacy Framework beruhen. Weitere Informationen:{' '}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            Vercel Datenschutz
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="legal-h2">4. Warteliste (Supabase)</h2>
        <p>
          Wenn Sie sich für Early Access anmelden, speichern wir Ihre E-Mail-Adresse in einer
          Datenbank bei <strong className="text-brand-bright">Supabase Inc.</strong> (Region nach
          Projektkonfiguration, bevorzugt EU). Zweck: einmalige Benachrichtigung, sobald eine erste
          Version bereitsteht. Es erfolgt kein Verkauf und keine Zahlungsabwicklung über diese
          Website.
        </p>
        <p className="mt-3">
          Speicherdauer: bis zur Abmeldung oder Widerruf. Abmeldung jederzeit per E-Mail an{' '}
          <a href={`mailto:${LEGAL.operatorEmail}`} className="legal-link">
            {LEGAL.operatorEmail}
          </a>
          .
        </p>
        <p className="mt-3">
          <a
            href="https://supabase.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            Supabase Privacy Policy
          </a>
        </p>
      </section>

      <section>
        <h2 className="legal-h2">5. Schriftarten</h2>
        <p>
          Schriftarten (Orbitron, DM Mono) werden über <strong className="text-brand-bright">next/font</strong>{' '}
          von Next.js beim Build selbst gehostet und vom gleichen Server wie die Website ausgeliefert.
          Beim Seitenaufruf werden dabei keine Verbindungen zu Google-Servern durch Besucher
          aufgebaut.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">6. Cookies und localStorage</h2>
        <p>
          Über den Cookie-Hinweis können Sie wählen, ob optionale Statistik- oder Marketing-Cookies
          gesetzt werden dürfen. Notwendig ist die Speicherung Ihrer Auswahl. Sie können Einstellungen
          jederzeit über „Cookies“ im Footer ändern.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs border border-brand-border">
            <thead>
              <tr className="border-b border-brand-border bg-brand-surface/60">
                <th className="p-3 text-brand-bright font-orbitron uppercase tracking-wider">Name</th>
                <th className="p-3 text-brand-bright font-orbitron uppercase tracking-wider">Typ</th>
                <th className="p-3 text-brand-bright font-orbitron uppercase tracking-wider">Zweck</th>
                <th className="p-3 text-brand-bright font-orbitron uppercase tracking-wider">Speicherdauer</th>
              </tr>
            </thead>
            <tbody className="text-brand-text">
              <tr className="border-b border-brand-border">
                <td className="p-3 font-mono text-brand-teal">{COOKIE_CONSENT_KEY}</td>
                <td className="p-3">localStorage</td>
                <td className="p-3">Cookie-Einwilligung (notwendig)</td>
                <td className="p-3">12 Monate (empfohlen, dann erneute Abfrage)</td>
              </tr>
              <tr>
                <td className="p-3">—</td>
                <td className="p-3">Cookies</td>
                <td className="p-3">Statistik/Marketing nur nach Zustimmung; derzeit nicht aktiv</td>
                <td className="p-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="legal-h2">7. Ihre Rechte</h2>
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
        <ul className="legal-list">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO) mit Wirkung für die Zukunft</li>
        </ul>
        <p className="mt-3">
          Beschwerderecht bei einer Aufsichtsbehörde. Für Berlin zuständig u. a.: Berliner
          Beauftragte für Datenschutz und Informationsfreiheit.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">8. Pflicht zur Bereitstellung</h2>
        <p>
          Die Bereitstellung personenbezogener Daten ist für die reine Nutzung der Website nicht
          erforderlich. Für die Warteliste benötigen wir Ihre E-Mail-Adresse.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">9. Automatisierte Entscheidungsfindung</h2>
        <p>Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling statt.</p>
      </section>

      <section>
        <h2 className="legal-h2">10. Weitere Informationen</h2>
        <p>
          <Link href="/impressum" className="legal-link">
            Impressum
          </Link>
          {' · '}
          <Link href="/agb" className="legal-link">
            AGB
          </Link>
        </p>
      </section>
    </LegalLayout>
  )
}
