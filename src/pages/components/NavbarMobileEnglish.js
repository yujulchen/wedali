import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter, Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Logo from "./svg/Logo";
import Phone from "./svg/Phone";
import Fax from "./svg/Fax";
import Mail from "./svg/Mail";

function GetUrl() {
  const location = useLocation();
  return location.pathname.includes("/mobile/english");
}

const NavbarMobileEnglish = (props) => {
  const { setTranslate, className } = props;
  const [show, setShow] = useState(false);
  let url = GetUrl();
  setTranslate(!url);

  const handleTrans = () => {
    setTranslate(true);
    props.history.push("/mobile");
  };

  return (
    <div className={className}>
      <Navbar
        className="navbar"
        variant="dark"
        fixed
        expand="lg"
        expanded={show}
      >
        <Navbar.Brand className="logoBox">
          <Link to="/mobile">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarShow"
          className="navToggle"
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
        />
        <Navbar.Collapse
          id="navbarShow"
          className="navbarCollapse"
          style={{ width: "100vw" }}
        >
          <Nav>
            <Link to="/mobile/english/product" onClick={() => setShow(false)}>
              Product
            </Link>
            <Link
              to="/mobile/english/instrument"
              onClick={() => setShow(false)}
            >
              Instrument
            </Link>
            <Link to="/mobile/english/about" onClick={() => setShow(false)}>
              About
            </Link>
            <Link to="/mobile/english/contact" onClick={() => setShow(false)}>
              Contact
            </Link>
          </Nav>
          <Nav>
            <Nav.Link className="language" onClick={handleTrans}>
              Chinese
            </Nav.Link>
            <Nav.Link className="language" disabled>
              English
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="contact">
        <div className="iconBox">
          <a href="tel:+886-2-26776184">
            <Phone style={{ width: "100%" }} />
            <div className="iconText">電話:02-26776184</div>
          </a>
        </div>
        <div className="iconBox">
          <a href="fax:+886-2-26776164">
            <Fax style={{ width: "100%" }} />
            <div className="iconText">傳真:02-26776164</div>
          </a>
        </div>
        <div className="iconBox">
          <a href="mailto:q121135.q60@gmail.com">
            <Mail style={{ width: "100%" }} />
            <div className="iconText">EMAIL:q121135.q60@gmail.com</div>
          </a>
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(NavbarMobileEnglish)`
  .navbar {
    position: fixed;
    background: #00283b;
    width: 100%;
    height: 54px;
    z-index: 9999;
    .logoBox {
      margin-left: 8px;
      color: white;
      width: 4rem;
    }
    .navToggle {
      margin-right: 8px;
      border: none;
    }
    .navbarCollapse {
      padding: 2rem 3rem 1rem 3rem;
      background: #00283b;
    }
    a {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      padding-bottom: 2rem;
    }
    .language {
      font-size: 18px;
      color: #fff;
      border: none;
      background-color: inherit;
      padding-bottom: 2rem;
    }
  }
  .contact {
    width: 48px;
    height: 168px;
    position: fixed;
    top: 64px;
    left: 8px;
    z-index: 20;
    .iconBox {
      width: 48px;
      height: 48px;
      margin-bottom: 12px;
      position: relative;
      z-index: 10;
      &:hover {
        cursor: pointer;
        opacity: 0.9;
        .iconText {
          visibility: visible;
          opacity: 1;
        }
      }
      .iconText {
        visibility: hidden;
        padding-left: 42px;
        width: 600%;
        height: 48px;
        color: #fff;
        background-color: #00283b;
        font-size: 14px;
        line-height: 48px;
        text-align: center;
        position: absolute;
        top: 18px;
        left: 0px;
        z-index: -2;
        border-radius: 10px;
        opacity: 0;
        transition: all 0.5s ease-in-out 0.5s;
        -ms-transition:: all 0.5s ease-in-out 0.5s;
        -moz-transition: all 0.5s ease-in-out 0.5s;
        -webkit-transition: all 0.5s ease-in-out 0.5s;
        -o-transition:all 0.5s ease-in-out 0.5s;
      }
    }
  }
`;

export default withRouter(styledElement);
