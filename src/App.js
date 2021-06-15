import "./App.css";
import { Route } from "wouter";
import { Header } from "./components";
import { TaskListPage, FolderListPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/folder/:id">
        <TaskListPage />
      </Route>
      <Route path="/">
        <FolderListPage />
      </Route>
    </div>
  );
}

export default App;
