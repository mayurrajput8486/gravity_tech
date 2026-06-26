import { ArrowRight } from 'lucide-react'
import LinkChainIcon from './LinkChainIcon'

interface ExpandHoverButtonProps {
  label: string
  variant: 'light' | 'dark'
  widthClass: string
  useLinkIcon?: boolean
}

function ExpandHoverButton({
  label,
  variant,
  widthClass,
  useLinkIcon = false,
}: ExpandHoverButtonProps) {
  const isLight = variant === 'light'

  return (
    <div
      className={`absolute bottom-4 left-4 flex h-9 w-[9.5rem] items-center overflow-hidden rounded-full transition-all duration-300 ease-in-out sm:w-9 ${widthClass} ${
        isLight ? 'bg-white' : 'bg-gray-900'
      }`}
    >
      <span
        className={`min-w-0 flex-1 whitespace-nowrap pl-4 text-[13px] font-medium opacity-100 transition-opacity delay-100 duration-300 sm:opacity-0 sm:group-hover:opacity-100 ${
          isLight ? 'text-gray-900' : 'text-white'
        }`}
      >
        {label}
      </span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
        {useLinkIcon ? (
          <LinkChainIcon className="h-[14px] w-[14px] -rotate-45 text-gray-900 transition-transform duration-300 ease-in-out group-hover:rotate-0" />
        ) : (
          <ArrowRight
            size={14}
            className={`-rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0 ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
            aria-hidden="true"
          />
        )}
      </span>
    </div>
  )
}

export default ExpandHoverButton
