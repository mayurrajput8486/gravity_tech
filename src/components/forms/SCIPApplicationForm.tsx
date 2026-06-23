import {
  AlertCircle,
  Check,
  CheckCircle2,
  ExternalLink,
  Loader2,
  Send,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import TermsModal from '../modals/TermsModal'
import PrivacyModal from '../modals/PrivacyModal'
import SCIPTermsModal from '../modals/SCIPTermsModal'
import { submitSCIPApplication } from '../../lib/submissions'
import { isGoogleSheetsConfigured } from '../../lib/googleSheets'

interface SCIPFormData {
  fullName: string
  email: string
  phone: string
  city: string
  track: string
  qualification: string
  graduationYear: string
  college: string
  projectLink: string
  whyScip: string
}

interface SCIPFormErrors {
  [key: string]: string
}

const INITIAL_DATA: SCIPFormData = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  track: '',
  qualification: '',
  graduationYear: '',
  college: '',
  projectLink: '',
  whyScip: '',
}

const darkLabelClass =
  'mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-400'

function darkInputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-[#1a1a1a] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-200 ${
    hasError
      ? 'border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/10'
      : 'border-gray-700 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10'
  }`
}

function darkSelectClass(hasError: boolean) {
  return `${darkInputClass(hasError)} cursor-pointer appearance-none`
}

function DarkErrorMsg({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
      <AlertCircle size={11} />
      {msg}
    </p>
  )
}

function validateSCIPForm(
  data: SCIPFormData,
  agreeToTerms: boolean,
  agreeToPrivacy: boolean,
  agreeToScip: boolean,
  hasReadTerms: boolean,
  hasReadPrivacy: boolean,
  hasReadScip: boolean
): SCIPFormErrors {
  const errors: SCIPFormErrors = {}

  if (!data.fullName.trim()) errors.fullName = 'Your full name is required'
  if (!data.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = 'Please enter a valid email address'

  if (!data.phone.trim()) errors.phone = 'Phone number is required'
  else if (!/^[+]?[\d\s\-()]{8,15}$/.test(data.phone.trim()))
    errors.phone = 'Enter a valid phone number'

  if (!data.city.trim()) errors.city = 'Your city is required'
  if (!data.track) errors.track = 'Please select a track'
  if (!data.qualification.trim()) errors.qualification = 'Qualification is required'
  if (!data.graduationYear) errors.graduationYear = 'Graduation year is required'
  if (!data.college.trim()) errors.college = 'College / university name is required'

  if (!data.whyScip.trim()) errors.whyScip = 'Please tell us why you want to join SCIP'
  else if (data.whyScip.trim().length < 60)
    errors.whyScip = `Add a bit more (${60 - data.whyScip.trim().length} more characters)`

  if (!agreeToTerms)
    errors.agreeToTerms = hasReadTerms
      ? 'Please check the box to agree to Terms & Conditions'
      : 'Please open and read the Terms & Conditions first'

  if (!agreeToPrivacy)
    errors.agreeToPrivacy = hasReadPrivacy
      ? 'Please check the box to agree to the Privacy Policy'
      : 'Please open and read the Privacy Policy first'

  if (!agreeToScip)
    errors.agreeToScip = hasReadScip
      ? 'Please check the box to agree to the SCIP Program Agreement'
      : 'Please open and read the SCIP Program Agreement first'

  return errors
}

function SCIPApplicationForm() {
  const [data, setData] = useState<SCIPFormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<SCIPFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false)
  const [agreeToScip, setAgreeToScip] = useState(false)
  const [hasReadTerms, setHasReadTerms] = useState(false)
  const [hasReadPrivacy, setHasReadPrivacy] = useState(false)
  const [hasReadScip, setHasReadScip] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [scipModalOpen, setScipModalOpen] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const update = <K extends keyof SCIPFormData>(key: K, value: SCIPFormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[key as string]
      return next
    })
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const formErrors = validateSCIPForm(
      data,
      agreeToTerms,
      agreeToPrivacy,
      agreeToScip,
      hasReadTerms,
      hasReadPrivacy,
      hasReadScip
    )
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    if (!isGoogleSheetsConfigured()) {
      setSubmitError('Form storage is not configured. Please contact the site administrator.')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    const result = await submitSCIPApplication({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      track: data.track,
      qualification: data.qualification,
      graduationYear: data.graduationYear,
      college: data.college,
      projectLink: data.projectLink,
      whyScip: data.whyScip,
    })

    setIsSubmitting(false)

    if (!result.ok) {
      setSubmitError(result.message)
      return
    }

    setSubmitted(true)
    setData(INITIAL_DATA)
    setErrors({})
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#1fb6e8]/10">
          <CheckCircle2 size={40} className="text-[#1fb6e8]" />
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-white">Application Submitted! 🎉</h3>
        <p className="mx-auto mb-4 max-w-sm text-sm text-gray-400">
          Our SCIP team will reach out within 3–5 business days to schedule a brief orientation
          call.
        </p>
        <p className="text-sm font-medium text-[#1fb6e8]">Next cohort start: Q3 2026</p>
      </div>
    )
  }

  const checkboxItems = [
    {
      key: 'agreeToTerms' as const,
      checked: agreeToTerms,
      hasRead: hasReadTerms,
      openModal: () => setTermsModalOpen(true),
      toggle: () => setAgreeToTerms((v) => !v),
      label: 'Terms & Conditions',
    },
    {
      key: 'agreeToPrivacy' as const,
      checked: agreeToPrivacy,
      hasRead: hasReadPrivacy,
      openModal: () => setPrivacyModalOpen(true),
      toggle: () => setAgreeToPrivacy((v) => !v),
      label: 'Privacy Policy',
    },
    {
      key: 'agreeToScip' as const,
      checked: agreeToScip,
      hasRead: hasReadScip,
      openModal: () => setScipModalOpen(true),
      toggle: () => setAgreeToScip((v) => !v),
      label: 'SCIP Program Agreement',
    },
  ]

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#1fb6e8]">
            Apply for SCIP
          </p>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-white">
            Start your SCIP application.
          </h2>
          <p className="text-sm text-gray-400">
            Fields marked <span className="text-red-400">*</span> are required.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={darkLabelClass}>
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => update('fullName', e.target.value)}
              className={darkInputClass(!!errors.fullName)}
            />
            {errors.fullName && <DarkErrorMsg msg={errors.fullName} />}
          </div>

          <div>
            <label className={darkLabelClass}>
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              className={darkInputClass(!!errors.email)}
            />
            {errors.email && <DarkErrorMsg msg={errors.email} />}
          </div>

          <div>
            <label className={darkLabelClass}>
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={data.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={darkInputClass(!!errors.phone)}
            />
            {errors.phone && <DarkErrorMsg msg={errors.phone} />}
          </div>

          <div>
            <label className={darkLabelClass}>
              City <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.city}
              onChange={(e) => update('city', e.target.value)}
              className={darkInputClass(!!errors.city)}
            />
            {errors.city && <DarkErrorMsg msg={errors.city} />}
          </div>

          <div>
            <label className={darkLabelClass}>
              Track Applying For <span className="text-red-400">*</span>
            </label>
            <select
              value={data.track}
              onChange={(e) => update('track', e.target.value)}
              className={darkSelectClass(!!errors.track)}
            >
              <option value="">Select a track</option>
              <option value="Java Development">Java Development</option>
              <option value="Python & AI Engineering">Python & AI Engineering</option>
              <option value="QA Automation">QA Automation</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>
            {errors.track && <DarkErrorMsg msg={errors.track} />}
          </div>

          <div>
            <label className={darkLabelClass}>
              Highest Qualification <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.qualification}
              onChange={(e) => update('qualification', e.target.value)}
              className={darkInputClass(!!errors.qualification)}
            />
            {errors.qualification && <DarkErrorMsg msg={errors.qualification} />}
          </div>

          <div>
            <label className={darkLabelClass}>
              Graduation Year <span className="text-red-400">*</span>
            </label>
            <select
              value={data.graduationYear}
              onChange={(e) => update('graduationYear', e.target.value)}
              className={darkSelectClass(!!errors.graduationYear)}
            >
              <option value="">Select year</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
            {errors.graduationYear && <DarkErrorMsg msg={errors.graduationYear} />}
          </div>

          <div className="sm:col-span-2">
            <label className={darkLabelClass}>
              College / University Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={data.college}
              onChange={(e) => update('college', e.target.value)}
              className={darkInputClass(!!errors.college)}
            />
            {errors.college && <DarkErrorMsg msg={errors.college} />}
          </div>

          <div className="sm:col-span-2">
            <label className={darkLabelClass}>GitHub or any project you&apos;ve built</label>
            <input
              type="url"
              placeholder="https://github.com/..."
              value={data.projectLink}
              onChange={(e) => update('projectLink', e.target.value)}
              className={darkInputClass(false)}
            />
          </div>

          <div className="sm:col-span-2">
            <label className={darkLabelClass}>
              Why do you want to join SCIP? <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={4}
              value={data.whyScip}
              onChange={(e) => update('whyScip', e.target.value)}
              className={`${darkInputClass(!!errors.whyScip)} resize-none`}
            />
            <div className="mt-1 flex justify-between">
              {errors.whyScip ? <DarkErrorMsg msg={errors.whyScip} /> : <span />}
              <span
                className={`text-xs ${
                  data.whyScip.length >= 60 ? 'text-green-500' : 'text-gray-600'
                }`}
              >
                {data.whyScip.length}/60 min
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8 mt-8 space-y-3">
          {checkboxItems.map((item) => (
            <div key={item.key}>
              <label className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (!item.hasRead) item.openModal()
                    else item.toggle()
                  }}
                  className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-all duration-200 ${
                    item.checked
                      ? 'border-[#1fb6e8] bg-[#1fb6e8]'
                      : item.hasRead
                        ? 'cursor-pointer border-gray-600 hover:border-gray-500'
                        : 'cursor-pointer border-gray-600 bg-[#111]'
                  }`}
                >
                  {item.checked && <Check size={11} className="text-white" strokeWidth={3} />}
                </button>
                <span className="text-sm leading-relaxed text-gray-400">
                  I agree to GravityTech&apos;s{' '}
                  <button
                    type="button"
                    onClick={item.openModal}
                    className="inline-flex items-center gap-1 font-medium text-[#1fb6e8] underline underline-offset-2 hover:text-[#0da8da]"
                  >
                    {item.label}
                    <ExternalLink size={11} />
                  </button>
                  {!item.hasRead && (
                    <span className="mt-1 block text-xs text-amber-400">
                      Please open and read the full document to enable this checkbox
                    </span>
                  )}
                </span>
              </label>
              {errors[item.key] && <DarkErrorMsg msg={errors[item.key]} />}
            </div>
          ))}
        </div>

        {submitError && (
          <div className="mb-4 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#1fb6e8] px-8 py-4 text-base font-semibold text-white shadow-[0_4px_20px_rgba(31,182,232,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0da8da] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Apply for SCIP
              <Send size={15} />
            </>
          )}
        </button>
      </form>

      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => {
          setTermsModalOpen(false)
          setAgreeToTerms(true)
        }}
        onFullyRead={() => setHasReadTerms(true)}
      />
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => {
          setPrivacyModalOpen(false)
          setAgreeToPrivacy(true)
        }}
        onFullyRead={() => setHasReadPrivacy(true)}
      />
      <SCIPTermsModal
        isOpen={scipModalOpen}
        onClose={() => {
          setScipModalOpen(false)
          setAgreeToScip(true)
        }}
        onFullyRead={() => setHasReadScip(true)}
      />
    </>
  )
}

export default SCIPApplicationForm
