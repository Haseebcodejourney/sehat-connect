import { Navigate } from 'react-router-dom';
import ContactPage from './pages/ContactPage';

export const contactRoutes = [
  {
    path: 'contact-us',
    element: <ContactPage />,
  },
  {
    path: 'contact',
    element: <Navigate to="/contact-us" replace />,
  },
];
