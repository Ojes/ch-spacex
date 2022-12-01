import { apiBase } from './apiBase';

export const launchesApi = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: (mission_name) => `/launches/${mission_name ? `/?mission_name=${mission_name}` : ''}`,
    }),
  }),
});

export const { useGetLaunchesQuery } = launchesApi;
