import { Link } from 'react-router-dom';
import Badge from '../../../components/ui/Badge';
import { getDoctorProfilePath } from '../utils/doctorPaths';

export default function DoctorCard({ doctor }) {
  const profilePath = getDoctorProfilePath(doctor);
  const specialtyLine = (doctor.specialties ?? [doctor.specialty]).join(' • ');

  return (
    <article className="doctor-card">
      <div className="doctor-card__layout">
        <img src={doctor.image} alt={doctor.name} className="doctor-card__avatar" />

        <div className="doctor-card__body">
          <div className="doctor-card__badges">
            {doctor.featured && <Badge variant="primary">Featured Doctor</Badge>}
            {doctor.pmcVerified && <Badge variant="success">PMC Verified</Badge>}
          </div>

          <h3 className="doctor-card__name">{doctor.name}</h3>
          <p className="doctor-card__specialty">{specialtyLine}</p>
          {doctor.qualifications && (
            <p className="doctor-card__qualifications">{doctor.qualifications}</p>
          )}

          <div className="doctor-card__stats">
            <div className="doctor-card__stat">
              <strong>{doctor.experience}</strong>
              <span>Years of Experience</span>
            </div>
            {doctor.waitTime && (
              <div className="doctor-card__stat">
                <strong>{doctor.waitTime}</strong>
                <span>Wait Time</span>
              </div>
            )}
            <div className="doctor-card__stat">
              <strong>
                {Number(doctor.rating).toFixed(1)}
                <span className="doctor-card__star" aria-hidden="true">
                  ★
                </span>
              </strong>
              <span>
                {doctor.reviewCount > 0
                  ? `(${doctor.reviewCount} reviews)`
                  : 'Rating'}
              </span>
            </div>
          </div>

          {(doctor.hospital || doctor.fee) && (
            <div className="doctor-card__clinic">
              <div className="doctor-card__clinic-row">
                <div className="doctor-card__clinic-info">
                  <span className="doctor-card__clinic-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    {doctor.hospital}
                    {doctor.location ? ` ( ${doctor.location} )` : ''}
                  </span>
                </div>
                {doctor.fee && (
                  <span className="doctor-card__fee">Rs {doctor.fee.toLocaleString()}</span>
                )}
              </div>
              <p className="doctor-card__promo">SAVE UPTO Rs. 200/- ON ONLINE PAYMENT</p>
            </div>
          )}

          <Link to={profilePath} className="doctor-card__cta">
            View Profile
          </Link>
        </div>
      </div>
    </article>
  );
}

