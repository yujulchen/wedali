import React, { useEffect, useState } from "react";
import { layoutGenerator } from "react-break";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { throttle } from "lodash";

// Pages
import Navbar from "./pages/components/Navbar";
import NavbarEnglish from "./pages/components/NavbarEnglish";
import NavbarMobile from "./pages/components/NavbarMobile";
import NavbarMobileEnglish from "./pages/components/NavbarMobileEnglish";
import Loading from "./pages/components/Loading";
import LoadingM from "./pages/components/LoadingM";
import Footer from "./pages/components/Footer";
import FooterMobile from "./pages/components/FooterMobile";
import HomePage from "./pages/HomePage";
import HomePageEnglish from "./pages/HomePageEnglish";
import HomePageMobile from "./pages/HomePageMobile";
import HomePageMobileEnglish from "./pages/HomePageMobileEnglish";
import Product from "./pages/Product";
import ProductMobile from "./pages/ProductMobile";
import ProductMobileEnglish from "./pages/ProductMobileEnglish";
import Instrument from "./pages/Instrument";
import InstrumentEnglish from "./pages/InstrumentEnglish";
import InstrumentMobile from "./pages/InstrumentMobile";
import InstrumentMobileEnglish from "./pages/InstrumentMobileEnglish";
import About from "./pages/About";
import AboutEnglish from "./pages/AboutEnglish";
import AboutMobile from "./pages/AboutMobile";
import AboutMobileEnglish from "./pages/AboutMobileEnglish";
import Contact from "./pages/Contact";
import ContactEnglish from "./pages/ContactEnglish";
import ContactMobile from "./pages/ContactMobile";
import ContactMobileEnglish from "./pages/ContactMobileEnglish";

const layout = layoutGenerator({
  mobile: 0,
  desktop: 992,
});

function App() {
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");
  const [brkPnt, setBrkPnt] = useState("");
  const [translate, setTranslate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getDeviceConfig = (width) => {
    if (width >= 992) {
      return "desktop";
    } else {
      return "mobile";
    }
  };

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, [brkPnt]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <OnDesktop>
        {isLoading ? (
          <Loading isLoading={isLoading} />
        ) : (
          <>
            {brkPnt === "desktop" && <Redirect to="/" />}
            <Navbar setTranslate={setTranslate} />
            {!translate && <NavbarEnglish setTranslate={setTranslate} />}
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
          </>
        )}
      </OnDesktop>
      <OnMobile>
        {isLoading ? (
          <LoadingM isLoading={isLoading} />
        ) : (
          <>
            {brkPnt === "mobile" && <Redirect to="/mobile" />}
            <NavbarMobile setTranslate={setTranslate} />
            {!translate && <NavbarMobileEnglish setTranslate={setTranslate} />}
            <Switch>
              <Route exact path="/mobile" component={HomePageMobile} />
              <Route
                exact
                path="/mobile/english"
                component={HomePageMobileEnglish}
              />
              <Route path="/mobile/product" component={ProductMobile} />
              <Route
                path="/mobile/english/product"
                component={ProductMobileEnglish}
              />
              <Route path="/mobile/instrument" component={InstrumentMobile} />
              <Route
                path="/mobile/english/instrument"
                component={InstrumentMobileEnglish}
              />
              <Route path="/mobile/about" component={AboutMobile} />
              <Route
                path="/mobile/english/about"
                component={AboutMobileEnglish}
              />
              <Route path="/mobile/contact" component={ContactMobile} />
              <Route
                path="/mobile/english/contact"
                component={ContactMobileEnglish}
              />
            </Switch>
            <FooterMobile />
          </>
        )}
      </OnMobile>
    </Router>
  );
}

export default App;
