import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await axios.get('http://127.0.0.1:3000/greetings/random');
    return response.data;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default greetingSlice.reducer;
