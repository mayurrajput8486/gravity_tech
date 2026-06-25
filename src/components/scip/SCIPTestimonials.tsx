import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import AnimatedSection from '../AnimatedSection'

const TESTIMONIALS = [
  {
    name: 'Aditya Sharma',
    role: 'Senior Frontend Developer',
    company: 'TechCorp India',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    quote:
      'SCIP completely transformed my career. From campus hire to senior dev in 18 months. The live projects made the difference - I knew production code on day one.',
    before: 'College graduate, no experience',
    after: 'Senior Developer, leading 3-person team',
  },
  {
    name: 'Priya Desai',
    role: 'Full Stack Engineer',
    company: 'StartupX',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
    quote:
      'The mentorship here is unreal. My mentor spent time teaching me not just code, but how to think about problems. I got placed in a startup doing exactly what I wanted.',
    before: 'Bootcamp graduate, portfolio weak',
    after: 'Lead developer, architecting new features',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Backend Engineer',
    company: 'E-commerce Giant',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    quote:
      'The SCIP program gave me the confidence to tackle complex systems. Working on real projects while learning was the best experience. Highly recommended!',
    before: 'Self-taught, imposter syndrome',
    after: 'Confident backend architect',
  },
  {
    name: 'Neha Verma',
    role: 'DevOps Engineer',
    company: 'Cloud Solutions Inc',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
    quote:
      "SCIP's focus on real-world practices helped me transition into DevOps smoothly. The AWS training and live project exposure made my interviews so much easier.",
    before: 'Backend developer, no DevOps',
    after: 'DevOps engineer, managing production',
  },
]

function SCIPTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (paused || isMobile) return
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [paused, isMobile])

  const current = TESTIMONIALS[activeIndex]

  return (
    <AnimatedSection className="bg-gradient-to-b from-[#1a0a2e]/50 to-[#0f0f0f] px-8 py-24">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-12 text-center text-3xl font-semibold text-white sm:text-4xl">
          Success Stories from Our Graduates
        </h2>

        <div
          className="relative mx-auto max-w-lg"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <article
            key={activeIndex}
            className="animate-fade-in min-h-[300px] rounded-xl border-2 border-[#1fb6e8] bg-gradient-to-br from-[#0f0f0f] to-[#ec4899]/10 p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <img
                src={current.photo}
                alt={current.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-[#1fb6e8]/40"
              />
              <div>
                <p className="font-semibold text-white">{current.name}</p>
                <p className="text-sm text-gray-400">{current.role}</p>
                <p className="text-xs text-[#1fb6e8]">{current.company}</p>
              </div>
            </div>

            <blockquote className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="mb-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg bg-[#141414] p-3">
                <p className="mb-1 text-gray-500">Before</p>
                <p className="text-gray-300">{current.before}</p>
              </div>
              <div className="rounded-lg bg-[#141414] p-3">
                <p className="mb-1 text-gray-500">After</p>
                <p className="text-[#1fb6e8]">{current.after}</p>
              </div>
            </div>

            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#1fb6e8] text-[#1fb6e8]" />
              ))}
            </div>
          </article>

          <button
            onClick={() =>
              setActiveIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
            }
            className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#1fb6e8]/30 bg-[#141414] transition-colors hover:border-[#1fb6e8] hover:bg-[#1fb6e8]/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} className="text-[#1fb6e8]" />
          </button>
          <button
            onClick={() => setActiveIndex((i) => (i + 1) % TESTIMONIALS.length)}
            className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-14 items-center justify-center rounded-full border border-[#1fb6e8]/30 bg-[#141414] transition-colors hover:border-[#1fb6e8] hover:bg-[#1fb6e8]/10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} className="text-[#1fb6e8]" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'h-2 w-6 bg-[#1fb6e8]' : 'h-2 w-2 bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default SCIPTestimonials
