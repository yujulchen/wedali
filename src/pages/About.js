import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { fadeIn, slideInUp, flipInX } from "react-animations";
import Intention from "./components/svg/Intention";
import AboutTitle from "./components/svg/AboutTitle";
import Logo from "./components/svg/Logo";
import QualityTitle from "./components/svg/QualityTitle";
import IntegrationOfEquipment from "./components/svg/IntegrationOfEquipment";
import TechnicalService from "./components/svg/TechnicalService";
import ContinuousDevelopment from "./components/svg/ContinuousDevelopment";
import { useEffect } from "react";

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;
const flipInXAnimation = keyframes`${flipInX}`;

const About = (props) => {
  const { className, brkPnt } = props;
  const history = useHistory();

  useEffect(() => {
    console.log(history);
    console.log(brkPnt);
  }, [brkPnt]);

  return (
    <div className={className}>
      <div className="intentionBox">
        <Intention style={{ width: "100%" }} />
      </div>
      <div className="section_one">
        <div className="title">
          <AboutTitle style={{ width: "100%" }} />
        </div>
        <div className="aboutBackground"></div>
        <div className="aboutBox">
          <div className="aboutLogo">
            <Logo style={{ width: "100%" }} />
          </div>
          <div className="aboutText">
            <p>
              維大利企業社是獨資企業，于西元2005年正式成立，本公司長期承製各式塑膠製品、益智玩具、汽車零配件塑膠射出成型代工品、家電塑膠射出代工品、電子3C資訊塑膠射出代工品等...上市櫃公司各式塑膠產品射出成型、精密塑膠射出件產品及塑膠射出模具的設計開發。
            </p>
            <p>
              優良的品質是我們一貫的宗旨，長久以來即秉持「品質第一、價格合理、交貨準時、服務效率高」的經營理念，在每一組產品製造過程中，從「設計」、「開模」、「射出」在每一道的工作流程裡，我們均專注於每一個細節，並超越客戶所要求的標準，公司真誠希望新老客户前來考察、指導。
            </p>
            <p>
              我們以創新的工藝,優秀的品質,合理的價格,為客戶提供至誠的服務,並期望與您真誠愉快的合作。
            </p>
          </div>
        </div>
      </div>
      <div className="section_two">
        <div className="title">
          <QualityTitle style={{ width: "100%" }} />
        </div>
        <div className="qualityBox">
          <div className="qualityFirstLine">
            <div className="qualityLeft">
              <IntegrationOfEquipment style={{ width: "100%" }} />
            </div>
            <div className="qualityRight">
              <TechnicalService style={{ width: "100%" }} />
            </div>
          </div>
          <div className="qualitySecondLine">
            <div className="qualityCenter">
              <ContinuousDevelopment style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const styledElement = styled(About)`
  padding: 70px 8.3vw;
  overflow: hidden;
  .intentionBox {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 590px;
    margin: 120px 0;
    animation: ${fadeInAnimation} 2s;
  }
  .section_one {
    width: 100%;
    animation: ${slideInUpAnimation} 2s;
    position: relative;
    margin-bottom: 105px;
    .title {
      width: 100%;
      margin-top: 60px;
      margin-bottom: 100px;
    }
    .aboutBackground {
      width: 100vw;
      height: 500px;
      background-color: #00283b;
      margin-left: -8.3vw;
      position: absolute;
      left: 0;
      z-index: -10;
    }
    .aboutBox {
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      .aboutLogo {
        width: 400px;
        margin-right: 84px;
      }
      .aboutText {
        width: 28rem;
        p {
          color: #fff;
        }
      }
    }
  }
  .section_two {
    width: 100%;
    animation: ${flipInXAnimation} 3s 1s;
    margin-bottom: 60px;
    .title {
      width: 100%;
      margin-top: 60px;
      margin-bottom: 100px;
    }
    .qualityBox {
      margin: 0 auto;
      .qualityFirstLine {
        display: flex;
        justify-content: center;
        .qualityLeft {
          width: 300px;
          margin-right: 200px;
        }
        .qualityRight {
          width: 300px;
        }
      }
      .qualitySecondLine {
        display: flex;
        justify-content: center;
        .qualityCenter {
          width: 300px;
        }
      }
    }
  }
`;

export default styledElement;
