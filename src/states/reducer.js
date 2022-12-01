import { combineReducers } from '@reduxjs/toolkit';
import { apiBase } from '../services/apiBase';
import favoritesSlice from './favoritesSlice';

export default combineReducers({
  favorites: favoritesSlice,
  [apiBase.reducerPath]: apiBase.reducer,
});
