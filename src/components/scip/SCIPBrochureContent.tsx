import { forwardRef } from 'react'
import {
  SCIP_BROCHURE_ELIGIBILITY,
  SCIP_BROCHURE_META,
  SCIP_BROCHURE_OVERVIEW,
  SCIP_BROCHURE_TRACKS,
} from '../../constants/scipBrochure'

const SCIPBrochureContent = forwardRef<HTMLDivElement>(function SCIPBrochureContent(_, ref) {
  return (
    <div
      ref={ref}
      id="scip-brochure-document"
      className="mx-auto w-full max-w-[820px] bg-white text-gray-900 shadow-2xl"
    >
      {/* Cover */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2551] via-[#0f3460] to-[#1a1a2e] px-8 py-12 text-white sm:px-12 sm:py-16">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#00d2ff]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#3D81E3]/20 blur-3xl" />

        <div className="relative">
          <img
            src="/GravityTech_footer.svg"
            alt="GravityTech Software"
            className="mb-8 h-auto w-full max-w-[220px] brightness-0 invert"
          />
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#00d2ff]">
            {SCIP_BROCHURE_META.subtitle}
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            SCIP Program
            <span className="mt-1 block text-[#00d2ff]">Career Brochure 2026</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
            {SCIP_BROCHURE_META.tagline}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Training', value: SCIP_BROCHURE_META.duration },
              { label: 'Tracks', value: '4 Specializations' },
              { label: 'Hiring', value: '1 Interview' },
              { label: 'Updated', value: SCIP_BROCHURE_META.lastUpdated },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-3 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  {item.label}
                </p>
                <p className="mt-1 text-xs font-semibold text-white sm:text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-gray-100 px-8 py-10 sm:px-12">
        <h2 className="mb-1 text-xs font-bold uppercase tracking-widest text-[#3D81E3]">
          Program Overview
        </h2>
        <p className="mb-6 text-2xl font-semibold text-gray-900">What is SCIP?</p>
        <p className="mb-6 text-sm leading-relaxed text-gray-600">{SCIP_BROCHURE_OVERVIEW.intro}</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {SCIP_BROCHURE_OVERVIEW.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00d2ff]" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Journey */}
      <section className="border-b border-gray-100 bg-gray-50 px-8 py-10 sm:px-12">
        <h2 className="mb-1 text-xs font-bold uppercase tracking-widest text-[#3D81E3]">
          Your Journey
        </h2>
        <p className="mb-6 text-2xl font-semibold text-gray-900">From Application to Client Projects</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCIP_BROCHURE_OVERVIEW.journey.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <p className="font-mono text-xs font-bold text-[#3D81E3]">{step.step}</p>
              <h3 className="mt-1 text-sm font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Training Tracks */}
      <section className="border-b border-gray-100 px-8 py-10 sm:px-12">
        <h2 className="mb-1 text-xs font-bold uppercase tracking-widest text-[#3D81E3]">
          Training Tracks
        </h2>
        <p className="mb-2 text-2xl font-semibold text-gray-900">4 Specialized Syllabi</p>
        <p className="mb-8 text-sm text-gray-600">
          Each track includes structured modules, mentor-led reviews, assessments, and a capstone
          project before client project deployment.
        </p>

        <div className="space-y-10">
          {SCIP_BROCHURE_TRACKS.map((track, trackIndex) => (
            <article
              key={track.id}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              <div className="bg-gradient-to-r from-[#0B2551] to-[#1a3a6b] px-6 py-5 text-white">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#00d2ff]">
                      Track {trackIndex + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{track.name}</h3>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                    {track.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{track.description}</p>
              </div>

              <div className="grid gap-6 p-6 lg:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Learning Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {track.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#3D81E3]">✓</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {track.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-[#3D81E3]/10 px-3 py-1 text-xs font-medium text-[#0B2551]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 bg-gray-50 px-6 py-5">
                <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Syllabus
                </h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  {track.modules.map((module) => (
                    <div key={module.title} className="rounded-xl bg-white p-4 shadow-sm">
                      <h5 className="text-sm font-semibold text-gray-900">{module.title}</h5>
                      <ul className="mt-2 space-y-1">
                        {module.topics.map((topic) => (
                          <li key={topic} className="text-xs leading-relaxed text-gray-600">
                            • {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="border-b border-gray-100 px-8 py-10 sm:px-12">
        <h2 className="mb-1 text-xs font-bold uppercase tracking-widest text-[#3D81E3]">
          Eligibility
        </h2>
        <p className="mb-6 text-2xl font-semibold text-gray-900">Who Can Apply?</p>
        <ul className="space-y-2">
          {SCIP_BROCHURE_ELIGIBILITY.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1 text-[#00d2ff]">→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-[#0B2551] to-[#1a3a6b] px-8 py-10 text-white sm:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <img
              src="/GravityTech_navbar.svg"
              alt="GravityTech"
              className="mb-4 h-auto w-full max-w-[140px] brightness-0 invert"
            />
            <p className="text-lg font-semibold">{SCIP_BROCHURE_META.company}</p>
            <p className="mt-1 text-sm text-white/70">{SCIP_BROCHURE_META.location}</p>
          </div>
          <div className="space-y-2 text-sm text-white/80">
            <p>
              <span className="text-white/50">Email: </span>
              {SCIP_BROCHURE_META.email}
            </p>
            <p>
              <span className="text-white/50">Phone: </span>
              {SCIP_BROCHURE_META.phone}
            </p>
            <p>
              <span className="text-white/50">Web: </span>
              {SCIP_BROCHURE_META.website}
            </p>
            <p className="pt-2 text-xs text-white/50">
              Apply at gravitytechsoftware.com/careers/scip
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © 2026 GravityTech Software · SCIP Program · {SCIP_BROCHURE_META.lastUpdated}
        </p>
      </section>
    </div>
  )
})

export default SCIPBrochureContent
