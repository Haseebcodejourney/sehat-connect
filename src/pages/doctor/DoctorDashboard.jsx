import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import PageLoader from '../../components/common/PageLoader';
import '../../styles/pages/_dashboard.scss';

export default function DoctorDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch doctor dashboard stats
    setLoading(false);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className="doctor-dashboard">
      <h1>Welcome, Doctor</h1>

      <div className="doctor-dashboard__stats">
        <div className="stat-card">
          <h3>Today's Appointments</h3>
          <p className="stat-card__value">5</p>
        </div>
        <div className="stat-card">
          <h3>Total Patients</h3>
          <p className="stat-card__value">128</p>
        </div>
        <div className="stat-card">
          <h3>Pending Requests</h3>
          <p className="stat-card__value">3</p>
        </div>
      </div>

      <section className="doctor-dashboard__actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <Button variant="primary">View Appointments</Button>
          <Button variant="secondary">Manage Availability</Button>
          <Button variant="secondary">View Patients</Button>
        </div>
      </section>
    </div>
  );
}
