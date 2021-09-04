import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { rotateIn, fadeIn } from "react-animations";
import Gear from "./components/svg/Gear";
import MainProcessMEnglish from "./components/svg/MainProcessMEnglish";
import MainProcessFlowMEnglish from "./components/svg/MainProcessFlowMEnglish";

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
        `Mold Design possesses many years of product design experience in
        various categories. Our staff has a deep understanding of all
        materials and structures implemented in our projects. Our design
        department can provide the most professional suggestions, helping
        customers to economize, increase productiveness and reduce the risk of
        encountering eventual development issues.`
      );
    showCenter &&
      setShowText(
        `The injection of microscopic plastic molecules inside of a machine,
        plastic molecules are heated, and pressure is added inside of the
        pattern, then the mold cools down, giving customers the product they
        desire.`
      );
    showBottom &&
      setShowText(
        `The injection of microscopic plastic molecules inside of a machine,
        plastic molecules are heated, and pressure is added inside of the
        pattern, then the mold cools down, giving customers the product they
        desire.`
      );
  }, [showTop, showCenter, showBottom]);

  return (
    <div className={className}>
      <div className="gearBox">
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("top")} />
          <div className="gearText" onClick={() => setClickItem("top")}>
            <div className="textAlign">
              <p className="gearTitle">MOLD</p>
              <p className="gearTitle">DESIGN</p>
            </div>
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
      <div className="gearBox">
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("center")} />
          <div className="gearText" onClick={() => setClickItem("center")}>
            <div className="textAlign">
              <p className="gearTitle">INJECTION</p>
              <p className="gearTitle">MOLDING</p>
            </div>
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
      <div className="gearBox">
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("bottom")} />
          <div className="gearText" onClick={() => setClickItem("bottom")}>
            <div className="textAlign">
              <p className="gearTitle">MOLD</p>
              <p className="gearTitle">MANUFACTURE</p>
            </div>
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
      <div className="mainProcess">
        <div className="mainProcessTitle">
          <MainProcessMEnglish style={{ width: "100%" }} />
        </div>
        <MainProcessFlowMEnglish style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

const styledElement = styled(HomePageMobile)`
  padding: 56px;
  overflow: hidden;
  .gearBox {
    width: 100%;
    .gear {
      position: relative;
      width: 100%;
      height: 240px;
      z-index: 5;
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
          text-align: center;
          .gearTitle {
            margin: 0;
            padding-top: 6px;
            font-size: 1.2em;
            font-weight: 500;
          }
        }
      }
    }
    .introductionBox {
      margin: -7rem 0 3rem 0;
      padding: 0 0 0 2vw;
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
  .mainProcess {
    margin: 60px 0;
    .mainProcessTitle {
      margin: 36px 0;
    }
  }
`;

export default styledElement;
