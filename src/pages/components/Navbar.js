import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./svg/Logo";

const navbar = (props) => {
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
          <Link to="/product">產品介紹</Link>
          <Link to="/instrument">機具設備</Link>
          <Link to="/about">關於我們</Link>
          <Link to="/contact">聯絡我們</Link>
          <button className="language" style={{ paddingRight: "36px" }}>
            中
          </button>
          <button className="language" onClick={() => setTranslate(false)}>
            {/* <button className="language" onClick={() => "click"}> */}英
          </button>
        </div>
      </Navbar>
    </>
  );
};

const styledElement = styled(navbar)`
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
