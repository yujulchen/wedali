import styled from "styled-components";
import BackToTop from "./svg/BackToTop";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="footerText">維大利©copyright 2021</div>
      <div className="backToTop" onClick={() => window.scrollTo(0, 0)}>
        <BackToTop style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

const styledElement = styled(Footer)`
  background: #00283b;
  width: 100vw;
  height: 54px;
  color: #fff;
  position: relative;
  bottom: 0;
  text-align: center;
  z-index: 100;
  .footerText {
    line-height: 54px;
  }
  .backToTop {
    width: 48px;
    height: 48px;
    background-color: #ffa000;
    border-radius: 50%;
    position: fixed;
    bottom: 64px;
    right: 8px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default styledElement;
