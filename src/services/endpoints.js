// API Endpoints
export const ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile',
  },

  // Doctors
  DOCTORS: {
    LIST: '/doctors',
    DETAIL: (id) => `/doctors/${id}`,
    SEARCH: '/doctors/search',
    AVAILABILITY: (id) => `/doctors/${id}/availability`,
  },

  // Appointments
  APPOINTMENTS: {
    LIST: '/appointments',
    CREATE: '/appointments',
    DETAIL: (id) => `/appointments/${id}`,
    CANCEL: (id) => `/appointments/${id}/cancel`,
    RESCHEDULE: (id) => `/appointments/${id}/reschedule`,
  },

  // Reviews
  REVIEWS: {
    LIST: '/reviews',
    CREATE: '/reviews',
    DELETE: (id) => `/reviews/${id}`,
    BY_DOCTOR: (doctorId) => `/doctors/${doctorId}/reviews`,
  },

  // Patients
  PATIENTS: {
    PROFILE: '/patients/profile',
    UPDATE: '/patients/profile',
  },

  // Doctors Management
  DOCTOR_MANAGEMENT: {
    PROFILE: '/doctor/profile',
    UPDATE: '/doctor/profile',
    AVAILABILITY: '/doctor/availability',
    UPDATE_AVAILABILITY: '/doctor/availability',
  },
};
