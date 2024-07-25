import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filterSlice";

const store = configureStore({
  reducer: {
    filter:filterSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
