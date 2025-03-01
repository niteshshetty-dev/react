import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
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

const LoginData = { user: ["Admin", "Manger", "Employee"], userDet: "" };

function LoginReducer(state = LoginData, action) {
  if (action.type === "Login_data") {
    return {
      ...state,
      userDet: state.user.filter((ele, i) => i === action.index)[0],
    };
  }
  return state;
}

function Productreducer(state = initialState, action) {
  if (action.type === "handle_cart") {
    return {
      ...state,
      cart: [
        ...state.cart,
        state.product.filter((item, i) => action.index === i)[0],
      ],
      total:
        state.total +
        state.product.filter((item, i) => action.index === i)[0].pPrice,
    };
  }

  return state;
}

const reducer = combineReducers({
  pr: Productreducer,
  lr: LoginReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
