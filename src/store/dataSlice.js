// .......................... не используется ..........................

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk(
  'game/fetchData',

  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/alexalehno/image-data/master/data.json');

      if (!response.ok) {
        throw new Error('Server error!');
      }

      const data = await response.json();

      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const dataSlice = createSlice({
  name: 'data',

  initialState: {
    data: [],
    status: null,
    error: null,
  },

  reducers: {},

extraReducers(builder) {
  builder
    .addCase(fetchData.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase('game/fetchData/fulfilled', (state, action) => {
      state.status = 'resolved';
      state.data = state.data.concat(action.payload);
    })
    .addCase(fetchData.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    })
}

  // extraReducers: {
  //   [fetchData.pending]: (state, action) => {
  //     state.status = 'loading';
  //     state.error = null;
  //   },

  //   [fetchData.fulfilled]: (state, action) => {
  //     state.status = 'resolved';
  //     state.data = action.payload;
  //   },

  //   [fetchData.rejected]: (state, action) => {
  //     state.status = 'rejected';
  //     state.error = action.payload;
  //   },
  // }
});
