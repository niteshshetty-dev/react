import { useContext } from "react";
import { ThemeContext } from "./Store";

function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);
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

export default ThemeSwitch;
