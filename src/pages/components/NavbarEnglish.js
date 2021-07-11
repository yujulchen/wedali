import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "./svg/Logo";
import Phone from "./svg/Phone";
import Fax from "./svg/Fax";
import Mail from "./svg/Mail";

const navbar = (props) => {
  const { setTranslate, className } = props;

  return (
    <div className={className}>
      <Navbar className="navbar">
        <Link to="/">
          <div className="logoBox">
            <Logo />
          </div>
        </Link>
        <div className="navbarTextBox">
          <Link to="/product">Product</Link>
          <Link to="/instrument">Instrument</Link>
          <Link to="/about">About&nbspUs</Link>
          <Link to="/contact">Contact&nbspUs</Link>
          <button
            className="language"
            style={{ paddingRight: "36px" }}
            onClick={() => setTranslate(true)}
          >
            Chinese
          </button>
          <span className="language" style={{ cursor: "no-drop" }}>
            English
          </span>
        </div>
      </Navbar>
      <div className="contact">
        <div className="iconBox">
          <a href="tel:+886-2-26776184">
            <Phone />
            <div className="iconText">電話:02-26776184</div>
          </a>
        </div>
        <div className="iconBox">
          <a href="fax:+886-2-26776164">
            <Fax />
            <div className="iconText">傳真:02-26776164</div>
          </a>
        </div>
        <div className="iconBox">
          <a href="mailto:q121135.q60@gmail.com">
            <Mail />
            <div className="iconText">EMAIL:q121135.q60@gmail.com</div>
          </a>
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(navbar)`
  .navbar {
    background: #00283b;
    position: fixed;
    width: 100%;
    height: 70px;
    padding-left: 36px;
    padding-right: 36px;
    display: flex;
    justify-content: space-between;
    align-item: center;
    z-index: 9999;
    .logoBox {
      color: white;
      width: 8rem;
    }
    .navbarTextBox {
      display: flex;
      font-size: 18px;
      a {
        color: #fff;
        padding-right: 3rem;
        text-decoration: none;
      }
      .language {
        color: #fff;
        border: none;
        background-color: inherit;
      }
    }
  }
  .contact {
    width: 84px;
    height: 268px;
    position: fixed;
    top: 8.2%;
    left: 2.9vw;
    .iconBox {
      width: 84px;
      height: 84px;
      margin-bottom: 8px;
      position: relative;
      z-index: 200;
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
        width: 400%;
        height: 84px;
        color: #fff;
        background-color: #00283b;
        font-size: 18px;
        line-height: 84px;
        text-align: center;
        position: absolute;
        top: 0px;
        left: 42px;
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

export default styledElement;