import ScrollGatedModal from './ScrollGatedModal'
import SCIPTermsContent from '../legal/SCIPTermsContent'

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
      <SCIPTermsContent showAcknowledgment />
    </ScrollGatedModal>
  )
}
