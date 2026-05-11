import { Link, useLocation } from 'react-router-dom';
import EmptyState from '../../components/common/EmptyState';

const COPY = {
  '/lab-tests': {
    title: 'Lab tests',
    description:
      'Online lab booking will be available here soon. In the meantime, you can continue to browse doctors and manage appointments.',
  },
  '/health-blogs': {
    title: 'Health blogs',
    description: 'Expert articles and wellness tips are on the way. Thank you for your patience.',
  },
  '/pharmacy-franchises': {
    title: 'Pharmacy franchise',
    description:
      'Partnership information will be published here. For urgent inquiries, please reach out through the contact options in the footer.',
  },
  '/contact': {
    title: 'Contact us',
    description:
      'For clinical emergencies, call your local emergency number. For product questions, please use the support channels listed on your account dashboard once you are signed in.',
  },
  '/app': {
    title: 'Mobile app',
    description: 'The Sehat Connect app for iOS and Android will be available from this page when released.',
  },
  '/privacy-policy': {
    title: 'Privacy policy',
    description:
      'We are finalizing this policy to describe how Sehat Connect collects, uses, and protects your information. Until the full document is published here, please treat all health data as confidential and only share it through verified booking flows in the product.',
  },
  '/terms': {
    title: 'Terms of use',
    description:
      'Formal terms for using Sehat Connect are being prepared. By continuing to use the site you agree to follow applicable laws and to use booking features responsibly.',
  },
};

export default function ComingSoon() {
  const { pathname } = useLocation();
  const { title, description } = COPY[pathname] || {
    title: 'Coming soon',
    description: 'This section is under development. Please use the links below to continue.',
  };

  return (
    <div className="coming-soon">
      <EmptyState title={title} description={description} />
      <div className="coming-soon__actions">
        <Link className="coming-soon__link" to="/doctors">
          Find doctors
        </Link>
        <Link className="coming-soon__link coming-soon__link--secondary" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
