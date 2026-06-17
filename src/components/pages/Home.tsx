import {
  ArrowUpRight,
  BarChart3,
  Brain,
  BrainCircuit,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
  Layers,
  Shield,
  Star,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { CLIENTS, HOME_SERVICES } from '../../constants/data'
import AnimatedSection from '../AnimatedSection'
import ExpandHoverButton from '../ExpandHoverButton'
import HeroBackground from '../HeroBackground'
import SectionBadge from '../SectionBadge'
import TextRollButton from '../TextRollButton'



function ClientCard({
  name,
  category,
  color,
  initials,
}: {
  name: string
  category: string
  color: string
  initials: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 transition-all duration-300 hover:border-gray-300 hover:shadow-sm">
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
        style={{ background: color }}
      >
        {initials}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{category}</p>
      </div>
    </div>
  )
}

function ClientGrid({ clients }: { clients: typeof CLIENTS }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {clients.map((client) => (
        <ClientCard key={client.name} {...client} />
      ))}
    </div>
  )
}

function ServiceCard({
  title,
  description,
  bg,
  gradient,
  imageUrl,
  icon: Icon,
  aspectClass,
  buttonVariant,
  buttonLabel,
  buttonWidth,
}: (typeof HOME_SERVICES)[number]) {
  const isLight = buttonVariant === 'light'

  return (
    <article>
      <div
        className={`group relative ${aspectClass} cursor-pointer overflow-hidden rounded-2xl`}
        style={{ background: bg }}
      >
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-35"
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{ background: gradient }}
        />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute left-5 top-5 z-10">
          <Icon className="text-white/70" size={20} aria-hidden="true" />
        </div>
        <ExpandHoverButton
          label={buttonLabel}
          variant={buttonVariant}
          widthClass={buttonWidth}
          useLinkIcon={isLight}
        />
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-gray-600 sm:text-sm">
        {description}
      </p>
      <h3 className="mt-1 text-sm font-semibold text-gray-900 sm:text-[15px]">
        {title}
      </h3>
    </article>
  )
}

