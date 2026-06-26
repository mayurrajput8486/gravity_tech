import { motion, useReducedMotion } from 'motion/react'
import { SCIP_PHASES } from '../../../constants/scipContent'
import { SectionEyebrow } from '../shared/SectionEyebrow'

export function AuraTimeline() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <SectionEyebrow label="Timeline" tag="Hire → Train → Deploy" />
        <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
          Your SCIP Journey
        </h2>
        <p className="mt-4 text-sm text-white/50">
          One interview, a SCIP offer, 2–3 months of training, then real-time client projects.
        </p>
      </motion.div>

      <div className="hidden gap-6 lg:grid lg:grid-cols-5">
        {SCIP_PHASES.map((phase, i) => {
          const Icon = phase.icon
          return (
            <motion.article
              key={phase.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`liquid-glass rounded-2xl p-6 text-center ${
                phase.highlight ? 'ring-1 ring-[#00d2ff]' : ''
              }`}
            >
              <div className="mb-3 flex justify-center">
                <Icon className="h-8 w-8 text-[#00d2ff]" />
              </div>
              <p className="text-xs font-semibold text-white/50">{phase.weeks}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{phase.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{phase.description}</p>
              <p className="mt-3 text-xs text-white/40">{phase.deliverable}</p>
              <span className="mt-3 inline-block rounded-full bg-[#00d2ff]/10 px-3 py-1 text-xs text-[#00d2ff]">
                {phase.duration}
              </span>
              <div className="mt-4 h-1 w-full rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00d2ff] to-[#0B2551]"
                  style={{ width: `${(phase.phase / 5) * 100}%` }}
                />
              </div>
            </motion.article>
          )
        })}
      </div>

      <div className="space-y-4 lg:hidden">
        {SCIP_PHASES.map((phase, i) => {
          const Icon = phase.icon
          return (
            <motion.article
              key={phase.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="liquid-glass rounded-2xl p-5"
            >
              <div className="flex items-start gap-4">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-[#00d2ff]" />
                <div>
                  <p className="text-xs font-semibold text-[#00d2ff]">{phase.weeks}</p>
                  <h3 className="mt-1 font-semibold text-white">{phase.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{phase.description}</p>
                  <p className="mt-2 text-xs text-white/40">{phase.deliverable}</p>
                  <span className="mt-2 inline-block text-xs text-white/50">{phase.duration}</span>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
