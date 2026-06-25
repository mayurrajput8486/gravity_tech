import { motion, useReducedMotion } from 'motion/react'
import { SCIP_PROGRAM_CARDS } from '../../../constants/scipContent'
import { SectionEyebrow } from '../shared/SectionEyebrow'

export function AuraProgramOverview() {
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
        <SectionEyebrow label="Program" tag="Hire → Train → Deploy" />
        <h2 className="mt-5 text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
          SCIP Program at a Glance
        </h2>
        <p className="mt-6 max-w-md text-base leading-[1.6] text-white/60">
          We hire fresh graduates — including Data Analytics — train them for 2–3 months, then
          deploy them on real GravityTech client projects.
        </p>
      </motion.div>

      <div className="mb-8 flex flex-wrap gap-2">
        {['Java & Python', 'QA Automation', 'Data Analytics', 'Live Client Work'].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SCIP_PROGRAM_CARDS.map((card, i) => {
          const Icon = card.icon
          return (
            <motion.article
              key={card.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group liquid-glass rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-cyan"
            >
              <Icon className="mb-5 h-10 w-10 text-[#00d2ff] transition-transform group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{card.description}</p>
              <p className="mt-4 text-xs font-medium text-[#00d2ff] opacity-0 transition-opacity group-hover:opacity-100">
                {card.hoverStat}
              </p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
