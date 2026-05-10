const footerMenus = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'News', href: '/news' },
      { label: 'Editorial Policy', href: '/editorial-policy' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Find Doctors', href: '/doctors' },
      { label: 'Lab Tests', href: '/lab-tests' },
      { label: 'Medicines', href: '/medicines' },
      { label: 'Health Blogs', href: '/health-blogs' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="Sehat Connect home">
            <span className="footer__logo-mark" aria-hidden="true">
              <svg
                width="40"
                height="42"
                viewBox="0 0 40 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3.78669C0 1.69536 1.69536 0 3.78669 0H25.7382C33.4198 0 39.6469 6.22714 39.6469 13.9087V38.2133C39.6469 40.3046 37.9515 42 35.8602 42H13.9087C6.22714 42 0 35.7729 0 28.0913V3.78669Z"
                  fill="#255FB8"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.789 6.8855C14.0298 6.92391 14.2661 6.96611 14.5069 7.00075C15.2357 7.1274 15.9445 7.35104 16.6148 7.66577C17.6324 8.14184 18.5966 8.72577 19.4913 9.40768C19.502 9.41036 19.5114 9.41689 19.5178 9.42604C19.5241 9.43519 19.5269 9.44635 19.5257 9.45743C19.3349 9.37304 19.1436 9.28047 18.9566 9.20553C18.3559 8.94089 17.7025 8.81976 17.0475 8.85161C16.2404 8.91225 15.489 9.28915 14.9546 9.90141C14.3183 10.648 13.8599 11.5311 13.6145 12.4834C13.3524 13.3546 13.177 14.2499 13.0912 15.1561C12.9985 16.0271 12.9678 16.9037 12.9992 17.7791C13.0465 20.3991 13.6177 22.9826 14.6788 25.3752C15.1377 26.4311 15.8027 27.3832 16.6342 28.1751C17.2664 28.7814 18.0644 29.1833 18.9254 29.3288C19.7224 29.4412 20.5347 29.3364 21.2778 29.0253C22.1954 28.6451 23.0414 28.1091 23.7791 27.4408C25.0976 26.3139 26.2287 24.982 27.1295 23.4954C27.8087 22.3713 28.2653 21.1254 28.4739 19.8264C28.7744 18.1344 28.4728 16.39 27.6223 14.8998C27.3595 14.4517 27.0224 14.0523 26.6255 13.719C26.3694 13.4823 26.0679 13.3008 25.7396 13.1857C25.4113 13.0706 25.0631 13.0243 24.7164 13.0496C24.7145 13.0356 24.7145 13.0214 24.7164 13.0074C25.056 12.9539 25.3924 12.8726 25.7319 12.8499C26.8213 12.7625 27.9067 13.0607 28.8011 13.693C29.6955 14.3253 30.3428 15.2521 30.6313 16.3136C30.8755 17.1507 30.9604 18.0268 30.8814 18.8956C30.6924 20.6831 30.1161 22.4071 29.1931 23.9457C28.3235 25.4718 27.2915 26.898 26.1153 28.199C23.8404 30.6985 21.3099 32.9491 18.5658 34.9135L18.4895 34.9633L18.1994 34.5785C15.7833 31.4368 13.6733 28.068 11.8987 24.5187C10.867 22.4654 10.037 20.3155 9.42054 18.0996C9.1322 17.0726 8.92314 16.0247 8.79522 14.9653C8.59366 13.5142 8.66108 12.0381 8.99407 10.6118C9.20685 9.73916 9.62461 8.93076 10.2122 8.25459C10.8418 7.546 11.7016 7.08651 12.6372 6.95855L13.0192 6.89558L13.789 6.8855Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.9463 13.2478C14.0713 12.8921 14.1751 12.5525 14.3013 12.2246C14.5816 11.4249 15.0331 10.7012 15.6219 10.1076C16.0015 9.73683 16.4648 9.47035 16.9695 9.33251C17.4742 9.19468 18.0042 9.18987 18.5112 9.31854C19.4004 9.53538 20.2263 9.97016 20.9192 10.5863C22.0068 11.5011 23.0192 12.5077 23.946 13.5958C25.1522 14.9702 26.2853 16.4119 27.3621 17.9008C27.3839 17.9292 27.3972 17.9636 27.4003 17.9998C27.2359 17.8219 27.0797 17.6402 26.9153 17.4668C25.4973 15.8529 23.8177 14.5079 21.9523 13.4923C20.9504 12.9534 19.8722 12.5823 18.758 12.3927C17.1354 12.0779 15.4575 12.3763 14.0294 13.2336L13.9463 13.2478Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="footer__logo-text">Aapki Sehat, Hamari Tarjeeh</span>
          </a>

          {/* <p className="footer__tagline">Aapki Sehat, Hamari Tarjeeh</p> */}

          <div className="footer__apps" aria-label="Download app links">
            <p className="footer__apps-title">Get the Sehat Connect app</p>
            <div className="footer__store-links">
              <a href="/app" className="footer__store-link">
                <span>Download on the</span>
                App Store
              </a>
              <a href="/app" className="footer__store-link">
                <span>Get it on</span>
                Google Play
              </a>
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
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        {/* <p>&copy; {currentYear} Sehat Connect. All rights reserved.</p> */}
        <ul className="footer__bottom_left">
          <li>© Healthwire 2014-{currentYear}</li>
          <li>Terms |</li>
          <li>Privacy</li>
        </ul>
        <ul className="footer__bottom_right">
          <li>
            <a href="https://www.facebook.com/HealthwirePK" target="_blank" rel="noopener noreferrer">
              <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M17.5 14.95C18.55 14.8 19.4 14 19.6 12.95C19.8 11.8 20 10.1 20.05 8C20.05 5.9 19.8 4.2 19.6 3.05C19.4 2 18.55 1.2 17.5 1.05C15.8 0.8 13.1 0.5 10 0.5C6.9 0.5 4.15 0.8 2.5 1.05C1.45 1.2 0.6 2 0.4 3.05C0.2 4.2 0 5.9 0 8C0 10.1 0.2 11.8 0.4 12.95C0.6 14 1.45 14.8 2.5 14.95C4.2 15.2 6.95 15.5 10 15.5C13.1 15.5 15.85 15.2 17.5 14.95ZM14 8L8 4.5V11.5L14 8Z" fill="#F6F9FD"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/HealthwirePK" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0H4C1.791 0 0 1.791 0 4V14C0 16.209 1.791 18 4 18H9.621V11.039H7.278V8.314H9.621V6.309C9.621 3.985 11.042 2.718 13.116 2.718C13.815 2.716 14.513 2.752 15.208 2.823V5.253H13.78C12.65 5.253 12.43 5.787 12.43 6.575V8.31H15.13L14.779 11.035H12.414V18H14C16.209 18 18 16.209 18 14V4C18 1.791 16.209 0 14 0Z" fill="#F6F9FD"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/healthwire-pk/" target="_blank" rel="noopener noreferrer">
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0238 2.46624C18.3217 2.77796 17.5691 2.98726 16.7779 3.08226C17.5854 2.59835 18.2059 1.83241 18.4968 0.921006C17.7428 1.3678 16.9041 1.69288 16.015 1.86804C15.3025 1.10804 14.2872 0.634521 13.1635 0.634521C11.0052 0.634521 9.25513 2.38312 9.25513 4.5414C9.25513 4.84718 9.29075 5.14554 9.35755 5.43202C6.10974 5.26874 3.23153 3.71311 1.30333 1.34851C0.966377 1.92741 0.774893 2.59835 0.774893 3.31382C0.774893 4.66905 1.46364 5.86546 2.5131 6.56757C1.87185 6.54679 1.26919 6.37015 0.742236 6.07772C0.742236 6.09405 0.742236 6.11038 0.742236 6.12671C0.742236 8.02077 2.09005 9.59866 3.87575 9.95936C3.54919 10.0484 3.20333 10.0959 2.84708 10.0959C2.59474 10.0959 2.34981 10.0722 2.11083 10.0247C2.60958 11.5758 4.05239 12.7084 5.76091 12.7396C4.42497 13.7876 2.74021 14.411 0.908486 14.411C0.592315 14.411 0.28208 14.3932 -0.0222168 14.3561C1.7056 15.4664 3.75997 16.1121 5.96724 16.1121C13.1546 16.1121 17.0852 10.1583 17.0852 4.99562C17.0852 4.8264 17.0808 4.65569 17.0748 4.48944C17.8378 3.93874 18.4998 3.24999 19.0238 2.46624Z" fill="#F6F9FD"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/healthwirepk/" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M15.5 18C16.881 18 18 16.881 18 15.5V2.5C18 1.119 16.881 0 15.5 0H2.5C1.1195 0 0 1.119 0 2.5V15.5C0 16.881 1.1195 18 2.5 18H15.5ZM5.5 6.5H3V15H5.5V6.5ZM4.2285 5.5H4.2425C5.0175 5.5 5.5 4.9435 5.5 4.2495C5.486 3.54 5.0175 3 4.257 3C3.4975 3 3 3.54 3 4.2495C3 4.944 3.4825 5.5 4.2285 5.5ZM12.5 15H15L14.9995 10.137C14.9995 7.625 13.658 6.5 11.869 6.5C10.425 6.5 9.8605 7.25 9.5 7.808V6.5H7V15H9.5V10.5C9.5 10.4583 9.49937 10.4096 9.49869 10.3566C9.49539 10.0993 9.49079 9.74164 9.5505 9.5965C9.7475 9.1075 10.1535 8.6015 10.904 8.6015C11.8875 8.6015 12.5 9.3515 12.5 10.4505V15Z" fill="#F6F9FD"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
