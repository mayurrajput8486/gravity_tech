import { Menu, X } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuraButton } from '../shared/AuraButton'
import { LogoMark } from '../shared/LogoMark'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers' },
]

interface AuraNavbarProps {
  onApply: () => void
}

export function AuraNavbar({ onApply }: AuraNavbarProps) {
  const reduceMotion = useReducedMotion()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        initial={reduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-50 mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6"
        aria-label="SCIP navigation"
      >
        <Link to="/" className="flex min-w-0 items-center gap-2 text-white">
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="truncate text-sm font-semibold">GravityTech</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.to}
              initial={reduceMotion ? false : { opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
            >
              <Link
                to={link.to}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <AuraButton
            label="Apply Now"
            onClick={onApply}
            className="hidden sm:inline-flex"
          />
          <button
            type="button"
            onClick={onApply}
            className="inline-flex rounded-full bg-[#3D81E3] px-3 py-2 text-xs font-semibold text-white sm:hidden"
          >
            Apply
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        />

        <div
          className={`absolute inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="mb-6 flex items-center justify-end">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mb-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-2xl font-medium text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false)
              onApply()
            }}
            className="w-full rounded-full bg-[#3D81E3] py-3 text-base font-semibold text-white"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  )
}
