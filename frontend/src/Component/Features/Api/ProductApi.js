import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const getProductApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => `products/`,
    }),
  }),
});

export const { useGetAllProductQuery } = getProductApi;
