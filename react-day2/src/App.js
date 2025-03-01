import "./App.css";
import Counter from "./Components/Counter";
import Greeting from "./Components/Greeting";
import ToDoComponent from "./Components/ToDoList";

function App() {
  const name = { name: "Nithesh", age: 15 };
  return (
    <div className="App">
      <Greeting {...name} />
      <hr />
      <Counter />
      <hr />
      <ToDoComponent />
    </div>
  );
}

export default App;
