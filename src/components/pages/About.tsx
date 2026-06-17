import { ArrowRight, Code2, Shield, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import PageHero from '../PageHero'
import TextRollButton from '../TextRollButton'
import AnimatedSection from '../AnimatedSection'
import {
  BUILD_DIFFERENTLY,
  GRADIENT_LIGHT,
  GRADIENT_LIGHT_SHORT,
  MAP_OFFICES,
  TEAM_MEMBERS,
  TECH_STACK,
} from '../../constants/data'

const ABOUT_STATS = ['50+ Products', '30+ Engineers', '3 Offices', '100% Live Projects']

function About() {
  const [activeTab, setActiveTab] = useState<'business' | 'other'>('business')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <main>
      <PageHero>
        <p className="mb-5 tracking-wide text-white sm:mb-8 text-2xl font-bold font-serif">
          GravityTech Software
        </p>

        <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-amber-50 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          We engineer what&apos;s
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          next for enterprise
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          software teams.
        </h1>

        <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <TextRollButton label="Meet our team →" href="#team" variant="primary" />
          <div className="flex flex-wrap gap-2">
            {ABOUT_STATS.map((stat) => (
              <span
                key={stat}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      {/* Section 2: Scale That Speaks For Itself */}
      <section className="py-16 sm:py-20 lg:py-28" style={{ background: GRADIENT_LIGHT }}>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">
                Scale That Speaks
                <br />
                <span className="text-[#1fb6e8]">For Itself</span>
              </h2>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <p className="text-sm leading-relaxed text-gray-600">
                A snapshot of the trust, reach, and delivery depth that define GravityTech today.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/40 bg-white/60 p-8 backdrop-blur-sm">
              <p className="mb-6 text-xs font-medium uppercase tracking-widest text-gray-400">
                Our Clients
              </p>
              <p className="mb-3 text-5xl font-bold text-gray-900">50+</p>
              <p className="mb-6 text-sm text-gray-600">
                Businesses served across India, UAE, and USA
              </p>
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full border-2 border-white bg-gray-300"
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/60 p-8 backdrop-blur-sm md:-mt-8">
              <p className="mb-6 text-xs font-medium uppercase tracking-widest text-gray-400">
                Our Impact
              </p>
              <p className="mb-3 text-5xl font-bold text-gray-900">100+</p>
              <p className="mb-6 text-sm text-gray-600">
                Live projects delivered with real business outcomes
              </p>
              <TrendingUp className="text-[#1fb6e8]" size={24} aria-hidden="true" />
            </div>

            <div className="rounded-2xl border border-white/40 bg-white/60 p-8 backdrop-blur-sm">
              <p className="mb-6 text-xs font-medium uppercase tracking-widest text-gray-400">
                Years Building IT
              </p>
              <p className="mb-3 text-5xl font-bold text-gray-900">5+</p>
              <p className="text-sm text-gray-600">
                Years of engineering excellence, now AI-native
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Who is GravityTech? */}
      <section className="relative overflow-hidden bg-[#0f0f0f] py-16 sm:py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-20 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-white">Who is GravityTech?</h2>
              <div className="space-y-4 text-sm leading-relaxed text-gray-400">
                <p>
                  GravityTech is an <strong className="text-white">enterprise IT services</strong>{' '}
                  company partnering with{' '}
                  <strong className="text-white">growing organizations</strong> who need real
                  software delivery — not just advice.
                </p>
                <p>
                  What sets us apart is not that we advise on IT but that{' '}
                  <strong className="text-white">we build it</strong>. Engineering depth, not just
                  consulting. Production systems, not experimentation. A{' '}
                  <strong className="text-white">knowledge infrastructure</strong> that gives teams
                  a genuine understanding of how modern software works.
                </p>
                <p>
                  Through <strong className="text-white">dedicated learning programs</strong>,
                  cross-functional exposure, and one-to-one mentorship, we help our people grow into
                  leaders and <strong className="text-white">innovators</strong> who ship enterprise
                  software the <strong className="text-white">right way</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How We Build Differently */}
      <section className="bg-[#0f0f0f] pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mb-12 text-3xl font-semibold text-white">How We Build Differently</h2>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-gray-800 sm:grid-cols-2">
            {BUILD_DIFFERENTLY.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#141414] p-8 transition-colors duration-200 hover:bg-[#1a1a1a]"
              >
                <p className="mb-4 font-mono text-sm text-gray-600">0{index + 1}</p>
                <h3 className="mb-3 text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Where Credibility Meets Capability */}
      <section className="py-16 sm:py-20 lg:py-28" style={{ background: GRADIENT_LIGHT_SHORT }}>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Where Credibility
              <br />
              Meets <span className="text-[#7c3aed]">Capability</span>
            </h2>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7c3aed]" />
              <p className="text-sm text-gray-600">
                The delivery depth that give enterprises the confidence to move with us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/50 bg-white/70 p-7 backdrop-blur">
              <Code2 className="mb-4 text-[#1fb6e8]" size={24} aria-hidden="true" />
              <h3 className="mb-2 font-semibold text-gray-900">Built to Enterprise Standard</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                We are trusted and compliant operators across every client engagement and regulated
                industry we serve.
              </p>
              <div className="flex flex-wrap gap-2">
                {['ISO Compliant', 'GDPR Ready', 'SOC 2 Aligned', 'CCPA'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/50 bg-white/70 p-7 backdrop-blur">
              <Shield className="mb-4 text-[#7c3aed]" size={24} aria-hidden="true" />
              <h3 className="mb-2 font-semibold text-gray-900">Certified Across the Stack</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Production-grade IT requires production-grade infrastructure expertise. We have
                certified teams across cloud and infrastructure platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'AWS Solutions Architect',
                  'Google Cloud Engineer',
                  'Cloud Architect',
                  'Scrum & Agile',
                  'AWS DevSecOps',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#1fb6e8] to-[#0a73b7] p-7 sm:col-span-2">
              <ArrowRight className="mb-4 text-white/60" size={24} aria-hidden="true" />
              <h3 className="mb-4 text-xl font-semibold text-white">
                Let&apos;s Build The Future Together!
              </h3>
              <TextRollButton
                label="Start a Project →"
                href="/careers#apply"
                variant="white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our Vision */}
      <section className="bg-[#0f0f0f] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-3xl font-semibold text-white">Our Vision</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-gray-400">
            <p>
              Software cannot stay <strong className="text-white">trapped</strong> in disconnected
              tools, slow delivery, and systems teams don&apos;t trust. The next enterprise advantage
              will belong to organizations where{' '}
              <strong className="text-white">how work actually gets done</strong> is powered by
              reliable, well-built software.
            </p>
            <p>
              Our mission is to help enterprises reach that level of{' '}
              <strong className="text-white">IT maturity</strong>. We connect strategy, engineering,
              talent, and payroll into operating systems that are reliable enough to run inside the
              business, secure enough to earn trust, and scalable enough to create measurable value.
            </p>
            <p>
              We believe enterprise IT will become the{' '}
              <strong className="text-white">operating layer</strong> of modern organizations —
              where knowledge, systems, decisions, and{' '}
              <strong className="text-white">human oversight</strong> work together with precision.
              Our role is to help enterprises build that.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection
        className="px-5 py-16 sm:px-8 lg:px-12"
        style={{ background: 'linear-gradient(135deg, #fce4f3 0%, #e8d5f5 40%, #f0d5a0 100%)' }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            We don&apos;t just hire.
            <span className="block text-[#1fb6e8]">We build careers.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
            SCIP — our Specialized Corporate Incubation Program — trains driven individuals on live
            enterprise projects. If you&apos;re serious about building a software career, GravityTech
            is where to start.
          </p>
          <div className="mt-8 flex justify-center">
            <TextRollButton label="Learn About SCIP →" href="/careers#scip" variant="primary" />
          </div>
        </div>
      </AnimatedSection>

      {/* Section 7: Tech Stack */}
      <section className="py-16 sm:py-20 lg:py-28" style={{ background: GRADIENT_LIGHT }}>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-gray-900 sm:text-4xl">
                The Tech Stack We
                <br />
                <span className="text-[#1fb6e8]">Build On</span>
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  Software is only as effective as the infrastructure it runs on, and the
                  infrastructure is only as good as the judgment behind it.
                </p>
                <p>
                  GravityTech builds across leading platforms, matching capability to work
                  requirements, respecting data residency, managing total cost of ownership.
                </p>
                <p>
                  The result is a purpose-built stack. Not locked into a single provider&apos;s
                  roadmap. Designed to compound as the system matures.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/50 bg-white/60 p-4 backdrop-blur">
              {TECH_STACK.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/80 ${
                    index < TECH_STACK.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div
                    className="h-8 w-8 shrink-0 rounded-lg"
                    style={{ background: tech.bgColor }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{tech.name}</p>
                    <p className="text-xs text-gray-500">{tech.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Team */}
      <section id="team" className="bg-[#0f0f0f] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <h2 className="text-3xl font-semibold text-white">The Original Commit</h2>
            <p className="text-gray-500">Started with clean code. Still building.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-2xl bg-[#1a1a1a]">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{member.role}</p>
                  <button
                    type="button"
                    className="mt-2 text-xs text-[#1fb6e8] hover:underline"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: CTA Form */}
      <section className="py-16 sm:py-20 lg:py-28" style={{ background: GRADIENT_LIGHT }}>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-5">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                alt="Rohit Verma"
                loading="lazy"
                className="mb-4 h-16 w-16 rounded-full object-cover"
              />
              <p className="font-semibold text-gray-900">Rohit Verma</p>
              <p className="text-sm text-gray-500">Growth Officer</p>
              <p className="mt-4 text-3xl text-gray-400">&ldquo;</p>
              <p className="text-sm leading-relaxed text-gray-700">When you win, we win.</p>
              <p className="text-3xl text-gray-400">&rdquo;</p>
            </div>

            <div>
              <div className="mb-6 flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('business')}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeTab === 'business'
                      ? 'bg-[#1fb6e8] text-white'
                      : 'text-gray-500'
                  }`}
                >
                  Business Enquiry
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('other')}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeTab === 'other' ? 'bg-[#1fb6e8] text-white' : 'text-gray-500'
                  }`}
                >
                  Other Enquiry
                </button>
              </div>

              {formSubmitted ? (
                <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
                  <p className="text-lg font-semibold text-gray-900">Message sent!</p>
                  <p className="mt-2 text-sm text-gray-500">
                    We&apos;ll get back to you within a few business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Company Email"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Designation / Position"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                    />
                  </div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your requirements..."
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                  />
                  <div className="space-y-2 text-sm text-gray-600">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" required className="rounded" />
                      I agree to{' '}
                      <span className="text-[#1fb6e8] underline">GravityTech&apos;s Terms</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" required className="rounded" />
                      I agree to{' '}
                      <span className="text-[#1fb6e8] underline">Privacy Policy</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Offices */}
      <section className="bg-[#0f0f0f] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mb-12 text-3xl font-semibold text-white">Our Offices</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              {MAP_OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="flex items-center gap-4 border-b border-gray-800 py-4 last:border-0"
                >
                  <span className="text-2xl">{office.flag}</span>
                  <div>
                    <p className="font-semibold text-white">{office.city}</p>
                    <p className="text-sm text-gray-500">{office.country}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-48 overflow-hidden rounded-2xl border border-gray-800 bg-[#141414]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
                alt="World map"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-15"
              />
              {MAP_OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="absolute"
                  style={{ left: office.x, top: office.y }}
                >
                  <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-[#1fb6e8] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1fb6e8]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
