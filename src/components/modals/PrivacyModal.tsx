import ScrollGatedModal from './ScrollGatedModal'
import PrivacyPolicyContent from '../legal/PrivacyPolicyContent'

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
  onFullyRead: () => void
}

export default function PrivacyModal({ isOpen, onClose, onFullyRead }: PrivacyModalProps) {
  return (
    <ScrollGatedModal
      isOpen={isOpen}
      onClose={onClose}
      onFullyRead={onFullyRead}
      title="Privacy Policy"
      lastUpdated="June 2026"
    >
      <PrivacyPolicyContent showAcknowledgment />
    </ScrollGatedModal>
  )
}
