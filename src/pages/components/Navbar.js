import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./svg/Logo";

const LogoBox = styled.div`
  color: white;
  width: 8rem;
`;

const NavbarStyle = styled.div`
  background: #00283b;
  height: 70px;
  padding-left: 36px;
  padding-right: 36px;
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

const NavbarText = styled.div`
  display: flex;
  color: #fff;
  font-size: 18px;
  text-direction: none;
`;

function navbar() {
  return (
    <>
      <Navbar as={NavbarStyle} to="/">
        <Link>
          <LogoBox>
            <Logo />
          </LogoBox>
        </Link>
        <NavbarText>
          <Link to="/product">產品介紹</Link>
          <Link to="/instrument">機具設備</Link>
          <Link to="/about">關於我們</Link>
          <Link to="/contact">聯絡我們</Link>
          <span>中</span>
          <span>英</span>
        </NavbarText>
      </Navbar>
    </>
  );
}

export default navbar;
