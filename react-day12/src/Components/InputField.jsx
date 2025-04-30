import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useRef, useState } from "react";

export const UnControlled = forwardRef((props, ref) => {
  const input = useRef();
  useImperativeHandle(ref, () => ({
    getValue: () => input.current.value,
  }));
  return <input type="text" ref={input} />;
});

UnControlled.displayName = "InputField";

export function ControlledComponent() {
  function handleSubmit() {
    alert(`Input from controlled Component: ${input}`);
  }
  const [input, setInput] = useState();
  return (
    <>
      <form>
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        <button type="button" onClick={handleSubmit}>
          Click me
        </button>
      </form>
    </>
  );
}
