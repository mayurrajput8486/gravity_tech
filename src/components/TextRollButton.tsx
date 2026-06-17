import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface TextRollButtonProps {
  label: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'dark' | 'outline' | 'white' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
}

const variantStyles = {
  primary: 'bg-[#1fb6e8] hover:bg-[#0da8da] text-white',
  dark: 'bg-gray-900 text-white',
  outline: 'border border-gray-200 bg-white text-gray-900',
  white: 'bg-white text-gray-900 hover:bg-gray-50',
  'outline-white':
    'bg-transparent text-white border border-white/30 hover:border-[#1fb6e8]/50 hover:bg-[#1fb6e8]/10',
}

const sizeStyles = {
  sm: 'text-[13px] py-2 pl-5 pr-2',
  md: 'text-[13px] sm:text-sm py-2 pl-5 sm:pl-6 pr-2',
  lg: 'text-base py-3 pl-6 pr-3',
}

const circleSizes = {
  sm: 'w-6 h-6',
  md: 'w-6 h-6 sm:w-7 sm:h-7',
  lg: 'h-8 w-8',
}

function TextRollButton({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: TextRollButtonProps) {
  const iconColor =
    variant === 'primary'
      ? 'text-[#1fb6e8]'
      : variant === 'white' || variant === 'dark' || variant === 'outline-white'
        ? 'text-white'
        : 'text-gray-900'
  const circleBg =
    variant === 'white'
      ? 'bg-gray-900'
      : variant === 'dark' || variant === 'outline-white'
        ? 'bg-white/10'
        : 'bg-white'

  const content = (
    <>
      <div className="flex h-[20px] flex-col overflow-hidden">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span>{label}</span>
          <span aria-hidden="true">{label}</span>
        </span>
      </div>
      <div
        className={`flex items-center justify-center overflow-hidden rounded-full ${circleBg} ${circleSizes[size]}`}
      >
        <ArrowRight
          size={14}
          className={`transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] -rotate-45 group-hover:rotate-0 ${iconColor}`}
        />
      </div>
    </>
  )

  const baseClass = `group inline-flex items-center gap-2 rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          className={baseClass}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      )
    }

    return (
      <Link to={href} className={baseClass} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {content}
    </button>
  )
}

export default TextRollButton
