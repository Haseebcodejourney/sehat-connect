import { Link } from 'react-router-dom';
import { getCityLabel, getSpecialtyLabel, getDoctorsListPath } from '../utils/doctorPaths';

export default function DoctorsBreadcrumb({ city, specialty, doctorName }) {
  const items = [{ label: 'Home', to: '/' }, { label: 'Doctors', to: '/doctors' }];

  if (city) {
    items.push({ label: getCityLabel(city), to: getDoctorsListPath({ city }) });
  }

  if (specialty) {
    items.push({
      label: getSpecialtyLabel(specialty),
      to: getDoctorsListPath({ city, specialty }),
    });
  }

  if (doctorName) {
    items.push({ label: doctorName, to: null });
  }

  return (
    <nav className="doctors-breadcrumb" aria-label="Breadcrumb">
      <ol className="doctors-breadcrumb__list">
        {items.map((item, index) => (
          <li key={item.label} className="doctors-breadcrumb__item">
            {index > 0 && <span className="doctors-breadcrumb__sep" aria-hidden="true">/</span>}
            {item.to ? (
              <Link to={item.to} className="doctors-breadcrumb__link">
                {item.label}
              </Link>
            ) : (
              <span className="doctors-breadcrumb__current" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

