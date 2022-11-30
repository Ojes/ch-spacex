import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = { favorites: {} };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      if (action.payload in state.favorites) {
        delete state.favorites[action.payload];
      } else {
        state.favorites = { ...state.favorites, [action.payload]: true };
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default persistReducer({ key: 'favorites', storage }, favoritesSlice.reducer);
