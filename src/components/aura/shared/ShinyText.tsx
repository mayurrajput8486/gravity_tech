import type { ReactNode } from 'react'

interface ShinyTextProps {
  children: ReactNode
  className?: string
}

export function ShinyText({ children, className = '' }: ShinyTextProps) {
  return (
    <span
      className={`animate-shiny bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'url(#c3-noise)',
      }}
    >
      {children}
    </span>
  )
}
