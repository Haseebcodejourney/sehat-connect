import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

export default function AppointmentCard({ appointment }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'cancelled':
        return 'danger';
      case 'completed':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <div className="appointment-card">
      <div className="appointment-card__header">
        <h3 className="appointment-card__title">{appointment.doctorName}</h3>
        <Badge variant={getStatusColor(appointment.status)}>{appointment.status}</Badge>
      </div>

      <div className="appointment-card__details">
        <p>
          <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Time:</strong> {appointment.time}
        </p>
        <p>
          <strong>Specialty:</strong> {appointment.specialty}
        </p>
        {appointment.reason && (
          <p>
            <strong>Reason:</strong> {appointment.reason}
          </p>
        )}
      </div>

      <div className="appointment-card__actions">
        {appointment.status === 'confirmed' && (
          <>
            <Button variant="secondary" size="small">
              Reschedule
            </Button>
            <Button variant="danger" size="small">
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
