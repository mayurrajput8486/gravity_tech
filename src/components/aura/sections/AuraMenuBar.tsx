import { Search } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { LogoMark } from '../shared/LogoMark'

export function AuraMenuBar() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="sticky top-0 z-20 w-full border-b border-t border-white/10 bg-black/40 backdrop-blur-md">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mx-auto flex h-10 max-w-6xl items-center justify-between px-6 text-xs"
      >
        <div className="flex items-center gap-4">
          <LogoMark className="h-3.5 w-3.5" />
          <span className="font-bold text-white">SCIP</span>
          <div className="ml-4 hidden gap-6 sm:flex">
            {['File', 'Edit', 'View', 'Go', 'Window'].map((item, i) => (
              <span
                key={item}
                className={i > 2 ? 'hidden text-white/50 md:inline' : 'text-white/50'}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/50">
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">GravityTech SCIP</span>
        </div>
      </motion.div>
    </div>
  )
}
