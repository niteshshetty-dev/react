import "./App.css";
import ThemeProvider from "./Components/useReduce/ThemeProvider";
import ThemeSwitch from "./Components/useReduce/ThemeSwitch";

function App() {
  return (
    <>
      <ThemeProvider>
        <div>
          <ThemeSwitch />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
