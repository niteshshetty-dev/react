import "./App.css";
import DisplayComponent from "./Components/DisplayComponent";
import MultipleUseEffect from "./Components/MultipleUseEffet";
import SkipRender from "./Components/SkipRender";
import RefComponent from "./Components/useRef";

function App() {
  return (
    <>
      <div>
        <DisplayComponent />
        <MultipleUseEffect />
        <SkipRender />
        <RefComponent />
      </div>
    </>
  );
}

export default App;
