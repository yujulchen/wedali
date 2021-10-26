import styled, { keyframes } from "styled-components";
import { fadeIn, slideInUp, flipInX } from "react-animations";
import IntentionEnglish from "./components/svg/IntentionEnglish";
import AboutTitle from "./components/svg/AboutTitle";
import Logo from "./components/svg/Logo";
import QualityTitle from "./components/svg/QualityTitle";
import IntegrationOfEquipmentEnglish from "./components/svg/IntegrationOfEquipmentEnglish";
import TechnicalServiceEnglish from "./components/svg/TechnicalServiceEnglish";
import ContinuousDevelopmentEnglish from "./components/svg/ContinuousDevelopmentEnglish";

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInUpAnimation = keyframes`${slideInUp}`;
const flipInXAnimation = keyframes`${flipInX}`;

const AboutEnglish = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="intentionBox">
        <IntentionEnglish style={{ width: "100%" }} />
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
            <p>Weidali enterprise is a single-venture company.</p>
            <p>
              Founded in 2005, the enterprise has collaborated with Mold Design
              in plastic molecules production for many years.
            </p>
            <p>
              Producing intellectually stimulating toys, automotive components,
              household electronics plastic equipment, 3C equipment, etc.… the
              company is on the stock market and has various injection molding
              products, precision injection products, and plastic injection
              equipment development.
            </p>
            <p>
              High quality products are Weidali’s goal; what they value the most
              is long term quality, reasonable prices, punctual product
              delivery, and effective service.
            </p>
            <p>
              During the production process of each product, from design,
              modelling, and injection, Weidali focuses on every small detail
              and exceed all client’s expectations.
            </p>
            <p>
              The company hopes that all new and old costumers will be able to
              audit and guide.
            </p>
            <p>
              Weidali releases new products of excellent quality and at a
              reasonable price, providing the best service to their clients,
              they hope that they can have a smooth and fast collaboration with
              prospective clients.
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
              <IntegrationOfEquipmentEnglish style={{ width: "100%" }} />
            </div>
            <div className="qualityRight">
              <TechnicalServiceEnglish style={{ width: "100%" }} />
            </div>
          </div>
          <div className="qualitySecondLine">
            <div className="qualityCenter">
              <ContinuousDevelopmentEnglish style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const styledElement = styled(AboutEnglish)`
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
      height: 750px;
      background-color: #00283b;
      margin-left: -8.3vw;
      position: absolute;
      left: 0;
      z-index: -10;
    }
    .aboutBox {
      height: 750px;
      display: flex;
      justify-content: center;
      align-items: center;
      .aboutLogo {
        width: 400px;
        margin-right: 84px;
      }
      .aboutText {
        width: 30rem;
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
