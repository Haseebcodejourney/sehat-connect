import { useState, useEffect } from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import PageLoader from '../../components/common/PageLoader';
import '../../styles/pages/_profile.scss';

export default function PatientProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // TODO: Fetch patient profile
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
              <strong>Phone:</strong> {profile?.phone}
            </p>
            <p>
              <strong>Date of Birth:</strong> {profile?.dob}
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
            <Input type="tel" placeholder="Phone" defaultValue={profile?.phone} />
            <Input type="date" placeholder="Date of Birth" defaultValue={profile?.dob} />
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
