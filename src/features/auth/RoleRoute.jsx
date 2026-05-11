import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

export default function RoleRoute({ children, roles }) {
  const { user } = useAuth();

  if (!user || !roles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
