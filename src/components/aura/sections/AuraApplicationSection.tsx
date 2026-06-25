import { motion, useReducedMotion } from 'motion/react'
import JobApplicationForm from '../../forms/JobApplicationForm'

export function AuraApplicationSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="scip-apply" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="liquid-glass mx-auto max-w-3xl rounded-3xl border border-white/10 p-8 sm:p-10"
      >
        <JobApplicationForm preselectedRole="SCIP Program" lockRole />
      </motion.div>
    </section>
  )
}
