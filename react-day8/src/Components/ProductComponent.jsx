import PurchaseComponent from "./PurChaseComponet";
import { useContext } from "react";
import { context } from "./Store";

function ProductComponent() {
  const { state, dispatch } = useContext(context);

  function handleCart(e) {
    const index = e.target.options.selectedIndex;
    dispatch({ type: "handle_cart", index });
  }
  return (
    <div className="main">
      <div className="container">
        <div>
          <h3>Products</h3>
        </div>
        <hr />
        <div>
          <select onChange={handleCart}>
            {state.product.map((item) => (
              <option key={item.id}>
                {item.pName} {item.pPrice}$
              </option>
            ))}
          </select>
        </div>
      </div>
      <PurchaseComponent />
    </div>
  );
}

export default ProductComponent;
