import { Menu } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
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

  return (
    <motion.nav
      initial={reduceMotion ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      aria-label="SCIP navigation"
    >
      <Link to="/" className="flex items-center gap-2 text-white">
        <LogoMark className="h-8 w-8" />
        <span className="text-sm font-semibold">GravityTech</span>
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

      <div className="flex items-center gap-3">
        <AuraButton label="Apply Now" onClick={onApply} className="hidden sm:inline-flex" />
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </motion.nav>
  )
}
