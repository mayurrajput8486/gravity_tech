import { CheckCircle2, type LucideIcon } from 'lucide-react'
import PageHero from '../../PageHero'
import TextRollButton from '../../TextRollButton'

export interface ServiceStep {
  number: string
  title: string
  description: string
}

export interface ServiceBenefit {
  icon: LucideIcon
  title: string
  description: string
}

export interface ServiceDetailContent {
  serviceName: string
  heroLine1: string
  heroLine2: string
  heroSubtext: string
  overviewParagraphs: string[]
  features: string[]
  steps: ServiceStep[]
  benefits: ServiceBenefit[]
  ctaTitle: string
}

interface ServiceDetailLayoutProps {
  content: ServiceDetailContent
}

function ServiceDetailLayout({ content }: ServiceDetailLayoutProps) {
  return (
    <main>
      <PageHero>
        <p className="mb-5 font-serif text-2xl font-bold tracking-wide text-white sm:mb-8">
          GravityTech Services
        </p>

        <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-amber-50 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          {content.heroLine1}
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#1fb6e8] to-[#0ea5e9] bg-clip-text text-transparent">
            {content.heroLine2}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {content.heroSubtext}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-5">
          <TextRollButton label="Get a Quote →" href="/services#quote-form" variant="primary" />
          <TextRollButton label="Back to Services" href="/services" variant="dark" />
        </div>
      </PageHero>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl font-semibold text-gray-900 sm:text-4xl">What We Deliver</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              {content.overviewParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ul className="space-y-4">
            {content.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-gray-700 sm:text-base">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#1fb6e8]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <span className="mb-4 inline-block rounded-full border border-[#1fb6e8]/30 bg-[#1fb6e8]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1fb6e8]">
            Process
          </span>
          <h2 className="mb-12 text-3xl font-semibold text-gray-900 sm:text-4xl">How It Works</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-md"
              >
                <span className="mb-4 inline-block font-mono text-xs font-bold text-[#1fb6e8]">
                  {step.number}
                </span>
                <h3 className="mb-3 text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f0f0f] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-12 text-3xl font-semibold text-white sm:text-4xl">
            Why GravityTech for {content.serviceName}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {content.benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-800 bg-[#1a1a1a] p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1fb6e8]/10">
                    <Icon size={22} className="text-[#1fb6e8]" />
                  </div>
                  <h3 className="mb-3 text-base font-semibold text-white">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1fb6e8] to-[#0ea5e9] px-5 py-12 text-center sm:px-8 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-3xl font-semibold text-white sm:text-4xl">{content.ctaTitle}</h2>
          <TextRollButton label="Get a Quote →" href="/services#quote-form" variant="white" />
        </div>
      </section>
    </main>
  )
}

export default ServiceDetailLayout
