import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find(
        (itm: any) => (itm.id === payload.id)
      );


      if (isExisted) {
        return;
      } else {
        state.cartItems.push(payload);
      }
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
