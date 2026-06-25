import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { AuraButton } from '../shared/AuraButton'
import { ShinyText } from '../shared/ShinyText'

interface AuraHeroProps {
  onApply: () => void
}

export function AuraHero({ onApply }: AuraHeroProps) {
  const reduceMotion = useReducedMotion()
  const fade = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section className="flex flex-col items-center pb-20 pt-16 text-center md:pt-28">
      <motion.p
        {...fade(0.2)}
        className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/50"
      >
        Specialized Corporate Incubation Program
      </motion.p>

      <motion.h1
        {...fade(0.3)}
        className="text-4xl font-semibold leading-[0.95] tracking-tight md:text-7xl"
      >
        <div>SCIP — Where Careers</div>
        <div>
          <ShinyText>Begin For Real.</ShinyText>
        </div>
      </motion.h1>

      <motion.p
        {...fade(0.5)}
        className="mt-8 max-w-lg text-base leading-[1.6] text-white/60"
      >
        GravityTech hires driven fresh graduates through SCIP — one interview, a job offer, then
        2–3 months of hands-on training before you work on real-time client projects.
      </motion.p>

      <motion.div
        {...fade(0.7)}
        className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
      >
        <AuraButton label="Apply for SCIP" onClick={onApply} />
        <Link
          to="/careers"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        >
          Back to Careers
        </Link>
      </motion.div>

      <motion.div
        {...fade(0.85)}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        {[
          { value: '4', label: 'Training Tracks' },
          { value: '2–3 Mo', label: 'Training Period' },
          { value: '1', label: 'Interview to Offer' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="liquid-glass rounded-xl px-5 py-3 text-center"
          >
            <p className="text-lg font-bold text-white">{stat.value}</p>
            <p className="text-xs text-white/50">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
