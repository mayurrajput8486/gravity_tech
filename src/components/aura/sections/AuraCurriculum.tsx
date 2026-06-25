import { ChevronDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { SCIP_CURRICULUM } from '../../../constants/scipContent'
import { SectionEyebrow } from '../shared/SectionEyebrow'

export function AuraCurriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <SectionEyebrow label="Curriculum" tag="2–3 Month Training" />
        <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
          Detailed Curriculum
        </h2>
      </motion.div>

      <div className="space-y-3">
        {SCIP_CURRICULUM.map((phase, index) => {
          const Icon = phase.icon
          const isOpen = openIndex === index

          return (
            <div
              key={phase.title}
              className="liquid-glass overflow-hidden rounded-2xl border border-white/10"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between border-l-4 border-[#00d2ff] p-5 text-left transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-4">
                  <Icon className="h-5 w-5 shrink-0 text-[#00d2ff]" />
                  <div>
                    <p className="font-semibold text-white">{phase.title}</p>
                    <p className="text-xs text-white/50">{phase.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden w-24 sm:block">
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#00d2ff]"
                        style={{ width: `${phase.progress}%` }}
                      />
                    </div>
                    <p className="mt-1 text-right text-xs text-white/40">{phase.progress}%</p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-5 border-t border-white/10 bg-black/20 p-6">
                    {phase.weeks.map((week) => (
                      <div key={week.range}>
                        <p className="mb-2 text-sm font-medium text-[#00d2ff]">{week.range}</p>
                        <ul className="space-y-1">
                          {week.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex items-start gap-2 text-sm text-white/60"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00d2ff]" />
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
                          className="rounded-full border border-[#00d2ff]/20 bg-[#00d2ff]/10 px-3 py-1 text-xs text-[#00d2ff]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="grid gap-3 text-sm sm:grid-cols-2">
                      <p className="text-white/50">
                        <span className="text-white/70">Projects:</span> {phase.projects}
                      </p>
                      <p className="text-white/50">
                        <span className="text-white/70">Deliverable:</span>{' '}
                        <span className="text-white">{phase.deliverable}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
