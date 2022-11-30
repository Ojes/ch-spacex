import { combineReducers } from '@reduxjs/toolkit';
import { launchesApi } from '../services/launches';
import { rocketsApi } from '../services/rockets';
import favoritesSlice from './favoritesSlice';

export default combineReducers({
  favorites: favoritesSlice,
  [launchesApi.reducerPath]: launchesApi.reducer,
  [rocketsApi.reducerPath]: rocketsApi.reducer,
});
