import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const launchesApi = createApi({
  baseQuery: fetchBaseQuery({ baseRUrl: import.meta.env.VITE_APP_LAUNCHES_API }),
  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: () => `launches`,
    }),
  }),
});

export const { useGetLaunchesQuery } = launchesApi;
