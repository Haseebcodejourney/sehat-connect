import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import PageLoader from '../../components/common/PageLoader';
import '../../styles/pages/_dashboard.scss';

export default function PatientDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch patient dashboard stats
    setLoading(false);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className="patient-dashboard">
      <h1>Welcome, Patient</h1>

      <div className="patient-dashboard__stats">
        <div className="stat-card">
          <h3>Upcoming Appointments</h3>
          <p className="stat-card__value">2</p>
        </div>
        <div className="stat-card">
          <h3>Total Appointments</h3>
          <p className="stat-card__value">12</p>
        </div>
        <div className="stat-card">
          <h3>Medical Records</h3>
          <p className="stat-card__value">5</p>
        </div>
      </div>

      <section className="patient-dashboard__actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <Button variant="primary">Book New Appointment</Button>
          <Button variant="secondary">View Appointments</Button>
          <Button variant="secondary">Update Profile</Button>
        </div>
      </section>
    </div>
  );
}
