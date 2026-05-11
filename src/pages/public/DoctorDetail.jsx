import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorState from '../../components/common/ErrorState';
import ReviewList from '../../features/reviews/components/ReviewList';
import doctorsData from '../../mock/doctors.json';

export default function DoctorDetail() {
  const { id } = useParams();

  const doctor = useMemo(
    () => doctorsData.doctors.find((d) => String(d.id) === String(id)),
    [id]
  );

  if (!doctor) {
    return (
      <ErrorState
        title="Doctor not found"
        description="We could not find a care provider with that identifier. Please return to the directory and try again."
      />
    );
  }

  return (
    <div className="doctor-detail">
      <div className="doctor-detail__header">
        <img src={doctor.image} alt={`${doctor.name}`} className="doctor-detail__image" />
        <div className="doctor-detail__info">
          <h1>{doctor.name}</h1>
          <p className="doctor-detail__specialty">{doctor.specialty}</p>
          <p className="doctor-detail__experience">{doctor.experience} years experience</p>
          <p className="doctor-detail__rating" aria-label={`Average rating ${doctor.rating} out of 5`}>
            <span aria-hidden="true">Rating: </span>
            {Number(doctor.rating).toFixed(1)} / 5
          </p>
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
          Live schedules will appear here once your clinic connection is configured. You can still request an appointment
          using the button above.
        </p>
      </section>

      <section className="doctor-detail__reviews">
        <h2>Reviews</h2>
        <ReviewList doctorId={id} />
      </section>
    </div>
  );
}
