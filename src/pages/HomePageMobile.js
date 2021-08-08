import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { rotateIn, fadeIn, slideInUp } from "react-animations";
import Gear from "./components/svg/Gear";

const rotateInAnimation = keyframes`${rotateIn}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;

const HomePageMobile = (props) => {
  const { className } = props;
  const [showTop, setShowTop] = useState(false);
  const [showTopText, setShowTopText] = useState("");
  const [showCenter, setShowCenter] = useState(false);
  const [showCenterText, setShowCenterText] = useState("");
  const [showBottom, setShowBottom] = useState(false);
  const [showBottomText, setShowBottomText] = useState("");
  const [clickItem, setClickItem] = useState("");
  const topItem = (
    <div className="introductionBox">
      <div className="introductionText">
        <div className="introductionSpan">
          將塑膠粒加入射出機內，塑膠粒加熱後加壓射出至模具內，待冷卻後開模，即可得到客戶所需要的成品。
        </div>
      </div>
    </div>
  );
  const centerItem = (
    <div className="introductionBox">
      <div className="introductionText">
        <div className="introductionSpan">
          我們加工部門有製造精密模具所需的CNC數控銑床、放電加工機、銑床磨床，確定各零件的公差符合規定，然後組裝試模。
        </div>
      </div>
    </div>
  );
  const bottomItem = (
    <div className="introductionBox">
      <div className="introductionText">
        <div className="introductionSpan">
          我們的設計部門擁有多年的生產設計經歷，對於各類產品、模具結構乃至於材料的特性都有很深入的了解，設計部能夠提供客戶最專業的模具設計建議，幫客戶節省開模成本，提高生產效率及減少模具開發風險。
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (clickItem === "top") setShowTop(true);
    if (clickItem !== "top") setShowTop(false);
    if (clickItem === "center") setShowCenter(true);
    if (clickItem !== "center") setShowCenter(false);
    if (clickItem === "bottom") setShowBottom(true);
    if (clickItem !== "bottom") setShowBottom(false);
  }, [clickItem]);

  useEffect(() => {
    showTop ? setShowTopText(topItem) : setShowTopText("");
    showCenter ? setShowCenterText(centerItem) : setShowCenterText("");
    showBottom ? setShowBottomText(bottomItem) : setShowBottomText("");
  }, [showTop, showCenter, showBottom]);

  return (
    <div className={className}>
      <div
        className="gearBox mt"
        style={{ marginBottom: showTop ? "15vh" : "0" }}
      >
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("top")} />
          <div className="gearText" onClick={() => setClickItem("top")}>
            <div className="textAlign">
              <p className="gearTitle">模具設計</p>
              <p>MOLD DESIGN</p>
            </div>
          </div>
          {showTopText}
        </div>
      </div>
      <div
        className="gearBox"
        style={{ marginBottom: showCenter ? "18vh" : "0" }}
      >
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("center")} />
          <div className="gearText" onClick={() => setClickItem("center")}>
            <div className="textAlign">
              <p className="gearTitle">射出成型</p>
              <p>INJECTION MOLDING</p>
            </div>
          </div>
          {showCenterText}
        </div>
      </div>
      <div
        className="gearBox"
        style={{ marginBottom: showBottom ? "240px" : "56px" }}
      >
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("bottom")} />
          <div className="gearText" onClick={() => setClickItem("bottom")}>
            <div className="textAlign">
              <p className="gearTitle">模具設計</p>
              <p>MOLD DESIGN</p>
            </div>
          </div>
          {showBottomText}
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(HomePageMobile)`
  padding: 56px;
  overflow: hidden;
  .gearBox {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 240px;
    .gear {
      position: relative;
      width: 100%;
      height: 100%;
      .iconTop {
        width: 100%;
        height: 100%;
        &:hover {
          cursor: pointer;
          animation: ${rotateInAnimation} 1s;
        }
      }
      .gearText {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 33%;
        &:hover {
          cursor: pointer;
          animation: ${fadeInAnimation} 1s;
        }
        .textAlign {
          color: #fff;
          p {
            text-align: center;
            font-size: 12px;
          }
          .gearTitle {
            font-size: 24px;
            font-weight: 500;
          }
        }
      }
      .introductionBox {
        position: relative;
        width: 80%;
        margin: -33% auto 4rem auto;
        z-index: -20;
        .introductionText {
          background-color: #00283b;
          border-radius: 8px;
          padding: 40% 19px 19px 19px;
        }
        .introductionSpan {
          color: #fff;
        }
      }
    }
  }
  .mt {
    margin-top: 24px;
  }
`;

export default styledElement;