function Home() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const leftClients = CLIENTS.slice(0, 4)
  const rightClients = CLIENTS.slice(4)
  const testimonials = [
    {
      quote:
        'GravityTech delivered our CRM platform 3 weeks ahead of schedule. The AI features they built for lead scoring immediately improved our sales conversion rate. Exceptional engineering team.',
      name: 'Rajesh Kumar',
      role: 'CEO, YouGet Software Solution',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    },
    {
      quote:
        'We engaged GravityTech to modernize our legacy HR platform. Their approach was methodical, transparent, and the final product exceeded every requirement we had set.',
      name: 'Priya Mehta',
      role: 'COO, Mauli Project Management',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
    },
    {
      quote:
        "The third-party payroll system GravityTech built handles all our statutory compliance automatically. We've had zero audit issues since deployment. Truly enterprise-grade.",
      name: 'Vikram Sharma',
      role: 'Finance Director, IntactBox Systems',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    },
    {
      quote:
        'Their talent acquisition platform cut our time-to-hire by 45%. The AI resume screening alone saves our HR team 20 hours a week. Best technology investment we\'ve made.',
      name: 'Anita Joshi',
      role: 'HR Head, Webforge Technology',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
    },
    {
      quote:
        "GravityTech's SCIP program gave us trained engineers ready for production from day one. It's rare to find a partner who invests this deeply in talent development.",
      name: 'Suresh Nair',
      role: 'CTO, Zentonia Technologies',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80',
    },
  ]

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [paused, testimonials.length])

  return (
    <main>
      <section className="relative flex min-h-screen flex-col bg-[#EFEFEF]">
        <HeroBackground />
        <div className="flex-1" />
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <p className="mb-5 tracking-wide text-white sm:mb-8 text-2xl font-bold font-serif">
            GravityTech Software
          </p>

          <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-amber-50 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            We engineer software
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            that drives enterprise
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            growth at scale.
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
            <TextRollButton label="Start a Project" href="/careers#apply" variant="primary" />

            
          </div>
        </div>
      </section>

      <section className="overflow-hidden  bg-[linear-gradient(150deg,rgba(34,184,195,1)_0%,rgba(230,230,230,1)_72%)] pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-[1440px]">
         {/*  <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
            <SectionBadge number="1" label="Our Clients" />
          </div> */}

          <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
            Trusted by software,
            <br />
            education, consulting,
            <br />
            and infrastructure teams.
          </h2>

          <div className="px-5 sm:px-8 lg:hidden">
            <p className="text-[15px] font-medium leading-[1.6] text-gray-900 sm:text-[17px]">
              GravityTech Software supports real-time project work and technology
              delivery for a diverse client network across modern business sectors.
            </p>
            <div className="mt-6">
              <TextRollButton label="Meet our team →" href="/about" variant="primary" />
            </div>
            <ClientGrid clients={CLIENTS} />
          </div>

          <div className="hidden items-end gap-6 px-5 sm:px-8 lg:grid lg:grid-cols-[26%_1fr_48%] lg:px-12 xl:gap-8">
            <div className="self-end">
              <div className="grid grid-cols-1 gap-3">
                {leftClients.map((client) => (
                  <ClientCard key={client.name} {...client} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end justify-end self-start">
              <p className="whitespace-nowrap text-base font-medium leading-[1.65] text-gray-900 lg:text-lg">
                GravityTech Software supports real-time
                <br />
                project work and technology delivery for
                <br />
                a diverse client network across sectors.
              </p>
              <div className="mt-6">
                <TextRollButton label="Meet our team →" href="/about" variant="primary" />
              </div>
            </div>

            <div className="self-end">
              <div className="grid grid-cols-2 gap-3">
                {rightClients.map((client) => (
                  <ClientCard key={client.name} {...client} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-[radial-gradient(circle,rgba(2,0,36,1)_0%,rgba(10,10,120,1)_100%)] px-8 py-24 sm:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Why Choose Us</h2>
            <div className="justify-self-end text-right">
              <p className="max-w-md text-sm leading-relaxed text-gray-500">
                GravityTech combines software engineering, AI integration, talent development, and
                payroll — for scalable, reliable platforms.
              </p>
              <span className="ml-auto mt-2 block h-0.5 w-12 bg-[#1fb6e8]" />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              {[
                {
                  icon: Layers,
                  title: 'Full-Stack Engineering Depth',
                  description:
                    "We don't hand off design to developers. One team owns the full delivery — UI, backend, infrastructure, and QA — reducing communication gaps and missed requirements.",
                },
                {
                  icon: Brain,
                  title: 'AI-First Development Culture',
                  description:
                    'AI is embedded in how we scope, build, test, and deploy. Not as a feature — as a working practice that makes every engineer 30% more effective.',
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security Standards',
                  description:
                    'Every project is built with OWASP top-10 compliance, secure coding practices, and data privacy requirements built in from sprint 1.',
                },
              ].map((card) => {
                const Icon = card.icon
                return (
                  <article
                    key={card.title}
                    className="group cursor-pointer rounded-2xl border border-gray-800/50 bg-[#1a1a1a] p-6 transition-all duration-300 hover:border-[#1fb6e8]/25"
                  >
                    <div className="mb-4 text-gray-500 transition-colors duration-200 group-hover:text-[#1fb6e8]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-2 text-base font-semibold leading-snug text-white">{card.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-500">{card.description}</p>
                    <button className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-gray-600 transition-colors hover:text-[#1fb6e8]">
                      Read More <ChevronRight size={12} />
                    </button>
                  </article>
                )
              })}

              <div className="cursor-pointer rounded-2xl bg-gradient-to-br from-[#1fb6e8] to-[#0a73b7] p-6 transition-all duration-300 hover:from-[#0da8da] hover:to-[#085fa0]">
                <ArrowUpRight size={20} className="mb-4 text-white/60" />
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Let&apos;s Build Your Platform Together
                </h3>
                <TextRollButton label="Start a Project" href="/careers#apply" variant="white" />
              </div>
            </div>

            <div className="space-y-4 pt-10">
              {[
                {
                  icon: TrendingUp,
                  title: 'Measurable Delivery Outcomes',
                  description:
                    'We define success metrics before development starts. Velocity, defect rates, uptime, and time-to-market are tracked and shared every sprint.',
                },
                {
                  icon: Globe,
                  title: 'Global Delivery, Local Context',
                  description:
                    'Delivered from Pune with an understanding of Indian, UAE, and US regulatory environments, time zones, and compliance requirements.',
                },
                {
                  icon: Zap,
                  title: 'Speed Without Sacrificing Quality',
                  description:
                    'Our processes — automated testing, AI code review, CI/CD pipelines — let us ship fast without accumulating the technical debt that kills projects 12 months later.',
                },
                {
                  icon: Users,
                  title: 'Talent You Can Actually Meet',
                  description:
                    'No outsourcing, no handoffs to unknown teams. You meet the engineer, the QA lead, and the PM who will build your product — before the contract is signed.',
                },
              ].map((card) => {
                const Icon = card.icon
                return (
                  <article
                    key={card.title}
                    className="group cursor-pointer rounded-2xl border border-gray-800/50 bg-[#1a1a1a] p-6 transition-all duration-300 hover:border-[#1fb6e8]/25"
                  >
                    <div className="mb-4 text-gray-500 transition-colors duration-200 group-hover:text-[#1fb6e8]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-2 text-base font-semibold leading-snug text-white">{card.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-500">{card.description}</p>
                    <button className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-gray-600 transition-colors hover:text-[#1fb6e8]">
                      Read More <ChevronRight size={12} />
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
            <SectionBadge number="😊" label="What we deliver" borderClassName="border-gray-300" />
          </div>

          <h2 className="mb-10 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mb-14 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16 lg:px-12">
            Our services
          </h2>

          <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
            {HOME_SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-[#0f0f0f] px-8 py-24 sm:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              AI is not our product.
              <span className="block text-[#1fb6e8]">It&apos;s how we work.</span>
            </h2>
            <div className="max-w-sm justify-self-end">
              <p className="text-sm leading-relaxed text-gray-500">
                Every team at GravityTech uses AI to move faster, catch errors earlier, and deliver
                more reliable software — from first line of code to final handoff.
              </p>
              <span className="ml-auto mt-2 block h-1.5 w-1.5 rounded-full bg-[#1fb6e8]" />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                icon: Code2,
                title: 'AI-Assisted Code Review',
                desc: 'Every pull request runs through AI checks for logic errors, security vulnerabilities, and coding standards — before a human reviews it. This cuts review cycles by half.',
              },
              {
                icon: BrainCircuit,
                title: 'Intelligent Test Generation',
                desc: 'Our QA team uses AI to auto-generate test cases from user stories. Coverage gaps are detected before sprint ends, not after deployment.',
              },
              {
                icon: Workflow,
                title: 'AI-Powered Project Scoping',
                desc: 'We feed requirements into AI tools to generate effort estimates, identify risk areas, and flag ambiguous specs — reducing scope creep by 40% across projects.',
              },
              {
                icon: BarChart3,
                title: 'Delivery Analytics & Prediction',
                desc: 'AI models track sprint velocity, blockers, and commit patterns to predict delivery dates with 85% accuracy — giving clients real visibility into their project.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-gray-800/60 bg-[#141414] p-7 transition-all duration-300 hover:border-[#1fb6e8]/30"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1fb6e8]/10 transition-colors group-hover:bg-[#1fb6e8]/20">
                    <Icon size={18} className="text-[#1fb6e8]" />
                  </div>
                  <h3 className="mb-3 text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      

      <AnimatedSection
        className="px-8 py-24 sm:px-16"
        style={{ background: 'linear-gradient(135deg, #fce4f3 0%, #e8d5f5 40%, #f0d5a0 100%)' }}
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-center text-3xl font-semibold text-gray-900 sm:text-4xl">
            What Clients Say
            <br />
            About <span className="text-[#7c3aed]">GravityTech.</span>
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">Real feedback from real projects.</p>

          <div
            className="relative mx-auto mt-14 max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative min-h-[240px] rounded-3xl border border-white/60 bg-white/70 p-10 shadow-lg backdrop-blur-sm">
              <span className="pointer-events-none absolute left-8 top-6 select-none font-serif text-6xl leading-none text-gray-200">
                "
              </span>
              <div key={activeIndex} className="animate-fade-in pt-6">
                <blockquote className="mb-8 text-lg font-medium leading-relaxed text-gray-800 sm:text-xl">
                  {testimonials[activeIndex].quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].photo}
                    alt={testimonials[activeIndex].name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[#1fb6e8]/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                    <p className="text-xs text-gray-500">{testimonials[activeIndex].role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'h-2 w-6 bg-[#7c3aed]' : 'h-2 w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md transition-colors duration-200 hover:bg-gray-50 sm:flex"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
            <button
              onClick={() => setActiveIndex((i) => (i + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 translate-x-12 items-center justify-center rounded-full border border-gray-100 bg-white shadow-md transition-colors duration-200 hover:bg-gray-50 sm:flex"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-8 py-20 sm:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Numbers That
              <span className="block text-[#1fb6e8]">Speak For Themselves</span>
            </h2>
            <div className="justify-self-end">
              <p className="max-w-sm text-sm text-gray-500">
                A snapshot of the trust, delivery depth, and scale that define GravityTech today.
              </p>
              <span className="ml-auto mt-2 block h-1.5 w-1.5 rounded-full bg-[#1fb6e8]" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:border-[#1fb6e8]/30 hover:shadow-lg">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">
                Clients Served
              </p>
              <div className="mb-4 flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-white bg-[#1fb6e8]" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-[#7c3aed]" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-[#f59e0b]" />
              </div>
              <p className="text-6xl font-bold text-gray-900">50+</p>
              <p className="mt-3 text-sm text-gray-600">Businesses served across India, UAE, and USA</p>
            </article>
            <article className="-mt-0 rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:border-[#1fb6e8]/30 hover:shadow-lg md:-mt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">
                Projects Delivered
              </p>
              <TrendingUp className="mb-4 text-[#1fb6e8]" size={24} />
              <p className="text-6xl font-bold text-gray-900">100+</p>
              <p className="mt-3 text-sm text-gray-600">
                Live projects shipped with real business outcomes
              </p>
            </article>
            <article className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:border-[#1fb6e8]/30 hover:shadow-lg">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">
                Years Building IT
              </p>
              <Calendar className="mb-4 text-[#1fb6e8]" size={24} />
              <p className="text-6xl font-bold text-gray-900">5+</p>
              <p className="mt-3 text-sm text-gray-600">Years of engineering excellence, now AI-augmented</p>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="px-8 py-20 sm:px-16"
        style={{ background: 'linear-gradient(135deg, #0a3d5c 0%, #082c43 100%)' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1fb6e8]">
            Ready When You Are
          </p>
          <h2 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Let&apos;s build something
            <br />
            <span className="text-[#1fb6e8]">extraordinary.</span>
          </h2>
          <p className="mb-10 text-base leading-relaxed text-gray-400">
            From first conversation to production deployment — we&apos;re with you at every step. No
            sales decks. No wasted time. Just a conversation about what you need to build.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <TextRollButton label="Start a Project" href="/careers#apply" variant="primary" />
            <TextRollButton label="View Our Work" href="/services" variant="outline-white" />
          </div>
          <p className="mt-8 text-xs text-gray-600">
            Typically responds within 1 business day · No commitment required
          </p>
        </div>
      </AnimatedSection>
    </main>
  )
}

export default Home
