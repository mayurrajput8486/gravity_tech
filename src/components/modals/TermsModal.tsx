import ScrollGatedModal from './ScrollGatedModal'
import TermsContent from '../legal/TermsContent'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
  onFullyRead: () => void
}

export default function TermsModal({ isOpen, onClose, onFullyRead }: TermsModalProps) {
  return (
    <ScrollGatedModal
      isOpen={isOpen}
      onClose={onClose}
      onFullyRead={onFullyRead}
      title="Terms & Conditions"
      lastUpdated="June 2026"
    >
      <TermsContent showAcknowledgment />
    </ScrollGatedModal>
  )
}
