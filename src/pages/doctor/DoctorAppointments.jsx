import { useState, useEffect } from 'react';
import AppointmentCard from '../../features/appointments/components/AppointmentCard';
import PageLoader from '../../components/common/PageLoader';
import EmptyState from '../../components/common/EmptyState';
import '../../styles/pages/_appointments.scss';

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('today'); // today, upcoming, completed

  useEffect(() => {
    // TODO: Fetch doctor appointments
    setLoading(false);
  }, [filter]);

  if (loading) return <PageLoader />;

  return (
    <div className="doctor-appointments">
      <h1>My Appointments</h1>

      <div className="doctor-appointments__filters">
        <button
          className={`filter-btn ${filter === 'today' ? 'active' : ''}`}
          onClick={() => setFilter('today')}
        >
          Today
        </button>
        <button
          className={`filter-btn ${filter === 'upcoming' ? 'active' : ''}`}
          onClick={() => setFilter('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div className="doctor-appointments__list">
        {appointments.length === 0 ? (
          <EmptyState title="No appointments" description={`No ${filter} appointments`} />
        ) : (
          appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))
        )}
      </div>
    </div>
  );
}
