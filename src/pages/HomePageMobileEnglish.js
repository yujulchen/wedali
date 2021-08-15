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
          Mold Design possesses many years of product design experience in
          various categories. Our staff has a deep understanding of all
          materials and structures implemented in our projects. Our design
          department can provide the most professional suggestions, helping
          customers to economize, increase productiveness and reduce the risk of
          encountering eventual development issues.
        </div>
      </div>
    </div>
  );
  const centerItem = (
    <div className="introductionBox">
      <div className="introductionText">
        <div className="introductionSpan">
          The injection of microscopic plastic molecules inside of a machine,
          plastic molecules are heated, and pressure is added inside of the
          pattern, then the mold cools down, giving customers the product they
          desire.
        </div>
      </div>
    </div>
  );
  const bottomItem = (
    <div className="introductionBox">
      <div className="introductionText">
        <div className="introductionSpan">
          Mold Manufacture’s processing department has CNC washing machines,
          electric discharge machining, and brook bed grinders. All of these
          components have been properly regulated, have a tolerance margin, and
          have undergone assemble testing.
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
        className="gearBox"
        style={{ marginBottom: showTop ? "33rem" : "0" }}
      >
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("top")} />
          <div className="gearText" onClick={() => setClickItem("top")}>
            <div className="textAlign">
              <p className="gearTitle">MOLD</p>
              <p className="gearTitle">DESIGN</p>
            </div>
          </div>
          {showTopText}
        </div>
      </div>
      <div
        className="gearBox"
        style={{ marginBottom: showCenter ? "18rem" : "0" }}
      >
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("center")} />
          <div className="gearText" onClick={() => setClickItem("center")}>
            <div className="textAlign">
              <p className="gearTitle">INJECTION</p>
              <p className="gearTitle">MOLDING</p>
            </div>
          </div>
          {showCenterText}
        </div>
      </div>
      <div
        className="gearBox"
        style={{ marginBottom: showBottom ? "27rem" : "56px" }}
      >
        <div className="gear">
          <Gear className="iconTop" onClick={() => setClickItem("bottom")} />
          <div className="gearText" onClick={() => setClickItem("bottom")}>
            <div className="textAlign">
              <p className="gearTitle">MOLD</p>
              <p className="gearTitle">MANUFACTURE</p>
            </div>
          </div>
          {showBottomText}
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
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 2rem 0 10rem 0;
    .gear {
      position: relative;
      width: 100%;
      height: 240px;
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
          text-align: center;
          .gearTitle {
            margin: 0;
            padding-top: 6px;
            font-size: 1.2em;
            font-weight: 500;
          }
        }
      }
      .introductionBox {
        position: relative;
        top: -8rem;
        margin: 0 auto 300px auto;
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
  .mainProcess {
    margin-bottom: 60px;
    .mainProcessTitle {
      margin: 36px 0;
    }
  }
`;

export default styledElement;
