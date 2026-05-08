import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../pages/public/Home';
import Doctors from '../pages/public/Doctors';
import DoctorDetail from '../pages/public/DoctorDetail';
import Login from '../pages/public/Login';
import Signup from '../pages/public/Signup';
import NotFound from '../pages/public/NotFound';
import PatientDashboard from '../pages/patient/PatientDashboard';
import MyAppointments from '../pages/patient/MyAppointments';
import BookAppointment from '../pages/patient/BookAppointment';
import PatientProfile from '../pages/patient/PatientProfile';
import DoctorDashboard from '../pages/doctor/DoctorDashboard';
import DoctorAppointments from '../pages/doctor/DoctorAppointments';
import Availability from '../pages/doctor/Availability';
import DoctorProfile from '../pages/doctor/DoctorProfile';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import RoleRoute from '../features/auth/RoleRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'doctors',
        element: <Doctors />,
      },
      {
        path: 'doctors/:id',
        element: <DoctorDetail />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/patient',
    element: (
      <ProtectedRoute>
        <RoleRoute roles={['patient']}>
          <DashboardLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <PatientDashboard />,
      },
      {
        path: 'appointments',
        element: <MyAppointments />,
      },
      {
        path: 'book-appointment',
        element: <BookAppointment />,
      },
      {
        path: 'profile',
        element: <PatientProfile />,
      },
    ],
  },
  {
    path: '/doctor',
    element: (
      <ProtectedRoute>
        <RoleRoute roles={['doctor']}>
          <DashboardLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DoctorDashboard />,
      },
      {
        path: 'appointments',
        element: <DoctorAppointments />,
      },
      {
        path: 'availability',
        element: <Availability />,
      },
      {
        path: 'profile',
        element: <DoctorProfile />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
