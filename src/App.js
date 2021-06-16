import "./App.css";
import { Route } from "wouter";
import { Header } from "./components";
import { TaskListPage, FolderListPage } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Route path="/folder/:id">
          <TaskListPage />
        </Route>
        <Route path="/">
          <FolderListPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
