import type { ReactNode } from 'react'

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4'

interface SCIPAuraLayoutProps {
  children: ReactNode
}

export function SCIPAuraLayout({ children }: SCIPAuraLayoutProps) {
  return (
    <div
      data-dark-nav-hero
      className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] font-sans text-white antialiased"
    >
      <div className="pointer-events-none fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none h-full w-full object-cover opacity-40"
          src={BG_VIDEO}
        />
        <div className="absolute inset-0 bg-[#0c0c0c]/70" />
      </div>

      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={2}
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
          />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <div
        className="pointer-events-none fixed inset-y-0 left-1/2 z-[5] hidden w-px -translate-x-[calc(50%+36rem)] bg-white/10 md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-y-0 left-1/2 z-[5] hidden w-px translate-x-[calc(-50%+36rem)] bg-white/10 md:block"
        aria-hidden="true"
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
