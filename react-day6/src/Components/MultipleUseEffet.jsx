import { useEffect } from "react";
import { useState } from "react";

function MultipleUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (display) console.log("Hello,", display);
  }, [display]);

  useEffect(() => {
    if (count > 0) console.log("Counter is clicked!", count);
  }, [count]);

  function handleName() {
    setDisplay(name);
    setName("");
  }

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>{count}</div>
        <div>{display}</div>
        <div>
          <button
            type="button"
            onClick={() => setCount((prevState) => prevState + 1)}
          >
            Counter
          </button>
          <button type="button" onClick={handleName}>
            Click Me
          </button>
        </div>
      </div>
    </>
  );
}

export default MultipleUseEffect;
