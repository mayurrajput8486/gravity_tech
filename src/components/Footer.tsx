import { Link } from 'react-router-dom'

const offices = [
  { flag: '🇺🇸', city: 'Delaware', country: 'USA' },
  { flag: '🇦🇪', city: 'Dubai', country: 'UAE' },
  { flag: '🇮🇳', city: 'Pune', country: 'India' },
]

const mapMarkers = [
  { name: 'Delaware, USA', x: '22%', y: '38%', color: '#f59e0b' },
  { name: 'Dubai, UAE', x: '61%', y: '46%', color: '#ec4899' },
  { name: 'Pune, India', x: '73%', y: '52%', color: '#1fb6e8' },
]

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
      <div className="bg-[#111111] px-8 py-16 sm:px-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[35%_65%]">
          <div>
            {offices.map((office) => (
              <div
                key={office.city}
                className="mb-3 rounded-2xl border border-gray-800/50 bg-[#1a1a1a] p-6 transition-colors duration-200 hover:border-gray-700"
              >
                <span className="mb-3 block text-2xl">{office.flag}</span>
                <p className="text-lg font-semibold text-white">{office.city}</p>
                <p className="mt-0.5 text-sm text-gray-500">{office.country}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full min-h-[400px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="Dotted world map"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              style={{
                filter: 'opacity(0.25) contrast(0.8) brightness(0) invert(1)',
                maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
              }}
            />

            {mapMarkers.map((office) => (
              <div
                key={office.name}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: office.x, top: office.y }}
              >
                <span
                  className="absolute inline-flex h-4 w-4 rounded-full opacity-40 animate-ping"
                  style={{ background: office.color }}
                />
                <span
                  className="relative inline-flex h-3 w-3 rounded-full"
                  style={{ background: office.color }}
                />
                <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-gray-800 bg-[#1a1a1a] px-2 py-1 group-hover:block">
                  <p className="text-xs font-medium text-white">{office.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0a] px-8 pb-8 pt-16 sm:px-16">
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
