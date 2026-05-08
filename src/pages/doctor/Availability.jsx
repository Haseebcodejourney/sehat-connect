import { useState, useEffect } from 'react';
import SlotPicker from '../../features/appointments/components/SlotPicker';
import Button from '../../components/ui/Button';
import PageLoader from '../../components/common/PageLoader';

export default function Availability() {
  const [availability, setAvailability] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch availability
    setLoading(false);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className="availability">
      <h1>Manage Availability</h1>

      <div className="availability__container">
        <section className="availability__section">
          <h2>Weekly Schedule</h2>
          <SlotPicker onSlotsChange={setAvailability} />
        </section>

        <section className="availability__actions">
          <Button variant="primary">Save Availability</Button>
          <Button variant="secondary">Reset to Default</Button>
        </section>
      </div>
    </div>
  );
}
