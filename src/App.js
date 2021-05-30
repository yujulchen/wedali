import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Navbar from "./pages/components/Navbar";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Instrument from "./pages/Instrument";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product" component={Product} />
        <Route path="/instrument" component={Instrument} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
