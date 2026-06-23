import {
  BarChart3,
  CheckSquare,
  Code2,
  Terminal,
} from 'lucide-react'
import PageHero from '../../components/PageHero'
import TextRollButton from '../../components/TextRollButton'
import SCIPApplicationForm from '../../components/forms/SCIPApplicationForm'
import { SCIP_TERMS_SECTIONS } from '../../constants/scipTerms'
import { GRADIENT_LIGHT } from '../../constants/data'

const SCIP_TRACKS = [
  {
    icon: Code2,
    accent: '#3b82f6',
    iconBg: 'rgba(59,130,246,0.12)',
    title: 'Java Development',
    stack: 'Spring Boot · Microservices · REST APIs · MySQL',
    description:
      'Build enterprise Java microservices on live client platforms. Learn clean code, design patterns, and production deployment practices.',
    suitable: 'CS / IT graduates, Java learners',
  },
  {
    icon: Terminal,
    accent: '#8b5cf6',
    iconBg: 'rgba(139,92,246,0.12)',
    title: 'Python & AI Engineering',
    stack: 'Python · FastAPI · ML Basics · Data Pipelines',
    description:
      'Build AI features, automation scripts, and data processing pipelines used in real client environments.',
    suitable: 'CS graduates, Python learners, data enthusiasts',
  },
  {
    icon: CheckSquare,
    accent: '#10b981',
    iconBg: 'rgba(16,185,129,0.12)',
    title: 'QA Automation',
    stack: 'Selenium · Playwright · JIRA · CI/CD',
    description:
      'Write and maintain automated test suites that run on live products. Learn quality engineering in a real delivery environment.',
    suitable: 'Any CS/IT background',
  },
  {
    icon: BarChart3,
    accent: '#f59e0b',
    iconBg: 'rgba(245,158,11,0.12)',
    title: 'Data Analytics',
    stack: 'SQL · Power BI · Tableau · Python',
    description:
      'Analyze real client datasets, build dashboards, and present data insights in live showcase sessions.',
    suitable: 'Statistics, CS, or Commerce backgrounds',
  },
] as const

const SCIP_TIMELINE = [
  {
    weeks: 'Weeks 1–2',
    title: 'Orientation & Setup',
    description:
      'Onboard to GravityTech tools, codebase conventions, client context, and team workflows. Meet your mentor and cohort. First code review in week 2.',
  },
  {
    weeks: 'Weeks 3–5',
    title: 'First Real Contribution',
    description:
      'Assigned to a live feature or module on a client project. Daily standups, mentor review of every PR, and sprint participation alongside the full team.',
  },
  {
    weeks: 'Weeks 6–8',
    title: 'Independent Delivery',
    description:
      'Take ownership of a complete module or workflow. Less hand-holding, more accountability. Feedback every sprint from senior engineers and the client team.',
  },
  {
    weeks: 'Weeks 9–11',
    title: 'Portfolio Feature',
    description:
      'Build a showcase feature that becomes part of your portfolio — something demonstrable, documented, and production-deployed.',
  },
  {
    weeks: 'Week 12',
    title: 'Demo Day & Review',
    description:
      'Present your work to the GravityTech team and select client stakeholders. Receive final evaluation, certification, and career guidance.',
  },
] as const

const SCIP_STATS = [
  { value: '8–12 Weeks', label: 'Structured training duration' },
  { value: 'Live Projects', label: 'From week 3, real client work' },
  { value: '1:1 Mentorship', label: 'Senior engineer assigned per participant' },
  { value: 'Portfolio Ready', label: 'Certified and portfolio-complete by end' },
] as const

function SCIPPage() {
  const scrollToApply = () => {
    document.getElementById('scip-apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <PageHero>
        <p className="mb-5 font-serif text-2xl font-bold tracking-wide text-white sm:mb-8">
          Specialized Corporate Incubation Program
        </p>

        <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-amber-50 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          SCIP — Where Careers
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#1fb6e8] to-[#0ea5e9] bg-clip-text text-transparent">
            Begin For Real.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          GravityTech&apos;s flagship talent development program. We hire driven individuals and put
          them on live enterprise projects from week one.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-5">
          <TextRollButton label="Apply for SCIP →" onClick={scrollToApply} variant="primary" />
          <TextRollButton label="Back to Careers" href="/careers" variant="dark" />
        </div>
      </PageHero>

      <section className="bg-white px-8 py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-12 text-3xl font-semibold text-gray-900 sm:text-4xl">
            Not Training. Not Internship.{' '}
            <span className="text-[#1fb6e8]">The Real Thing.</span>
          </h2>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              <p>
                SCIP — Specialized Corporate Incubation Program — is GravityTech&apos;s structured
                pathway for bringing in fresh talent and turning them into production-ready
                engineers, analysts, and delivery professionals.
              </p>
              <p>
                Unlike internship programs where trainees watch others work, SCIP participants are
                assigned to real client projects from the third week of joining. Their code ships.
                Their dashboards are used. Their work has business impact.
              </p>
              <p>
                The program runs in quarterly cohorts of 6–15 participants. Each cohort is assigned
                a senior mentor and a defined learning track aligned to their role.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {SCIP_STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
                >
                  <p className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">{stat.value}</p>
                  <p className="text-xs text-gray-500 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-8 py-24"
        style={{ background: GRADIENT_LIGHT }}
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900 sm:text-4xl">Choose Your Track</h2>
          <p className="mb-12 max-w-2xl text-sm text-gray-600 sm:text-base">
            SCIP runs across 4 technical tracks. Apply for the one that matches your background.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SCIP_TRACKS.map((track) => {
              const Icon = track.icon
              return (
                <div
                  key={track.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7"
                >
                  <div
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ background: track.iconBg }}
                  >
                    <Icon size={32} style={{ color: track.accent }} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{track.title}</h3>
                  <p className="mb-3 font-mono text-xs text-gray-500">{track.stack}</p>
                  <p className="mb-4 text-sm text-gray-600">{track.description}</p>
                  <p className="text-xs text-gray-400">Best for: {track.suitable}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0f0f0f] px-8 py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">The SCIP Journey</h2>
          <p className="mb-12 text-sm text-gray-500 sm:text-base">
            What 12 weeks looks like inside GravityTech.
          </p>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gray-800 sm:left-6" />
            <div className="space-y-10">
              {SCIP_TIMELINE.map((item) => (
                <div key={item.weeks} className="relative flex gap-8 pl-12 sm:pl-16">
                  <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-[#1fb6e8] bg-[#0f0f0f] sm:left-4.5" />
                  <div>
                    <p className="mb-1 font-mono text-xs text-[#1fb6e8]">{item.weeks}</p>
                    <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-8 py-24">
        <div className="mx-auto max-w-[1440px] text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900 sm:text-4xl">
            SCIP Terms & Conditions
          </h2>
          <p className="mb-10 text-sm text-gray-500">Please read these before applying.</p>

          <div className="mx-auto max-w-3xl rounded-3xl border border-gray-100 bg-white p-10 text-left text-sm leading-relaxed text-gray-600">
            <div className="space-y-5">
              {SCIP_TERMS_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-2 font-semibold text-gray-900">{section.title}</h3>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="scip-apply" className="bg-[#0f0f0f] px-8 py-24">
        <div className="mx-auto max-w-2xl rounded-3xl border border-gray-800 bg-[#141414] p-8 sm:p-10">
          <SCIPApplicationForm />
        </div>
      </section>
    </main>
  )
}

export default SCIPPage
