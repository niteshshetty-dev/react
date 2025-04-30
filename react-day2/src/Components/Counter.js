import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem("counter")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);
  function handleCounter(opr) {
    if (opr === "+") {
      setCount((ele) => ele + 1);
    } else if (opr === "-" && count > 0) {
      setCount((ele) => ele - 1);
    }
  }
  return (
    <div>
      <h2>Here it's your Counter</h2>
      <div style={{ fontSize: "1.8em" }}>{count}</div>
      <div className="button-container">
        <button
          className="btn btn-danger m-2 col-1"
          onClick={() => handleCounter("+")}
        >
          +
        </button>
        <button
          className="btn btn-success m-2 col-1"
          onClick={() => handleCounter("-")}
          disabled={count === 0}
        >
          -
        </button>
        <button
          className="btn btn-primary m-2 col-1"
          type="reset"
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
