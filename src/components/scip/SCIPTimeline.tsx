import {
  BookOpen,
  Briefcase,
  CheckCircle,
  Target,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { useRef } from 'react'
import AnimatedSection from '../AnimatedSection'

const PHASES: {
  icon: LucideIcon
  weeks: string
  title: string
  description: string
  deliverable: string
  duration: string
}[] = [
  {
    icon: CheckCircle,
    weeks: 'Week 1-2',
    title: 'Selection & Onboarding',
    description: 'Rigorous assessment, personality evaluation, and program orientation',
    deliverable: '✓ Program introduction, team formation, tech setup',
    duration: '2 Weeks',
  },
  {
    icon: BookOpen,
    weeks: 'Week 3-6',
    title: 'Core Foundations',
    description: 'Master programming fundamentals, data structures, and web development basics',
    deliverable: '✓ 3 mini-projects completed, fundamentals assessment',
    duration: '4 Weeks',
  },
  {
    icon: Briefcase,
    weeks: 'Week 7-12',
    title: 'Live Project Immersion',
    description: 'Assigned to real client projects, apply learning in production environment',
    deliverable: '✓ 2-3 live projects, contributions to production code',
    duration: '6 Weeks',
  },
  {
    icon: Zap,
    weeks: 'Week 13-18',
    title: 'Advanced Specialization',
    description: 'Deep dive into specialized areas, system design, performance optimization',
    deliverable: '✓ Complex project completion, architecture design',
    duration: '6 Weeks',
  },
  {
    icon: Target,
    weeks: 'Week 19-24',
    title: 'Assessment & Placement',
    description: 'Final assessment, interviews, and placement with matched companies',
    deliverable: '✓ Certification, job offer, onboarding',
    duration: '6 Weeks',
  },
]

function SCIPTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <AnimatedSection className="bg-[#0f0f0f] px-8 py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
              Your SCIP Journey
            </h2>
            <p className="text-sm text-gray-500 sm:text-base">
              A structured 24-week pathway from selection to placement.
            </p>
          </div>
          <p className="hidden text-sm text-gray-500 lg:block">← Scroll →</p>
        </div>

        <div
          ref={scrollRef}
          className="scip-timeline-scroll hidden gap-6 overflow-x-auto pb-6 lg:flex"
        >
          <div className="relative flex min-w-max gap-6">
            <div className="absolute left-8 right-8 top-12 h-0.5 bg-gradient-to-r from-[#1fb6e8] via-[#7c3aed] to-[#ec4899]" />
            {PHASES.map((phase) => {
              const Icon = phase.icon
              return (
                <article
                  key={phase.title}
                  className="group relative w-72 shrink-0 rounded-xl border border-gray-800 bg-[#141414] p-6 transition-all duration-300 hover:border-[#1fb6e8] hover:shadow-lg hover:shadow-[#1fb6e8]/10"
                >
                  <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1fb6e8] bg-[#0f0f0f]">
                    <Icon size={20} className="text-[#1fb6e8]" />
                  </div>
                  <span className="mb-1 block font-mono text-xs text-[#1fb6e8]">{phase.weeks}</span>
                  <h3 className="mb-2 font-semibold text-white">{phase.title}</h3>
                  <p className="mb-3 text-sm text-gray-400 transition-all group-hover:text-gray-300">
                    {phase.description}
                  </p>
                  <p className="mb-4 text-xs text-gray-500">{phase.deliverable}</p>
                  <span className="inline-block rounded-full bg-[#1fb6e8]/10 px-3 py-1 text-xs font-medium text-[#1fb6e8]">
                    {phase.duration}
                  </span>
                </article>
              )
            })}
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl lg:hidden">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#1fb6e8] via-[#7c3aed] to-[#ec4899]" />
          <div className="space-y-8">
            {PHASES.map((phase) => {
              const Icon = phase.icon
              return (
                <article key={phase.title} className="relative pl-12">
                  <div className="absolute left-2.5 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#1fb6e8] bg-[#0f0f0f]">
                    <Icon size={10} className="text-[#1fb6e8]" />
                  </div>
                  <span className="mb-1 block font-mono text-xs text-[#1fb6e8]">{phase.weeks}</span>
                  <h3 className="mb-2 font-semibold text-white">{phase.title}</h3>
                  <p className="mb-2 text-sm text-gray-400">{phase.description}</p>
                  <p className="mb-2 text-xs text-gray-500">{phase.deliverable}</p>
                  <span className="inline-block rounded-full bg-[#1fb6e8]/10 px-3 py-1 text-xs text-[#1fb6e8]">
                    {phase.duration}
                  </span>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default SCIPTimeline
