import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./svg/Logo";

const navbarEnglish = (props) => {
  const { setTranslate, className } = props;

  return (
    <>
      <Navbar className={className}>
        <Link to="/">
          <div className="logoBox">
            <Logo />
          </div>
        </Link>
        <div className="navbarTextBox">
          <Link to="/product">Product</Link>
          <Link to="/instrument">Instrument</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <button
            className="language"
            style={{ paddingRight: "36px" }}
            onClick={() => setTranslate(true)}
          >
            Chinese
          </button>
          <button className="language">English</button>
        </div>
      </Navbar>
    </>
  );
};

const styledElement = styled(navbarEnglish)`
  background: #00283b;
  height: 70px;
  padding-left: 36px;
  padding-right: 36px;
  display: flex;
  justify-content: space-between;
  align-item: center;
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
`;

export default styledElement;
