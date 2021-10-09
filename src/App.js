import React, { useEffect, useState } from "react";
import { layoutGenerator } from "react-break";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  const [brkPnt, setBrkPnt] = useState("desktop");
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
      <Switch>
        {brkPnt === "desktop" ? (
          isLoading ? (
            <Loading isLoading={isLoading} />
          ) : (
            <OnDesktop>
              {translate && (
                <>
                  <Navbar setTranslate={setTranslate} />
                  <Route exact path="/" component={HomePage} />
                  <Route path="/product" component={Product} />
                  <Route path="/instrument" component={Instrument} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                </>
              )}
              {!translate && (
                <>
                  <NavbarEnglish setTranslate={setTranslate} />
                  <Route exact path="/english" component={HomePageEnglish} />
                  <Route path="/english/product" component={Product} />
                  <Route
                    path="/english/instrument"
                    component={InstrumentEnglish}
                  />
                  <Route path="/english/about" component={AboutEnglish} />
                  <Route path="/english/contact" component={ContactEnglish} />
                </>
              )}
              <Footer />
            </OnDesktop>
          )
        ) : isLoading ? (
          <LoadingM isLoading={isLoading} />
        ) : (
          <OnMobile>
            {translate && (
              <>
                <NavbarMobile setTranslate={setTranslate} />
                <Route exact path="/" component={HomePageMobile} />
                <Route path="/product" component={ProductMobile} />
                <Route path="/instrument" component={InstrumentMobile} />
                <Route path="/about" component={AboutMobile} />
                <Route path="/contact" component={ContactMobile} />
              </>
            )}
            {!translate && (
              <>
                <NavbarMobileEnglish setTranslate={setTranslate} />
                <Route
                  exact
                  path="/english"
                  component={HomePageMobileEnglish}
                />
                <Route
                  path="/english/product"
                  component={ProductMobileEnglish}
                />
                <Route
                  path="/english/instrument"
                  component={InstrumentMobileEnglish}
                />
                <Route path="/english/about" component={AboutMobileEnglish} />
                <Route
                  path="/english/contact"
                  component={ContactMobileEnglish}
                />
              </>
            )}
            <FooterMobile />
          </OnMobile>
        )}
      </Switch>
    </Router>
  );
}

export default App;
