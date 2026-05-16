import { useState } from 'react';
import { LAB_CITIES, LAB_PARTNERS } from '../constants';
import Select from '../../../components/ui/Select';

export default function LabQuickBooking({ testName, onBook }) {
  const [city, setCity] = useState('');
  const [lab, setLab] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onBook?.({ city, lab });
  };

  return (
    <aside className="lab-quick-booking">
      <h2 className="lab-quick-booking__title">Quick Booking</h2>
      {testName && <p className="lab-quick-booking__test">{testName}</p>}

      <form className="lab-quick-booking__form" onSubmit={handleSubmit}>
        <div className="lab-quick-booking__field">
          <label htmlFor="lab-booking-city">Select City</label>
          <Select
            id="lab-booking-city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            options={[{ value: '', label: 'Select City' }, ...LAB_CITIES]}
          />
        </div>

        <div className="lab-quick-booking__field">
          <label htmlFor="lab-booking-lab">Select Lab</label>
          <Select
            id="lab-booking-lab"
            name="lab"
            value={lab}
            onChange={(e) => setLab(e.target.value)}
            options={[{ value: '', label: 'Select Lab' }, ...LAB_PARTNERS]}
          />
        </div>

        <button type="submit" className="lab-quick-booking__btn">
          Book Now
        </button>
      </form>
    </aside>
  );
}
