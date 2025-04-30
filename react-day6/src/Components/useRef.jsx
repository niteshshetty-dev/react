import { useEffect, useState, useRef } from "react";

function RefComponent() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const refName = useRef("");
  const prevCount = useRef(null);

  function handleName() {
    refName.current.focus();
    refName.current.style.border = "1px solid red";
    setName(refName.current.value);
  }

  useEffect(() => {
    prevCount.current = count;
    console.log(prevCount.current);
  });

  return (
    <div>
      <input type="text" placeholder="Enter your name" ref={refName}></input>
      <button type="button" onClick={handleName}>
        Click me
      </button>
      <div>{name}</div>
      <hr />
      <p>{count}</p>
      <p>{prevCount.current}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Counter
      </button>
    </div>
  );
}

export default RefComponent;
