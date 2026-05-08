import { useState } from 'react';
import AppointmentCard from '../../features/appointments/components/AppointmentCard';
import EmptyState from '../../components/common/EmptyState';

export default function MyAppointments() {
  const [appointments] = useState([]);
  const [filter, setFilter] = useState('upcoming'); // upcoming, completed, cancelled

  return (
    <div className="my-appointments">
      <h1>My Appointments</h1>

      <div className="my-appointments__filters">
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
        <button
          className={`filter-btn ${filter === 'cancelled' ? 'active' : ''}`}
          onClick={() => setFilter('cancelled')}
        >
          Cancelled
        </button>
      </div>

      <div className="my-appointments__list">
        {appointments.length === 0 ? (
          <EmptyState title="No appointments" description={`You have no ${filter} appointments`} />
        ) : (
          appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))
        )}
      </div>
    </div>
  );
}
