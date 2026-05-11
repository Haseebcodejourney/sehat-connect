import { Link } from 'react-router-dom';
import SehatLogoMark from './SehatLogoMark';

const footerMenus = [
  {
    title: 'Company',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Find doctors', to: '/doctors' },
      { label: 'Lab tests', to: '/lab-tests' },
      { label: 'Health blogs', to: '/health-blogs' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', to: '/privacy-policy' },
      { label: 'Terms of use', to: '/terms' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Sehat Connect home">
            <span className="footer__logo-mark" aria-hidden="true">
              <SehatLogoMark size={40} />
            </span>
            <span className="footer__logo-text">Sehat Connect</span>
          </Link>
          <p className="footer__tagline">Aapki sehat, hamari tarjeeh.</p>

          <div className="footer__apps" aria-label="Download app links">
            <p className="footer__apps-title">Get the Sehat Connect app</p>
            <div className="footer__store-links">
              <Link to="/app" className="footer__store-link">
                <span>Download on the</span>
                App Store
              </Link>
              <Link to="/app" className="footer__store-link">
                <span>Get it on</span>
                Google Play
              </Link>
            </div>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {footerMenus.map((menu) => (
            <div className="footer__menu" key={menu.title}>
              <h4>{menu.title}</h4>
              <ul>
                {menu.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <ul className="footer__bottom_left">
          <li>© {currentYear} Sehat Connect. All rights reserved.</li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy</Link>
          </li>
        </ul>
        <p className="footer__bottom_note">Social channels will be listed here when available.</p>
      </div>
    </footer>
  );
}
