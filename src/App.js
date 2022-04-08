import logo from "./logo.svg";
import "./App.css";
import RouterList from "./router/RouterList";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterList />
    </div>
  );
}

export default App;
