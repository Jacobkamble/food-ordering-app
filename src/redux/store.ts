import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filterSlice";
import cartSlice from "./features/cartSlice";

const store = configureStore({
  reducer: {
    filter:filterSlice,
    cart:cartSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
