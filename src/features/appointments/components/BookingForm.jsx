import { useState } from 'react';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';

export default function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    doctorId: '',
    date: '',
    time: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <Select
        name="doctorId"
        value={formData.doctorId}
        onChange={handleChange}
        options={[
          { value: '', label: 'Select a doctor' },
          // TODO: Populate with actual doctors
        ]}
        required
      />

      <Input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <Select
        name="time"
        value={formData.time}
        onChange={handleChange}
        options={[
          { value: '', label: 'Select a time' },
          // TODO: Populate based on selected doctor's availability
        ]}
        required
      />

      <Input
        type="text"
        name="reason"
        placeholder="Reason for appointment"
        value={formData.reason}
        onChange={handleChange}
        required
      />

      <Button type="submit" variant="primary">
        Book Appointment
      </Button>
    </form>
  );
}
