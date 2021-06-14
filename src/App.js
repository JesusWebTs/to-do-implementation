import "./App.css";
import { Header } from "./components";
import { TaskListPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TaskListPage />
    </div>
  );
}

export default App;
