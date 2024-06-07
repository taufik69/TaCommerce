import { configureStore } from "@reduxjs/toolkit";
import { getProductApi } from "../Api/ProductApi";
export const store = configureStore({
  reducer: {
    [getProductApi.reducerPath]: getProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductApi.middleware),
});
