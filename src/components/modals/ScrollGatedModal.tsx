import { useState, useRef, useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X, Check, ChevronDown } from 'lucide-react'

interface ScrollGatedModalProps {
  isOpen: boolean
  onClose: () => void
  onFullyRead: () => void
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function ScrollGatedModal({
  isOpen,
  onClose,
  onFullyRead,
  title,
  lastUpdated,
  children,
}: ScrollGatedModalProps) {
  const [hasReachedBottom, setHasReachedBottom] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const hasFiredRef = useRef(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setHasReachedBottom(false)
      setScrollProgress(0)
      hasFiredRef.current = false
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const checkInitialScroll = () => {
      const el = contentRef.current
      if (!el || hasFiredRef.current) return

      const { scrollHeight, clientHeight } = el
      if (scrollHeight <= clientHeight + 24) {
        hasFiredRef.current = true
        setHasReachedBottom(true)
        setScrollProgress(100)
        onFullyRead()
      }
    }

    requestAnimationFrame(checkInitialScroll)
  }, [isOpen, onFullyRead])

  const handleScroll = () => {
    const el = contentRef.current
    if (!el) return

    const { scrollTop, scrollHeight, clientHeight } = el
    const maxScroll = scrollHeight - clientHeight
    const progress = maxScroll > 0 ? Math.min(100, (scrollTop / maxScroll) * 100) : 100
    setScrollProgress(progress)

    if (scrollTop + clientHeight >= scrollHeight - 24 && !hasFiredRef.current) {
      hasFiredRef.current = true
      setHasReachedBottom(true)
      onFullyRead()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && hasReachedBottom) onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, hasReachedBottom, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl animate-[modal-in_0.25s_ease]">
        <div className="h-1 flex-shrink-0 bg-gray-100">
          <div
            className="h-full bg-[#1fb6e8] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="flex flex-shrink-0 items-start justify-between border-b border-gray-100 px-5 pb-4 pt-5 sm:px-7 sm:pt-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <p className="mt-1 text-xs text-gray-400">Last updated: {lastUpdated}</p>
          </div>
          <button
            type="button"
            onClick={() => hasReachedBottom && onClose()}
            disabled={!hasReachedBottom}
            title={hasReachedBottom ? 'Close' : 'Please read to the end first'}
            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              hasReachedBottom
                ? 'cursor-pointer bg-gray-900 text-white hover:bg-gray-700'
                : 'cursor-not-allowed bg-gray-100 text-gray-300'
            }`}
          >
            <X size={16} />
          </button>
        </div>

        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="relative flex-1 overflow-y-auto px-5 py-6 sm:px-7 prose prose-sm prose-gray max-w-none [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar]:w-1.5"
        >
          {children}

          {!hasReachedBottom && (
            <div className="pointer-events-none sticky bottom-2 flex justify-center">
              <div className="flex animate-bounce items-center gap-1.5 rounded-full bg-gray-900/90 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur">
                Scroll to continue <ChevronDown size={12} />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-shrink-0 flex-col items-stretch gap-3 border-t border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-7 sm:py-5">
          <p className="text-xs text-gray-400">
            {hasReachedBottom ? (
              <span className="flex items-center gap-1.5 font-medium text-green-600">
                <Check size={13} /> You&apos;ve read the full document
              </span>
            ) : (
              `${Math.round(scrollProgress)}% read — scroll to continue`
            )}
          </p>
          <button
            type="button"
            onClick={() => hasReachedBottom && onClose()}
            disabled={!hasReachedBottom}
            className={`flex flex-shrink-0 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              hasReachedBottom
                ? 'cursor-pointer bg-[#1fb6e8] text-white shadow-[0_4px_14px_rgba(31,182,232,0.35)] hover:bg-[#0da8da]'
                : 'cursor-not-allowed bg-gray-100 text-gray-400'
            }`}
          >
            {hasReachedBottom ? (
              <>
                I&apos;ve Read This <Check size={14} />
              </>
            ) : (
              'Keep Scrolling...'
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
