import { ChevronDown, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FAQ_ITEMS = [
  {
    q: 'Who is eligible for SCIP?',
    a: 'Fresh graduates and early-career candidates in CS, IT, statistics, or related fields — including Data Analytics. Aptitude and drive matter more than years of experience.',
  },
  {
    q: 'Is SCIP a training batch or bootcamp?',
    a: 'No. SCIP is GravityTech\'s hiring process. You apply, attend one interview, and if selected you receive a SCIP offer to join the company — not enrollment in a limited batch.',
  },
  {
    q: 'What happens after I get the SCIP offer?',
    a: 'You onboard at GravityTech, complete 2–3 months of intensive training on your assigned track, and then move to real-time client projects with mentor support.',
  },
]

export function AuraFooter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const reduceMotion = useReducedMotion()

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-3"
        >
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">SCIP Admissions</h3>
            <div className="space-y-3 text-sm text-white/60">
              <a
                href="mailto:admissions@gravitech.com"
                className="flex items-center gap-2 transition-colors hover:text-[#00d2ff]"
              >
                <Mail className="h-4 w-4" />
                admissions@gravitech.com
              </a>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-colors hover:border-[#00d2ff] hover:text-[#00d2ff]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/gravitytechsoftware"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-colors hover:border-[#00d2ff] hover:text-[#00d2ff]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590807268206"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-colors hover:border-[#00d2ff] hover:text-[#00d2ff]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById('scip-apply')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-[#00d2ff]"
                >
                  Apply Now
                </button>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#00d2ff]">
                  All Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00d2ff]">
                  About GravityTech
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Stay Updated</h3>
            <p className="mb-4 text-sm text-white/60">
              Get updates about SCIP hiring and career opportunities at GravityTech.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#00d2ff] min-w-0"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-[#3D81E3] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#00d2ff] sm:px-5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            FAQ
          </h3>
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={item.q} className="liquid-glass rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-4 text-left text-sm text-white"
                >
                  {item.q}
                  <ChevronDown
                    className={`h-4 w-4 text-white/40 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="border-t border-white/10 px-4 py-3 text-sm text-white/60">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/30">
          © 2026 GravityTech Software · SCIP Program
        </p>
      </div>
    </footer>
  )
}
