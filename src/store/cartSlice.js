import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    order: (state, action) => {
      state.items.push(action.payload);
    },
    sum: (state, action) => {
      state.items.find(el => el.name === action.payload.item.name).quantity = action.payload.quantity
    }
  },
});

export const { order, sum } = cartSlice.actions;
export default cartSlice.reducer;
