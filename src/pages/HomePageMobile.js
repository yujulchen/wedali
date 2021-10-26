import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { rotateIn, fadeIn } from "react-animations";
import Gear from "./components/svg/Gear";
import MainProcessFlowM from "./components/svg/MainProcessFlowM";
import MainProcessMobile from "./components/svg/MainProcessMobile";

const rotateInAnimation = keyframes`${rotateIn}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const HomePageMobile = (props) => {
  const { className } = props;
  const [showTop, setShowTop] = useState(false);
  const [showText, setShowText] = useState("");
  const [showCenter, setShowCenter] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [clickItem, setClickItem] = useState("");

  useEffect(() => {
    clickItem === "top" ? setShowTop(true) : setShowTop(false);
    clickItem === "center" ? setShowCenter(true) : setShowCenter(false);
    clickItem === "bottom" ? setShowBottom(true) : setShowBottom(false);
  }, [clickItem]);

  useEffect(() => {
    showTop &&
      setShowText(
        "我們的設計部門擁有多年的生產設計經歷，對於各類產品、模具結構乃至於材料的特性都有很深入的了解，設計部能夠提供客戶最專業的模具設計建議，幫客戶節省開模成本，提高生產效率及減少模具開發風險。"
      );
    showCenter &&
      setShowText(
        "將塑膠粒加入射出機內，塑膠粒加熱後加壓射出至模具內，待冷卻後開模，即可得到客戶所需要的成品。"
      );
    showBottom &&
      setShowText(
        "我們加工部門有製造精密模具所需的CNC數控銑床、放電加工機、銑床磨床，確定各零件的公差符合規定，然後組裝試模。"
      );
  }, [showTop, showCenter, showBottom]);

  return (
    <div className={className}>
      <div
        className="gearBox mt"
        style={{ marginBottom: showTop ? "12rem" : "0" }}
      >
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("top")} />
          <div className="gearText" onClick={() => setClickItem("top")}>
            <div className="textAlign">
              <p className="gearTitle">模具設計</p>
              <p>MOLD DESIGN</p>
            </div>
          </div>
          <div
            className="introductionBox"
            style={{ display: showTop ? "block" : "none" }}
          >
            <div className="introductionText">
              <div className="introductionSpan">{showText}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="gearBox"
        style={{ marginBottom: showCenter ? "14rem" : "0" }}
      >
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("center")} />
          <div className="gearText" onClick={() => setClickItem("center")}>
            <div className="textAlign">
              <p className="gearTitle">射出成型</p>
              <p>INJECTION MOLDING</p>
            </div>
          </div>
          <div
            className="introductionBox"
            style={{ display: showCenter ? "block" : "none" }}
          >
            <div className="introductionText">
              <div className="introductionSpan">{showText}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="gearBox"
        style={{ marginBottom: showBottom ? "24rem" : "56px" }}
      >
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("bottom")} />
          <div className="gearText" onClick={() => setClickItem("bottom")}>
            <div className="textAlign">
              <p className="gearTitle">模具製造</p>
              <p>MOLD MANUFACTURE</p>
            </div>
          </div>
          <div
            className="introductionBox"
            style={{ display: showBottom ? "block" : "none" }}
          >
            <div className="introductionText">
              <div className="introductionSpan">{showText}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainProcess">
        <div className="mainProcessTitle">
          <MainProcessMobile style={{ width: "100%" }} />
        </div>
        <MainProcessFlowM style={{ width: "100%", height: "100%" }} />
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
        top: -38%;
        display: flex;
        justify-content: center;
        padding: 0 5vw;
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
  .mainProcess {
    margin-bottom: 60px;
    .mainProcessTitle {
      margin: 36px 0;
    }
  }
`;

export default styledElement;
