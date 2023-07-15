import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://raw.githubusercontent.com/alexalehno/image-data/master'
  }),

  endpoints: builder => ({
    getData: builder.query({
      query: () => '/data.json'
    })
  })
})

export const { useGetDataQuery } = apiSlice;