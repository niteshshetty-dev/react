import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Sice/productSlice";
import loginSlice from "./Sice/loginSlice";

export const store = configureStore({
  reducer: {
    pr: productSlice,
    lr: loginSlice,
  },
});
