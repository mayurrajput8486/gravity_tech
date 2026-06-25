import { ArrowRight, Calendar, Download } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'
import SCIPFloatingShapes from './SCIPFloatingShapes'

interface SCIPCTAProps {
  onApply: () => void
}

function SCIPCTA({ onApply }: SCIPCTAProps) {
  return (
    <AnimatedSection className="relative overflow-hidden px-8 py-20 sm:py-24">
      <div className="scip-hero-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-black/50" />
      <SCIPFloatingShapes />

      <div className="relative mx-auto max-w-[1440px] text-center">
        <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
          Ready to Transform Your Career?
        </h2>
        <p className="mx-auto mb-2 max-w-lg text-sm text-gray-400">
          Next batch starts: <span className="text-[#1fb6e8]">July 2026</span>
        </p>
        <p className="mb-10 text-sm text-gray-500">
          Limited seats available: <span className="text-white">12 spots</span>
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onApply}
            className="scip-pulse-cta group flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1fb6e8] to-[#7c3aed] px-12 py-4 text-base font-semibold text-white transition-all hover:brightness-110"
          >
            Apply Now for Next Batch
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <a
            href="#"
            className="group flex items-center gap-2 rounded-xl border-2 border-[#1fb6e8] px-8 py-3.5 text-sm font-medium text-[#1fb6e8] transition-all hover:bg-[#1fb6e8] hover:text-white"
          >
            <Download size={16} />
            Download Program Brochure
          </a>

          <a
            href="mailto:admissions@gravitech.com"
            className="group flex items-center gap-2 rounded-xl border-2 border-[#ec4899] px-8 py-3.5 text-sm font-medium text-[#ec4899] transition-all hover:bg-[#ec4899] hover:text-white"
          >
            <Calendar size={16} />
            Schedule Free Consultation
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          Questions? Email us at{' '}
          <a href="mailto:admissions@gravitech.com" className="text-[#1fb6e8] hover:underline">
            admissions@gravitech.com
          </a>
        </p>
      </div>
    </AnimatedSection>
  )
}

export default SCIPCTA
