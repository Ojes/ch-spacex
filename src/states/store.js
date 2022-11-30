import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { launchesApi } from '../services/launches';
import { rocketsApi } from '../services/rockets';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(launchesApi.middleware, rocketsApi.middleware),
});

const persistor = persistStore(store);

export { persistor, store };
