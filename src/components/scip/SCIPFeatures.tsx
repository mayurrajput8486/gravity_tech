import {
  Code,
  FileCheck,
  Laptop,
  LifeBuoy,
  Rocket,
  Users,
  type LucideIcon,
} from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const FEATURES: {
  icon: LucideIcon
  title: string
  description: string
  details: string
}[] = [
  {
    icon: Laptop,
    title: '100% Hands-On',
    description:
      'All learning backed by real coding experience. No theory without practice. Every concept tied to live projects.',
    details: '5+ live projects, weekly code reviews, production deployment experience',
  },
  {
    icon: Users,
    title: 'Senior Mentors',
    description:
      'Learn directly from industry veterans with 10+ years experience. Personalized guidance every step.',
    details: '1:1 weekly sessions, career planning, mock interview prep',
  },
  {
    icon: Rocket,
    title: 'Fast Career Growth',
    description:
      'Jump directly to senior roles with proper foundation. Skip junior developer struggles.',
    details: 'Average 3-year career acceleration, salary negotiation coaching, lifetime placement support',
  },
  {
    icon: FileCheck,
    title: 'Real Portfolio',
    description:
      'Build 5+ production-ready projects. Impress any interviewer with real work.',
    details: 'GitHub portfolio, case studies, demo videos, live applications',
  },
  {
    icon: Code,
    title: 'Complete Stack',
    description:
      'Master full modern stack: React, Node.js, AWS, Docker, databases, DevOps.',
    details: '8+ technologies, system design, performance optimization, scaling',
  },
  {
    icon: LifeBuoy,
    title: 'Forever Support',
    description:
      "Even after placement, we're here. Career guidance, job transitions, skill upgrades.",
    details: 'Alumni network, job board access, referral program, continuous learning',
  },
]

function SCIPFeatures() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-[#0f0f0f] to-[#0a1628] px-8 py-24">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-12 text-3xl font-semibold text-white sm:text-4xl">
          Why Professionals Choose SCIP
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="scip-feature-hover min-h-[250px] rounded-xl border border-[#1fb6e8]/20 bg-[rgba(15,15,15,0.7)] p-7 transition-all duration-300"
              >
                <div className="scip-feature-icon mb-5 transition-transform duration-300">
                  <Icon size={48} className="text-[#1fb6e8]" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
                <p className="scip-feature-details mt-3 text-xs text-[#1fb6e8]">{feature.details}</p>
              </article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default SCIPFeatures
