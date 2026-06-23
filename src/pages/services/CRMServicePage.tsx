import { BarChart3, Puzzle, Zap } from 'lucide-react'
import ServiceDetailLayout from '../../components/pages/services/ServiceDetailLayout'

function CRMServicePage() {
  return (
    <ServiceDetailLayout
      content={{
        serviceName: 'CRM',
        heroLine1: 'Custom CRM Solutions',
        heroLine2: 'Built For Your Pipeline',
        heroSubtext:
          'AI-assisted lead management, pipeline automation, and real-time analytics — built to match how your sales team actually works.',
        overviewParagraphs: [
          'Off-the-shelf CRM tools are built for average use cases. GravityTech builds CRM platforms tailored to your exact sales motion — your pipeline stages, your lead scoring criteria, your reporting needs.',
          'We integrate AI where it genuinely saves time: auto-scoring inbound leads, suggesting next actions, flagging at-risk deals, and generating pipeline health reports without manual input.',
          "Every CRM we build is designed for adoption — clean interfaces, fast load times, and mobile access — because a CRM your team doesn't use is just expensive software.",
        ],
        features: [
          'Lead & Contact Management',
          'AI-Powered Lead Scoring',
          'Custom Pipeline Stages',
          'Automated Follow-up Reminders',
          'Multi-channel Integration (Email, WhatsApp, LinkedIn)',
          'Real-time Sales Dashboard',
          'Custom Reports & Exports',
          'Role-Based Access Control',
        ],
        steps: [
          {
            number: '01',
            title: 'Discovery & Mapping',
            description:
              'We map your sales process, identify automation opportunities, and define the data model.',
          },
          {
            number: '02',
            title: 'Design & Prototype',
            description:
              'UI wireframes and a working prototype reviewed with your sales team before a line of production code is written.',
          },
          {
            number: '03',
            title: 'Build & Integrate',
            description:
              'Full development with integrations to your existing tools — email, calendar, telephony, and marketing platforms.',
          },
          {
            number: '04',
            title: 'Train & Launch',
            description:
              'Team training, go-live support, and a 30-day hypercare period to resolve any adoption friction.',
          },
        ],
        benefits: [
          {
            icon: Zap,
            title: '30% Faster Pipeline Velocity',
            description:
              'Automated reminders, AI next-action suggestions, and clean deal views cut time wasted on admin.',
          },
          {
            icon: BarChart3,
            title: 'Real-Time Visibility',
            description:
              'Live dashboards give managers instant pipeline health, team performance, and forecast accuracy.',
          },
          {
            icon: Puzzle,
            title: 'Fits Your Stack',
            description:
              'Integrates with your email, calendar, WhatsApp, and existing tools — no ripping and replacing.',
          },
        ],
        ctaTitle: 'Ready to build a CRM your team will actually use?',
      }}
    />
  )
}

export default CRMServicePage
