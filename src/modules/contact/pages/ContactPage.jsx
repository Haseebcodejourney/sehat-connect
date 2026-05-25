import ContactHero from '../components/ContactHero';
import ContactOffice from '../components/ContactOffice';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-us-wrapper">
        <ContactHero />
        <ContactOffice />
      </div>
    </div>
  );
}
