import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';

export const doctorsApi = {
  getDoctors: async (params = {}) => {
    const response = await apiClient.get(ENDPOINTS.DOCTORS.LIST, { params });
    return response.data;
  },

  getDoctor: async (id) => {
    const response = await apiClient.get(ENDPOINTS.DOCTORS.DETAIL(id));
    return response.data;
  },

  searchDoctors: async (query) => {
    const response = await apiClient.get(ENDPOINTS.DOCTORS.SEARCH, {
      params: { q: query },
    });
    return response.data;
  },

  getAvailability: async (doctorId) => {
    const response = await apiClient.get(ENDPOINTS.DOCTORS.AVAILABILITY(doctorId));
    return response.data;
  },
};

export default doctorsApi;
