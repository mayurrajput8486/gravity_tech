import ScrollGatedModal from './ScrollGatedModal'

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
      <div className="space-y-5 text-sm leading-relaxed text-gray-600">
        <p>
          This Privacy Policy describes how GravityTech Software (&quot;GravityTech&quot;,
          &quot;we&quot;, &quot;us&quot;) collects, uses, and protects information you provide
          through our website, enquiry forms, and during the course of any
          business engagement.
        </p>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">1. Information We Collect</h3>
          <p>
            When you submit a business enquiry, we collect: your name, work
            email address, phone number, company name, designation, company size,
            and the project details you provide. We do not require or request
            sensitive personal information through this form.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">2. How We Use Your Information</h3>
          <p>Information submitted is used exclusively to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Respond to your enquiry and prepare a relevant proposal</li>
            <li>Schedule discovery calls or meetings related to your request</li>
            <li>Maintain internal records of business communications</li>
            <li>Improve our services based on aggregate, anonymized trends</li>
          </ul>
          <p className="mt-2">
            We do not use enquiry data for unrelated marketing
            without your explicit consent.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">3. Data Sharing</h3>
          <p>
            GravityTech does not sell, rent, or trade your personal or business
            information to third parties. Information may be shared internally
            among team members directly involved in evaluating or delivering your
            requested services, and with trusted infrastructure providers (such
            as hosting or email services) strictly to operate our business.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">4. Data Storage & Security</h3>
          <p>
            Submitted information is stored on secure, access-controlled
            systems. We implement industry-standard technical and organizational
            measures to protect your data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">5. Data Retention</h3>
          <p>
            Enquiry information is retained for as long as necessary to respond
            to your request and maintain business records, typically up to 24
            months from the date of submission, unless a longer period is required
            by an active engagement or applicable law.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">6. Your Rights</h3>
          <p>
            You have the right to request access to, correction of, or deletion
            of the personal information you&apos;ve submitted to us. To exercise these
            rights, contact us at privacy@gravitytechsoftware.com and we will
            respond within a reasonable timeframe.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">7. Cookies & Tracking</h3>
          <p>
            Our website may use minimal cookies for essential functionality
            and basic analytics to understand site usage. We do not use invasive
            tracking or sell browsing data to advertisers.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">8. Third-Party Links</h3>
          <p>
            Our website may contain links to third-party sites (such as social
            media). GravityTech is not responsible for the privacy practices of
            these external sites and encourages you to review their respective
            privacy policies.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">9. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy periodically to reflect changes
            in our practices or for legal compliance. The &quot;Last updated&quot; date at
            the top of this document indicates the most recent revision.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-gray-900">10. Contact Us</h3>
          <p>
            For any privacy-related questions or requests, please contact us
            at privacy@gravitytechsoftware.com or through the contact form on
            this website.
          </p>
        </section>

        <p className="border-t border-gray-100 pt-4 text-xs text-gray-400">
          By checking &quot;I agree to GravityTech&apos;s Privacy Policy&quot; on the enquiry
          form, you acknowledge that you have read and understood how your
          information will be collected, used, and protected.
        </p>
      </div>
    </ScrollGatedModal>
  )
}
