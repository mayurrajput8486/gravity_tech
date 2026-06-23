import { BarChart3, Clock, Shield } from 'lucide-react'
import ServiceDetailLayout from '../../components/pages/services/ServiceDetailLayout'

function ThirdPartyPayrollPage() {
  return (
    <ServiceDetailLayout
      content={{
        serviceName: 'Third Party Payroll',
        heroLine1: 'Third Party Payroll',
        heroLine2: 'Zero Compliance Risk',
        heroSubtext:
          'Fully managed multi-vendor payroll processing — PF, ESI, TDS, salary disbursement, and real-time reporting. One platform, complete compliance.',
        overviewParagraphs: [
          'Managing payroll across multiple vendors is one of the highest-risk operational tasks an enterprise takes on. A single error triggers penalties, delayed salaries, and audit exposure. GravityTech\'s payroll platform automates the entire process.',
          'Every statutory filing — PF, ESI, TDS, PT — is calculated automatically based on the latest regulatory rules. Salary slips are generated and distributed digitally. Year-end filings are prepared with a complete audit trail.',
          'The real-time dashboard gives finance teams instant visibility into payroll costs, headcount changes, and compliance status — without chasing vendors or reconciling spreadsheets.',
        ],
        features: [
          'Multi-Vendor Payroll Processing',
          'Statutory Compliance (PF, ESI, TDS, PT)',
          'Automated Salary Slip Generation',
          'Real-Time Payroll Dashboard',
          'Year-End Filing Support (Form 16, 24Q)',
          'Vendor Reconciliation',
          'Payroll Analytics & Cost Reports',
          'Employee Self-Service Portal',
        ],
        steps: [
          {
            number: '01',
            title: 'Vendor Onboarding',
            description:
              'Map all vendor contracts, headcount, pay structures, and statutory obligations into the platform.',
          },
          {
            number: '02',
            title: 'Automation Setup',
            description:
              'Configure calculation rules, approval workflows, and statutory filing schedules.',
          },
          {
            number: '03',
            title: 'First Payroll Run',
            description:
              'Parallel run alongside existing process to validate accuracy before full cutover.',
          },
          {
            number: '04',
            title: 'Ongoing Operations',
            description:
              'Automated monthly processing, disbursement, filing, and exception alerts.',
          },
        ],
        benefits: [
          {
            icon: Shield,
            title: 'Zero Compliance Errors',
            description:
              'Rule-engine updated with every regulatory change — PF, ESI, TDS calculated correctly every cycle.',
          },
          {
            icon: Clock,
            title: 'Payroll in Hours, Not Days',
            description:
              'Automated processing cuts payroll run time from days of manual work to a few hours of review.',
          },
          {
            icon: BarChart3,
            title: 'Complete Visibility',
            description:
              'Finance sees real-time payroll cost, headcount, and filing status — no chasing vendors.',
          },
        ],
        ctaTitle: 'Ready to eliminate payroll compliance risk?',
      }}
    />
  )
}

export default ThirdPartyPayrollPage
