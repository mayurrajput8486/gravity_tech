interface TermsContentProps {
  showAcknowledgment?: boolean
}

export default function TermsContent({ showAcknowledgment = false }: TermsContentProps) {
  return (
    <div className="space-y-5 text-sm leading-relaxed text-gray-600">
      <p>
        These Terms & Conditions (&quot;Terms&quot;) govern your use of GravityTech
        Software&apos;s website, services, and any engagement entered into with
        GravityTech Software (&quot;GravityTech&quot;, &quot;we&quot;, &quot;us&quot;). By submitting an
        enquiry, job application, or engaging our services, you agree to be bound
        by these Terms.
      </p>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">1. Services</h3>
        <p>
          GravityTech provides software engineering, AI integration, talent
          acquisition technology, enterprise solutions, and third-party payroll
          services. The specific scope, timeline, and deliverables for any
          engagement will be defined in a separate signed Statement of Work (SOW)
          or service agreement.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">2. Enquiries & Proposals</h3>
        <p>
          Submitting a business enquiry or job application through this website
          does not constitute a binding contract. GravityTech will review submitted
          information and respond accordingly. Service engagements become binding
          only upon mutual written agreement (SOW or contract) signed by both parties.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">3. Confidentiality</h3>
        <p>
          Any project details, business information, or technical requirements
          shared with GravityTech during the enquiry or engagement process will be
          treated as confidential and used solely for the purpose of evaluating
          and delivering the requested services.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">4. Intellectual Property</h3>
        <p>
          Unless otherwise agreed in writing, all custom software, code, and
          deliverables created specifically for a client under a signed agreement
          become the property of the client upon full payment. GravityTech retains
          rights to general methodologies, frameworks, and reusable components
          developed independently of client-specific work.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">5. Payment Terms</h3>
        <p>
          Payment terms, milestones, and invoicing schedules will be defined
          in the project-specific agreement. Late payments may result in
          suspension of services until accounts are brought current.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">6. Limitation of Liability</h3>
        <p>
          GravityTech&apos;s liability for any claim arising from services
          rendered shall not exceed the total fees paid by the client for the
          specific engagement giving rise to the claim. GravityTech is not
          liable for indirect, incidental, or consequential damages.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">7. Termination</h3>
        <p>
          Either party may terminate an active engagement per the terms
          specified in the signed SOW, typically with written notice. Fees for
          work completed up to the termination date remain payable.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">8. Governing Law</h3>
        <p>
          These Terms are governed by the laws of India. Any disputes arising
          from these Terms or any engagement with GravityTech shall be subject
          to the exclusive jurisdiction of the courts in Pune, Maharashtra.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">9. Changes to Terms</h3>
        <p>
          GravityTech reserves the right to update these Terms at any time.
          Continued use of our website or services after changes are posted
          constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-base font-semibold text-gray-900">10. Contact</h3>
        <p>
          For questions regarding these Terms, please reach out via the
          contact form on this website or email us directly at
          legal@gravitytechsoftware.com.
        </p>
      </section>

      {showAcknowledgment && (
        <p className="border-t border-gray-100 pt-4 text-xs text-gray-400">
          By checking &quot;I agree to GravityTech&apos;s Terms & Conditions&quot; on a form,
          you confirm that you have read, understood, and agree to be bound by
          the Terms outlined above.
        </p>
      )}
    </div>
  )
}
