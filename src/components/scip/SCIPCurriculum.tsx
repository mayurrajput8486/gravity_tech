import {
  BookOpen,
  ChevronDown,
  Cloud,
  Database,
  Target,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import AnimatedSection from '../AnimatedSection'

interface CurriculumPhase {
  icon: LucideIcon
  title: string
  duration: string
  progress: number
  weeks: { range: string; topics: string[] }[]
  technologies: string[]
  projects: string
  deliverable: string
}

const CURRICULUM: CurriculumPhase[] = [
  {
    icon: BookOpen,
    title: 'Phase 1: Fundamentals & Onboarding',
    duration: '6 Weeks',
    progress: 25,
    weeks: [
      {
        range: 'Week 1-2: Fundamentals',
        topics: [
          'JavaScript basics, ES6+, DOM manipulation',
          'Data structures (arrays, objects, linked lists)',
          'Algorithms fundamentals',
        ],
      },
      {
        range: 'Week 3-4: Web Foundations',
        topics: [
          'HTML5 semantic markup',
          'CSS3, Flexbox, Grid, responsive design',
          'CSS preprocessors (SCSS)',
        ],
      },
      {
        range: 'Week 5-6: First Mini Projects',
        topics: [
          'Build 3 mini projects (Todo app, Weather app, Portfolio)',
          'Version control (Git/GitHub)',
          'Assessment & feedback',
        ],
      },
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git'],
    projects: '3 mini projects',
    deliverable: 'Fundamentals certificate',
  },
  {
    icon: Zap,
    title: 'Phase 2: React & Frontend',
    duration: '6 Weeks',
    progress: 50,
    weeks: [
      {
        range: 'Week 7-9: React Fundamentals',
        topics: [
          'React fundamentals (components, hooks, state management)',
          'Advanced React (context, custom hooks, performance optimization)',
          'State management (Zustand, Redux optional)',
        ],
      },
      {
        range: 'Week 10-12: Frontend Projects',
        topics: [
          'Build 2-3 medium projects',
          'E-commerce frontend, Dashboard, Real-time app',
          'API integration and Firebase',
        ],
      },
    ],
    technologies: ['React', 'Node.js', 'Firebase', 'API Integration'],
    projects: 'E-commerce frontend, Dashboard, Real-time app',
    deliverable: 'React projects portfolio',
  },
  {
    icon: Database,
    title: 'Phase 3: Backend Development',
    duration: '6 Weeks',
    progress: 75,
    weeks: [
      {
        range: 'Week 13-15: Backend Core',
        topics: [
          'Node.js & Express.js fundamentals',
          'Database design (SQL & NoSQL)',
          'REST API development',
        ],
      },
      {
        range: 'Week 16-18: Auth & Live Projects',
        topics: [
          'Authentication & authorization',
          'Live project assignment begins',
          'Todo API, E-commerce backend, Real-time chat API',
        ],
      },
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT'],
    projects: 'Todo API, E-commerce backend, Real-time chat API',
    deliverable: 'Functional backend APIs',
  },
  {
    icon: Cloud,
    title: 'Phase 4: Advanced & DevOps',
    duration: '4 Weeks',
    progress: 90,
    weeks: [
      {
        range: 'Week 19-22: Production Systems',
        topics: [
          'System design fundamentals',
          'Scaling & performance optimization',
          'Docker & containerization',
          'AWS basics (EC2, S3, RDS)',
          'CI/CD pipelines',
        ],
      },
    ],
    technologies: ['Docker', 'AWS', 'CI/CD', 'System Design'],
    projects: 'Deployable production systems',
    deliverable: 'Deployable production systems',
  },
  {
    icon: Target,
    title: 'Phase 5: Interviews & Placement',
    duration: '2 Weeks',
    progress: 100,
    weeks: [
      {
        range: 'Week 23-24: Career Launch',
        topics: [
          'Mock interviews (3+ rounds)',
          'Resume & portfolio review',
          'Salary negotiation coaching',
          'Interview prep sessions',
          'Final assessment & job placement assistance',
        ],
      },
    ],
    technologies: ['Interview Prep', 'Career Coaching'],
    projects: 'Job placement',
    deliverable: 'Job offer, employment',
  },
]

function SCIPCurriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <AnimatedSection className="bg-[#0f0f0f] px-8 py-24">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-12 text-3xl font-semibold text-white sm:text-4xl">
          Detailed Curriculum
        </h2>

        <div className="space-y-3">
          {CURRICULUM.map((phase, index) => {
            const Icon = phase.icon
            const isOpen = openIndex === index

            return (
              <div key={phase.title} className="overflow-hidden rounded-xl border border-gray-800">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between border-l-4 border-[#1fb6e8] bg-[#141414] p-5 text-left transition-colors hover:bg-[#1fb6e8]/5"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={22} className="shrink-0 text-[#1fb6e8]" />
                    <div>
                      <p className="font-semibold text-white">{phase.title}</p>
                      <p className="text-xs text-gray-500">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden w-24 sm:block">
                      <div className="h-1.5 overflow-hidden rounded-full bg-gray-800">
                        <div
                          className="h-full rounded-full bg-[#1fb6e8] transition-all duration-500"
                          style={{ width: `${phase.progress}%` }}
                        />
                      </div>
                      <p className="mt-1 text-right text-xs text-gray-500">{phase.progress}%</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                <div className={`scip-accordion-content ${isOpen ? 'open' : ''}`}>
                  <div className="space-y-5 bg-[#0a0a0a] p-6">
                    {phase.weeks.map((week) => (
                      <div key={week.range}>
                        <p className="mb-2 text-sm font-medium text-[#1fb6e8]">{week.range}</p>
                        <ul className="space-y-1">
                          {week.topics.map((topic) => (
                            <li key={topic} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#1fb6e8]" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="flex flex-wrap gap-2">
                      {phase.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#1fb6e8]/10 px-3 py-1 text-xs text-[#1fb6e8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                      <p className="text-gray-500">
                        <span className="text-gray-400">Projects:</span> {phase.projects}
                      </p>
                      <p className="text-gray-500">
                        <span className="text-gray-400">Deliverable:</span>{' '}
                        <span className="text-white">{phase.deliverable}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default SCIPCurriculum
