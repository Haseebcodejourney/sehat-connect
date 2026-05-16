import Badge from '../../../components/ui/Badge';

export default function DoctorProfileHero({ doctor }) {
  const specialtyLine = (doctor.specialties ?? [doctor.specialty]).join(' • ');

  return (
    <section className="doctor-profile-hero">
      <img src={doctor.image} alt={doctor.name} className="doctor-profile-hero__avatar" />

      <div className="doctor-profile-hero__content">
        <div className="doctor-profile-hero__badges">
          {doctor.featured && <Badge variant="primary">Featured Doctor</Badge>}
          {doctor.pmcVerified && <Badge variant="success">PMC Verified</Badge>}
        </div>

        <h1 className="doctor-profile-hero__name">{doctor.name}</h1>
        <p className="doctor-profile-hero__specialty">{specialtyLine}</p>
        {doctor.qualifications && (
          <p className="doctor-profile-hero__qualifications">{doctor.qualifications}</p>
        )}

        <div className="doctor-profile-hero__stats">
          <div className="doctor-profile-hero__stat">
            <strong>{doctor.experience}</strong>
            <span>Years of Experience</span>
          </div>
          {doctor.waitTime && (
            <div className="doctor-profile-hero__stat">
              <strong>{doctor.waitTime}</strong>
              <span>Wait Time</span>
            </div>
          )}
          <div className="doctor-profile-hero__stat">
            <strong>
              {Number(doctor.rating).toFixed(1)}
              <span className="doctor-profile-hero__star" aria-hidden="true">
                ★
              </span>
            </strong>
            <span>
              {doctor.reviewCount > 0
                ? `${doctor.reviewCount} reviews`
                : 'Patient rating'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

