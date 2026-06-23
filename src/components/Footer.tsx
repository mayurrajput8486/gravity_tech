import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const footerHeadingClass = 'mb-4 text-xs font-semibold uppercase tracking-widest text-white'

const footerLinks = {
  pages: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Careers', to: '/careers' },
    { label: 'Privacy Policy', to: '/about' },
  ],
  services: [
    { label: 'CRM Solutions', to: '/services/crm' },
    { label: 'Talent Acquisition', to: '/services/talent-acquisition' },
    { label: 'Enterprise Solutions', to: '/services/enterprise-solutions' },
    { label: 'Third Party Payroll', to: '/services/third-party-payroll' },
    { label: 'SCIP Program', to: '/careers/scip' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: 'https://www.instagram.com/gravitytechsoftware' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590807268206' },
  ],
}

function Footer() {
  return (
    <footer>
      <div className="bg-[linear-gradient(169deg,_#851010_0%,_#220404_0%)] px-8 pb-8 pt-16 sm:px-16">
        <div className="mx-auto flex max-w-[1440px] justify-between">
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2">
              <div>
                <img src="/GravityTech_footer.svg" alt="GravityTech Software" width="350px" />
              </div>
            </div>
            <p className="text-sm text-gray-500">Quality Today. Better Software Tomorrow !!!</p>
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
              <h4 className={footerHeadingClass}>Pages</h4>
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
              <h4 className={footerHeadingClass}>Services</h4>
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
              <h4 className={footerHeadingClass}>Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Mail size={13} className="mt-0.5 flex-shrink-0 text-gray-600" />
                  <p className="text-sm text-gray-500">info@gravitytechsoftware.com</p>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={13} className="mt-0.5 flex-shrink-0 text-gray-600" />
                  <p className="text-sm text-gray-500">+91 75070 24208</p>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={13} className="mt-0.5 flex-shrink-0 text-gray-600" />
                  <p className="text-sm text-gray-500">+91 83084 09100</p>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={13} className="mt-0.5 flex-shrink-0 text-gray-600" />
                  <p className="text-sm text-gray-500">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className={footerHeadingClass}>Social Media</h4>
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
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
