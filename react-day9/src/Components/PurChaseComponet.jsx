import { useSelector } from "react-redux";
import TotalComponent from "./TotalComponent";

function PurchaseComponent() {
  const cartItem = useSelector((state) => state.pr.cart);
  return (
    <div className="main">
      <div className="container">
        <div>
          <h3>Purchase</h3>
        </div>
        <hr />
        <ul>
          {cartItem.map((item, i) => (
            <li key={i}>
              {item.pName} {item.pPrice}$
            </li>
          ))}
        </ul>
      </div>
      <TotalComponent />
    </div>
  );
}

export default PurchaseComponent;
