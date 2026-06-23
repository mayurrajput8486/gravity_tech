import { Layers, Shield, TrendingUp } from 'lucide-react'
import ServiceDetailLayout from '../../components/pages/services/ServiceDetailLayout'

function EnterpriseSolutionsPage() {
  return (
    <ServiceDetailLayout
      content={{
        serviceName: 'Enterprise Software',
        heroLine1: 'Enterprise Software',
        heroLine2: 'Engineered For Scale',
        heroSubtext:
          'Large-scale ERP integrations, workflow automation, and cross-department portals built for security, compliance, and long-term maintainability.',
        overviewParagraphs: [
          "Enterprise software problems are rarely about missing features — they're about systems that don't talk to each other, workflows that still run on email and spreadsheets, and platforms that slow down as the company grows.",
          'GravityTech designs and builds enterprise software with architecture that scales: microservices where appropriate, clean API layers between systems, and deployment pipelines that let you ship safely and frequently.',
          'Security, access control, and audit logging are designed in from sprint one — not added as an afterthought before a compliance review.',
        ],
        features: [
          'ERP & Legacy System Integration',
          'Workflow Automation Engine',
          'Multi-Department Portals',
          'Role-Based Access Control (RBAC)',
          'Audit Logging & Compliance Modules',
          'Microservices Architecture',
          'API Gateway & Integration Layer',
          'Scalable Cloud Deployment (AWS / Azure)',
        ],
        steps: [
          {
            number: '01',
            title: 'Architecture Review',
            description:
              'Assess existing systems, integration points, and identify the correct modernization path.',
          },
          {
            number: '02',
            title: 'Incremental Build',
            description:
              'Phase-based delivery — value in production early, not 12 months into a big-bang build.',
          },
          {
            number: '03',
            title: 'Integration & QA',
            description:
              'End-to-end integration testing, performance benchmarking, and security audits.',
          },
          {
            number: '04',
            title: 'Operate & Evolve',
            description:
              'Hypercare post-launch, SLA-backed support, and a roadmap for continuous improvement.',
          },
        ],
        benefits: [
          {
            icon: Shield,
            title: 'Enterprise-Grade Security',
            description:
              'OWASP-compliant, RBAC enforced, and audit trails built into every module from day one.',
          },
          {
            icon: TrendingUp,
            title: 'Scales With You',
            description:
              'Architecture designed for 10x current load — no rearchitecting when you hit growth.',
          },
          {
            icon: Layers,
            title: 'Connects Everything',
            description: 'API-first design means new integrations take days, not months.',
          },
        ],
        ctaTitle: 'Ready to modernize your enterprise systems?',
      }}
    />
  )
}

export default EnterpriseSolutionsPage
