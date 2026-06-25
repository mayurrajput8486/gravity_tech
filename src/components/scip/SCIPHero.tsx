import TextRollButton from '../TextRollButton'
import SCIPFloatingShapes from './SCIPFloatingShapes'

const HERO_STATS = [
  { value: '50+', label: 'Professionals Trained' },
  { value: '95%', label: 'Placement Rate' },
  { value: '4-6 Mo', label: 'Program Duration' },
] as const

interface SCIPHeroProps {
  onApply: () => void
}

function SCIPHero({ onApply }: SCIPHeroProps) {
  return (
    <section
      data-dark-nav-hero
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <div className="scip-hero-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-black/40" />
      <SCIPFloatingShapes />

      <div className="absolute right-8 top-1/4 hidden flex-col gap-4 lg:flex">
        {HERO_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`scip-float-stat scip-float-stat-delay-${i} rounded-xl border border-[#1fb6e8]/30 bg-[#0f0f0f]/70 px-5 py-3 backdrop-blur-sm ${
              i === 1 ? 'scip-float-stat-delay-1' : i === 2 ? 'scip-float-stat-delay-2' : ''
            }`}
          >
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex-1" />

      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <p className="scip-hero-fade-in mb-5 font-serif text-2xl font-bold tracking-wide text-white sm:mb-8">
          Specialized Corporate Incubation Program
        </p>

        <h1 className="scip-hero-fade-in scip-hero-fade-in-delay-1 max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-amber-50 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          SCIP — Where Careers
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#1fb6e8] to-[#0ea5e9] bg-clip-text text-transparent">
            Begin For Real.
          </span>
        </h1>

        <p className="scip-hero-fade-in scip-hero-fade-in-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          GravityTech&apos;s flagship talent development program. We hire driven individuals and put
          them on live enterprise projects from week one.
        </p>

        <div className="scip-hero-fade-in scip-hero-fade-in-delay-3 mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-5">
          <TextRollButton label="Apply for SCIP →" onClick={onApply} variant="primary" />
          <TextRollButton label="Back to Careers" href="/careers" variant="dark" />
        </div>

        <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#1fb6e8]/30 bg-[#0f0f0f]/70 px-4 py-2 backdrop-blur-sm"
            >
              <span className="text-sm font-bold text-white">{stat.value}</span>
              <span className="ml-2 text-xs text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SCIPHero
