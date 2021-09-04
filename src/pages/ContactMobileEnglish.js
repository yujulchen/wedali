import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import ContactMobileTitleEnglish from "./components/svg/ContactMobileTitleEnglish";
import Map from "./components/Map";

const fadeInAnimation = keyframes`${fadeIn}`;

const ContactMobile = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="contactBackground">
        <div className="title">
          <ContactMobileTitleEnglish style={{ width: "100%" }} />
        </div>
        <div className="contactText">
          <p>Telephone:</p>
          <p>&emsp;&emsp;&emsp;02-26776184</p>
          <p>Fax:</p>
          <p>&emsp;&emsp;&emsp;02-26776164</p>
          <p>Email:</p>
          <p>&emsp;&emsp;&emsp;q121135.q60@gmail.com</p>
          <p>Address:</p>
          <p>
            &emsp;&emsp;&emsp;No. 2, Ln. 367, Jianguo Rd., Yingge Dist., New
            Taipei City, Taiwan (R.O.C.)
          </p>
          <p>GUI Number:</p>
          <p>&emsp;&emsp;&emsp;98675099</p>
        </div>
        <div className="map">
          <Map isMobile={true} />
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(ContactMobile)`
  padding: 54px 56px 0 56px;
  animation: ${fadeInAnimation} 2s;
  overflow-x: hidden;
  .contactBackground {
    width: 106vw;
    left: 0;
    margin: 0 -56px;
    background-color: #00283b;
    position: relative;
    z-index: -100;
    padding: 0 80px 56px 80px;
    .title {
      padding: 36px 0;
    }
    .contactText {
      width: 100%;
      margin: 0 auto 50px auto;
      p {
        color: #fff;
      }
    }
    .map {
      margin: 0 0 0 -80px;
    }
  }
`;

export default styledElement;
