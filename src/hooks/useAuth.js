import { useSelector } from 'react-redux';

export function useAuth() {
  const { user, token, loading, error } = useSelector((state) => state.auth);

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated: !!token,
  };
}

export default useAuth;
