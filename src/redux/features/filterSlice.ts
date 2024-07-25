import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchFilter(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { searchFilter } = filterSlice.actions;

export default filterSlice.reducer;
