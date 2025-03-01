import { Provider } from "react-redux";
import "./App.css";

import ProductComponent from "./Components/ProductComponent";
import { store } from "./Components/Store";
import LoginComponent from "./Components/Login";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <LoginComponent />
          <ProductComponent />
        </Provider>
      </div>
    </>
  );
}

export default App;
