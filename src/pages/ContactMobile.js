import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import ContactMobileTitle from "./components/svg/ContactMobileTitle";
import Map from "./components/Map";

const fadeInAnimation = keyframes`${fadeIn}`;

const ContactMobile = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="contactBackground">
        <div className="title">
          <ContactMobileTitle style={{ width: "100%" }} />
        </div>
        <div className="contactText">
          <p>電話：</p>
          <p>&emsp;&emsp;&emsp;02-26776184</p>
          <p>傳真：</p>
          <p>&emsp;&emsp;&emsp;02-26776164</p>
          <p>信箱：</p>
          <p>&emsp;&emsp;&emsp;q121135.q60@gmail.com</p>
          <p>地址：</p>
          <p>&emsp;&emsp;&emsp;新北市鶯歌區建國路367巷2號</p>
          <p>統編：</p>
          <p>&emsp;&emsp;&emsp;98675099</p>
        </div>
      </div>
      <div className="map">
        <Map isMobile={true} />
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
    padding: 0 80px 1px 80px;
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
  }
  .map {
    width: "100vw";
    padding-bottom: 56px;
    margin: 0 -56px;
    position: relative;
    z-index: 10;
    background: #00283b;
  }
`;

export default styledElement;
