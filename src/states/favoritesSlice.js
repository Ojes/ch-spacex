import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const name = action.payload.mission_name;

      state[name] = state[name] ? null : action.payload;
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default persistReducer({ key: 'favorites', storage }, favoritesSlice.reducer);
