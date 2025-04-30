import { useState, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(2);
  const theRef = useRef();
  function handle() {
    const ref = theRef.current.value;
  }
  return (
    <>
      <div className="card">
        <h1 data-testid="cnt">{count}</h1>
        <button
          data-testid="btn"
          onClick={() => setCount((count) => count + 1)}
        >
          Click me
        </button>
        <hr />
        <input ref={theRef} onKeyDown={handle}></input>

        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          data-testid="input"
        ></input>
      </div>
    </>
  );
}

export default Counter;
