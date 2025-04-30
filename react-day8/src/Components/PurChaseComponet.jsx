import { useContext } from "react";
import TotalComponent from "./TotalComponent";
import { context } from "./Store";

function PurchaseComponent() {
  const { state } = useContext(context);

  return (
    <div className="main">
      <div className="container">
        <div>
          <h3>Purchase</h3>
        </div>
        <hr />
        <ul>
          {state.cart.map((ele, i) => (
            <li key={i}>
              {ele.pName} {ele.pPrice}$
            </li>
          ))}
        </ul>
      </div>
      <TotalComponent />
    </div>
  );
}

export default PurchaseComponent;
