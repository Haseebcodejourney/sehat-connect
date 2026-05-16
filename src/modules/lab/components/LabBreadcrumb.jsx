import { Link } from 'react-router-dom';

export default function LabBreadcrumb({ testName }) {
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Lab Tests', to: '/lab-tests' },
  ];

  if (testName) {
    items.push({ label: testName, to: null });
  }

  return (
    <nav className="lab-breadcrumb" aria-label="Breadcrumb">
      <ol className="lab-breadcrumb__list">
        {items.map((item, index) => (
          <li key={item.label} className="lab-breadcrumb__item">
            {index > 0 && <span className="lab-breadcrumb__sep" aria-hidden="true">/</span>}
            {item.to ? (
              <Link to={item.to} className="lab-breadcrumb__link">
                {item.label}
              </Link>
            ) : (
              <span className="lab-breadcrumb__current" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

