import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookingForm from '../../features/appointments/components/BookingForm';

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const doctorId = searchParams.get('doctorId') ?? '';
  const [booking, setBooking] = useState(null);

  const handleBookingSubmit = (formData) => {
    setBooking(formData);
  };

  return (
    <div className="book-appointment">
      <h1>Book an appointment</h1>

      <div className="book-appointment__container">
        <div className="book-appointment__form">
          <BookingForm key={doctorId || '_'} onSubmit={handleBookingSubmit} initialDoctorId={doctorId} />
        </div>

        {booking && (
          <div className="book-appointment__confirmation">
            <h2>Request received</h2>
            <p>
              Your appointment details have been captured. You will receive a confirmation once the clinic verifies the
              slot.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
