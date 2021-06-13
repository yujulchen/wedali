import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Navbar from "./pages/components/Navbar";
import NavbarEnglish from "./pages/components/NavbarEnglish";
import Footer from "./pages/components/Footer";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Instrument from "./pages/Instrument";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App(props) {
  const [translate, setTranslate] = useState(true);
  return (
    <Router>
      {translate ? (
        <Navbar setTranslate={setTranslate} />
      ) : (
        <NavbarEnglish setTranslate={setTranslate} />
      )}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product" component={Product} />
        <Route path="/instrument" component={Instrument} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
