import ScrollGatedModal from './ScrollGatedModal'
import { SCIP_TERMS_SECTIONS } from '../../constants/scipTerms'

interface SCIPTermsModalProps {
  isOpen: boolean
  onClose: () => void
  onFullyRead: () => void
}

export default function SCIPTermsModal({ isOpen, onClose, onFullyRead }: SCIPTermsModalProps) {
  return (
    <ScrollGatedModal
      isOpen={isOpen}
      onClose={onClose}
      onFullyRead={onFullyRead}
      title="SCIP Program Agreement"
      lastUpdated="June 2026"
    >
      <div className="space-y-5 text-sm leading-relaxed text-gray-600">
        {SCIP_TERMS_SECTIONS.map((section) => (
          <section key={section.title}>
            <h3 className="mb-2 text-base font-semibold text-gray-900">{section.title}</h3>
            <p>{section.content}</p>
          </section>
        ))}

        <p className="border-t border-gray-100 pt-4 text-xs text-gray-400">
          By checking &quot;I agree to the SCIP Program Agreement&quot; on the application form, you
          confirm that you have read, understood, and agree to be bound by the terms outlined above.
        </p>
      </div>
    </ScrollGatedModal>
  )
}
