import { useEffect, useState } from "react";
import { TheContext } from "./Store";
import PropTypes from "prop-types";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("mode") || "light";
  });

  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }
  return (
    <TheContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </TheContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeProvider;
