import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const footerHeadingClass =
  "mb-4 text-xs font-semibold uppercase tracking-widest text-white";

const footerLinks = {
  pages: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Careers", to: "/careers" },
    { label: "Privacy Policy", to: "/privacy-policy" },
  ],
  services: [
    { label: "CRM Solutions", to: "/services/crm" },
    { label: "Talent Acquisition", to: "/services/talent-acquisition" },
    { label: "Enterprise Solutions", to: "/services/enterprise-solutions" },
    { label: "Third Party Payroll", to: "/services/third-party-payroll" },
    { label: "SCIP Program", to: "/careers/scip" },
  ],
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/134914021/",
      icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/gravitytechsoftware",
      icon: Instagram,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61590807268206",
      icon: Facebook,
    },
  ],
};

function Footer() {
  return (
    <footer>
      <div className="bg-[linear-gradient(169deg,_#851010_0%,_#220404_0%)] px-5 pb-8 pt-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 border-b border-gray-800/50 pb-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <img
                src="/GravityTech_footer.svg"
                alt="GravityTech Software"
                className="mb-3 w-full max-w-[280px]"
              />
              <p className="text-sm text-gray-500">
                Quality Today. Better Software Tomorrow !!!
              </p>
              <p className="mt-3 text-xs text-gray-600">
                © 2026 GravityTech Software.
                <br />
                All rights reserved.
              </p>
              <button className="mt-2 text-xs text-gray-600 transition-colors hover:text-gray-400">
                Notice
              </button>
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-4 lg:items-start lg:gap-8">
              <div>
                <h4 className={footerHeadingClass}>Pages</h4>
                <ul className="space-y-2.5">
                  {footerLinks.pages.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="block text-sm text-gray-500 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={footerHeadingClass}>Services</h4>
                <ul className="space-y-2.5">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="block text-sm text-gray-500 transition-colors duration-200 hover:text-white"
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
                    <Mail size={13} className="mt-0.5 shrink-0 text-gray-600" />
                    <p className="text-sm text-gray-500">
                      info@gravitytechsoftware.com
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone
                      size={13}
                      className="mt-0.5 shrink-0 text-gray-600"
                    />
                    <p className="text-sm text-gray-500">+91 83084 09189</p>
                  </div>
                  <div className="flex items-start gap-2 text-justify">
                    <MapPin
                      size={13}
                      className="mt-0.5 shrink-0 text-gray-600"
                    />
                    <p className="text-sm text-gray-500">
                      Office No. 01, Ground Floor, Jaymala Apartment, Canal
                      Road, Warje, Pune - 411058.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={13}
                      className="mt-0.5 shrink-0 text-gray-600"
                    />
                    <p className="text-sm text-gray-500">
                      LandMark - Dr. Ambedkar Chowk Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className={footerHeadingClass}>Social Media</h4>
                <div className="flex flex-wrap gap-3">
                  {footerLinks.social.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition-colors hover:border-white hover:text-white"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
