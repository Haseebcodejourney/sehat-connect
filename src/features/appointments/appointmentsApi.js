import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';

export const appointmentsApi = {
  getAppointments: async (params = {}) => {
    const response = await apiClient.get(ENDPOINTS.APPOINTMENTS.LIST, { params });
    return response.data;
  },

  getAppointment: async (id) => {
    const response = await apiClient.get(ENDPOINTS.APPOINTMENTS.DETAIL(id));
    return response.data;
  },

  createAppointment: async (appointmentData) => {
    const response = await apiClient.post(ENDPOINTS.APPOINTMENTS.CREATE, appointmentData);
    return response.data;
  },

  cancelAppointment: async (id) => {
    const response = await apiClient.post(ENDPOINTS.APPOINTMENTS.CANCEL(id));
    return response.data;
  },

  rescheduleAppointment: async (id, newData) => {
    const response = await apiClient.post(ENDPOINTS.APPOINTMENTS.RESCHEDULE(id), newData);
    return response.data;
  },
};

export default appointmentsApi;
