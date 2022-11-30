import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const rocketsApi = createApi({
  reducerPath: 'rockets',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getRocket: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetRocketQuery } = rocketsApi;
