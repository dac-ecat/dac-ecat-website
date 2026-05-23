import type { Metadata } from 'next'
import Link from 'next/link'
import LegalLayout from '@/components/LegalLayout'
import { LEGAL } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'AGB — DAC-ECAT Studio',
  description: 'Allgemeine Geschäftsbedingungen für die Nutzung der Website',
  robots: { index: true, follow: true },
}

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <section>
        <h2 className="legal-h2">1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Website{' '}
          <a href={LEGAL.siteUrl} className="legal-link">
            {LEGAL.siteUrl}
          </a>{' '}
          (nachfolgend „Website“) und die dort angebotenen Informationen sowie die Anmeldung zur
          Warteliste für <strong className="text-brand-bright">{LEGAL.siteName}</strong> durch{' '}
          <strong className="text-brand-bright">{LEGAL.operatorName}</strong> (nachfolgend
          „Anbieter“). Abweichende Bedingungen des Nutzers werden nicht anerkannt, es sei denn,
          der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">2. Leistungsbeschreibung</h2>
        <p>
          Die Website informiert über die Software {LEGAL.siteName} (IDE für EtherCAT / TwinCAT).
          Der Anbieter ({LEGAL.operatorName}) befindet sich in der Pre-Launch-Phase; es besteht
          derzeit keine eingetragene Gesellschaft und es werden über diese Website keine Produkte
          verkauft und keine Entgelte erhoben. Über die Warteliste erhalten Nutzer eine
          Benachrichtigung, sobald eine erste Version zum Download bereitsteht. Ein Anspruch auf
          Bereitstellung zu einem bestimmten Zeitpunkt oder mit bestimmten Funktionen besteht
          nicht.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">3. Warteliste</h2>
        <p>
          Mit der Anmeldung zur Warteliste geben Sie Ihre E-Mail-Adresse an. Die Verarbeitung
          erfolgt gemäß unserer{' '}
          <Link href="/datenschutz" className="legal-link">
            Datenschutzerklärung
          </Link>
          . Sie können die Einwilligung jederzeit widerrufen (z. B. per E-Mail an{' '}
          <a href={`mailto:${LEGAL.operatorEmail}`} className="legal-link">
            {LEGAL.operatorEmail}
          </a>
          ).
        </p>
      </section>

      <section>
        <h2 className="legal-h2">4. Nutzungsrechte an Inhalten</h2>
        <p>
          Texte, Grafiken, Logos und sonstige Inhalte der Website sind urheberrechtlich geschützt.
          Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der engen Grenzen des
          Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des Anbieters.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">5. Verfügbarkeit</h2>
        <p>
          Der Anbieter bemüht sich um eine hohe Verfügbarkeit der Website, schuldet jedoch keine
          ununterbrochene Erreichbarkeit. Wartungsarbeiten oder technische Störungen können zu
          vorübergehenden Ausfällen führen.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">6. Haftung</h2>
        <p>
          Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei
          Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Bei leichter
          Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten
          (Kardinalpflichten), beschränkt auf den vorhersehbaren, typischerweise eintretenden
          Schaden. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
        </p>
        <p className="mt-3 text-brand-dim text-xs">
          Sobald kostenpflichtige Leistungen angeboten werden, sind die AGB durch einen
          Rechtsanwalt anzupassen.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">7. Links zu Drittanbietern</h2>
        <p>
          Die Website kann Links zu externen Seiten enthalten. Für deren Inhalte ist allein der
          jeweilige Betreiber verantwortlich.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">8. Änderungen der AGB</h2>
        <p>
          Der Anbieter kann diese AGB mit Wirkung für die Zukunft anpassen. Die jeweils aktuelle
          Fassung ist auf dieser Seite abrufbar. Bei wesentlichen Änderungen der Wartelisten-Nutzung
          werden registrierte Nutzer in angemessener Form informiert.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">9. Anwendbares Recht und Gerichtsstand</h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
          Ist der Nutzer Verbraucher mit Wohnsitz in der EU, bleiben zwingende Verbraucherschutzvorschrifungen
          seines Staates unberührt. Gerichtsstand für Streitigkeiten mit Kaufleuten ist — soweit
          zulässig — der Sitz des Anbieters in Deutschland.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">10. Salvatorische Klausel</h2>
        <p>
          Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen
          Bestimmungen unberührt.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">11. Kontakt</h2>
        <p>
          <Link href="/impressum" className="legal-link">
            Impressum
          </Link>
          {' · '}
          <Link href="/datenschutz" className="legal-link">
            Datenschutzerklärung
          </Link>
        </p>
      </section>
    </LegalLayout>
  )
}
