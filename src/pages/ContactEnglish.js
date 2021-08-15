import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import ContactTitle from "./components/svg/ContactTitle";
import Map from "./components/Map";

const fadeInAnimation = keyframes`${fadeIn}`;

const Contact = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="title">
        <ContactTitle style={{ width: "100%" }} />
      </div>
      <div className="contactBox">
        <div className="contactBackground"></div>
        <div className="contactInside">
          <div className="map">
            <Map />
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
        </div>
      </div>
    </div>
  );
};
const styledElement = styled(Contact)`
  padding: 70px 8.3vw;
  animation: ${fadeInAnimation} 2s;
  overflow: hidden;
  .title {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 5vh;
  }
  .contactBox {
    position: relative;
    .contactBackground {
      width: 100vw;
      height: 70vh;
      background-color: #00283b;
      margin-left: -8.3vw;
      position: absolute;
      left: 0;
      z-index: -10;
    }
    .contactInside {
      width: 100%;
      height: 100%;
      margin-bottom: 10vh;
      display: flex;
      justify-context: space-between;
      .map {
        margin-top: -4vh;
      }
      .contactText {
        width: 40vw;
        height: 100%;
        padding-top: 1.8rem;
        padding-left: 6vw;
        p {
          color: #fff;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default styledElement;
