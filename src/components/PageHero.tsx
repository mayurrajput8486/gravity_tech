import type { ReactNode } from 'react'
import HeroBackground from './HeroBackground'

interface PageHeroProps {
  children: ReactNode
}

function PageHero({ children }: PageHeroProps) {
  return (
    <section data-dark-nav-hero className="relative flex min-h-screen flex-col bg-[#EFEFEF]">
      <HeroBackground />
      <div className="flex-1" />
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        {children}
      </div>
    </section>
  )
}

export default PageHero
