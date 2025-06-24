import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BaseURL }),
  tagTypes: ["login"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ["login"],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ["login"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = loginApi;
