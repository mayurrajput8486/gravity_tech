import { CheckCircle2, Clock, Target } from 'lucide-react'
import ServiceDetailLayout from '../../components/pages/services/ServiceDetailLayout'

function TalentAcquisitionPage() {
  return (
    <ServiceDetailLayout
      content={{
        serviceName: 'Talent Acquisition',
        heroLine1: 'Talent Acquisition',
        heroLine2: 'Technology That Hires Better',
        heroSubtext:
          "From job posting to onboarding — AI-powered recruitment technology built for HR teams that can't afford to move slowly.",
        overviewParagraphs: [
          'Hiring bottlenecks cost businesses more than most realize — missed revenue targets, overworked teams, and candidates lost to faster-moving competitors. GravityTech builds recruitment platforms that eliminate the manual steps that slow HR down.',
          'Our AI resume screening layer reads CVs against your job requirements, scores candidates objectively, and surfaces the top profiles — so your HR team spends time interviewing, not filtering.',
          'From automated interview scheduling to digital offer letters and onboarding task lists, every step after the application is streamlined and tracked.',
        ],
        features: [
          'AI Resume Screening & Scoring',
          'Automated Interview Scheduling',
          'Candidate Pipeline Tracking',
          'Job Board & Career Page Integration',
          'Offer Letter Generation',
          'Digital Onboarding Checklists',
          'HR Analytics Dashboard',
          'Compliance & Audit Trail',
        ],
        steps: [
          {
            number: '01',
            title: 'Requirements Analysis',
            description:
              'Define role criteria, screening parameters, and pipeline stages with your HR team.',
          },
          {
            number: '02',
            title: 'Platform Build',
            description:
              'Custom careers portal, AI screening engine, and integration with your HRIS.',
          },
          {
            number: '03',
            title: 'Integration & Testing',
            description:
              'Connect to job boards, email, calendar, and existing tools. Full UAT with your team.',
          },
          {
            number: '04',
            title: 'Launch & Iterate',
            description:
              'Go live, track hire quality metrics, and iterate on screening criteria based on outcomes.',
          },
        ],
        benefits: [
          {
            icon: Clock,
            title: '45% Faster Time-to-Hire',
            description:
              'AI screening and automated scheduling eliminate the biggest time sinks in the hiring funnel.',
          },
          {
            icon: Target,
            title: 'Objective Candidate Scoring',
            description:
              'Criteria-based AI scoring reduces bias and ensures the best candidates reach the interview stage.',
          },
          {
            icon: CheckCircle2,
            title: 'End-to-End Tracking',
            description:
              'Full pipeline visibility from application to day-one onboarding — nothing falls through the cracks.',
          },
        ],
        ctaTitle: 'Ready to hire faster with better technology?',
      }}
    />
  )
}

export default TalentAcquisitionPage
