import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '../features/auth/AuthProvider';
import { PharmacyCartProvider } from '../modules/pharmacy/context/pharmacyCartContext';
import { router } from './router';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function AppProviders() {
  return (
    <AuthProvider>
      <PharmacyCartProvider>
        <RouterProvider router={router} />
      </PharmacyCartProvider>
    </AuthProvider>
  );
}

export default function Providers() {
  if (googleClientId) {
    return (
      <GoogleOAuthProvider clientId={googleClientId}>
        <AppProviders />
      </GoogleOAuthProvider>
    );
  }

  return <AppProviders />;
}
