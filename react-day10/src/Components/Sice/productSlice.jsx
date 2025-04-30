import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [
    { id: 1, pName: "Orange", pPrice: 40 },
    { id: 2, pName: "Apple", pPrice: 70 },
    { id: 3, pName: "Grapes", pPrice: 36 },
    { id: 4, pName: "Banana", pPrice: 43 },
  ],
  cart: [],
  total: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productAction: (state, action) => {
      state.cart = [
        ...state.cart,
        state.product.filter((item, i) => action.payload.index === i)[0],
      ];

      state.total =
        state.total +
        state.product.filter((item, i) => action.payload.index === i)[0].pPrice;
      return state;
    },
  },
});

export const { productAction } = productSlice.actions;
export default productSlice.reducer;
