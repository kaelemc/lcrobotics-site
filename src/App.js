import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer"

// page imports
import Home from "./components/pages/home"
import About from "./components/pages/about"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
