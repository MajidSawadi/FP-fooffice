import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </Router>
      {/* home */}
      {/* search*/}
    </div>
  );
}

export default App;
