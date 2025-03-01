import { useEffect } from "react";
import { useState } from "react";

function DisplayComponent() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (display) console.log(`Hi ${display}, welcome!`);
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

export default DisplayComponent;
