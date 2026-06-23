import type { LucideIcon } from 'lucide-react'
import { useCallback, useRef, useState, type MouseEvent, type ReactElement } from 'react'

type ServiceVisualId = 'crm' | 'talent' | 'enterprise' | 'payroll'

interface ServiceInteractiveVisualProps {
  serviceId: ServiceVisualId
  title: string
  icon: LucideIcon
  gradient: string
  bg: string
  imageUrl: string
  accent: string
  iconBg: string
  tags: readonly string[]
}

function CRMScene({ accent }: { accent: string }) {
  return (
    <>
      <svg
        className="service-scene-layer absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 300"
        aria-hidden
      >
        <line x1="80" y1="120" x2="200" y2="80" stroke={accent} strokeWidth="1.5" opacity="0.6" />
        <line x1="200" y1="80" x2="320" y2="140" stroke={accent} strokeWidth="1.5" opacity="0.6" />
        <line x1="80" y1="120" x2="160" y2="220" stroke={accent} strokeWidth="1.5" opacity="0.4" />
        <line x1="320" y1="140" x2="240" y2="230" stroke={accent} strokeWidth="1.5" opacity="0.4" />
        <line x1="160" y1="220" x2="240" y2="230" stroke={accent} strokeWidth="1.5" opacity="0.5" />
        {[
          { cx: 80, cy: 120, r: 8 },
          { cx: 200, cy: 80, r: 10 },
          { cx: 320, cy: 140, r: 8 },
          { cx: 160, cy: 220, r: 7 },
          { cx: 240, cy: 230, r: 9 },
        ].map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={accent}
            className="animate-service-node-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>
      <div
        className="service-float-card absolute left-[8%] top-[18%] rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md"
        style={{ animationDelay: '0s' }}
      >
        <div className="mb-1 h-1.5 w-16 rounded-full bg-white/30" />
        <div className="h-1.5 w-10 rounded-full" style={{ background: accent, opacity: 0.8 }} />
      </div>
      <div
        className="service-float-card absolute bottom-[22%] right-[10%] rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="flex items-end gap-1">
          {[40, 65, 45, 80, 55].map((h, i) => (
            <div
              key={i}
              className="w-2 rounded-sm bg-white/50"
              style={{ height: `${h * 0.2}px`, background: i === 3 ? accent : undefined }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function TalentScene({ accent }: { accent: string }) {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        {[120, 90, 60].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full border border-white/20"
            style={{
              width: size,
              height: size,
              borderColor: `${accent}${i === 0 ? '66' : '33'}`,
              animation: `service-orbit ${8 + i * 2}s linear infinite`,
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
            }}
          />
        ))}
      </div>
      <div
        className="service-float-card absolute left-[12%] top-[25%] flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md"
        style={{ animationDelay: '0.5s' }}
      >
        <div className="h-7 w-7 rounded-full" style={{ background: `${accent}55` }} />
        <div>
          <div className="mb-1 h-1.5 w-12 rounded-full bg-white/40" />
          <div className="h-1 w-8 rounded-full bg-white/25" />
        </div>
      </div>
      <div
        className="service-float-card absolute bottom-[20%] right-[12%] rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md"
        style={{ animationDelay: '1.8s' }}
      >
        <div className="flex gap-1">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="h-6 w-6 rounded-full border-2 border-white/30"
              style={{ background: n === 2 ? `${accent}44` : 'transparent' }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function EnterpriseScene({ accent }: { accent: string }) {
  return (
    <>
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(${accent}33 1px, transparent 1px),
              linear-gradient(90deg, ${accent}33 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
            transform: 'perspective(400px) rotateX(55deg) scale(1.4)',
            transformOrigin: 'center bottom',
          }}
        />
      </div>
      {[0, 1, 2].map((layer) => (
        <div
          key={layer}
          className="service-float-card absolute left-1/2 rounded-lg border border-white/25 bg-white/10 backdrop-blur-md"
          style={{
            width: `${140 - layer * 20}px`,
            height: `${48 - layer * 8}px`,
            bottom: `${28 + layer * 36}px`,
            transform: `translateX(-50%) translateZ(${layer * 20}px)`,
            animationDelay: `${layer * 0.6}s`,
            boxShadow: `0 ${8 + layer * 4}px ${24 + layer * 8}px rgba(0,0,0,0.25)`,
          }}
        >
          <div className="flex h-full items-center gap-2 px-3">
            <div className="h-2 w-2 rounded-full" style={{ background: accent }} />
            <div className="h-1.5 flex-1 rounded-full bg-white/25" />
          </div>
        </div>
      ))}
    </>
  )
}

function PayrollScene({ accent }: { accent: string }) {
  return (
    <>
      <div
        className="service-orbit-ring absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/25"
        aria-hidden
      />
      <div
        className="service-float-card absolute left-[15%] top-[20%] rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md"
        style={{ animationDelay: '0.3s' }}
      >
        <div className="mb-1 text-[9px] font-bold uppercase tracking-wider text-white/50">PF</div>
        <div className="h-1.5 w-10 rounded-full" style={{ background: accent }} />
      </div>
      <div
        className="service-float-card absolute bottom-[18%] right-[14%] rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="mb-1 text-[9px] font-bold uppercase tracking-wider text-white/50">TDS</div>
        <div className="h-1.5 w-10 rounded-full bg-white/40" />
      </div>
      <div
        className="service-coin absolute right-[20%] top-[30%] flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 font-bold text-white/80"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${accent}, ${accent}88)`,
          boxShadow: `0 8px 24px ${accent}55`,
        }}
        aria-hidden
      >
        ₹
      </div>
    </>
  )
}

const SCENE_MAP: Record<ServiceVisualId, (props: { accent: string }) => ReactElement> = {
  crm: CRMScene,
  talent: TalentScene,
  enterprise: EnterpriseScene,
  payroll: PayrollScene,
}

function ServiceInteractiveVisual({
  serviceId,
  title,
  icon: Icon,
  gradient,
  bg,
  imageUrl,
  accent,
  iconBg,
  tags,
}: ServiceInteractiveVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -14, y: x * 14 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }, [])

  const Scene = SCENE_MAP[serviceId]

  return (
    <div
      ref={containerRef}
      className="service-visual-root relative w-full select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
    >
      <div
        className="service-visual-tilt relative aspect-[4/3] w-full overflow-hidden rounded-2xl transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          background: bg,
        }}
      >
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity transition-transform duration-700"
          style={{
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />

        <div
          className="absolute inset-0 opacity-85 transition-opacity duration-500"
          style={{ background: gradient }}
        />

        <div
          className="service-glow-orb absolute -right-8 -top-8 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500"
          style={{
            background: accent,
            opacity: isHovered ? 0.35 : 0.2,
          }}
        />
        <div
          className="service-glow-orb animate-float absolute -bottom-6 -left-6 h-32 w-32 rounded-full blur-2xl"
          style={{ background: accent, opacity: 0.15, animationDelay: '2s' }}
        />

        <div className="absolute inset-0 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
          <Scene accent={accent} />
        </div>

        <div
          className="service-logo-plate absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 transition-transform duration-300"
          style={{
            transform: `translate(-50%, -50%) translateZ(40px) scale(${isHovered ? 1.06 : 1})`,
          }}
        >
          <div
            className="liquid-glass-strong flex h-24 w-24 items-center justify-center rounded-3xl shadow-2xl transition-shadow duration-300"
            style={{
              background: iconBg,
              boxShadow: isHovered ? `0 20px 60px ${accent}44, inset 0 1px 1px rgba(255,255,255,0.2)` : undefined,
            }}
          >
            <Icon size={44} style={{ color: accent }} strokeWidth={1.5} aria-hidden />
          </div>
          <span className="rounded-full border border-white/20 bg-black/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
            {title.split(' ')[0]}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-300"
          style={{
            boxShadow: isHovered ? `inset 0 0 40px ${accent}22` : undefined,
          }}
        />
      </div>
    </div>
  )
}

export default ServiceInteractiveVisual
