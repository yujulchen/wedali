import React, { useState } from "react";
import { layoutGenerator } from "react-break";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Navbar from "./pages/components/Navbar";
import NavbarEnglish from "./pages/components/NavbarEnglish";
import NavbarMobile from "./pages/components/NavbarMobile";
import NavbarEnglishMobile from "./pages/components/NavbarEnglishMobile";
import Footer from "./pages/components/Footer";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Instrument from "./pages/Instrument";
import About from "./pages/About";
import Contact from "./pages/Contact";

const layout = layoutGenerator({
  mobile: 0,
  desktop: 992,
});

function App(props) {
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");
  const [translate, setTranslate] = useState(true);

  return (
    <Router>
      <OnDesktop>
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
      </OnDesktop>
      <OnMobile>
        {translate ? (
          <NavbarMobile setTranslate={setTranslate} />
        ) : (
          <NavbarEnglishMobile setTranslate={setTranslate} />
        )}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product" component={Product} />
          <Route path="/instrument" component={Instrument} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </OnMobile>
    </Router>
  );
}

export default App;
