import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EdamamService from '../services/EdamamService';

const edamamService = new EdamamService();
export const fetchCards = createAsyncThunk(
  'data/fetchCards', 
  async () => {
    const response = await edamamService.getCards();
    return response;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.data = [];
        state.error = false;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = false;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.loading = false;
        state.data = [];
        state.error = true;
      });
  },
});

export default dataSlice.reducer;
