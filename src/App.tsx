import AddToDO from "./component/AddToDO";
import Todos from "./component/Todos";
import Navbar from "./component/Navbar";
import "./App.css"

const App = () => {
  return (
    <main>
      <h1>Todo Application (React & TypeScript) </h1>
      <Navbar></Navbar>
      <AddToDO></AddToDO>
      <Todos></Todos>
    </main>
  );
};

export default App;
