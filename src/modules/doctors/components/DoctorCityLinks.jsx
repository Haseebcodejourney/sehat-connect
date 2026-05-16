import { Link, useParams } from 'react-router-dom';
import { DOCTOR_CITIES } from '../constants';

export default function DoctorCityLinks() {
  const { city: activeCity } = useParams();

  return (
    <section className="doctor-city-links">
      <h2 className="doctor-city-links__title">Consult with doctors in top cities</h2>
      <ul className="doctor-city-links__grid">
        {DOCTOR_CITIES.map((city) => (
          <li key={city.slug}>
            <Link
              to={`/doctors/${city.slug}`}
              className={`doctor-city-links__link${activeCity === city.slug ? ' doctor-city-links__link--active' : ''}`}
            >
              Best doctors in {city.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

