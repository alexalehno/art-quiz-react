import { createSlice } from '@reduxjs/toolkit';


export const settingsSlice = createSlice({
  name: 'settings',

  initialState: {
    settings: {
      volume: 0,
      isTimeGame: false,
      timeToAnswer: 5,
    },

    defaultSettings: {
      volume: 0,
      isTimeGame: false,
      timeToAnswer: 5,
    },
  },

  reducers: {
    saveSettings(state, action) {
      state.settings = action.payload;
    },
  },
});

export const { saveSettings } = settingsSlice.actions;