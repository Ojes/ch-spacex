import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { apiBase } from '../services/apiBase';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiBase.middleware),
});

const persistor = persistStore(store);

export { persistor, store };
