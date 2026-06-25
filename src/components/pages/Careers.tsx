import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PageHero from "../PageHero";
import SectionBadge from "../SectionBadge";
import TextRollButton from "../TextRollButton";
import JobApplicationForm from "../forms/JobApplicationForm";
import {
  CAREERS_FAQ,
  CAREERS_PERKS,
  EXPLORE_PATHS,
  FEATURED_ROLES,
  GRADIENT_LIGHT_SHORT,
  LIFE_AT_PHOTOS,
  ROLE_FILTERS,
  ROLES,
  SCIP_BENEFITS,
  SCIP_STEPS,
  WHY_JOIN_ROWS,
  type RoleFilter,
} from "../../constants/data";

function Careers() {
  const [activeFilter, setActiveFilter] = useState<RoleFilter>("All");
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const preselectedRole = searchParams.get("role") || "";

  const filteredRoles =
    activeFilter === "All"
      ? ROLES
      : ROLES.filter((role) => role.category === activeFilter);

  const handleApplyForRole = (roleTitle?: string) => {
    if (roleTitle) {
      navigate(`/careers?role=${encodeURIComponent(roleTitle)}#apply`);
      return;
    }
    document
      .getElementById("apply-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document
      .getElementById(id.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const activePath = EXPLORE_PATHS[activeTab];

  return (
    <main>
      <PageHero>
        <p className="mb-5 tracking-wide text-white sm:mb-8 text-2xl font-bold font-serif">
          GravityTech Software
        </p>

        <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-amber-50 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          Build your career
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          on real projects
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          that ship.
        </h1>

        <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-5">
          <TextRollButton
            label="View Open Positions →"
            href="#openings"
            variant="primary"
          />
          <TextRollButton
            label="Learn About SCIP →"
            href="/careers/scip"
            variant="dark"
          />
        </div>
      </PageHero>

      {/* SCIP Program - kept from previous version */}
      <section
        id="scip"
        className="mx-5 my-10 rounded-2xl bg-gray-900 px-6 py-16 sm:mx-8 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-8 inline-block rounded-full border border-[#1fb6e8]/40 bg-[#1fb6e8]/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#1fb6e8]">
              Exclusive Program
            </span>

            <h2 className="mb-3 text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              SCIP Program
            </h2>

            <p className="mb-6 text-lg font-medium text-white/50 sm:text-xl">
              Specialized Corporate Incubation Program
            </p>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/60">
              We hire driven individuals — freshers, career switchers, and
              early-stage professionals — and put them through an intensive,
              job-oriented training program. Every SCIP participant works on
              live client projects from day one, building a real portfolio under
              expert mentorship.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TextRollButton
                label="Apply for SCIP"
                variant="primary"
                href="/careers/scip"
              />
              <Link
                to="/careers/scip"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                Learn more about the program ↓
              </Link>
            </div>
          </div>

          <div className="relative mb-16 flex items-start">
            <div className="absolute left-[16.67%] right-[16.67%] top-6 hidden h-px bg-gradient-to-r from-[#1fb6e8] via-[#7c3aed] to-[#1fb6e8] opacity-30 sm:block" />

            {SCIP_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex flex-1 flex-col items-center px-4 text-center"
                >
                  <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#1fb6e8]/40 bg-gray-800">
                    <Icon
                      size={20}
                      className="text-[#1fb6e8]"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mb-3 font-mono text-xs tracking-widest text-[#1fb6e8]/60">
                    0{index + 1}
                  </p>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SCIP_BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-[#1fb6e8]/30 hover:bg-white/[0.08]"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-[#1fb6e8]"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-white/70">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-white/30">
            SCIP is always open — we hire through our standard interview process
          </p>
        </div>
      </section>

      {/* What happen after you apply  */}
      <section className="bg-[#0f0f0f] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            What happens after
            <span className="block text-[#1fb6e8]">you apply?</span>
          </h2>

          <div className="relative mt-12 flex flex-col gap-8 sm:flex-row sm:gap-0">
            <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r from-[#1fb6e8]/30 via-[#7c3aed]/30 to-[#1fb6e8]/30 sm:block" />
            {[
              {
                title: "Application Review",
                desc: "Our talent team reviews within 2 business days.",
              },
              {
                title: "Intro Call",
                desc: "15-min call to understand your background and goals.",
              },
              {
                title: "Technical Round",
                desc: "A short practical task relevant to the role you applied for.",
              },
              {
                title: "Offer & Onboarding",
                desc: "Offer letter, onboarding timeline, and your first project.",
              },
            ].map((step, index) => (
              <div key={step.title} className="flex-1 px-4 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#1fb6e8]/40 bg-[#141414]">
                  <span className="text-sm font-mono text-[#1fb6e8]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at GravityTech */}
      <section
        className="py-16 sm:py-20 lg:py-28"
        style={{ background: GRADIENT_LIGHT_SHORT }}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                  Life at <span className="text-[#1fb6e8]">GravityTech</span>
                </h2>
                <p className="text-sm text-gray-500">
                  Built around you, not just the job
                </p>
              </div>
              <h3 className="mb-3 text-2xl font-medium text-gray-900">
                Freedom to <strong>shape</strong>
                <br />
                your <strong>own</strong> journey.
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-gray-600">
                Instead of forcing you into a mould, we give you the space and
                opportunities to shape your own journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {LIFE_AT_PHOTOS.map((photo) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-36 w-full rounded-2xl object-cover sm:h-48"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join GravityTech */}
      <section className="bg-[#0f0f0f] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold text-white">
              Why Join GravityTech
            </h2>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1fb6e8]" />
              <p className="text-sm text-gray-500">
                Because you deserve more than just a job
              </p>
            </div>
          </div>

          {WHY_JOIN_ROWS.map((row) => (
            <div
              key={row.title}
              className="flex flex-col items-center gap-8 border-b border-gray-800 py-10 last:border-0 sm:flex-row"
            >
              <div className="w-full overflow-hidden rounded-2xl sm:w-[45%]">
                <img
                  src={row.photo}
                  alt={row.title}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
              </div>
              <div className="sm:w-[55%]">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {row.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {row.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perks and Benefits */}
      <section
        className="py-16 sm:py-20 lg:py-28"
        style={{ background: GRADIENT_LIGHT_SHORT }}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Perks and <span className="text-[#7c3aed]">Benefits</span>
            </h2>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7c3aed]" />
              <p className="text-sm text-gray-600">
                We support you in and out of work — healthcare, learning,
                flexibility, and fun events to keep you growing and thriving.
              </p>
            </div>
          </div>

          <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
            {CAREERS_PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  style={{
                    breakInside: "avoid",
                    marginBottom: "16px",
                    background: perk.gradient ?? undefined,
                  }}
                  className={`rounded-2xl border border-white/50 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/90 hover:shadow-md ${
                    perk.tall ? "pb-10" : ""
                  }`}
                >
                  <Icon
                    className="mb-4 text-gray-600"
                    size={22}
                    aria-hidden="true"
                  />
                  <h3 className="mb-1.5 text-sm font-semibold text-gray-900">
                    {perk.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-500">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Paths */}
      <section className="bg-[#0f0f0f] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold text-white">Explore Paths</h2>
            <p className="text-sm text-gray-500">
              Wherever you are in your career, you can make an impact here.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-2">
              {EXPLORE_PATHS.map((path, index) => {
                const TabIcon = path.icon;
                return (
                  <button
                    key={path.label}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`flex w-full items-center gap-3 rounded-xl p-4 text-left transition-all duration-200 ${
                      activeTab === index
                        ? "border border-white/20 bg-white/10"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <TabIcon
                      size={20}
                      className="text-[#1fb6e8]"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-white">
                      {path.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#1a1a1a] p-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1fb6e8]">
                {activePath.tagline}
              </p>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {activePath.title}
              </h3>
              <div className="mb-4 rounded-xl bg-[#111] p-5">
                <p className="text-xs text-gray-400">
                  <span className="mr-2 text-gray-600">,,</span>
                  {activePath.quote}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={activePath.photo}
                  alt={activePath.person}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    {activePath.person}
                  </p>
                  <p className="text-xs text-gray-500">
                    {activePath.personRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities */}
      <section
        className="py-16 sm:py-20 lg:py-28"
        style={{ background: GRADIENT_LIGHT_SHORT }}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Job <span className="text-[#7c3aed]">Opportunities</span>
            </h2>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7c3aed]" />
              <p className="text-sm text-gray-600">
                From fresh challenges to career-defining roles, find the one
                that matches your ambitions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FEATURED_ROLES.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-white/60 bg-white/80 p-6 backdrop-blur transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                    Featured Opening
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {role.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {role.description}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleApplyForRole(role.title)}
                    className="flex items-center gap-1 text-xs font-medium text-[#1fb6e8] hover:underline"
                  >
                    VIEW DETAILS →
                  </button>
                  <TextRollButton
                    label="Apply Now"
                    variant="primary"
                    size="sm"
                    onClick={() => handleApplyForRole(role.title)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm italic text-gray-500">
              We are constantly looking for great talent.
            </p>
            <TextRollButton
              label="Browse All Openings"
              variant="dark"
              onClick={() => scrollToSection("openings")}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 sm:py-20 lg:py-28"
        style={{ background: GRADIENT_LIGHT_SHORT }}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <h2 className="mb-10 text-3xl font-semibold text-gray-900 sm:text-4xl">
            Frequently Asked <span className="text-[#7c3aed]">Questions</span>
          </h2>

          {CAREERS_FAQ.map((faq, index) => (
            <div
              key={faq.q}
              className="mb-3 overflow-hidden rounded-xl bg-white/70"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium text-gray-900">
                  {faq.q}
                </span>
                <span className="ml-4 shrink-0 text-lg text-gray-400">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      

      {/* Open Positions - kept from previous version */}
      <section
        id="openings"
        className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 flex flex-col gap-6 px-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
            <SectionBadge
              number="2"
              label="Join the team"
              borderClassName="border-gray-300"
            />
            <p className="text-sm text-gray-600">
              Don&apos;t see a fit? Send your resume anyway.
            </p>
          </div>

          <h2 className="mb-8 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:px-12">
            Open positions.
          </h2>

          <div className="mb-8 flex flex-wrap gap-2 px-5 sm:px-8 lg:px-12">
            {ROLE_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 px-5 sm:px-8 md:grid-cols-2 lg:px-12">
            {filteredRoles.map((role) => (
              <div
                key={role.title}
                role="button"
                tabIndex={0}
                onClick={() => handleApplyForRole(role.title)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleApplyForRole(role.title);
                  }
                }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-gray-200 hover:shadow-md"
              >
                <div
                  className="h-1.5 w-full"
                  style={{ background: role.deptColor }}
                />
                <div className="p-7">
                  <span
                    className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                    style={{
                      background: role.deptColorSoft,
                      color: role.deptColor,
                    }}
                  >
                    {role.dept}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    {role.title}
                  </h3>
                  <p className="mb-5 text-sm text-gray-500">
                    {role.location} · {role.type}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {role.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center overflow-hidden rounded-full bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-[130px]">
                      <span className="min-w-0 flex-1 whitespace-nowrap pl-4 text-xs font-medium text-white opacity-0 transition-opacity delay-100 duration-200 group-hover:opacity-100">
                        Apply now
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                        <ArrowRight
                          size={14}
                          className="-rotate-45 text-white transition-transform duration-300 group-hover:rotate-0"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{role.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="apply-form"
        className="bg-[#0f0f0f] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <JobApplicationForm preselectedRole={preselectedRole} />
        </div>
      </section>
    </main>
  );
}

export default Careers;
