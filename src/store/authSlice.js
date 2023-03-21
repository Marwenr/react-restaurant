import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    signIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { signIn } = authSlice.actions;
export default authSlice.reducer;
