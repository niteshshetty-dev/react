import { useSelector } from "react-redux";
import PurchaseComponent from "./PurChaseComponet";
import { useDispatch } from "react-redux";
import { productAction } from "./Sice/productSlice";

function ProductComponent() {
  const product = useSelector((state) => state.pr.product);
  const userDet = useSelector((state) => state.lr.userDet);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="container">
        <div>
          <h3>Products {userDet} </h3>
        </div>
        <hr />
        <div>
          <select
            onChange={(e) =>
              dispatch(productAction({ index: e.target.options.selectedIndex }))
            }
          >
            {product.map((item) => (
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
