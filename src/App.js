import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components";
import { TaskListPage, FolderListPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/folder/:id">
            <TaskListPage />
          </Route>
          <Route path="/">
            <FolderListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
