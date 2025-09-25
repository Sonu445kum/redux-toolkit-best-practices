import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newUsersApi = createApi({
  reducerPath: "newUsersApi", // ye name tumhare store me reducer ka key hoga
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users", // API endpoint
    }),
  }),
});

export const { useGetUsersQuery } = newUsersApi;
