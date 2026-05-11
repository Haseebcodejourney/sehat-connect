import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '../features/auth/AuthProvider';
import { router } from './router';

export default function Providers() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
