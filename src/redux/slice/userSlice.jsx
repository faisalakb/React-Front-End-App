import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEndPoints = createAsyncThunk('fetchEndPoints', async () => {
  console.log('Calling endpoints value');
  const response = await fetch('http://localhost:3000/api/random_greeting');
  console.log(response);
  return response.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEndPoints.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEndPoints.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchEndPoints.rejected, (state, action) => {
      console.log('Error is', action.payload);
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
