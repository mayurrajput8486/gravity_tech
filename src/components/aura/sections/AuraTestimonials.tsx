import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { SCIP_TESTIMONIALS } from '../../../constants/scipContent'

export function AuraTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const reduceMotion = useReducedMotion()
  const current = SCIP_TESTIMONIALS[activeIndex]

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (paused || isMobile || reduceMotion) return
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % SCIP_TESTIMONIALS.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [paused, isMobile, reduceMotion])

  return (
    <section className="mx-auto max-w-6xl border-t border-white/10 px-6 py-20 md:py-28">
      <motion.h2
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-3xl font-semibold md:text-5xl"
      >
        Success Stories from Our Graduates
      </motion.h2>

      <div
        className="relative mx-auto max-w-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.article
            key={activeIndex}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="liquid-glass min-h-[280px] rounded-2xl border border-white/10 p-5 sm:min-h-[320px] sm:p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <img
                src={current.photo}
                alt={current.name}
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-[#00d2ff]/30"
              />
              <div>
                <p className="font-semibold text-white">{current.name}</p>
                <p className="text-sm text-white/50">{current.role}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#00d2ff]">
                  {current.company}
                </p>
              </div>
            </div>
            <blockquote className="text-sm leading-[1.6] text-white/80 md:text-base">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <p className="mb-1 text-white/40">Before</p>
                <p className="text-white/70">{current.before}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <p className="mb-1 text-white/40">After</p>
                <p className="text-[#00d2ff]">{current.after}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#00d2ff] text-[#00d2ff]" />
              ))}
            </div>
          </motion.article>
        </AnimatePresence>

        <button
          type="button"
          onClick={() =>
            setActiveIndex((i) => (i - 1 + SCIP_TESTIMONIALS.length) % SCIP_TESTIMONIALS.length)
          }
          className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 sm:flex"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4 text-white/70" />
        </button>
        <button
          type="button"
          onClick={() => setActiveIndex((i) => (i + 1) % SCIP_TESTIMONIALS.length)}
          className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 sm:flex"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4 text-white/70" />
        </button>

        <div className="mt-6 flex justify-center gap-2">
          {SCIP_TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all ${
                i === activeIndex ? 'h-2 w-6 bg-[#00d2ff]' : 'h-2 w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
