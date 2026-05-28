const TERMS_SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and using Sehat Connect, you agree to these Terms of Use. If you do not agree, please discontinue use of the platform.',
  },
  {
    title: '2. Healthcare Information Disclaimer',
    body: 'Content on this website is provided for general informational purposes only. It does not replace professional medical advice, diagnosis, or treatment from a qualified healthcare provider.',
  },
  {
    title: '3. User Responsibilities',
    body: 'You agree to provide accurate details for bookings, prescriptions, and communication. You are responsible for keeping your account credentials secure and for activity under your account.',
  },
  {
    title: '4. Appointments, Lab Tests, and Orders',
    body: 'Availability, pricing, and timelines shown on the platform may change. Sehat Connect may update, reschedule, or cancel services when required due to provider or operational constraints.',
  },
  {
    title: '5. Prohibited Use',
    body: 'You must not misuse the platform, attempt unauthorized access, upload harmful content, or use Sehat Connect in violation of any applicable law.',
  },
  {
    title: '6. Intellectual Property',
    body: 'All trademarks, logos, content, and software on this platform are owned by Sehat Connect or licensed to us. You may not copy or reuse content without written permission.',
  },
  {
    title: '7. Limitation of Liability',
    body: 'To the maximum extent permitted by law, Sehat Connect is not liable for indirect, incidental, or consequential damages arising from your use of the platform.',
  },
  {
    title: '8. Updates to Terms',
    body: 'We may revise these terms from time to time. Continued use of the platform after updates means you accept the revised Terms of Use.',
  },
];

export default function TermsOfUse() {
  return (
    <section className="terms-page" aria-labelledby="terms-title">
      <div className="terms-page__container">
        <header className="terms-page__header">
          <p className="terms-page__eyebrow">Legal</p>
          <h1 id="terms-title">Terms of Use</h1>
          <p className="terms-page__updated">Last updated: May 2026</p>
        </header>

        <div className="terms-page__content">
          {TERMS_SECTIONS.map((section) => (
            <article key={section.title} className="terms-page__section">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
