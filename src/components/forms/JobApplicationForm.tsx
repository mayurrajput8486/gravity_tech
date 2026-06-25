import {
  AlertCircle,
  Briefcase,
  Check,
  CheckCircle2,
  ExternalLink,
  FileCheck,
  FileText,
  Link2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Upload,
  User,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent, type UIEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import TermsModal from '../modals/TermsModal'
import PrivacyModal from '../modals/PrivacyModal'
import { SCIP_TERMS_SECTIONS } from '../../constants/scipTerms'
import { submitJobApplication } from '../../lib/submissions'
import { isGoogleSheetsConfigured } from '../../lib/googleSheets'

interface JobApplicationFormProps {
  preselectedRole?: string
  lockRole?: boolean
}

interface ApplicationFormData {
  fullName: string
  email: string
  phone: string
  city: string
  roleApplying: string
  experienceLevel: string
  currentCompany: string
  currentDesignation: string
  noticePeriod: string
  linkedinUrl: string
  portfolioUrl: string
  githubUrl: string
  resumeFile: File | null
  whyGravityTech: string
}

interface ApplicationFormErrors {
  [key: string]: string
}

const INITIAL_DATA: ApplicationFormData = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  roleApplying: '',
  experienceLevel: '',
  currentCompany: '',
  currentDesignation: '',
  noticePeriod: '',
  linkedinUrl: '',
  portfolioUrl: '',
  githubUrl: '',
  resumeFile: null,
  whyGravityTech: '',
}

const ALLOWED_RESUME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

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

function darkTextareaClass(hasError: boolean) {
  return `${darkInputClass(hasError)} resize-none`
}

function DarkErrorMsg({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
      <AlertCircle size={11} />
      {msg}
    </p>
  )
}

