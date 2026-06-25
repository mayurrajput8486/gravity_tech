import { Clock, DollarSign, TrendingUp, Users, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import AnimatedSection from '../AnimatedSection'
import { useAnimatedCounter } from './useAnimatedCounter'

const METRICS: {
  icon: LucideIcon
  target: number
  suffix: string
  prefix: string
  label: string
  subtext: string
  iconColor: string
  gradient: string
}[] = [
  {
    icon: Users,
    target: 150,
    suffix: '+',
    prefix: '',
    label: 'Professionals Trained',
    subtext: 'Across all batches',
    iconColor: '#1fb6e8',
    gradient: 'from-[#0f0f0f] to-[#2d1b4e]',
  },
  {
    icon: TrendingUp,
    target: 95,
    suffix: '%',
    prefix: '',
    label: 'Placement Success Rate',
    subtext: 'Within 2 months',
    iconColor: '#10b981',
    gradient: 'from-[#0f0f0f] to-[#064e3b]',
  },
  {
    icon: DollarSign,
    target: 45,
    suffix: '% ↑',
    prefix: '',
    label: 'Average Salary Growth',
    subtext: 'After placement',
    iconColor: '#1fb6e8',
    gradient: 'from-[#0f0f0f] to-[#0a3d5c]',
  },
  {
    icon: Clock,
    target: 8,
    suffix: ' weeks',
    prefix: '',
    label: 'Avg. Time to Placement',
    subtext: 'From program end',
    iconColor: '#ec4899',
    gradient: 'from-[#0f0f0f] to-[#4a1942]',
  },
]

function MetricCard({
  icon: Icon,
  target,
  suffix,
  prefix,
  label,
  subtext,
  iconColor,
  gradient,
  enabled,
}: (typeof METRICS)[number] & { enabled: boolean }) {
  const display = useAnimatedCounter(target, 2000, suffix, prefix, enabled)

  return (
    <article
      className={`group flex min-h-[200px] flex-col justify-between rounded-xl border border-[#1fb6e8]/30 bg-gradient-to-br ${gradient} p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1fb6e8]/10`}
    >
      <Icon size={28} style={{ color: iconColor }} aria-hidden="true" />
      <div>
        <p className="text-5xl font-bold text-white">{display}</p>
        <p className="mt-2 text-sm font-medium text-white">{label}</p>
        <p className="mt-1 text-xs text-gray-500">{subtext}</p>
      </div>
    </article>
  )
}

function SCIPMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

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
    <AnimatedSection className="relative overflow-hidden bg-[#0f0f0f] px-8 py-24">
      <div className="scip-hero-gradient absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1440px]">
        <h2 className="mb-12 text-center text-3xl font-semibold text-white sm:text-4xl">
          SCIP Impact by Numbers
        </h2>

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {METRICS.map((metric) => (
            <MetricCard key={metric.label} {...metric} enabled={enabled} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default SCIPMetrics
