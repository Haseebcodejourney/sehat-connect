import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <h1>Welcome to Sehat Connect</h1>
          <p>Find and book appointments with experienced healthcare professionals</p>
          <div className="home__hero-actions">
            <Button variant="primary" onClick={() => navigate('/doctors')}>
              Browse Doctors
            </Button>
            <Button variant="secondary" onClick={() => navigate('/login')}>
              Login
            </Button>
          </div>
        </div>
      </section>

      <section className="home__features">
        <div className="home__features-grid">
          <div className="home__feature-card">
            <h3>Easy Booking</h3>
            <p>Schedule appointments with just a few clicks</p>
          </div>
          <div className="home__feature-card">
            <h3>Expert Doctors</h3>
            <p>Access to qualified healthcare professionals</p>
          </div>
          <div className="home__feature-card">
            <h3>Secure & Safe</h3>
            <p>Your health data is protected and secure</p>
          </div>
        </div>
      </section>
    </div>
  );
}
