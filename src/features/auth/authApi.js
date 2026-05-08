import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';

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
};

export default authApi;