function validateApplicationForm(
  data: ApplicationFormData,
  agreeToTerms: boolean,
  agreeToPrivacy: boolean,
  agreeToScip: boolean,
  hasReadTerms: boolean,
  hasReadPrivacy: boolean,
  hasReadScip: boolean,
  isFresher: boolean,
  isScipApplication: boolean
): ApplicationFormErrors {
  const errors: ApplicationFormErrors = {}

  if (!data.fullName.trim()) errors.fullName = 'Your full name is required'
  else if (data.fullName.trim().split(' ').length < 2)
    errors.fullName = 'Please enter your first and last name'

  if (!data.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Please enter a valid email address'

  if (!data.phone.trim()) errors.phone = 'Phone number is required'
  else if (!/^[+]?[\d\s\-()]{8,15}$/.test(data.phone.trim()))
    errors.phone = 'Enter a valid phone number'

  if (!data.city.trim()) errors.city = 'Your city is required'

  if (!data.roleApplying) errors.roleApplying = "Please select the role you're applying for"
  if (!data.experienceLevel) errors.experienceLevel = 'Please select your experience level'
  if (!isFresher && !data.noticePeriod) errors.noticePeriod = 'Please select your notice period'

  if (!data.resumeFile) errors.resumeFile = 'Please upload your resume'
  else {
    if (!ALLOWED_RESUME_TYPES.includes(data.resumeFile.type))
      errors.resumeFile = 'Please upload a PDF or Word document (.pdf, .doc, .docx)'
    else if (data.resumeFile.size > 5 * 1024 * 1024)
      errors.resumeFile = 'Resume must be under 5MB'
  }

  if (data.linkedinUrl && !data.linkedinUrl.includes('linkedin.com/in/'))
    errors.linkedinUrl = 'Enter a valid LinkedIn profile URL'

  if (!data.whyGravityTech.trim())
    errors.whyGravityTech = 'Please tell us why you want to join GravityTech'
  else if (data.whyGravityTech.trim().length < 80)
    errors.whyGravityTech = `Add a bit more (${80 - data.whyGravityTech.trim().length} more characters)`

  if (!agreeToTerms)
    errors.agreeToTerms = hasReadTerms
      ? 'Please check the box to agree to Terms & Conditions'
      : 'Please open and read the Terms & Conditions first'

  if (!agreeToPrivacy)
    errors.agreeToPrivacy = hasReadPrivacy
      ? 'Please check the box to agree to the Privacy Policy'
      : 'Please open and read the Privacy Policy first'

  if (isScipApplication && !agreeToScip)
    errors.agreeToScip = hasReadScip
      ? 'Please check the box to agree to the SCIP Program Terms & Conditions'
      : 'Please scroll through and read the SCIP Program terms first'

  return errors
}

function JobApplicationForm({ preselectedRole = '', lockRole = false }: JobApplicationFormProps) {
  const navigate = useNavigate()
  const [data, setData] = useState<ApplicationFormData>({
    ...INITIAL_DATA,
    roleApplying: preselectedRole,
  })
  const [errors, setErrors] = useState<ApplicationFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submittedRole, setSubmittedRole] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [isFresher, setIsFresher] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false)
  const [agreeToScip, setAgreeToScip] = useState(false)
  const [hasReadTerms, setHasReadTerms] = useState(false)
  const [hasReadPrivacy, setHasReadPrivacy] = useState(false)
  const [hasReadScip, setHasReadScip] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const scipTermsRef = useRef<HTMLDivElement>(null)

  const isScipApplication = data.roleApplying === 'SCIP Program'

  const handleScipTermsScroll = (event: UIEvent<HTMLDivElement>) => {
    if (hasReadScip) return
    const el = event.currentTarget
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 24
    if (atBottom) setHasReadScip(true)
  }

  useEffect(() => {
    if (!isScipApplication) return
    const el = scipTermsRef.current
    if (!el || hasReadScip) return
    if (el.scrollHeight <= el.clientHeight + 1) setHasReadScip(true)
  }, [isScipApplication, hasReadScip])

  useEffect(() => {
    if (preselectedRole) {
      setData((prev) => ({ ...prev, roleApplying: preselectedRole }))
    }
  }, [preselectedRole])

  useEffect(() => {
    if (data.experienceLevel === 'fresher') {
      setData((prev) => ({
        ...prev,
        noticePeriod: 'immediate',
        currentCompany: 'Fresher',
        currentDesignation: '',
      }))
      setIsFresher(true)
    } else {
      setIsFresher(false)
    }
  }, [data.experienceLevel])

  const update = <K extends keyof ApplicationFormData>(
    key: K,
    value: ApplicationFormData[K]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[key as string]
      return next
    })
  }

  const handleResumeFile = (file: File) => {
    update('resumeFile', file)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const formErrors = validateApplicationForm(
      data,
      agreeToTerms,
      agreeToPrivacy,
      agreeToScip,
      hasReadTerms,
      hasReadPrivacy,
      hasReadScip,
      isFresher,
      isScipApplication
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

    const result = await submitJobApplication({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      roleApplying: data.roleApplying,
      experienceLevel: data.experienceLevel,
      currentCompany: data.currentCompany,
      currentDesignation: data.currentDesignation,
      noticePeriod: data.noticePeriod,
      linkedinUrl: data.linkedinUrl,
      portfolioUrl: data.portfolioUrl,
      githubUrl: data.githubUrl,
      resumeFile: data.resumeFile!,
      whyGravityTech: data.whyGravityTech,
    })

    setIsSubmitting(false)

    if (!result.ok) {
      setSubmitError(result.message)
      return
    }

    setSubmittedRole(data.roleApplying)
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
        <h3 className="mb-3 text-2xl font-semibold text-white">Application Submitted!</h3>
        <p className="mx-auto mb-8 max-w-sm text-sm text-gray-400">
          We&apos;ve received your application
          {submittedRole ? (
            <>
              {' '}
              for <strong className="text-white">{submittedRole}</strong>
            </>
          ) : null}
          . Our talent team will review it and reach out within{' '}
          <strong className="text-white">2 business days</strong>.
        </p>
        <div className="mx-auto max-w-sm rounded-2xl border border-gray-800 bg-[#1a1a1a] p-6 text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
            What happens next
          </p>
          {[
            { n: '1', t: 'Profile review by our talent team' },
            { n: '2', t: '15-min intro call if shortlisted' },
            { n: '3', t: 'Technical round relevant to your role' },
            { n: '4', t: 'Offer letter + onboarding' },
          ].map((item) => (
            <div key={item.n} className="mb-3 flex items-start gap-3 last:mb-0">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1fb6e8]/10">
                <span className="text-xs font-bold text-[#1fb6e8]">{item.n}</span>
              </div>
              <p className="text-sm text-gray-400">{item.t}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#1fb6e8]">
          Apply Now
        </p>
        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-white">
          Tell us about yourself.
        </h2>
        <p className="text-sm text-gray-400">
          Fields marked <span className="text-red-400">*</span> are required. Resume upload is
          mandatory for all applications.
        </p>

        {preselectedRole && data.roleApplying === preselectedRole && (
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#1fb6e8]/30 bg-[#1fb6e8]/10 px-4 py-3">
            <Briefcase size={15} className="shrink-0 text-[#1fb6e8]" />
            <p className="text-sm font-medium text-[#1fb6e8]">Applying for: {preselectedRole}</p>
            {!lockRole && (
              <button
                type="button"
                onClick={() => update('roleApplying', '')}
                className="ml-auto text-[#1fb6e8]/60 hover:text-[#1fb6e8]"
              >
                <X size={14} />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="mb-8">
        <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white">
          <User size={14} className="text-[#1fb6e8]" />
          Personal Details
        </h3>
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
            <div className="relative">
              <Mail
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="email"
                value={data.email}
                onChange={(e) => update('email', e.target.value)}
                className={`${darkInputClass(!!errors.email)} pl-9`}
              />
            </div>
            {errors.email && <DarkErrorMsg msg={errors.email} />}
          </div>
          <div>
            <label className={darkLabelClass}>
              Phone Number <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <Phone
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={data.phone}
                onChange={(e) => update('phone', e.target.value)}
                className={`${darkInputClass(!!errors.phone)} pl-9`}
              />
            </div>
            {errors.phone && <DarkErrorMsg msg={errors.phone} />}
          </div>
          <div>
            <label className={darkLabelClass}>
              Current City <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <MapPin
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                value={data.city}
                onChange={(e) => update('city', e.target.value)}
                className={`${darkInputClass(!!errors.city)} pl-9`}
              />
            </div>
            {errors.city && <DarkErrorMsg msg={errors.city} />}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white">
          <Briefcase size={14} className="text-[#1fb6e8]" />
          Professional Details
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={darkLabelClass}>
              Role Applying For <span className="text-red-400">*</span>
            </label>
            <select
              value={data.roleApplying}
              onChange={(e) => {
                const val = e.target.value
                update('roleApplying', val)
                if (val === 'SCIP Program' && !lockRole) {
                  navigate('/careers/scip')
                }
                if (val !== 'SCIP Program') {
                  setAgreeToScip(false)
                  setHasReadScip(false)
                }
              }}
              disabled={lockRole}
              className={`${darkSelectClass(!!errors.roleApplying)} ${lockRole ? 'cursor-not-allowed bg-[#111] opacity-80' : ''}`}
            >
              <option value="">Select a role</option>
              <optgroup label="Internships">
                <option value="Java Intern">Java Intern</option>
                <option value="Python Intern">Python Intern</option>
                <option value="QA Automation Intern">QA Automation Intern</option>
                <option value="Data Analytics Intern">Data Analytics Intern</option>
              </optgroup>
              <optgroup label="Full-time Roles">
                <option value="Senior Full Stack Developer">Senior Full Stack Developer</option>
                <option value="AI/ML Engineer">AI/ML Engineer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="QA Automation Engineer">QA Automation Engineer</option>
                <option value="HR & Talent Specialist">HR & Talent Specialist</option>
              </optgroup>
              <optgroup label="Programs">
                <option value="SCIP Program">SCIP Program</option>
                <option value="General Application">General Application</option>
              </optgroup>
            </select>
            {errors.roleApplying && <DarkErrorMsg msg={errors.roleApplying} />}
          </div>
          <div>
            <label className={darkLabelClass}>
              Experience Level <span className="text-red-400">*</span>
            </label>
            <select
              value={data.experienceLevel}
              onChange={(e) => update('experienceLevel', e.target.value)}
              className={darkSelectClass(!!errors.experienceLevel)}
            >
              <option value="">Select experience</option>
              <option value="fresher">Fresher / Student</option>
              <option value="0-1">Under 1 year</option>
              <option value="1-3">1–3 years</option>
              <option value="3-5">3–5 years</option>
              <option value="5+">5+ years</option>
            </select>
            {errors.experienceLevel && <DarkErrorMsg msg={errors.experienceLevel} />}
          </div>
          <div>
            <label className={darkLabelClass}>
              Notice Period <span className="text-red-400">*</span>
            </label>
            <select
              value={data.noticePeriod}
              onChange={(e) => update('noticePeriod', e.target.value)}
              disabled={isFresher}
              className={`${darkSelectClass(!!errors.noticePeriod)} ${isFresher ? 'cursor-not-allowed bg-[#111] opacity-50' : ''}`}
            >
              <option value="">Select notice period</option>
              <option value="immediate">Immediate joiner</option>
              <option value="15days">15 days</option>
              <option value="30days">30 days</option>
              <option value="60days">60 days</option>
              <option value="90days">90 days</option>
            </select>
            {errors.noticePeriod && <DarkErrorMsg msg={errors.noticePeriod} />}
            {isFresher && (
              <p className="mt-1 text-xs text-gray-600">Not required for freshers</p>
            )}
          </div>
          <div>
            <label className={darkLabelClass}>Current Company</label>
            <input
              type="text"
              value={isFresher ? 'Fresher' : data.currentCompany}
              onChange={(e) => update('currentCompany', e.target.value)}
              disabled={isFresher}
              className={`${darkInputClass(false)} ${isFresher ? 'cursor-not-allowed bg-[#111] opacity-50' : ''}`}
            />
            {isFresher && (
              <p className="mt-1 text-xs text-gray-600">Not required for freshers</p>
            )}
          </div>
          <div>
            <label className={darkLabelClass}>Current Designation</label>
            <input
              type="text"
              value={data.currentDesignation}
              onChange={(e) => update('currentDesignation', e.target.value)}
              disabled={isFresher}
              className={`${darkInputClass(false)} ${isFresher ? 'cursor-not-allowed bg-[#111] opacity-50' : ''}`}
            />
            {isFresher && (
              <p className="mt-1 text-xs text-gray-600">Not required for freshers</p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white">
          <FileText size={14} className="text-[#1fb6e8]" />
          Resume <span className="font-normal normal-case text-red-400">*</span>
        </h3>
        <div
          onDragOver={(e) => {
            e.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragOver(false)
            const file = e.dataTransfer.files[0]
            if (file) handleResumeFile(file)
          }}
          className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-200 ${
            dragOver
              ? 'border-[#1fb6e8] bg-[#1fb6e8]/10'
              : data.resumeFile
                ? 'border-green-500/50 bg-green-500/5'
                : errors.resumeFile
                  ? 'border-red-500/50 bg-red-500/5'
                  : 'border-gray-700 bg-[#1a1a1a] hover:border-gray-600'
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleResumeFile(file)
            }}
          />

          {data.resumeFile ? (
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
                <FileCheck size={22} className="text-green-500" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="truncate text-sm font-medium text-white">{data.resumeFile.name}</p>
                <p className="mt-0.5 text-xs text-gray-500">
                  {(data.resumeFile.size / 1024).toFixed(0)} KB ·{' '}
                  {data.resumeFile.name.split('.').pop()?.toUpperCase()}
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  update('resumeFile', null)
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-red-500/20"
              >
                <X size={14} className="text-gray-400" />
              </button>
            </div>
          ) : (
            <div>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800">
                <Upload size={20} className="text-gray-500" />
              </div>
              <p className="mb-1 text-sm font-medium text-gray-300">
                Drop your resume here, or <span className="text-[#1fb6e8]">browse</span>
              </p>
              <p className="text-xs text-gray-600">PDF, DOC, DOCX · Maximum 5MB</p>
              {dragOver && (
                <p className="mt-2 animate-pulse text-xs text-[#1fb6e8]">Release to upload</p>
              )}
            </div>
          )}
        </div>
        {errors.resumeFile && <DarkErrorMsg msg={errors.resumeFile} />}
      </div>

      <div className="mb-8">
        <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white">
          <Link2 size={14} className="text-[#1fb6e8]" />
          Your Links
        </h3>
        <div className="space-y-4">
          <div>
            <label className={darkLabelClass}>LinkedIn Profile URL</label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500">
                in/
              </div>
              <input
                type="url"
                placeholder="https://linkedin.com/in/..."
                value={data.linkedinUrl}
                onChange={(e) => update('linkedinUrl', e.target.value)}
                className={`${darkInputClass(!!errors.linkedinUrl)} pl-9`}
              />
            </div>
            {errors.linkedinUrl && <DarkErrorMsg msg={errors.linkedinUrl} />}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={darkLabelClass}>
                Portfolio / Website
                <span className="ml-1 text-xs font-normal text-gray-500">(optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://"
                value={data.portfolioUrl}
                onChange={(e) => update('portfolioUrl', e.target.value)}
                className={darkInputClass(false)}
              />
            </div>
            <div>
              <label className={darkLabelClass}>
                GitHub Profile
                <span className="ml-1 text-xs font-normal text-gray-500">(optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://github.com/..."
                value={data.githubUrl}
                onChange={(e) => update('githubUrl', e.target.value)}
                className={darkInputClass(false)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <label className={darkLabelClass}>
          Why do you want to join GravityTech?
          <span className="ml-1 text-red-400">*</span>
          <span className="ml-1 text-xs font-normal text-gray-500">(minimum 80 characters)</span>
        </label>
        <textarea
          rows={4}
          value={data.whyGravityTech}
          onChange={(e) => update('whyGravityTech', e.target.value)}
          className={darkTextareaClass(!!errors.whyGravityTech)}
        />
        <div className="mt-1 flex justify-between">
          {errors.whyGravityTech ? <DarkErrorMsg msg={errors.whyGravityTech} /> : <span />}
          <span
            className={`text-xs ${
              data.whyGravityTech.length >= 80 ? 'text-green-500' : 'text-gray-600'
            }`}
          >
            {data.whyGravityTech.length}/80 min
          </span>
        </div>
      </div>

      {isScipApplication && (
        <>
          <div id="scip-terms" className="mb-6">
            <p className={darkLabelClass}>SCIP Terms & Conditions</p>
            <div
              ref={scipTermsRef}
              onScroll={handleScipTermsScroll}
              className="max-h-56 overflow-y-auto rounded-xl border border-gray-700 bg-[#111] p-5 text-sm leading-relaxed text-gray-400"
            >
              <div className="space-y-4">
                {SCIP_TERMS_SECTIONS.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-1.5 text-sm font-semibold text-white">{section.title}</h3>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t border-gray-800 pt-4 text-xs text-gray-500">
                By checking the box below, you confirm that you have read, understood, and agree to
                be bound by the SCIP Program terms outlined above.
              </p>
            </div>
            {!hasReadScip && (
              <p className="mt-2 text-xs text-amber-400">
                Scroll to the bottom of the terms to enable the agreement checkbox.
              </p>
            )}
          </div>

          <div className="mb-8">
            <label className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!hasReadScip) return
                  setAgreeToScip((v) => !v)
                }}
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-200 ${
                  agreeToScip
                    ? 'border-[#1fb6e8] bg-[#1fb6e8]'
                    : hasReadScip
                      ? 'cursor-pointer border-gray-600 hover:border-gray-500'
                      : 'cursor-not-allowed border-gray-700 bg-[#111] opacity-50'
                }`}
              >
                {agreeToScip && <Check size={11} className="text-white" strokeWidth={3} />}
              </button>
              <span className="text-sm leading-relaxed text-gray-400">
                I have read and agree to the SCIP Program Terms & Conditions{' '}
                <span className="text-red-400">*</span>
              </span>
            </label>
            {errors.agreeToScip && <DarkErrorMsg msg={errors.agreeToScip} />}
          </div>
        </>
      )}

      <div className="mb-8 space-y-3">
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
                    ? 'cursor-pointer border-gray-600 hover:border-gray-500'
                    : 'cursor-pointer border-gray-600 bg-[#111]'
              }`}
            >
              {agreeToTerms && <Check size={11} className="text-white" strokeWidth={3} />}
            </button>
            <span className="text-sm leading-relaxed text-gray-400">
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
                <span className="mt-1 block text-xs text-amber-400">
                  Please open and read the full document to enable this checkbox
                </span>
              )}
            </span>
          </label>
          {errors.agreeToTerms && <DarkErrorMsg msg={errors.agreeToTerms} />}
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
                    ? 'cursor-pointer border-gray-600 hover:border-gray-500'
                    : 'cursor-pointer border-gray-600 bg-[#111]'
              }`}
            >
              {agreeToPrivacy && <Check size={11} className="text-white" strokeWidth={3} />}
            </button>
            <span className="text-sm leading-relaxed text-gray-400">
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
                <span className="mt-1 block text-xs text-amber-400">
                  Please open and read the full document to enable this checkbox
                </span>
              )}
            </span>
          </label>
          {errors.agreeToPrivacy && <DarkErrorMsg msg={errors.agreeToPrivacy} />}
        </div>
      </div>

      {submitError && (
        <div className="mb-6 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#1fb6e8] px-8 py-4 text-base font-semibold text-white shadow-[0_4px_20px_rgba(31,182,232,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0da8da] hover:shadow-[0_8px_28px_rgba(31,182,232,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting your application...
          </>
        ) : (
          <>
            <div className="h-[22px] overflow-hidden">
              <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                <span className="leading-[22px]">Submit Application</span>
                <span className="leading-[22px]" aria-hidden>
                  Submit Application
                </span>
              </div>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <Send size={15} className="text-white" />
            </div>
          </>
        )}
      </button>

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
    </form>
  )
}

export default JobApplicationForm
