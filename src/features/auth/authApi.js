import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';
import {
  isAuthMockEnabled,
  mockLoginWithGoogle,
  mockSendPhoneOtp,
  mockVerifyPhoneOtp,
} from './authMock';

async function callWithMockFallback(apiCall, mockCall) {
  if (!isAuthMockEnabled()) {
    return apiCall();
  }

  try {
    return await apiCall();
  } catch {
    return mockCall();
  }
}

export const authApi = {
  login: async (email, password) => {
    const response = await apiClient.post(ENDPOINTS.AUTH.LOGIN, { email, password });
    return response.data;
  },

  signup: async (userData) => {
    const response = await apiClient.post(ENDPOINTS.AUTH.SIGNUP, userData);
    return response.data;
  },

  logout: async () => {
    const response = await apiClient.post(ENDPOINTS.AUTH.LOGOUT);
    return response.data;
  },

  refreshToken: async () => {
    const response = await apiClient.post(ENDPOINTS.AUTH.REFRESH);
    return response.data;
  },

  getProfile: async () => {
    const response = await apiClient.get(ENDPOINTS.AUTH.PROFILE);
    return response.data;
  },

  updateProfile: async (userData) => {
    const response = await apiClient.put(ENDPOINTS.AUTH.PROFILE, userData);
    return response.data;
  },

  sendOtp: async ({ phone, email }) => {
    const contactKey = phone || email;
    return callWithMockFallback(
      async () => {
        const response = await apiClient.post(ENDPOINTS.AUTH.SEND_OTP, { phone, email });
        return response.data;
      },
      () => mockSendPhoneOtp(contactKey)
    );
  },

  verifyOtp: async ({ phone, email, otp }) => {
    const contactKey = phone || email;

    if (isAuthMockEnabled()) {
      try {
        const response = await apiClient.post(ENDPOINTS.AUTH.VERIFY_OTP, { phone, email, otp });
        return response.data;
      } catch {
        return mockVerifyPhoneOtp(contactKey, otp);
      }
    }

    const response = await apiClient.post(ENDPOINTS.AUTH.VERIFY_OTP, { phone, email, otp });
    return response.data;
  },

  loginWithGoogle: async (credential) => {
    return callWithMockFallback(
      async () => {
        const response = await apiClient.post(ENDPOINTS.AUTH.GOOGLE, { credential });
        return response.data;
      },
      () => mockLoginWithGoogle(credential)
    );
  },
};

export default authApi;
