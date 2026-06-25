import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { SCIP_METRICS } from '../../../constants/scipContent'
import { useAnimatedCounter } from '../../scip/useAnimatedCounter'

function MetricCard({
  icon: Icon,
  target,
  suffix,
  prefix,
  label,
  subtext,
  enabled,
  index,
  display: staticDisplay,
}: (typeof SCIP_METRICS)[number] & { enabled: boolean; index: number }) {
  const reduceMotion = useReducedMotion()
  const animated = useAnimatedCounter(target, 2000, suffix, prefix, enabled && !staticDisplay)
  const display = staticDisplay ?? animated

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="liquid-glass flex min-h-[200px] flex-col items-center justify-center rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:glow-brand"
    >
      <Icon className="mb-4 h-8 w-8 text-[#00d2ff]" />
      <p className="text-4xl font-bold text-white">{display}</p>
      <p className="mt-3 text-sm font-medium text-white">{label}</p>
      <p className="mt-1 text-xs text-white/50">{subtext}</p>
    </motion.article>
  )
}

export function AuraMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnabled(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-3xl font-semibold md:text-5xl"
      >
        SCIP Impact by Numbers
      </motion.h2>
      <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SCIP_METRICS.map((metric, i) => (
          <MetricCard key={metric.label} {...metric} enabled={enabled} index={i} />
        ))}
      </div>
    </section>
  )
}
