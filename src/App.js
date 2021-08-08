import React, { useState } from "react";
import { layoutGenerator } from "react-break";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Navbar from "./pages/components/Navbar";
import NavbarEnglish from "./pages/components/NavbarEnglish";
import NavbarMobile from "./pages/components/NavbarMobile";
import NavbarMobileEnglish from "./pages/components/NavbarMobileEnglish";
import Footer from "./pages/components/Footer";
import FooterMobile from "./pages/components/FooterMobile";
import HomePage from "./pages/HomePage";
import HomePageEnglish from "./pages/HomePageEnglish";
import HomePageMobile from "./pages/HomePageMobile";
import Product from "./pages/Product";
import ProductMobile from "./pages/ProductMobile";
import Instrument from "./pages/Instrument";
import InstrumentEnglish from "./pages/InstrumentEnglish";
import InstrumentMobile from "./pages/InstrumentMobile";
import About from "./pages/About";
import AboutEnglish from "./pages/AboutEnglish";
import AboutMobile from "./pages/AboutMobile";
import Contact from "./pages/Contact";
import ContactEnglish from "./pages/ContactEnglish";
import ContactMobile from "./pages/ContactMobile";

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
          <NavbarMobileEnglish setTranslate={setTranslate} />
        )}
        <Switch>
          <Route exact path="/mobile" component={HomePageMobile} />
          <Route exact path="/mobile/english" component={HomePageMobile} />
          <Route path="/mobile/product" component={ProductMobile} />
          <Route path="/mobile/english/product" component={ProductMobile} />
          <Route path="/mobile/instrument" component={InstrumentMobile} />
          <Route
            path="/mobile/english/instrument"
            component={InstrumentMobile}
          />
          <Route path="/mobile/english/product" component={InstrumentMobile} />
          <Route path="/mobile/about" component={AboutMobile} />
          <Route path="/mobile/english/about" component={AboutMobile} />
          <Route path="/mobile/contact" component={ContactMobile} />
          <Route path="/mobile/english/contact" component={ContactMobile} />
        </Switch>
        <FooterMobile />
      </OnMobile>
    </Router>
  );
}

export default App;
