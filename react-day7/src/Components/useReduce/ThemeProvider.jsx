import { useEffect, useReducer } from "react";
import { ThemeContext } from "./Store";
import PropTypes from "prop-types";

function themeReducer(state, action) {
  switch (action.type) {
    case "Theme_Switch":
      return state === "light" ? "Dark" : "light";
    default:
      return state;
  }
}

function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  function toggleTheme() {
    dispatch({ type: "Theme_Switch" });
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeProvider;
