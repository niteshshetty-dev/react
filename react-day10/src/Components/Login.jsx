import { useSelector } from "react-redux";
import { loginAction } from "./Sice/loginSlice";
import { useDispatch } from "react-redux";

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
        <select
          onChange={(e) =>
            dispatch(loginAction({ index: e.target.options.selectedIndex }))
          }
        >
          {user.map((ele, i) => (
            <option key={i}>{ele}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LoginComponent;
