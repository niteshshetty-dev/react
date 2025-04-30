import { useState } from "react";
import "./App.css";
import IncreamentButton from "./Components/IncreamentButton";
import DecreamentButton from "./Components/DecreamentButton";
import ResetButton from "./Components/ResetButton";

function App() {
  const [count, setCount] = useState(0);
  const [stepValue, setStepValue] = useState("");
  const [action, setAction] = useState(1);
  const regex = /^-?[0-9]\d*$/;

  function handleStepValue(e) {
    const value = e.target.value.trim();
    setStepValue(value);
  }

  function saveStepValue() {
    if (stepValue === "" || isNaN(stepValue) || stepValue <= 0) {
      setAction(1);
      setStepValue("");
    } else {
      setAction(parseFloat(stepValue));
      setStepValue("");
    }
  }

  function handleReset() {
    setCount(0);
    setAction(1);
    setStepValue("");
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="step value"
          value={stepValue}
          onChange={handleStepValue}
        ></input>
        <button
          type="btn"
          className="btn btn-primary"
          onClick={saveStepValue}
          disabled={!regex.test(stepValue) || stepValue <= 0}
        >
          <i className="fa fa-arrow-down"></i>
        </button>
      </div>
      <div>
        {parseInt(stepValue) <= 0 && (
          <p style={{ color: "red", fontWeight: "600" }}>
            ***Enter valid input***
          </p>
        )}
      </div>
      <div>{count}</div>
      <div className="row">
        <IncreamentButton
          onUpdateClick={() => setCount((prevState) => prevState + action)}
          disabled={parseInt(stepValue) <= 0 || isNaN(stepValue)}
        />
        <DecreamentButton
          onUpdateClick={() => setCount((prevState) => prevState - action)}
          disabled={count === 0}
        />
        <ResetButton onUpdateClick={handleReset} disabled={count === 0} />
      </div>
    </>
  );
}

export default App;
