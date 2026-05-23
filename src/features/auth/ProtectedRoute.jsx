import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

export default function ProtectedRoute({ children }) {
  const { token, openAuthModal } = useAuth();

  useEffect(() => {
    if (!token) {
      openAuthModal();
    }
  }, [token, openAuthModal]);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
