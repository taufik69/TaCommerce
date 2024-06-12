import { configureStore } from "@reduxjs/toolkit";
import { getProductApi } from "../Api/ProductApi";
import AddtoCartreducer from "../AllSlice/cartSlice.js";
import { getTotal } from "../AllSlice/cartSlice.js";
export const store = configureStore({
  reducer: {
    cart: AddtoCartreducer,
    [getProductApi.reducerPath]: getProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductApi.middleware),
});

store.dispatch(getTotal());
