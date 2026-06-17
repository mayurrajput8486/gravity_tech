import { ArrowRight, ArrowUpRight, Clock, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useIndiaTime } from '../hooks/useIndiaTime'

const NAV_ITEMS = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkHeroVisible, setIsDarkHeroVisible] = useState(false)
  const indiaTime = useIndiaTime()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const darkRoutes = ['/about', '/careers']
    if (!darkRoutes.includes(location.pathname)) {
      setIsDarkHeroVisible(false)
      return
    }

    const hero = document.querySelector('[data-dark-nav-hero]')
    if (!hero) {
      setIsDarkHeroVisible(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkHeroVisible(entry.isIntersecting)
      },
      { threshold: 0.25 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [location.pathname])

  const useDarkCapsules = useMemo(
    () => ['/about', '/careers'].includes(location.pathname) && isDarkHeroVisible,
    [location.pathname, isDarkHeroVisible]
  )

  const capsuleClass = useMemo(() => {
    if (useDarkCapsules) {
      return `rounded-full border backdrop-blur-sm ${
        isScrolled
          ? 'bg-gray-900/90 border-gray-800 shadow-md'
          : 'bg-gray-900/80 border-gray-800'
      }`
    }
    return `rounded-full border backdrop-blur-sm ${
      isScrolled ? 'bg-white/95 border-gray-100 shadow-md' : 'bg-white/90 border-gray-100'
    }`
  }, [isScrolled, useDarkCapsules])

  const logoTextClass = useDarkCapsules ? 'text-white' : 'text-gray-900'
  const navTextClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      useDarkCapsules
        ? isActive
          ? 'text-white'
          : 'text-gray-300 hover:text-white'
        : isActive
          ? 'text-gray-900'
          : 'text-gray-600 hover:text-gray-900'
    }`
  const clockText = useDarkCapsules ? 'text-gray-300' : 'text-gray-600'

  const scrollToQuoteForm = () => {
    if (location.pathname === '/services') {
      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToApplyForm = () => {
    if (location.pathname === '/careers') {
      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className={`${capsuleClass} flex items-center gap-2.5 px-4 py-2.5`}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
            GT
          </div>
          <span className={`hidden text-sm font-semibold sm:block ${logoTextClass}`}>GravityTech</span>
        </Link>

        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 px-5 py-2.5 md:flex ${capsuleClass}`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navTextClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className={`${capsuleClass} hidden items-center gap-1.5 px-3 py-2 lg:flex`}>
            <Clock size={13} className={useDarkCapsules ? 'text-gray-400' : 'text-gray-500'} />
            <span className={`text-xs ${clockText}`}>{indiaTime} IST</span>
          </div>

          <Link
            to="/services#quote"
            onClick={scrollToQuoteForm}
            className="group hidden items-center gap-2 rounded-full bg-[#1fb6e8] py-2 pl-5 pr-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(31,182,232,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0da8da] hover:shadow-[0_6px_20px_rgba(31,182,232,0.5)] sm:flex"
          >
            <div className="h-[18px] overflow-hidden">
              <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                <span className="leading-[18px]">Get a Quote</span>
                <span className="leading-[18px]" aria-hidden>
                  Get a Quote
                </span>
              </div>
            </div>
            <div className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight
                size={12}
                className="text-white transition-transform duration-300 group-hover:rotate-12"
              />
            </div>
          </Link>

          <Link
            to="/careers#apply"
            onClick={scrollToApplyForm}
            className="group hidden items-center gap-2 rounded-full border border-gray-700 bg-gray-900 py-2 pl-4 pr-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 sm:flex"
          >
            <div className="h-[18px] overflow-hidden">
              <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                <span className="leading-[18px]">Join Us</span>
                <span className="leading-[18px]" aria-hidden>
                  Join Us
                </span>
              </div>
            </div>
            <div className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <ArrowRight
                size={12}
                className="-rotate-45 text-white transition-transform duration-300 group-hover:rotate-0"
              />
            </div>
          </Link>

          <button
            type="button"
            className="rounded-full bg-gray-900 p-2.5 text-white sm:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 md:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        />

        <div
          className={`absolute inset-x-3 bottom-3 rounded-2xl bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
            <span>{indiaTime} IST</span>
          </div>

          <nav className="mb-8 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-[28px] font-medium text-gray-900 sm:text-[32px]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <Link
              to="/services#quote"
              onClick={() => {
                setIsMenuOpen(false)
                scrollToQuoteForm()
              }}
              className="group flex w-full items-center justify-between rounded-full bg-[#1fb6e8] py-3 pl-6 pr-3 text-base font-semibold text-white shadow-[0_4px_14px_rgba(31,182,232,0.35)]"
            >
              <div className="h-[20px] overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="leading-[20px]">Get a Quote</span>
                  <span className="leading-[20px]" aria-hidden>
                    Get a Quote
                  </span>
                </div>
              </div>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/careers#apply"
              onClick={() => {
                setIsMenuOpen(false)
                scrollToApplyForm()
              }}
              className="group flex w-full items-center justify-between rounded-full border border-gray-700 bg-gray-900 py-3 pl-6 pr-3 text-base font-medium text-white"
            >
              <div className="h-[20px] overflow-hidden">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="leading-[20px]">Join Us</span>
                  <span className="leading-[20px]" aria-hidden>
                    Join Us
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="-rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
