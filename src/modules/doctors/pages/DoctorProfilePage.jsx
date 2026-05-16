import { Link, useParams } from 'react-router-dom';
import ErrorState from '../../../components/common/ErrorState';
import ReviewList from '../../../features/reviews/components/ReviewList';
import DoctorsBreadcrumb from '../components/DoctorsBreadcrumb';
import Badge from '../../../components/ui/Badge';
import {
  findDoctorBySlug,
  getDoctorsListPath,
  getCityLabel,
  getSpecialtyLabel,
} from '../utils/doctorPaths';

export default function DoctorProfilePage() {
  const { city, specialty, slug } = useParams();
  const doctor = findDoctorBySlug({ city, specialty, slug });

  if (!doctor) {
    return (
      <div className="doctor-detail doctor-detail--not-found">
        <ErrorState
          title="Doctor not found"
          description="We could not find a doctor at this address. Browse the directory to find another specialist."
        />
        <Link to={getDoctorsListPath({ city, specialty })} className="btn btn--primary btn--medium">
          Back to doctors
        </Link>
      </div>
    );
  }

  const specialtyLine = (doctor.specialties ?? [doctor.specialty]).join(' • ');

  return (
    <div className="doctor-detail">
      <DoctorsBreadcrumb city={city} specialty={specialty} doctorName={doctor.name} />

      <div className="doctor-detail__header">
        <img src={doctor.image} alt={doctor.name} className="doctor-detail__image" />

        <div className="doctor-detail__info">
          <div className="doctor-detail__badges">
            {doctor.featured && <Badge variant="primary">Featured Doctor</Badge>}
            {doctor.pmcVerified && <Badge variant="success">PMC Verified</Badge>}
          </div>

          <h1>{doctor.name}</h1>
          <p className="doctor-detail__specialty">{specialtyLine}</p>
          {doctor.qualifications && (
            <p className="doctor-detail__qualifications">{doctor.qualifications}</p>
          )}
          <p className="doctor-detail__location">
            {getSpecialtyLabel(specialty)} in {getCityLabel(city)}
          </p>
          <p className="doctor-detail__experience">{doctor.experience} years of experience</p>
          {doctor.waitTime && (
            <p className="doctor-detail__wait">Average wait time: {doctor.waitTime}</p>
          )}
          <p className="doctor-detail__rating" aria-label={`Average rating ${doctor.rating} out of 5`}>
            {Number(doctor.rating).toFixed(1)} / 5
            {doctor.reviewCount > 0 && ` (${doctor.reviewCount} reviews)`}
          </p>

          {doctor.hospital && (
            <p className="doctor-detail__hospital">
              {doctor.hospital}
              {doctor.location ? ` — ${doctor.location}` : ''}
              {doctor.fee ? ` · Rs ${doctor.fee.toLocaleString()}` : ''}
            </p>
          )}

          <Link
            to={`/patient/book-appointment?doctorId=${doctor.id}`}
            className="btn btn--primary btn--medium doctor-detail__book"
          >
            Book appointment
          </Link>
        </div>
      </div>

      <section className="doctor-detail__about">
        <h2>About</h2>
        <p>{doctor.bio}</p>
      </section>

      <section className="doctor-detail__availability">
        <h2>Availability</h2>
        <p className="doctor-detail__availability-note">
          Clinic schedules will appear here once connected to your hospital partner. You can still
          request an appointment using the button above.
        </p>
      </section>

      <section className="doctor-detail__reviews">
        <h2>Reviews</h2>
        <ReviewList doctorId={String(doctor.id)} />
      </section>
    </div>
  );
}
