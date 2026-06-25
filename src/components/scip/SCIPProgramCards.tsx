import {
  Award,
  Briefcase,
  Code,
  Rocket,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const PROGRAM_CARDS: {
  icon: LucideIcon
  title: string
  description: string
  hoverStat: string
}[] = [
  {
    icon: Briefcase,
    title: 'Real-World Projects',
    description: 'Work on live client projects from day one, solving actual business problems',
    hoverStat: 'Average 5+ Live Projects',
  },
  {
    icon: Users,
    title: 'Industry Expert Mentors',
    description: 'Learn from senior developers and architects with 10+ years experience',
    hoverStat: '1:1 Weekly Sessions',
  },
  {
    icon: Rocket,
    title: 'Accelerated Placement',
    description: 'Direct pathway to jobs with partner companies and placement assistance',
    hoverStat: '95% Success Rate',
  },
  {
    icon: Code,
    title: 'Complete Tech Stack',
    description: 'Master React, Node.js, AWS, databases, and modern DevOps practices',
    hoverStat: '8+ Technologies',
  },
  {
    icon: Award,
    title: 'Portfolio + Certification',
    description: 'Build impressive portfolio projects and earn industry-recognized certification',
    hoverStat: 'Verified Credentials',
  },
  {
    icon: Target,
    title: 'Career Coaching',
    description: 'Mock interviews, resume reviews, and personalized career guidance included',
    hoverStat: 'Lifetime Support',
  },
]

function SCIPProgramCards() {
  return (
    <AnimatedSection className="bg-gradient-to-b from-[#0f0f0f] to-[#1a0a2e]/80 px-8 py-24">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
          SCIP Program at a Glance
        </h2>
        <p className="mb-12 max-w-2xl text-sm text-gray-400 sm:text-base">
          Why professionals choose SCIP over traditional training programs.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAM_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <article
                key={card.title}
                className="scip-card-hover group rounded-xl border border-[#1fb6e8]/20 bg-[rgba(15,15,15,0.6)] p-8"
              >
                <div className="scip-card-icon mb-6 transition-transform duration-300">
                  <Icon size={48} className="text-[#1fb6e8]" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">{card.description}</p>
                <p className="scip-card-stat text-xs font-medium text-[#1fb6e8]">
                  {card.hoverStat}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default SCIPProgramCards
