import { ArrowLeft, Download, Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SCIPAuraLayout } from '../../components/aura/SCIPAuraLayout'
import SCIPBrochureContent from '../../components/scip/SCIPBrochureContent'
import { generateBrochurePdf } from '../../lib/generateBrochurePdf'

function SCIPBrochurePage() {
  const brochureRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadError, setDownloadError] = useState('')

  const handleDownloadPdf = async () => {
    if (!brochureRef.current || isDownloading) return

    setIsDownloading(true)
    setDownloadError('')

    try {
      await generateBrochurePdf(brochureRef.current, 'GravityTech-SCIP-Program-Brochure.pdf')
    } catch {
      setDownloadError('Could not generate PDF. Please try again or use Print to save as PDF.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <SCIPAuraLayout>
      <main className="min-h-screen pb-16 pt-6 sm:pt-8">
        <div className="sticky top-0 z-40 border-b border-white/10 bg-[#0c0c0c]/90 px-5 py-4 backdrop-blur-md sm:px-8">
          <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-between gap-3">
            <Link
              to="/careers/scip"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to SCIP
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-sm font-semibold text-white sm:text-base">SCIP Program Brochure</h1>
              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={isDownloading}
                className="inline-flex items-center gap-2 rounded-full bg-[#3D81E3] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#00d2ff] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isDownloading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    Download PDF
                  </>
                )}
              </button>
            </div>
          </div>
          {downloadError && (
            <p className="mx-auto mt-3 max-w-[900px] text-center text-xs text-red-400">
              {downloadError}
            </p>
          )}
        </div>

        <div className="mx-auto max-w-[900px] px-4 py-8 sm:px-6 sm:py-10">
          <SCIPBrochureContent ref={brochureRef} />
        </div>

        <div className="mx-auto max-w-[900px] px-4 pb-8 text-center sm:px-6">
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 disabled:opacity-60"
          >
            <Download size={16} />
            Download Brochure as PDF
          </button>
        </div>
      </main>
    </SCIPAuraLayout>
  )
}

export default SCIPBrochurePage
