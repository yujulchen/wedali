import styled, { keyframes } from "styled-components";
import { fadeIn, slideInUp, flipInX } from "react-animations";

import IntentionEnglish from "./components/svg/IntentionEnglish";
import AboutMobileTitleEnglish from "./components/svg/AboutMobileTitleEnglish";
import Logo from "./components/svg/Logo";
import QualityMobileTitleEnglish from "./components/svg/QualityMobileTitleEnglish";
import IntegrationOfEquipmentEnglish from "./components/svg/IntegrationOfEquipmentEnglish";
import TechnicalServiceEnglish from "./components/svg/TechnicalServiceEnglish";
import ContinuousDevelopmentEnglish from "./components/svg/ContinuousDevelopmentEnglish";

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;
const flipInXAnimation = keyframes`${flipInX}`;

const AboutMobileEnglish = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <div className="intentionBox">
        <IntentionEnglish style={{ width: "100%" }} />
      </div>
      <div className="section_one">
        <div className="title">
          <AboutMobileTitleEnglish style={{ width: "100%" }} />
        </div>
        <div className="background">
          <div className="aboutLogo">
            <Logo style={{ width: "100%" }} />
          </div>
          <div className="aboutBox">
            <div className="aboutText">
              <p>
                Weidali enterprise is a single-venture company. Founded in 1927,
                the enterprise has collaborated with Mold Design in plastic
                molecules production for many years. Producing intellectually
                stimulating toys, automotive components, household electronics
                plastic equipment, 3C equipment, etc.… the company is on the
                stock market and has various injection molding products,
                precision injection products, and plastic injection equipment
                development. High quality products are Weidali’s goal; what they
                value the most is long term quality, reasonable prices, punctual
                product delivery, and effective service. During the production
                process of each product, from design, modelling, and injection,
                Weidali focuses on every small detail and exceed all client’s
                expectations. The company hopes that all new and old costumers
                will be able to audit and guide. Weidali releases new products
                of excellent quality and at a reasonable price, providing the
                best service to their clients, they hope that they can have a
                smooth and fast collaboration with prospective clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section_two">
        <div className="qualityTitle">
          <QualityMobileTitleEnglish style={{ width: "100%" }} />
        </div>
        <div className="qualityBox">
          <div className="qualityItem">
            <IntegrationOfEquipmentEnglish style={{ width: "100%" }} />
          </div>
          <div className="qualityItem">
            <TechnicalServiceEnglish style={{ width: "100%" }} />
          </div>
          <div className="qualityItem">
            <ContinuousDevelopmentEnglish style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(AboutMobileEnglish)`
  padding: 56px;
  overflow: hidden;
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
      left: 0;
      margin: 0 -56px;
      background-color: #00283b;
      position: relative;
      z-index: -100;
      padding: 0 56px 56px 56px;
      .aboutLogo {
        padding: 56px 0 48px 0;
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
