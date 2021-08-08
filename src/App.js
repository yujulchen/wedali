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
import HomePageEnglish from "./pages/HomePageEnglish";
import Product from "./pages/Product";
import Instrument from "./pages/Instrument";
import InstrumentEnglish from "./pages/InstrumentEnglish";
import About from "./pages/About";
import AboutEnglish from "./pages/AboutEnglish";
import Contact from "./pages/Contact";
import ContactEnglish from "./pages/ContactEnglish";

const layout = layoutGenerator({
  mobile: 0,
  desktop: 992,
});

function App() {
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
          <Route exact path="/english" component={HomePageEnglish} />
          <Route path="/product" component={Product} />
          <Route path="/english/product" component={Product} />
          <Route path="/instrument" component={Instrument} />
          <Route path="/english/instrument" component={InstrumentEnglish} />
          <Route path="/about" component={About} />
          <Route path="/english/about" component={AboutEnglish} />
          <Route path="/contact" component={Contact} />
          <Route path="/english/contact" component={ContactEnglish} />
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
