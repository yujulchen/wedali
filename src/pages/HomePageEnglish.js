import styled, { keyframes } from "styled-components";
import { rotateIn, fadeIn, slideInUp } from "react-animations";
import Gear from "./components/svg/Gear";
import GearCenter from "./components/svg/GearCenter";
import FirstBlock from "./components/svg/FirstBlock";
import MainProcess from "./components/svg/MainProcess";
import MainProcessFlowEnglish from "./components/svg/MainProcessFlowEnglish";
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
              Mold Design possesses many years of product design experience in
              various categories. Our staff has a deep understanding of all
              materials and structures implemented in our projects. Our design
              department can provide the most professional suggestions, helping
              customers to economize, increase productiveness and reduce the
              risk of encountering eventual development issues.
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
              Mold Manufacture’s processing department has CNC washing machines,
              electric discharge machining, and brook bed grinders. All of these
              components have been properly regulated, have a tolerance margin,
              and have undergone assemble testing.
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
              The injection of microscopic plastic molecules inside of a
              machine, plastic molecules are heated, and pressure is added
              inside of the pattern, then the mold cools down, giving customers
              the product they desire.
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
            <p className="gearTitle">MOLD DESIGN</p>
          </div>
        </div>
        <div className="gearItemCenter">
          <GearCenter
            className="iconCenter"
            onClick={() => setClickItem("center")}
          />
          <div className="gearText" onClick={() => setClickItem("center")}>
            <p className="gearTitle">INJECTION MOLDING</p>
          </div>
        </div>
        <div className="gearItemRight">
          <Gear className="iconRight" onClick={() => setClickItem("right")} />
          <div className="gearText" onClick={() => setClickItem("right")}>
            <p className="gearTitle">MOLD MANUFACTURE</p>
          </div>
        </div>
      </div>
      {showText}
      <div className="section">
        <div className="title">
          <MainProcess style={{ width: "100%" }} />
        </div>
        <div className="MainProcessFlow">
          <MainProcessFlowEnglish style={{ width: "100%" }} />
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
        top: 23%;
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
          font-size: 24px;
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
          font-size: 24px;
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
          font-size: 24px;
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
        overflow-y: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
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
