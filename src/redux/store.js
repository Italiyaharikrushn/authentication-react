import { configureStore } from '@reduxjs/toolkit';
import { loginApi } from './api/loginApi';
import authReducer from  './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});
