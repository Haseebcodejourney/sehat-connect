import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authStore';
import doctorsReducer from '../features/doctors/doctorsSlice';
import appointmentsReducer from '../features/appointments/appointmentsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    doctors: doctorsReducer,
    appointments: appointmentsReducer,
  },
});

export default store;
