interface SectionBadgeProps {
  number: string
  label: string
  borderClassName?: string
}

function SectionBadge({
  number,
  label,
  borderClassName = 'border-gray-200',
}: SectionBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-xs">
        {number}
      </span>
      <span
        className={`rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:py-1.5 sm:text-[13px] ${borderClassName}`}
      >
        {label}
      </span>
    </div>
  )
}

export default SectionBadge
