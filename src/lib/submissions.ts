import {
  fileToBase64,
  postToGoogleSheet,
  type SheetSubmitResult,
} from './googleSheets'

export type SubmissionResult = SheetSubmitResult

function fail(message: string): SubmissionResult {
  return { ok: false, message }
}

export interface BusinessEnquiryPayload {
  firstName: string
  companyEmail: string
  designation: string
  phone: string
  requirements: string
}

export async function submitBusinessEnquiry(
  payload: BusinessEnquiryPayload
): Promise<SubmissionResult> {
  return postToGoogleSheet({
    formType: 'business_enquiry',
    data: {
      firstName: payload.firstName.trim(),
      companyEmail: payload.companyEmail.trim(),
      designation: payload.designation.trim(),
      phone: payload.phone.trim(),
      requirements: payload.requirements.trim(),
    },
  })
}

export interface QuoteRequestPayload {
  firstName: string
  lastName: string
  companyName: string
  companyEmail: string
  phone: string
  designation: string
  companySize: string
  serviceType: string[]
  projectTimeline: string
  estimatedBudget: string
  projectDescription: string
  currentChallenges: string
  hasExistingSystem: boolean | null
  preferredStartDate: string
}

export async function submitQuoteRequest(payload: QuoteRequestPayload): Promise<SubmissionResult> {
  return postToGoogleSheet({
    formType: 'quote_request',
    data: {
      firstName: payload.firstName.trim(),
      lastName: payload.lastName.trim(),
      companyName: payload.companyName.trim(),
      companyEmail: payload.companyEmail.trim(),
      phone: payload.phone.trim(),
      designation: payload.designation.trim(),
      companySize: payload.companySize,
      serviceTypes: payload.serviceType.join(', '),
      projectTimeline: payload.projectTimeline,
      estimatedBudget: payload.estimatedBudget,
      projectDescription: payload.projectDescription.trim(),
      currentChallenges: payload.currentChallenges.trim(),
      hasExistingSystem:
        payload.hasExistingSystem === null ? '' : payload.hasExistingSystem ? 'Yes' : 'No',
      preferredStartDate: payload.preferredStartDate,
    },
  })
}

export interface JobApplicationPayload {
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
  resumeFile: File
  whyGravityTech: string
}

export async function submitJobApplication(
  payload: JobApplicationPayload
): Promise<SubmissionResult> {
  try {
    const base64 = await fileToBase64(payload.resumeFile)

    return postToGoogleSheet({
      formType: 'job_application',
      data: {
        fullName: payload.fullName.trim(),
        email: payload.email.trim(),
        phone: payload.phone.trim(),
        city: payload.city.trim(),
        roleApplying: payload.roleApplying,
        experienceLevel: payload.experienceLevel,
        currentCompany: payload.currentCompany.trim(),
        currentDesignation: payload.currentDesignation.trim(),
        noticePeriod: payload.noticePeriod,
        linkedinUrl: payload.linkedinUrl.trim(),
        portfolioUrl: payload.portfolioUrl.trim(),
        githubUrl: payload.githubUrl.trim(),
        whyGravityTech: payload.whyGravityTech.trim(),
      },
      file: {
        name: payload.resumeFile.name,
        mimeType: payload.resumeFile.type || 'application/octet-stream',
        base64,
      },
    })
  } catch (err) {
    return fail(err instanceof Error ? err.message : 'Failed to upload resume')
  }
}

export interface SCIPApplicationPayload {
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

export async function submitSCIPApplication(
  payload: SCIPApplicationPayload
): Promise<SubmissionResult> {
  return postToGoogleSheet({
    formType: 'scip_application',
    data: {
      fullName: payload.fullName.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      city: payload.city.trim(),
      track: payload.track,
      qualification: payload.qualification.trim(),
      graduationYear: payload.graduationYear,
      college: payload.college.trim(),
      projectLink: payload.projectLink.trim(),
      whyScip: payload.whyScip.trim(),
    },
  })
}
