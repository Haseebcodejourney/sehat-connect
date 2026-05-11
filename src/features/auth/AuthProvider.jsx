import { useCallback, useMemo, useState } from 'react';
import authApi from './authApi';
import { AuthContext } from './authContext';
import { AUTH_USER_STORAGE_KEY, readStoredUser } from './authStorage';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);
  const [token, setToken] = useState(() => localStorage.getItem('authToken'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = useCallback(() => setError(null), []);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authApi.login(email, password);
      localStorage.setItem('authToken', response.token);
      if (response.user) {
        localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(response.user));
        setUser(response.user);
      } else {
        setUser(null);
        localStorage.removeItem(AUTH_USER_STORAGE_KEY);
      }
      setToken(response.token);
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authApi.signup(userData);
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        if (response.user) {
          localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(response.user));
          setUser(response.user);
        }
        setToken(response.token);
      }
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Signup failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch {
      // still clear local session
    }
    localStorage.removeItem('authToken');
    localStorage.removeItem(AUTH_USER_STORAGE_KEY);
    setUser(null);
    setToken(null);
    setError(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      error,
      login,
      signup,
      logout,
      clearError,
      isAuthenticated: Boolean(token),
    }),
    [user, token, loading, error, login, signup, logout, clearError]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
