import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = { favorites: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducer: {
    addFavorite(state, action) {
      if (state.favorites.find(action.payload)) return;

      state.favorites = [state.favorites, action.payload];
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((favorite) => favorite !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default persistReducer({ key: 'favorites', storage }, favoritesSlice.reducer);
