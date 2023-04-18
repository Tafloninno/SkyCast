import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getWeatherData from '../api/api';

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async (cityNames) => {
    const citiesData = await Promise.all(
      cityNames.map(async (cityName) => {
        const weatherData = await getWeatherData(cityName);
        return { cityName, ...weatherData };
      }),
    );
    return citiesData;
  },
);

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    citiesData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCities.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        citiesData: action.payload,
      }))
      .addCase(fetchCities.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const selectCitiesData = (state) => state.cities.citiesData;
export const selectCitiesStatus = (state) => state.cities.status;
export const selectCitiesError = (state) => state.cities.error;

export default citiesSlice.reducer;
