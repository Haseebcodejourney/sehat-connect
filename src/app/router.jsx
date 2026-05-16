import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../pages/public/Home';
import { doctorPublicRoutes } from '../modules/doctors';
import { labPublicRoutes } from '../modules/lab';
import { pharmacyFranchiseRoutes } from '../modules/pharmacy';
import Login from '../pages/public/Login';
import Signup from '../pages/public/Signup';
import NotFound from '../pages/public/NotFound';
import ComingSoon from '../pages/public/ComingSoon';
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
      ...doctorPublicRoutes,
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      ...labPublicRoutes,
      {
        path: 'health-blogs',
        element: <ComingSoon />,
      },
      ...pharmacyFranchiseRoutes,
      {
        path: 'contact',
        element: <ComingSoon />,
      },
      {
        path: 'app',
        element: <ComingSoon />,
      },
      {
        path: 'privacy-policy',
        element: <ComingSoon />,
      },
      {
        path: 'terms',
        element: <ComingSoon />,
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
