import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../features/auth/authContext';

export default function Signup() {
  const navigate = useNavigate();
  const { openAuthModal } = useAuth();

  useEffect(() => {
    openAuthModal();
    navigate('/', { replace: true });
  }, [openAuthModal, navigate]);

  return null;
}
