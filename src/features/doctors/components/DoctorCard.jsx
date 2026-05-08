import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';

export default function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-card__image" />

      <div className="doctor-card__content">
        <h3 className="doctor-card__name">{doctor.name}</h3>

        <p className="doctor-card__specialty">{doctor.specialty}</p>

        <div className="doctor-card__meta">
          <span className="doctor-card__experience">{doctor.experience} years exp.</span>
          <Badge variant="success">{doctor.rating} ⭐</Badge>
        </div>

        <p className="doctor-card__description">{doctor.bio?.substring(0, 100)}...</p>

        <div className="doctor-card__actions">
          <Button variant="primary" onClick={() => navigate(`/doctors/${doctor.id}`)}>
            View Profile
          </Button>
          <Button variant="secondary">Book Now</Button>
        </div>
      </div>
    </div>
  );
}
