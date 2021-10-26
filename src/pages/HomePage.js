import styled, { keyframes } from "styled-components";
import { rotateIn, fadeIn, slideInUp } from "react-animations";
import Gear from "./components/svg/Gear";
import GearCenter from "./components/svg/GearCenter";
import FirstBlock from "./components/svg/FirstBlock";
import MainProcess from "./components/svg/MainProcess";
import MainProcessFlow from "./components/svg/MainProcessFlow";
import { useEffect, useState } from "react";

const rotateInAnimation = keyframes`${rotateIn}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;

const HomePage = (props) => {
  const { className } = props;
  const [showText, setShowText] = useState("");
  const [clickItem, setClickItem] = useState("");

  useEffect(() => {
    if (clickItem === "left") {
      const leftItem = (
        <div className="introductionBox">
          <div className="introductionIcon">
            <FirstBlock style={{ width: "100%" }} />
          </div>
          <div className="introductionText">
            <span className="introductionSpan">
              我們的設計部門擁有多年的生產設計經歷，對於各類產品、模具結構乃至於材料的特性都有很深入的了解，設計部能夠提供客戶最專業的模具設計建議，幫客戶節省開模成本，提高生產效率及減少模具開發風險。
            </span>
          </div>
        </div>
      );
      setShowText(leftItem);
    }
    if (clickItem === "center") {
      const centerItem = (
        <div className="introductionBox">
          <div className="introductionIcon">
            <FirstBlock style={{ width: "100%" }} />
          </div>
          <div className="introductionText">
            <span className="introductionSpan">
              將塑膠粒加入射出機內，塑膠粒加熱後加壓射出至模具內，待冷卻後開模，即可得到客戶所需要的成品。
            </span>
          </div>
        </div>
      );
      setShowText(centerItem);
    }
    if (clickItem === "right") {
      const rightItem = (
        <div className="introductionBox">
          <div className="introductionIcon">
            <FirstBlock style={{ width: "100%" }} />
          </div>
          <div className="introductionText">
            <span className="introductionSpan">
              我們加工部門有製造精密模具所需的CNC數控銑床、放電加工機、銑床磨床，確定各零件的公差符合規定，然後組裝試模。
            </span>
          </div>
        </div>
      );
      setShowText(rightItem);
    }
  }, [clickItem]);

  return (
    <div className={className}>
      <div className="gearBox">
        <div className="gearItemLeft">
          <Gear className="iconLeft" onClick={() => setClickItem("left")} />
          <div className="gearText" onClick={() => setClickItem("left")}>
            <p className="gearTitle">模具設計</p>
            <p>MOLD DESIGN</p>
          </div>
        </div>
        <div className="gearItemCenter">
          <GearCenter
            className="iconCenter"
            onClick={() => setClickItem("center")}
          />
          <div className="gearText" onClick={() => setClickItem("center")}>
            <p className="gearTitle">射出成型</p>
            <p>INJECTION MOLDING</p>
          </div>
        </div>
        <div className="gearItemRight">
          <Gear className="iconRight" onClick={() => setClickItem("right")} />
          <div className="gearText" onClick={() => setClickItem("right")}>
            <p className="gearTitle">模具製造</p>
            <p>MOLD MANUFACTURE</p>
          </div>
        </div>
      </div>
      {showText}
      <div className="section">
        <div className="title">
          <MainProcess style={{ width: "100%" }} />
        </div>
        <div className="MainProcessFlow">
          <MainProcessFlow style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(HomePage)`
  padding: 70px 8.3vw;
  .gearBox {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 620px;
    padding-top: 70px;
    animation: ${fadeInAnimation} 2s ease-in;
    .gearItemLeft {
      position: relative;
      width: 240px;
      .iconLeft {
        position: absolute;
        left: 18%;
        top: 2%;
        &:hover {
          cursor: pointer;
          animation: ${rotateInAnimation} 1s;
        }
      }
      .gearText {
        width: 100%;
        position: absolute;
        left: 26%;
        top: 21%;
        color: #fff;
        text-align: center;
        z-index: 100;
        &:hover {
          cursor: pointer;
          animation: ${fadeInAnimation} 1s;
        }
        p {
          margin: 0;
        }
        .gearTitle {
          font-size: 2.25rem;
          font-weight: 700;
        }
      }
    }
    .gearItemCenter {
      position: relative;
      width: 240px;
      .iconCenter {
        position: absolute;
        left: -10%;
        bottom: 0;
        &:hover {
          cursor: pointer;
          animation: ${rotateInAnimation} 1s;
        }
      }
      .gearText {
        width: 100%;
        position: absolute;
        left: 0%;
        bottom: 20%;
        color: #fff;
        text-align: center;
        z-index: 100;
        &:hover {
          cursor: pointer;
          animation: ${fadeInAnimation} 1s;
        }
        p {
          margin: 0;
        }
        .gearTitle {
          font-size: 2.25rem;
          font-weight: 700;
        }
      }
    }
    .gearItemRight {
      position: relative;
      width: 240px;
      .iconRight {
        position: absolute;
        bottom: 30%;
        &:hover {
          cursor: pointer;
          animation: ${rotateInAnimation} 1s;
        }
      }
      .gearText {
        width: 100%;
        position: absolute;
        left: 10%;
        bottom: 50%;
        color: #fff;
        text-align: center;
        z-index: 100;
        &:hover {
          cursor: pointer;
          animation: ${fadeInAnimation} 1s;
        }
        p {
          margin: 0;
        }
        .gearTitle {
          font-size: 2.25rem;
          font-weight: 700;
        }
      }
    }
  }
  .introductionBox {
    width: 100%;
    margin-top: 54px;
    position: relative;
    animation: ${fadeInAnimation} 1s;
    .introductionIcon {
      width: 100%;
      margin: 0 auto;
    }
    .introductionText {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      .introductionSpan {
        text-align: center;
        width: 800px;
        color: #fff;
      }
    }
  }
  .section {
    width: 100%;
    animation: ${slideInUpAnimation} 2s;
    .title {
      width: 100%;
      margin-top: 122px;
      margin-bottom: 47px;
    }
    .MainProcessFlow {
      width: 100%;
      margin-bottom: 45px;
    }
  }
`;

export default styledElement;
