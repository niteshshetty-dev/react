import { useEffect } from "react";
import { useState, useRef } from "react";

function SkipRender() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }

    console.log(`Hi ${display}, welcome!`);
    const timer = setInterval(() => {
      console.log("Here in Timer", display);
    }, 1000);

    return () => {
      console.log("Unmounting");
      clearInterval(timer);
    };
  }, [display]);

  function handleName() {
    setDisplay(name);
    setName("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button type="button" onClick={handleName}>
        Click me
      </button>
      <p>{display}</p>
    </div>
  );
}

export default SkipRender;
