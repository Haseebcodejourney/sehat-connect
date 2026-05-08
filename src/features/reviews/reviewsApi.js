import apiClient from '../../services/apiClient';
import { ENDPOINTS } from '../../services/endpoints';

export const reviewsApi = {
  getReviews: async (params = {}) => {
    const response = await apiClient.get(ENDPOINTS.REVIEWS.LIST, { params });
    return response.data;
  },

  getReviewsByDoctor: async (doctorId) => {
    const response = await apiClient.get(ENDPOINTS.REVIEWS.BY_DOCTOR(doctorId));
    return response.data;
  },

  createReview: async (reviewData) => {
    const response = await apiClient.post(ENDPOINTS.REVIEWS.CREATE, reviewData);
    return response.data;
  },

  deleteReview: async (id) => {
    const response = await apiClient.delete(ENDPOINTS.REVIEWS.DELETE(id));
    return response.data;
  },
};

export default reviewsApi;
