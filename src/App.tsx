import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Careers from './components/pages/Careers'
import CRMServicePage from './pages/services/CRMServicePage'
import TalentAcquisitionPage from './pages/services/TalentAcquisitionPage'
import EnterpriseSolutionsPage from './pages/services/EnterpriseSolutionsPage'
import ThirdPartyPayrollPage from './pages/services/ThirdPartyPayrollPage'
import SCIPPage from './pages/careers/SCIPPage'
import SCIPBrochurePage from './pages/careers/SCIPBrochurePage'
import LegalPage from './components/pages/LegalPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const rawId = hash.slice(1)
      const id =
        rawId === 'apply' ? 'apply-form' : rawId === 'quote' ? 'quote-form' : rawId
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function AppShell() {
  const location = useLocation()
  const isScipPage = location.pathname.startsWith('/careers/scip')

  return (
    <>
      <ScrollToTop />
      {!isScipPage && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30">
          <div className="pointer-events-auto">
            <Navbar />
          </div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/crm" element={<CRMServicePage />} />
        <Route path="/services/talent-acquisition" element={<TalentAcquisitionPage />} />
        <Route path="/services/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
        <Route path="/services/third-party-payroll" element={<ThirdPartyPayrollPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/scip" element={<SCIPPage />} />
        <Route path="/careers/scip/brochure" element={<SCIPBrochurePage />} />
        <Route path="/privacy-policy" element={<LegalPage />} />
      </Routes>
      {!isScipPage && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
