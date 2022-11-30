import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rocketsApi = createApi({
  baseQuery: fetchBaseQuery({ baseRUrl: import.meta.env.VITE_APP_ROCKET_API }),
  endpoints: (builder) => ({
    getRocket: builder.query({
      query: (id) => `rocket/${id}`,
    }),
  }),
});

export const { useGetRocketQuery } = rocketsApi;
