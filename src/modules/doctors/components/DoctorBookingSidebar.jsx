import { Link } from 'react-router-dom';
import { getDoctorsListPath } from '../utils/doctorPaths';

export default function DoctorBookingSidebar({ doctor, city, specialty }) {
  return (
    <aside className="doctor-booking-sidebar">
      <h2 className="doctor-booking-sidebar__title">Book Your Appointment</h2>
      <p className="doctor-booking-sidebar__text">
        {doctor.available === false
          ? 'This doctor is not available at the moment. Please click below to view similar and most experienced doctors.'
          : 'Select a time slot and confirm your visit with this specialist.'}
      </p>

      {doctor.available === false ? (
        <Link
          to={getDoctorsListPath({ city, specialty })}
          className="doctor-booking-sidebar__btn doctor-booking-sidebar__btn--secondary"
        >
          View similar Doctors
        </Link>
      ) : (
        <Link
          to={`/patient/book-appointment?doctorId=${doctor.id}`}
          className="doctor-booking-sidebar__btn"
        >
          Book an Appointment
        </Link>
      )}

      {doctor.fee && (
        <p className="doctor-booking-sidebar__fee">
          Consultation fee: <strong>Rs {doctor.fee.toLocaleString()}</strong>
        </p>
      )}
    </aside>
  );
}

