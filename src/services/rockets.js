import { apiBase } from './apiBase';

export const rocketsApi = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    getRocket: builder.query({
      query: (id) => `/rockets/${id}`,
    }),
  }),
});

export const { useGetRocketQuery } = rocketsApi;
