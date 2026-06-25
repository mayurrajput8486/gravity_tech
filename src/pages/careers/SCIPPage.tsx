import { SCIPAuraLayout } from '../../components/aura/SCIPAuraLayout'
import { AuraApplicationSection } from '../../components/aura/sections/AuraApplicationSection'
import { AuraCTA } from '../../components/aura/sections/AuraCTA'
import { AuraCurriculum } from '../../components/aura/sections/AuraCurriculum'
import { AuraFeatures } from '../../components/aura/sections/AuraFeatures'
import { AuraFooter } from '../../components/aura/sections/AuraFooter'
import { AuraHero } from '../../components/aura/sections/AuraHero'
import { AuraInboxMockup } from '../../components/aura/sections/AuraInboxMockup'
import { AuraMenuBar } from '../../components/aura/sections/AuraMenuBar'
import { AuraMetrics } from '../../components/aura/sections/AuraMetrics'
import { AuraNavbar } from '../../components/aura/sections/AuraNavbar'
import { AuraProgramOverview } from '../../components/aura/sections/AuraProgramOverview'
import { AuraTestimonials } from '../../components/aura/sections/AuraTestimonials'
import { AuraTimeline } from '../../components/aura/sections/AuraTimeline'

function SCIPPage() {
  const scrollToApply = () => {
    document.getElementById('scip-apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SCIPAuraLayout>
      <main>
        <AuraNavbar onApply={scrollToApply} />
        <AuraHero onApply={scrollToApply} />
        <AuraMenuBar />
        <AuraInboxMockup onApply={scrollToApply} />
        <AuraProgramOverview />
        <AuraTimeline />
        <AuraMetrics />
        <AuraTestimonials />
        <AuraFeatures />
        <AuraCurriculum />
        <AuraCTA onApply={scrollToApply} />
        <AuraApplicationSection />
        <AuraFooter />
      </main>
    </SCIPAuraLayout>
  )
}

export default SCIPPage
