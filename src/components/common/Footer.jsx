export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4>About Sehat Connect</h4>
          <p>Making healthcare accessible and convenient for everyone.</p>
        </div>

        <div className="footer__section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/doctors">Doctors</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="/help">Help Center</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} Sehat Connect. All rights reserved.</p>
      </div>
    </footer>
  );
}
