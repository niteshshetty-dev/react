import { useContext } from "react";
import { TheContext } from "./Store";

function ThemSwitch() {
  const { theme, toggleTheme } = useContext(TheContext);
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => toggleTheme()}
          style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
          }}
        >
          Theme Switch
        </button>
      </div>
    </div>
  );
}

export default ThemSwitch;
