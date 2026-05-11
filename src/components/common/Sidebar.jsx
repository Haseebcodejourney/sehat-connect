import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/authContext';

export default function Sidebar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const patientMenuItems = [
    { label: 'Dashboard', path: '/patient' },
    { label: 'Book Appointment', path: '/patient/book-appointment' },
    { label: 'My Appointments', path: '/patient/appointments' },
    { label: 'Medical Records', path: '/patient/records' },
    { label: 'Profile', path: '/patient/profile' },
  ];

  const doctorMenuItems = [
    { label: 'Dashboard', path: '/doctor' },
    { label: 'Appointments', path: '/doctor/appointments' },
    { label: 'Manage Availability', path: '/doctor/availability' },
    { label: 'Patients', path: '/doctor/patients' },
    { label: 'Profile', path: '/doctor/profile' },
  ];

  const menuItems = user?.role === 'doctor' ? doctorMenuItems : patientMenuItems;

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        {menuItems.map((item) => (
          <button
            key={item.path}
            className="sidebar__link"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
