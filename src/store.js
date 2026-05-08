import { configureStore } from '@reduxjs/toolkit';
import appointmentsReducer from './features/appointments/appointmentsSlice';
import authReducer from './features/auth/authStore';
import doctorsReducer from './features/doctors/doctorsSlice';

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    auth: authReducer,
    doctors: doctorsReducer,
  },
});

export default store;
