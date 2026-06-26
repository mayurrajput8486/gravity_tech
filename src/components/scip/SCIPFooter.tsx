import { ChevronDown, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FAQ_ITEMS = [
  {
    q: 'Who is eligible for SCIP?',
    a: 'CS/IT graduates, career switchers, and bootcamp graduates with strong motivation and basic programming knowledge.',
  },
  {
    q: 'Is SCIP a paid program?',
    a: 'SCIP is a corporate incubation program. Selected candidates receive stipend support during the program duration.',
  },
  {
    q: 'What is the placement guarantee?',
    a: 'We provide placement assistance with a 95% success rate. Placement depends on performance and market conditions.',
  },
]

function SCIPFooter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')

  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a] px-8 py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">SCIP Admissions</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="mailto:admissions@gravitech.com"
                className="flex items-center gap-2 transition-colors hover:text-[#1fb6e8]"
              >
                <Mail size={16} />
               career@gravitytech.co.in
              </a>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +91 8308409189
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition-colors hover:border-[#1fb6e8] hover:text-[#1fb6e8]"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/gravitytechsoftware"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition-colors hover:border-[#1fb6e8] hover:text-[#1fb6e8]"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590807268206"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition-colors hover:border-[#1fb6e8] hover:text-[#1fb6e8]"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/careers/scip#scip-apply" className="hover:text-[#1fb6e8]">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#1fb6e8]">
                  All Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#1fb6e8]">
                  About GravityTech
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#1fb6e8]">
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Stay Updated</h3>
            <p className="mb-4 text-sm text-gray-400">
              Get notified about new SCIP batches and career tips.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-gray-700 bg-[#141414] px-4 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none focus:border-[#1fb6e8]"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#1fb6e8] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0da8da]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            FAQ
          </h3>
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={item.q} className="rounded-lg border border-gray-800">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-4 text-left text-sm text-white transition-colors hover:bg-[#141414]"
                >
                  {item.q}
                  <ChevronDown
                    size={16}
                    className={`text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="border-t border-gray-800 px-4 py-3 text-sm text-gray-400">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-600">
          <p>
            © 2026 GravityTech Software · SCIP Program ·{' '}
            <button
              onClick={() => {
                document.getElementById('scip-apply')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-gray-500 hover:text-[#1fb6e8]"
            >
              Terms & Conditions
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SCIPFooter
