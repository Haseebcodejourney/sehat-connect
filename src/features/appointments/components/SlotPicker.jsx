import { useState } from 'react';

export default function SlotPicker({ onSlotsChange }) {
  const [slots, setSlots] = useState({
    monday: { start: '09:00', end: '17:00', available: true },
    tuesday: { start: '09:00', end: '17:00', available: true },
    wednesday: { start: '09:00', end: '17:00', available: true },
    thursday: { start: '09:00', end: '17:00', available: true },
    friday: { start: '09:00', end: '17:00', available: true },
    saturday: { start: '10:00', end: '14:00', available: false },
    sunday: { start: '00:00', end: '00:00', available: false },
  });

  const handleSlotChange = (day, field, value) => {
    const newSlots = {
      ...slots,
      [day]: {
        ...slots[day],
        [field]: value,
      },
    };
    setSlots(newSlots);
    onSlotsChange(newSlots);
  };

  return (
    <div className="slot-picker">
      {Object.entries(slots).map(([day, slot]) => (
        <div key={day} className="slot-picker__day">
          <h4>{day.charAt(0).toUpperCase() + day.slice(1)}</h4>

          <label>
            <input
              type="checkbox"
              checked={slot.available}
              onChange={(e) => handleSlotChange(day, 'available', e.target.checked)}
            />
            Available
          </label>

          {slot.available && (
            <>
              <input
                type="time"
                value={slot.start}
                onChange={(e) => handleSlotChange(day, 'start', e.target.value)}
              />
              <input
                type="time"
                value={slot.end}
                onChange={(e) => handleSlotChange(day, 'end', e.target.value)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
