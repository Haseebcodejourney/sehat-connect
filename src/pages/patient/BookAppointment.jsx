import { useState } from 'react';
import BookingForm from '../../features/appointments/components/BookingForm';

export default function BookAppointment() {
  const [booking, setBooking] = useState(null);

  const handleBookingSubmit = async (formData) => {
    try {
      // TODO: Submit booking to API
      console.log('Booking:', formData);
      setBooking(formData);
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <div className="book-appointment">
      <h1>Book an Appointment</h1>

      <div className="book-appointment__container">
        <div className="book-appointment__form">
          <BookingForm onSubmit={handleBookingSubmit} />
        </div>

        {booking && (
          <div className="book-appointment__confirmation">
            <h2>Booking Confirmed!</h2>
            <p>Your appointment has been successfully booked.</p>
            {/* Display booking details */}
          </div>
        )}
      </div>
    </div>
  );
}
