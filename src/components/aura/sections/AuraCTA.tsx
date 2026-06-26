import { Calendar, Download } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { AuraButton } from '../shared/AuraButton'

interface AuraCTAProps {
  onApply: () => void
}

export function AuraCTA({ onApply }: AuraCTAProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="liquid-glass relative overflow-hidden rounded-3xl border border-white/10 px-8 py-16 text-center md:py-24"
        style={{
          backgroundImage:
            'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.12), transparent 70%)',
        }}
      >
        <h2 className="text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
          Ready to Join
          <br />
          GravityTech?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-[1.6] text-white/60">
          Apply through our hiring process — one interview, a SCIP offer, structured training, and
          then real client project work. No batch enrollment required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AuraButton label="Apply for SCIP" onClick={onApply} />
          <Link
            to="/careers/scip/brochure"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-white/5"
          >
            <Download className="h-4 w-4" />
            Download Brochure
          </Link>
          <a
            href="mailto:admissions@gravitech.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/5"
          >
            <Calendar className="h-4 w-4" />
            Schedule Consultation
          </a>
        </div>
        <p className="mt-8 text-xs text-white/40">
          Questions?{' '}
          <a href="mailto:admissions@gravitech.com" className="text-[#00d2ff] hover:underline">
            admissions@gravitech.com
          </a>
        </p>
      </motion.div>
    </section>
  )
}
