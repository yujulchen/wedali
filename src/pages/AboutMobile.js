import styled, { keyframes } from "styled-components";
import { fadeIn, slideInUp, flipInX } from "react-animations";

import Intention from "./components/svg/Intention";
import AboutMobileTitle from "./components/svg/AboutMobileTitle";
import Logo from "./components/svg/Logo";
import QualityMobileTitle from "./components/svg/QualityMobileTitle";
import IntegrationOfEquipment from "./components/svg/IntegrationOfEquipment";
import TechnicalService from "./components/svg/TechnicalService";
import ContinuousDevelopment from "./components/svg/ContinuousDevelopment";
import iso9001 from "../image/iso9001.jpg";

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;
const flipInXAnimation = keyframes`${flipInX}`;

const AboutMobile = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="intentionBox">
        <Intention style={{ width: "100%" }} />
      </div>
      <div className="section_one">
        <div className="title">
          <AboutMobileTitle style={{ width: "100%" }} />
        </div>
        <div className="background">
          <div className="aboutLogo">
            <Logo style={{ width: "100%" }} />
          </div>
          <div className="aboutBox">
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
      </div>
      <div className="section_two">
        <div className="qualityTitle">
          <QualityMobileTitle style={{ width: "100%" }} />
        </div>
        <div className="qualityBox">
          <div className="qualityItem">
            <IntegrationOfEquipment style={{ width: "100%" }} />
          </div>
          <div className="qualityItem">
            <TechnicalService style={{ width: "100%" }} />
          </div>
          <div className="qualityItem">
            <ContinuousDevelopment style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div className="licenseImg">
        <img src={iso9001} alt="iso9001" />
      </div>
    </div>
  );
};

const styledElement = styled(AboutMobile)`
  padding: 56px;
  overflow: hidden;
  .licenseImg {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 700px;
    margin: 120px auto;
    animation: ${fadeInAnimation} 2s;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .intentionBox {
    display: flex;
    justify-content: center;
    margin: 36px 0 36px 12px;
    animation: ${fadeInAnimation} 2s;
  }
  .section_one {
    width: 100%;
    animation: ${slideInUpAnimation} 2s;
    position: relative;
    .title {
      width: 100%;
      margin: 32px 0 24px 0;
    }
    .background {
      width: 100vw;
      height: 900px;
      left: 0;
      margin: 0 -56px;
      background-color: #00283b;
      position: relative;
      z-index: -100;
      padding: 0 56px;
      .aboutLogo {
        padding: 48px 0;
      }
      .aboutBox {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .aboutText {
          width: 28rem;
          p {
            color: #fff;
          }
        }
      }
    }
  }
  .section_two {
    width: 100%;
    animation: ${flipInXAnimation} 3s 1s;
    margin-bottom: 60px;
    .qualityTitle {
      width: 100%;
      margin-top: 48px;
      margin-bottom: 24px;
    }
    .qualityBox {
      margin: 0 auto;
      .qualityItem {
        margin: 48px 0;
      }
    }
  }
`;

export default styledElement;
