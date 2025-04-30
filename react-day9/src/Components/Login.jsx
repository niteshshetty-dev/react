import { useDispatch, useSelector } from "react-redux";
import { validateUser } from "./action";

function LoginComponent() {
  const user = useSelector((state) => state.lr.user);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <div>
          <h3>User</h3>
        </div>
        <hr />
        <select onChange={(e) => dispatch(validateUser(e))}>
          {user.map((ele, i) => (
            <option key={i}>{ele}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LoginComponent;
