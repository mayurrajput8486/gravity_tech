import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PrivacyPolicyContent from '../legal/PrivacyPolicyContent'
import TermsContent from '../legal/TermsContent'
import SCIPTermsContent from '../legal/SCIPTermsContent'

type LegalSection = 'privacy' | 'terms' | 'scip'

const SECTIONS: { id: LegalSection; label: string }[] = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms & Conditions' },
  { id: 'scip', label: 'SCIP Program Terms' },
]

function LegalPage() {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState<LegalSection>('privacy')

  useEffect(() => {
    const hash = location.hash.replace('#', '') as LegalSection
    if (SECTIONS.some((section) => section.id === hash)) {
      setActiveSection(hash)
    }
  }, [location.hash])

  const scrollToSection = (id: LegalSection) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `/privacy-policy#${id}`)
    }
  }

  return (
    <main>
      <section className="bg-[#EFEFEF] px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Legal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy & Legal Information
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-600">
            Review GravityTech&apos;s privacy practices, general terms of use, and
            SCIP program terms. Last updated June 2026.
          </p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <nav
            aria-label="Legal sections"
            className="flex flex-wrap gap-2 py-4 sm:gap-3"
          >
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-16">
          <article id="privacy" className="scroll-mt-36">
            <h2 className="mb-6 border-b border-gray-200 pb-4 text-2xl font-semibold text-gray-900">
              Privacy Policy
            </h2>
            <PrivacyPolicyContent />
          </article>

          <article id="terms" className="scroll-mt-36">
            <h2 className="mb-6 border-b border-gray-200 pb-4 text-2xl font-semibold text-gray-900">
              Terms & Conditions
            </h2>
            <TermsContent />
          </article>

          <article id="scip" className="scroll-mt-36">
            <h2 className="mb-6 border-b border-gray-200 pb-4 text-2xl font-semibold text-gray-900">
              SCIP Program Terms & Conditions
            </h2>
            <SCIPTermsContent />
          </article>
        </div>
      </section>
    </main>
  )
}

export default LegalPage
