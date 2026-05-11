import { useMemo, useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import doctorsData from '../../../mock/doctors.json';

const TIME_OPTIONS = [
  { value: '', label: 'Select a time' },
  { value: '09:00', label: '9:00 AM' },
  { value: '09:30', label: '9:30 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '10:30', label: '10:30 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '11:30', label: '11:30 AM' },
  { value: '13:00', label: '1:00 PM' },
  { value: '13:30', label: '1:30 PM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '14:30', label: '2:30 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '15:30', label: '3:30 PM' },
  { value: '16:00', label: '4:00 PM' },
];

export default function BookingForm({ onSubmit, initialDoctorId = '' }) {
  const doctorOptions = useMemo(
    () => [
      { value: '', label: 'Select a doctor' },
      ...doctorsData.doctors.map((d) => ({
        value: String(d.id),
        label: `${d.name} — ${d.specialty}`,
      })),
    ],
    []
  );

  const [formData, setFormData] = useState(() => ({
    doctorId: initialDoctorId ? String(initialDoctorId) : '',
    date: '',
    time: '',
    reason: '',
  }));

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
      <Select name="doctorId" value={formData.doctorId} onChange={handleChange} options={doctorOptions} required />

      <Input type="date" name="date" value={formData.date} onChange={handleChange} required />

      <Select name="time" value={formData.time} onChange={handleChange} options={TIME_OPTIONS} required />

      <Input
        type="text"
        name="reason"
        placeholder="Reason for visit (brief)"
        value={formData.reason}
        onChange={handleChange}
        required
      />

      <Button type="submit" variant="primary">
        Book appointment
      </Button>
    </form>
  );
}
