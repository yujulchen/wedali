import styled from "styled-components";
import Gear from "./components/svg/Gear";
import GearCenter from "./components/svg/GearCenter";
import FirstBlock from "./components/svg/FirstBlock";
import { useEffect, useState } from "react";

const HomePage = (props) => {
  const { className } = props;
  const [showText, setShowText] = useState("");
  const [leftItem, setLeftItem] = useState(true);
  const [centerItem, setCenterItem] = useState(false);
  const [rightItem, setRightItem] = useState(false);

  useEffect(() => {
    if (leftItem) {
      setCenterItem(false);
      setRightItem(false);
      setShowText(
        "Mold Design possesses many years of product design experience in various categories. Our staff has a deep understanding of all materials and structures implemented in our projects. Our design department can provide the most professional suggestions, helping customers to economize, increase productiveness and reduce the risk of encountering eventual development issues."
      );
    }
    if (centerItem) {
      setLeftItem(false);
      setRightItem(false);
      setShowText(
        "Mold Manufacture’s processing department has CNC washing machines, electric discharge machining, and brook bed grinders. All of these components have been properly regulated, have a tolerance margin, and have undergone assemble testing."
      );
    }
    if (rightItem) {
      setCenterItem(false);
      setLeftItem(false);
      setShowText(
        "The injection of microscopic plastic molecules inside of a machine, plastic molecules are heated, and pressure is added inside of the pattern, then the mold cools down, giving customers the product they desire."
      );
    }
  }, [showText, leftItem, centerItem, rightItem]);

  return (
    <div className={className}>
      <div className="gearBox">
        <div className="gearItemLeft">
          <Gear className="iconLeft" onClick={() => setLeftItem(true)} />
          <div className="gearText" onClick={() => setLeftItem(true)}>
            <p className="gearTitle">MOLD DESIGN</p>
          </div>
        </div>
        <div className="gearItemCenter">
          <GearCenter
            className="iconCenter"
            onClick={() => setCenterItem(true)}
          />
          <div className="gearText" onClick={() => setCenterItem(true)}>
            <p className="gearTitle">INJECTION MOLDING</p>
          </div>
        </div>
        <div className="gearItemRight">
          <Gear className="iconRight" onClick={() => setRightItem(true)} />
          <div className="gearText" onClick={() => setRightItem(true)}>
            <p className="gearTitle">MOLD MANUFACTURE</p>
          </div>
        </div>
      </div>
      <div className="introductionBox">
        <div className="introductionIcon">
          <FirstBlock style={{ width: "100%" }} />
        </div>
        <div className="introductionText">
          <span className="introductionSpan">{showText}</span>
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(HomePage)`
  width: 100vw;
  padding: 70px 8.3vw;
  .gearBox {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 620px;
    padding-top: 70px;
    .gearItemLeft {
      position: relative;
      width: 240px;
      .iconLeft {
        position: absolute;
        left: 18%;
        top: 2%;
        &:hover {
          cursor: pointer;
          .gear {
            transform: rotate(35deg);
          }
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
          .gear {
            transform: rotate(35deg);
          }
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
          .gear {
            transform: rotate(35deg);
          }
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
      padding: 0 30%;
      position: absolute;
      top: 0;
      .introductionSpan {
        text-align: center;
        width: 100%;
        color: #fff;
      }
    }
  }
`;

export default styledElement;
