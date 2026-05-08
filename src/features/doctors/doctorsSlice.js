import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import doctorsApi from './doctorsApi';

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async (params, { rejectWithValue }) => {
  try {
    const response = await doctorsApi.getDoctors(params);
    return response;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch doctors');
  }
});

export const searchDoctors = createAsyncThunk('doctors/search', async (query, { rejectWithValue }) => {
  try {
    const response = await doctorsApi.searchDoctors(query);
    return response;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Search failed');
  }
});

const initialState = {
  doctors: [],
  selectedDoctor: null,
  loading: false,
  error: null,
  totalCount: 0,
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload.data || action.payload;
        state.totalCount = action.payload.total || 0;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(searchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload.data || action.payload;
      })
      .addCase(searchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default doctorsSlice.reducer;
