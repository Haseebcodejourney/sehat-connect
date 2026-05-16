export default function LabCtaBanner() {
  return (
    <aside className="lab-cta-banner">
      <p className="lab-cta-banner__text">Contact Us for Information</p>
      <a href="/contact" className="lab-cta-banner__action" aria-label="Contact us for information">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </aside>
  );
}
