import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBase } from './apiBase';

export const launchesApi = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: (mission_name) => `/lauches/${mission_name ? `/?mission_name=${mission_name}` : ''}`,
    }),
  }),
});

export const { useGetLaunchesQuery } = launchesApi;
