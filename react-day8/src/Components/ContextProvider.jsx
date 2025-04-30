import { useReducer } from "react";
import { context } from "./Store";
import PropTypes from "prop-types";

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

function reducer(state, action) {
  if (action.type === "handle_cart") {
    console.log({
      ...state,
      cart: [
        ...state.cart,
        state.product.filter((item, i) => action.index === i)[0],
      ],
      total:
        state.total +
        state.product.filter((item, i) => action.index === i)[0].pPrice,
    });
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

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <context.Provider value={{ state, dispatch }}>
        {children}
      </context.Provider>
    </div>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
