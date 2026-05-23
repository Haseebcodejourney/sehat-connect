import { useCallback, useMemo, useState } from 'react';
import authApi from './authApi';
import { AuthContext } from './authContext';
import { AUTH_USER_STORAGE_KEY, readStoredUser } from './authStorage';

function persistSession(response, setUser, setToken) {
  if (response.token) {
    localStorage.setItem('authToken', response.token);
    setToken(response.token);
  }
  if (response.user) {
    localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(response.user));
    setUser(response.user);
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);
  const [token, setToken] = useState(() => localStorage.getItem('authToken'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const clearError = useCallback(() => setError(null), []);

  const openAuthModal = useCallback(() => {
    clearError();
    setAuthModalOpen(true);
  }, [clearError]);

  const closeAuthModal = useCallback(() => {
    setAuthModalOpen(false);
    clearError();
  }, [clearError]);

  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authApi.login(email, password);
      persistSession(response, setUser, setToken);
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
      persistSession(response, setUser, setToken);
      return response;
    } catch (err) {
      const message = err.response?.data?.message || 'Signup failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const sendOtp = useCallback(async ({ phone, email }) => {
    setLoading(true);
    setError(null);
    try {
      return await authApi.sendOtp({ phone, email });
    } catch (err) {
      const message = err.message || err.response?.data?.message || 'Could not send verification code. Please try again.';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const verifyOtp = useCallback(async ({ phone, email, otp }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authApi.verifyOtp({ phone, email, otp });
      persistSession(response, setUser, setToken);
      return response;
    } catch (err) {
      const message = err.message || err.response?.data?.message || 'Invalid or expired code. Please try again.';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const loginWithGoogle = useCallback(async (credential) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authApi.loginWithGoogle(credential);
      persistSession(response, setUser, setToken);
      return response;
    } catch (err) {
      const message = err.message || err.response?.data?.message || 'Google sign-in failed';
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
      authModalOpen,
      openAuthModal,
      closeAuthModal,
      sendOtp,
      verifyOtp,
      loginWithGoogle,
    }),
    [
      user,
      token,
      loading,
      error,
      login,
      signup,
      logout,
      clearError,
      authModalOpen,
      openAuthModal,
      closeAuthModal,
      sendOtp,
      verifyOtp,
      loginWithGoogle,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
