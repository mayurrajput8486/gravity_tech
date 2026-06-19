import { Link } from "react-router-dom";

const footerLinks = {
  pages: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Careers", to: "/careers" },
    { label: "Contact Us", to: "/careers#apply" },
    { label: "Privacy Policy", to: "/about" },
  ],
  services: [
    { label: "CRM Solutions", to: "/services" },
    { label: "Talent Acquisition", to: "/services" },
    { label: "Enterprise Solutions", to: "/services" },
    { label: "Third Party Payroll", to: "/services" },
    { label: "SCIP Program", to: "/careers#scip" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "https://www.instagram.com/gravitytechsoftware" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590807268206" },
  ]
};

function Footer() {
  return (
    <footer>
      <div className="bg-[linear-gradient(169deg,_#851010_0%,_#220404_0%)] px-8 pb-8 pt-16 sm:px-16">
        <div className="flex justify-between max-w-[1440px]">
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2">
              {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1fb6e8] text-xs font-bold text-white">
                GT
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                GravityTech
              </span> */}
              <div>
                <img src='/GravityTech_footer.svg' alt="GravityTech Software" width="350px"/>
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
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
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
