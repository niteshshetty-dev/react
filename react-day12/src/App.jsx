import { useRef } from "react";

import "./App.css";
import { UnControlled, ControlledComponent } from "./Components/InputField";

function App() {
  const inputRef = useRef();
  function handleSubmit() {
    alert(`Input from Uncontrolled Components: ${inputRef.current.getValue()}`);
  }

  return (
    <>
      <div>
        <UnControlled ref={inputRef} />
        <button type="button" onClick={handleSubmit}>
          Click me
        </button>
      </div>
      <div>
        <ControlledComponent />
      </div>
    </>
  );
}

export default App;
