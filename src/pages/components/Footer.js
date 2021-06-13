import styled from "styled-components";
import BackToTop from "./svg/BackToTop";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="footerText">維大利©copyright 2021</div>
      <div className="backToTop" onClick={() => window.scrollTo(0, 0)}>
        <BackToTop />
      </div>
    </div>
  );
};

const styledElement = styled(Footer)`
  background: #00283b;
  width: 100vw;
  height: 70px;
  color: #fff;
  position: fixed;
  bottom: 0;
  text-align: center;
  .footerText {
    line-height: 70px;
  }
  .backToTop {
    width: 80px;
    height: 80px;
    background-color: #ffa000;
    border-radius: 50%;
    position: fixed;
    bottom: 115px;
    right: 120px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default styledElement;
