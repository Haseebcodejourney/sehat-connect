import DoctorsListingPage from './pages/DoctorsListingPage';
import DoctorProfilePage from './pages/DoctorProfilePage';

/** Public doctor discovery routes (Healthwire-style URLs). */
export const doctorPublicRoutes = [
  {
    path: 'doctors',
    children: [
      { index: true, element: <DoctorsListingPage /> },
      { path: ':city/:specialty/:slug', element: <DoctorProfilePage /> },
      { path: ':city/:specialty', element: <DoctorsListingPage /> },
      { path: ':city', element: <DoctorsListingPage /> },
    ],
  },
];

