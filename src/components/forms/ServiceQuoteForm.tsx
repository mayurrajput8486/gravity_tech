import {
  ArrowRight,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Code2,
  ExternalLink,
  Loader2,
  Lock,
  Mail,
  Phone,
  Send,
  User,
  UserSearch,
  Users,
  Users2,
  Wallet,
} from 'lucide-react'
import { useState, type FormEvent, type ReactNode } from 'react'
import TermsModal from '../modals/TermsModal'
import PrivacyModal from '../modals/PrivacyModal'
import { submitQuoteRequest } from '../../lib/submissions'
import { isGoogleSheetsConfigured } from '../../lib/googleSheets'

interface QuoteFormData {
  serviceType: string[]
  projectTimeline: string
  estimatedBudget: string
  firstName: string
  lastName: string
  companyName: string
  companyEmail: string
  phone: string
  designation: string
  companySize: string
  projectDescription: string
  currentChallenges: string
  hasExistingSystem: boolean | null
  preferredStartDate: string
}

interface QuoteFormErrors {
  [key: string]: string
}

const INITIAL_DATA: QuoteFormData = {
  serviceType: [],
  projectTimeline: '',
  estimatedBudget: '',
  firstName: '',
  lastName: '',
  companyName: '',
  companyEmail: '',
  phone: '',
  designation: '',
  companySize: '',
  projectDescription: '',
  currentChallenges: '',
  hasExistingSystem: null,
  preferredStartDate: '',
}

const STEPS = ['Project Details', 'Contact Info', 'Requirements']

interface AgreementState {
  agreeToTerms: boolean
  agreeToPrivacy: boolean
}

const labelClass =
  'block text-xs font-semibold uppercase tracking-wide text-gray-700 mb-2'

function inputClass(hasError: boolean) {
  return `input-base ${hasError ? 'input-error' : ''}`
}

function textareaClass(hasError: boolean) {
  return `${inputClass(hasError)} resize-none`
}

const iconInnerClass =
  'w-full border-0 bg-transparent px-3 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-0'

function FormIconField({
  icon: Icon,
  hasError,
  children,
}: {
  icon: typeof Mail
  hasError?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={`flex overflow-hidden rounded-xl border bg-white transition-all duration-200 focus-within:border-[#1fb6e8] focus-within:ring-2 focus-within:ring-[#1fb6e8]/10 ${
        hasError ? 'border-red-400 focus-within:border-red-400 focus-within:ring-red-400/10' : 'border-gray-200'
      }`}
    >
      <div
        className="flex w-11 shrink-0 items-center justify-center border-r border-gray-200 bg-gray-50 text-gray-400"
        aria-hidden="true"
      >
        <Icon size={16} strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
      <span aria-hidden>!</span>
      {msg}
    </p>
  )
}

function validateStep(
  step: number,
  data: QuoteFormData,
  agreements?: AgreementState
): QuoteFormErrors {
  const errors: QuoteFormErrors = {}

  if (step === 0) {
    if (data.serviceType.length === 0) errors.serviceType = 'Please select at least one service'
    if (!data.projectTimeline) errors.projectTimeline = 'Please select your project timeline'
    if (!data.estimatedBudget) errors.estimatedBudget = 'Please select your estimated budget'
  }

  if (step === 1) {
    if (!data.firstName.trim()) errors.firstName = 'First name is required'
    if (!data.lastName.trim()) errors.lastName = 'Last name is required'
    if (!data.companyName.trim()) errors.companyName = 'Company name is required'

    if (!data.companyEmail.trim()) errors.companyEmail = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.companyEmail.trim()))
      errors.companyEmail = 'Please enter a valid email address'

    if (!data.phone.trim()) errors.phone = 'Phone number is required'
    else if (!/^[+]?[\d\s\-()]{8,15}$/.test(data.phone.trim()))
      errors.phone = 'Enter a valid phone number'

    if (!data.designation.trim()) errors.designation = 'Your designation is required'
    if (!data.companySize) errors.companySize = 'Please select your company size'
  }

  if (step === 2) {
    if (!data.projectDescription.trim()) errors.projectDescription = 'Please describe your project'
    else if (data.projectDescription.trim().length < 50)
      errors.projectDescription = `Please add more detail (${50 - data.projectDescription.trim().length} more characters needed)`
    if (!data.preferredStartDate) errors.preferredStartDate = 'Please select a preferred start date'

    if (agreements) {
      if (!agreements.agreeToTerms)
        errors.agreeToTerms = 'Please read and agree to Terms & Conditions'
      if (!agreements.agreeToPrivacy)
        errors.agreeToPrivacy = 'Please read and agree to the Privacy Policy'
    }
  }

  return errors
}

