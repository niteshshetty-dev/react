import { useState } from "react";
import "./_Color-Box.scss";
import Button from "./Button";

function ColorBox() {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="row">
        <div
          style={{
            backgroundColor: toggle ? "red" : "blue",
            transition: "0.3s easy-in-out",
          }}
          className="red Container col-4"
        ></div>
        <div
          style={{
            backgroundColor: toggle ? "blue" : "green",
            transition: "0.3s easy-in-out",
          }}
          className="blue Container col-4"
        ></div>
        <div
          style={{
            backgroundColor: toggle ? "green" : "red",
            transition: "0.3s easy-in-out",
          }}
          className="green Container col-4"
        ></div>
        <Button onClick={handleClick} />
      </div>
    </>
  );
}

export default ColorBox;
