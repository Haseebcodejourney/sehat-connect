import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import PageLoader from '../../components/common/PageLoader';
import ErrorState from '../../components/common/ErrorState';
import ReviewList from '../../features/reviews/components/ReviewList';
import '../../styles/pages/_doctor-detail.scss';

export default function DoctorDetail() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Fetch doctor details from API
    setLoading(false);
  }, [id]);

  if (loading) return <PageLoader />;
  if (error) return <ErrorState title="Error" description={error} />;
  if (!doctor) return <ErrorState title="Doctor not found" description="The doctor you're looking for doesn't exist" />;

  return (
    <div className="doctor-detail">
      <div className="doctor-detail__header">
        <img src={doctor.image} alt={doctor.name} className="doctor-detail__image" />
        <div className="doctor-detail__info">
          <h1>{doctor.name}</h1>
          <p className="doctor-detail__specialty">{doctor.specialty}</p>
          <p className="doctor-detail__experience">{doctor.experience} years experience</p>
          <div className="doctor-detail__rating">Rating: {doctor.rating} ⭐</div>
          <Button variant="primary">Book Appointment</Button>
        </div>
      </div>

      <section className="doctor-detail__about">
        <h2>About</h2>
        <p>{doctor.bio}</p>
      </section>

      <section className="doctor-detail__availability">
        <h2>Availability</h2>
        {/* TODO: Display availability */}
      </section>

      <section className="doctor-detail__reviews">
        <h2>Reviews</h2>
        <ReviewList doctorId={id} />
      </section>
    </div>
  );
}
