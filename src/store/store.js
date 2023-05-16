import { configureStore } from '@reduxjs/toolkit';
import edamamApi from './apis/edamamApi';

const store = configureStore({
  reducer: {
    [edamamApi.reducerPath]: edamamApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(edamamApi.middleware),
});

export default store;
