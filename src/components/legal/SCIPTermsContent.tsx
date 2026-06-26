import { SCIP_TERMS_SECTIONS } from '../../constants/scipTerms'

interface SCIPTermsContentProps {
  showAcknowledgment?: boolean
}

export default function SCIPTermsContent({ showAcknowledgment = false }: SCIPTermsContentProps) {
  return (
    <div className="space-y-5 text-sm leading-relaxed text-gray-600">
      <p>
        The following terms apply specifically to candidates applying for or
        participating in the Software Career Incubation Program (SCIP) at
        GravityTech Software.
      </p>

      {SCIP_TERMS_SECTIONS.map((section) => (
        <section key={section.title}>
          <h3 className="mb-2 text-base font-semibold text-gray-900">{section.title}</h3>
          <p>{section.content}</p>
        </section>
      ))}

      {showAcknowledgment && (
        <p className="border-t border-gray-100 pt-4 text-xs text-gray-400">
          By checking &quot;I agree to the SCIP Program Terms & Conditions&quot; on the
          application form, you confirm that you have read, understood, and agree
          to be bound by the terms outlined above.
        </p>
      )}
    </div>
  )
}
