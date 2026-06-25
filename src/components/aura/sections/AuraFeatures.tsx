import { motion, useReducedMotion } from 'motion/react'
import { SCIP_FEATURES } from '../../../constants/scipContent'
import { SectionEyebrow } from '../shared/SectionEyebrow'

export function AuraFeatures() {
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
        <SectionEyebrow label="Benefits" />
        <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
          Why Professionals Choose SCIP
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SCIP_FEATURES.map((feature, i) => {
          const Icon = feature.icon
          return (
            <motion.article
              key={feature.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group liquid-glass min-h-[250px] rounded-2xl border border-white/10 p-7 transition-all hover:-translate-y-1 hover:ring-1 hover:ring-[#00d2ff]/40"
            >
              <Icon className="mb-5 h-10 w-10 text-[#00d2ff] transition-transform group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{feature.description}</p>
              <p className="mt-3 max-h-0 overflow-hidden text-xs text-[#00d2ff] opacity-0 transition-all group-hover:max-h-20 group-hover:opacity-100">
                {feature.details}
              </p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
