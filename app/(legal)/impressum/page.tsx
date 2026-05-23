import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'
import { LEGAL } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Impressum — DAC-ECAT Studio',
  description: 'Impressum und Anbieterkennzeichnung',
  robots: { index: true, follow: true },
}

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2 className="legal-h2">Angaben gemäß § 5 DDG</h2>
        <p className="text-brand-dim text-xs mb-4">
          Pre-Launch-Website ohne Unternehmensform und ohne Verkauf von Produkten. Anbieter ist
          eine natürliche Person.
        </p>
        <p>
          <strong className="text-brand-bright">{LEGAL.operatorName}</strong>
          <br />
          {LEGAL.operatorStreet}
          <br />
          {LEGAL.operatorCity}
        </p>
        <p className="mt-4">
          <strong className="text-brand-bright">Kontakt</strong>
          <br />
          E-Mail:{' '}
          <a href={`mailto:${LEGAL.operatorEmail}`} className="legal-link">
            {LEGAL.operatorEmail}
          </a>
          <br />
          Telefon:{' '}
          <a href={`tel:${LEGAL.operatorPhone.replace(/\s/g, '')}`} className="legal-link">
            {LEGAL.operatorPhone}
          </a>
        </p>
      </section>

      <section>
        <h2 className="legal-h2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>{LEGAL.contentResponsible}</p>
      </section>

      <section>
        <h2 className="legal-h2">EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          oder Betreiber verantwortlich.
        </p>
      </section>

      <section>
        <h2 className="legal-h2">Urheberrecht</h2>
        <p>
          Die durch den Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </LegalLayout>
  )
}
