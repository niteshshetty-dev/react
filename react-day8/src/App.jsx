import "./App.css";
import { ContextProvider } from "./Components/ContextProvider";
import ProductComponent from "./Components/ProductComponent";

function App() {
  return (
    <>
      <div>
        <ContextProvider>
          <ProductComponent />
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
