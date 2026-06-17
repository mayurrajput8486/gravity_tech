import { Link } from 'react-router-dom'



const footerLinks = {
  pages: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact Us', to: '/careers#apply' },
    { label: 'Privacy Policy', to: '/about' },
  ],
  services: [
    { label: 'CRM Solutions', to: '/services' },
    { label: 'Talent Acquisition', to: '/services' },
    { label: 'Enterprise Solutions', to: '/services' },
    { label: 'Third Party Payroll', to: '/services' },
    { label: 'SCIP Program', to: '/careers#scip' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Twitter / X', href: 'https://x.com' },
  ],
  media: [
    { label: 'YourStory', href: 'https://yourstory.com' },
    { label: 'Economic Times', href: 'https://economictimes.indiatimes.com' },
    { label: 'Express Computers', href: 'https://www.expresscomputer.in' },
    { label: 'Inc42', href: 'https://inc42.com' },
    { label: 'CIOL', href: 'https://www.ciol.com' },
  ],
}

function Footer() {
  return (
    <footer>
      
      <div className="bg-[linear-gradient(63deg,rgba(2,0,36,1)_0%,rgba(82,4,12,1)_96%)] px-8 pb-8 pt-16 sm:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1fb6e8] text-xs font-bold text-white">
                GT
              </div>
              <span className="text-lg font-bold tracking-tight text-white">GravityTech</span>
            </div>
            <p className="text-sm text-gray-500">Code is craft. Code is us.</p>
            <p className="mt-3 text-xs text-gray-600">
              © 2026 GravityTech Software.
              <br />
              All rights reserved.
            </p>
            <button className="mt-2 text-xs text-gray-600 transition-colors hover:text-gray-400">
              Notice
            </button>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-8 border-b border-gray-800/50 pb-12 sm:grid-cols-4">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Pages
            </p>
            <ul>
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="mb-2.5 block text-sm text-gray-500 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Services
            </p>
            <ul>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="mb-2.5 block text-sm text-gray-500 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Social Media
            </p>
            <ul>
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2.5 block text-sm text-gray-500 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              In Media
            </p>
            <ul>
              {footerLinks.media.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2.5 block text-sm text-gray-500 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

          <div className="flex flex-col items-start justify-between gap-3 text-xs text-gray-600 sm:flex-row sm:items-center">
            <p>Built with precision in Pune · Delivered globally.</p>
            <p>Pune · Dubai · Delaware</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
