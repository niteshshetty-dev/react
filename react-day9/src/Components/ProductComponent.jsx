import PurchaseComponent from "./PurChaseComponet";
import { useDispatch, useSelector } from "react-redux";

function ProductComponent() {
  const Product = useSelector((state) => state.pr.product);
  const UserDet = useSelector((state) => state.lr.userDet);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="container">
        <div>
          <h3>Products {UserDet}</h3>
        </div>
        <hr />
        <div>
          <select
            onChange={(e) =>
              dispatch({
                type: "handle_cart",
                index: e.target.options.selectedIndex,
              })
            }
          >
            {Product.map((item) => (
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
