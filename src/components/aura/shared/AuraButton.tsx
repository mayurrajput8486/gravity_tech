import { ChevronRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import type { ButtonHTMLAttributes } from 'react'

interface AuraButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  full?: boolean
  variant?: 'primary' | 'outline'
}

export function AuraButton({
  label,
  full = false,
  variant = 'primary',
  className = '',
  ...props
}: AuraButtonProps) {
  const reduceMotion = useReducedMotion()

  const base =
    variant === 'primary'
      ? 'bg-white text-black hover:bg-white/90'
      : 'border border-white/15 text-white hover:bg-white/5'

  return (
    <motion.button
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${base} ${
        full ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {label}
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.button>
  )
}