function LeftTrustPanel() {
  return (
    <div className="hidden flex-col justify-between lg:flex">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#1fb6e8]">
          Get a Quote
        </p>
        <h2 className="mb-4 text-3xl font-semibold leading-tight text-gray-900">
          Tell us what you&apos;re
          <br />
          building. We&apos;ll tell
          <br />
          you how.
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-gray-500">
          Fill in your project details and we&apos;ll get back with a detailed proposal — no
          commitment required.
        </p>

        {[
          { icon: Clock, text: 'Response within 1 business day' },
          { icon: Lock, text: 'Your data stays strictly confidential' },
          { icon: CheckCircle2, text: 'No commitment required' },
          { icon: Users, text: 'Speak directly with our tech team' },
        ].map((badge) => {
          const Icon = badge.icon
          return (
            <div key={badge.text} className="mb-4 flex items-center gap-3 text-sm text-gray-600">
              <Icon size={15} className="shrink-0 text-[#1fb6e8]" />
              {badge.text}
            </div>
          )
        })}
      </div>

      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
        <div className="mb-3 flex -space-x-2">
          {['#1fb6e8', '#7c3aed', '#10b981', '#f59e0b'].map((color, i) => (
            <div
              key={color}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white"
              style={{ background: color, zIndex: 4 - i }}
            >
              {['R', 'P', 'V', 'A'][i]}
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold text-gray-900">50+ clients trust GravityTech</p>
        <p className="mt-0.5 text-xs text-gray-500">Across India, UAE, and USA</p>
      </div>
    </div>
  )
}

function ServiceQuoteForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<QuoteFormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<QuoteFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false)
  const [hasReadTerms, setHasReadTerms] = useState(false)
  const [hasReadPrivacy, setHasReadPrivacy] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const update = <K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[key as string]
      return next
    })
  }

  const toggleService = (id: string) => {
    const next = data.serviceType.includes(id)
      ? data.serviceType.filter((s) => s !== id)
      : [...data.serviceType, id]
    update('serviceType', next)
  }

  const handleNext = () => {
    const stepErrors = validateStep(currentStep, data)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }
    setErrors({})
    setCurrentStep((s) => s + 1)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const stepErrors = validateStep(2, data, { agreeToTerms, agreeToPrivacy })
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }

    if (!isGoogleSheetsConfigured()) {
      setSubmitError('Form storage is not configured. Please contact the site administrator.')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    const result = await submitQuoteRequest({
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.companyName,
      companyEmail: data.companyEmail,
      phone: data.phone,
      designation: data.designation,
      companySize: data.companySize,
      serviceType: data.serviceType,
      projectTimeline: data.projectTimeline,
      estimatedBudget: data.estimatedBudget,
      projectDescription: data.projectDescription,
      currentChallenges: data.currentChallenges,
      hasExistingSystem: data.hasExistingSystem,
      preferredStartDate: data.preferredStartDate,
    })

    setIsSubmitting(false)

    if (!result.ok) {
      setSubmitError(result.message)
      return
    }

    setSubmitted(true)
    setData(INITIAL_DATA)
    setCurrentStep(0)
    setErrors({})
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto mb-6 flex h-20 w-20 animate-[scale-in_0.4s_ease] items-center justify-center rounded-full bg-[#1fb6e8]/10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1fb6e8]/20">
            <CheckCircle2 size={32} className="text-[#1fb6e8]" />
          </div>
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900">Quote Request Received!</h3>
        <p className="mx-auto mb-8 max-w-sm text-sm text-gray-500">
          We&apos;ve received your project details. Our team will review your requirements and get
          back to you within <strong>1 business day</strong> with a detailed proposal.
        </p>
        <div className="mx-auto max-w-sm rounded-2xl bg-gray-50 p-6 text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
            What happens next
          </p>
          {[
            { step: '1', text: 'Our team reviews your requirements' },
            { step: '2', text: 'We schedule a 30-min discovery call' },
            { step: '3', text: 'You receive a detailed proposal' },
          ].map((item) => (
            <div key={item.step} className="mb-3 flex items-start gap-3 last:mb-0">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1fb6e8]/10">
                <span className="text-xs font-bold text-[#1fb6e8]">{item.step}</span>
              </div>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]">
      <LeftTrustPanel />

      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_40px_rgba(0,0,0,0.06)] sm:p-10">
        <div className="mb-8 flex items-center gap-0">
          {STEPS.map((step, i) => (
            <div key={step} className="flex flex-1 items-center last:flex-0">
              <div
                className={`flex items-center gap-2 ${
                  currentStep >= i ? 'text-[#1fb6e8]' : 'text-gray-400'
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 ${
                    currentStep > i
                      ? 'border-[#1fb6e8] bg-[#1fb6e8] text-white'
                      : currentStep === i
                        ? 'border-[#1fb6e8] bg-[#1fb6e8]/5 text-[#1fb6e8]'
                        : 'border-gray-200 text-gray-400'
                  }`}
                >
                  {currentStep > i ? <Check size={12} /> : i + 1}
                </div>
                <span className="hidden text-xs font-medium sm:block">{step}</span>
              </div>
              {i < 2 && (
                <div
                  className={`mx-3 h-px flex-1 transition-colors duration-300 ${
                    currentStep > i ? 'bg-[#1fb6e8]' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <label className={labelClass}>
                  Which services are you interested in?
                  <span className="ml-1 text-red-500">*</span>
                </label>
                <div className="mt-2 flex flex-wrap gap-3">
                  {[
                    { id: 'crm', label: 'CRM Solutions', icon: Users2 },
                    { id: 'talent', label: 'Talent Acquisition', icon: UserSearch },
                    { id: 'enterprise', label: 'Enterprise Solutions', icon: Building2 },
                    { id: 'payroll', label: 'Third Party Payroll', icon: Wallet },
                    { id: 'custom', label: 'Custom Development', icon: Code2 },
                    { id: 'ai', label: 'AI Integration', icon: Brain },
                  ].map((service) => {
                    const isSelected = data.serviceType.includes(service.id)
                    const Icon = service.icon
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? 'border-[#1fb6e8] bg-[#1fb6e8]/10 text-[#1fb6e8]'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        <Icon size={15} />
                        {service.label}
                        {isSelected && <Check size={13} className="ml-1" />}
                      </button>
                    )
                  })}
                </div>
                {errors.serviceType && <ErrorMsg msg={errors.serviceType} />}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Project Timeline <span className="text-red-500">*</span>
                  </label>
                  <FormIconField icon={Clock} hasError={!!errors.projectTimeline}>
                    <select
                      value={data.projectTimeline}
                      onChange={(e) => update('projectTimeline', e.target.value)}
                      className={`${iconInnerClass} cursor-pointer appearance-none`}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1month">Within 1 month</option>
                      <option value="3months">Within 3 months</option>
                      <option value="6months">Within 6 months</option>
                      <option value="flexible">Flexible / Planning phase</option>
                    </select>
                  </FormIconField>
                  {errors.projectTimeline && <ErrorMsg msg={errors.projectTimeline} />}
                </div>
                <div>
                  <label className={labelClass}>
                    Estimated Budget <span className="text-red-500">*</span>
                  </label>
                  <FormIconField icon={Wallet} hasError={!!errors.estimatedBudget}>
                    <select
                      value={data.estimatedBudget}
                      onChange={(e) => update('estimatedBudget', e.target.value)}
                      className={`${iconInnerClass} cursor-pointer appearance-none`}
                    >
                      <option value="">Select budget range</option>
                      <option value="under5l">Under ₹5 Lakhs</option>
                      <option value="5-15l">₹5 – ₹15 Lakhs</option>
                      <option value="15-50l">₹15 – ₹50 Lakhs</option>
                      <option value="50l-1cr">₹50 Lakhs – ₹1 Crore</option>
                      <option value="above1cr">Above ₹1 Crore</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </FormIconField>
                  {errors.estimatedBudget && <ErrorMsg msg={errors.estimatedBudget} />}
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <FormIconField icon={User} hasError={!!errors.firstName}>
                    <input
                      type="text"
                      value={data.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      className={iconInnerClass}
                      placeholder="First name"
                    />
                  </FormIconField>
                  {errors.firstName && <ErrorMsg msg={errors.firstName} />}
                </div>
                <div>
                  <label className={labelClass}>
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <FormIconField icon={User} hasError={!!errors.lastName}>
                    <input
                      type="text"
                      value={data.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                      className={iconInnerClass}
                      placeholder="Last name"
                    />
                  </FormIconField>
                  {errors.lastName && <ErrorMsg msg={errors.lastName} />}
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Company Name <span className="text-red-500">*</span>
                </label>
                <FormIconField icon={Building2} hasError={!!errors.companyName}>
                  <input
                    type="text"
                    value={data.companyName}
                    onChange={(e) => update('companyName', e.target.value)}
                    className={iconInnerClass}
                    placeholder="Company name"
                  />
                </FormIconField>
                {errors.companyName && <ErrorMsg msg={errors.companyName} />}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <FormIconField icon={Mail} hasError={!!errors.companyEmail}>
                    <input
                      type="email"
                      value={data.companyEmail}
                      onChange={(e) => update('companyEmail', e.target.value)}
                      className={iconInnerClass}
                      placeholder="you@company.com"
                    />
                  </FormIconField>
                  {errors.companyEmail && <ErrorMsg msg={errors.companyEmail} />}
                </div>
                <div>
                  <label className={labelClass}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <FormIconField icon={Phone} hasError={!!errors.phone}>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={data.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={iconInnerClass}
                    />
                  </FormIconField>
                  {errors.phone && <ErrorMsg msg={errors.phone} />}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Your Designation <span className="text-red-500">*</span>
                  </label>
                  <FormIconField icon={Briefcase} hasError={!!errors.designation}>
                    <input
                      type="text"
                      value={data.designation}
                      onChange={(e) => update('designation', e.target.value)}
                      className={iconInnerClass}
                      placeholder="Your role"
                    />
                  </FormIconField>
                  {errors.designation && <ErrorMsg msg={errors.designation} />}
                </div>
                <div>
                  <label className={labelClass}>
                    Company Size <span className="text-red-500">*</span>
                  </label>
                  <FormIconField icon={Users} hasError={!!errors.companySize}>
                    <select
                      value={data.companySize}
                      onChange={(e) => update('companySize', e.target.value)}
                      className={`${iconInnerClass} cursor-pointer appearance-none`}
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1–10 employees</option>
                      <option value="11-50">11–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-500">201–500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </FormIconField>
                  {errors.companySize && <ErrorMsg msg={errors.companySize} />}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-5">
              <div>
                <label className={labelClass}>
                  Describe Your Project <span className="text-red-500">*</span>
                  <span className="ml-1 text-xs font-normal text-gray-400">(minimum 50 characters)</span>
                </label>
                <textarea
                  rows={4}
                  value={data.projectDescription}
                  onChange={(e) => update('projectDescription', e.target.value)}
                  className={textareaClass(!!errors.projectDescription)}
                />
                <div className="mt-1 flex justify-between">
                  {errors.projectDescription ? (
                    <ErrorMsg msg={errors.projectDescription} />
                  ) : (
                    <span />
                  )}
                  <span
                    className={`text-xs ${
                      data.projectDescription.length >= 50 ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    {data.projectDescription.length}/50 min
                  </span>
                </div>
              </div>

              <div>
                <label className={labelClass}>Current Challenges (Optional)</label>
                <textarea
                  rows={3}
                  value={data.currentChallenges}
                  onChange={(e) => update('currentChallenges', e.target.value)}
                  className={textareaClass(false)}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Preferred Start Date <span className="text-red-500">*</span>
                  </label>
                  <FormIconField icon={Calendar} hasError={!!errors.preferredStartDate}>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={data.preferredStartDate}
                      onChange={(e) => update('preferredStartDate', e.target.value)}
                      className={iconInnerClass}
                    />
                  </FormIconField>
                  {errors.preferredStartDate && <ErrorMsg msg={errors.preferredStartDate} />}
                </div>
                <div>
                  <label className={labelClass}>Do you have an existing system?</label>
                  <div className="mt-2 flex gap-4">
                    {[
                      { val: true, label: 'Yes, we have one' },
                      { val: false, label: 'Starting fresh' },
                    ].map((opt) => (
                      <button
                        key={String(opt.val)}
                        type="button"
                        onClick={() => update('hasExistingSystem', opt.val)}
                        className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          data.hasExistingSystem === opt.val
                            ? 'border-[#1fb6e8] bg-[#1fb6e8]/10 text-[#1fb6e8]'
                            : 'border-gray-200 text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="flex items-start gap-2 text-xs text-gray-400">
                <Lock size={11} className="mt-0.5 shrink-0 text-gray-400" />
                Your information is kept strictly confidential and will only be used to respond to
                your enquiry. We do not sell or share client data.
              </p>

              <div className="space-y-3 border-t border-gray-100 pt-5">
                <div>
                  <label className="flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (!hasReadTerms) setTermsModalOpen(true)
                        else setAgreeToTerms((v) => !v)
                      }}
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-200 ${
                        agreeToTerms
                          ? 'border-[#1fb6e8] bg-[#1fb6e8]'
                          : hasReadTerms
                            ? 'cursor-pointer border-gray-300 hover:border-[#1fb6e8]'
                            : 'cursor-pointer border-gray-200 bg-gray-50'
                      }`}
                    >
                      {agreeToTerms && <Check size={12} className="text-white" strokeWidth={3} />}
                    </button>
                    <span className="text-sm leading-relaxed text-gray-600">
                      I agree to GravityTech&apos;s{' '}
                      <button
                        type="button"
                        onClick={() => setTermsModalOpen(true)}
                        className="inline-flex items-center gap-1 font-medium text-[#1fb6e8] underline underline-offset-2 hover:text-[#0da8da]"
                      >
                        Terms & Conditions
                        <ExternalLink size={11} />
                      </button>
                      {!hasReadTerms && (
                        <span className="mt-1 block text-xs text-amber-600">
                          Please open and read the full document to enable this checkbox
                        </span>
                      )}
                    </span>
                  </label>
                  {errors.agreeToTerms && <ErrorMsg msg={errors.agreeToTerms} />}
                </div>

                <div>
                  <label className="flex items-start gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (!hasReadPrivacy) setPrivacyModalOpen(true)
                        else setAgreeToPrivacy((v) => !v)
                      }}
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-200 ${
                        agreeToPrivacy
                          ? 'border-[#1fb6e8] bg-[#1fb6e8]'
                          : hasReadPrivacy
                            ? 'cursor-pointer border-gray-300 hover:border-[#1fb6e8]'
                            : 'cursor-pointer border-gray-200 bg-gray-50'
                      }`}
                    >
                      {agreeToPrivacy && <Check size={12} className="text-white" strokeWidth={3} />}
                    </button>
                    <span className="text-sm leading-relaxed text-gray-600">
                      I agree to GravityTech&apos;s{' '}
                      <button
                        type="button"
                        onClick={() => setPrivacyModalOpen(true)}
                        className="inline-flex items-center gap-1 font-medium text-[#1fb6e8] underline underline-offset-2 hover:text-[#0da8da]"
                      >
                        Privacy Policy
                        <ExternalLink size={11} />
                      </button>
                      {!hasReadPrivacy && (
                        <span className="mt-1 block text-xs text-amber-600">
                          Please open and read the full document to enable this checkbox
                        </span>
                      )}
                    </span>
                  </label>
                  {errors.agreeToPrivacy && <ErrorMsg msg={errors.agreeToPrivacy} />}
                </div>
              </div>
            </div>
          )}

          {submitError && (
            <p className="mt-4 text-sm text-red-500">{submitError}</p>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={() => {
                  setErrors({})
                  setCurrentStep((s) => s - 1)
                }}
                className="flex items-center gap-2 text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                <ChevronLeft size={16} />
                Back
              </button>
            ) : (
              <span />
            )}

            {currentStep < 2 ? (
              <button
                type="button"
                onClick={handleNext}
                className="group flex items-center gap-2 rounded-full bg-[#1fb6e8] py-2.5 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(31,182,232,0.35)] transition-all duration-300 hover:bg-[#0da8da]"
              >
                <div className="h-[18px] overflow-hidden">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                    <span className="leading-[18px]">Continue</span>
                    <span className="leading-[18px]" aria-hidden>
                      Continue
                    </span>
                  </div>
                </div>
                <div className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                  <ArrowRight
                    size={13}
                    className="text-white transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </div>
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-2 rounded-full bg-gray-900 py-2.5 pl-6 pr-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <div className="h-[18px] overflow-hidden">
                      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                        <span className="leading-[18px]">Submit Request</span>
                        <span className="leading-[18px]" aria-hidden>
                          Submit Request
                        </span>
                      </div>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                      <Send size={13} className="text-white" />
                    </div>
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>

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
    </div>
  )
}

export default ServiceQuoteForm
