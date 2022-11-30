import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.spacexdata.com/v3/launches';

export const launchesApi = createApi({
  reducerPath: 'launches',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: (mission_name) => `${mission_name ? `/?mission_name=${mission_name}` : ''}`,
    }),
  }),
});

export const { useGetLaunchesQuery } = launchesApi;
