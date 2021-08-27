import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Resources" component={Resources} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
