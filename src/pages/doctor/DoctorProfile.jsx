import { useState, useEffect } from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import PageLoader from '../../components/common/PageLoader';

export default function DoctorProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // TODO: Fetch doctor profile
    setLoading(false);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className="profile">
      <h1>My Profile</h1>

      {!editing ? (
        <div className="profile__view">
          <div className="profile__info">
            <p>
              <strong>Name:</strong> {profile?.name}
            </p>
            <p>
              <strong>Email:</strong> {profile?.email}
            </p>
            <p>
              <strong>Specialty:</strong> {profile?.specialty}
            </p>
            <p>
              <strong>License Number:</strong> {profile?.licenseNumber}
            </p>
            <p>
              <strong>Experience:</strong> {profile?.experience} years
            </p>
          </div>
          <Button variant="primary" onClick={() => setEditing(true)}>
            Edit Profile
          </Button>
        </div>
      ) : (
        <div className="profile__edit">
          <form>
            <Input type="text" placeholder="Name" defaultValue={profile?.name} />
            <Input type="email" placeholder="Email" defaultValue={profile?.email} />
            <Input type="text" placeholder="Specialty" defaultValue={profile?.specialty} />
            <Input type="text" placeholder="License Number" defaultValue={profile?.licenseNumber} />
            <Input type="number" placeholder="Experience (years)" defaultValue={profile?.experience} />
            <div className="profile__actions">
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
              <Button variant="secondary" onClick={() => setEditing(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
