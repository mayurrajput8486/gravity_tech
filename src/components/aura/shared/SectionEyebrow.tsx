interface SectionEyebrowProps {
  label: string
  tag?: string
}

export function SectionEyebrow({ label, tag }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
        {label}
      </span>
      {tag && (
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/50">
          {tag}
        </span>
      )}
    </div>
  )
}
