import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: ["Admin", "Manger", "Employee"], userDet: "" };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userDet = state.user.filter(
        (ele, i) => i === action.payload.index
      )[0];
      return state;
    },
  },
});

export const { loginAction } = loginSlice.actions;
export default loginSlice.reducer;
