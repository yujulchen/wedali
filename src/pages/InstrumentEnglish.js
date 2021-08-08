import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import InstrumentTitle from "./components/svg/InstrumentTitle";

const fadeInAnimation = keyframes`${fadeIn}`;

const Instrument = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="title">
        <InstrumentTitle style={{ width: "100%" }} />
      </div>
      <div className="machineBox">
        <div className="machine mr">
          <img src="http://localhost:3000/machine/m001.png" alt="m001" />
          <p className="name">cut-off machine</p>
        </div>
        <div className="machine ml">
          <img src="http://localhost:3000/machine/m002.png" alt="m002" />
          <p className="name">Milling machine</p>
        </div>
      </div>
      <div className="machineBox">
        <div className="machine mr">
          <img src="http://localhost:3000/machine/m003.png" alt="m003" />
          <p className="name">electric discharge machine</p>
        </div>
        <div className="machine ml">
          <img src="http://localhost:3000/machine/m004.png" alt="m004" />
          <p className="name">lathe</p>
        </div>
      </div>
      <div className="machineBox">
        <div className="machine mr">
          <img src="http://localhost:3000/machine/m005.png" alt="m005" />
          <p className="name">pin cutting off machine</p>
        </div>
        <div className="machine ml">
          <img src="http://localhost:3000/machine/m006.png" alt="m006" />
          <p className="name">Grinding machine</p>
        </div>
      </div>
      <div className="machineBox mb">
        <div className="machine mr">
          <img src="http://localhost:3000/machine/m007.png" alt="m007" />
          <p className="name">saw machine</p>
        </div>
        <div className="machine none"></div>
      </div>
    </div>
  );
};

const styledElement = styled(Instrument)`
  padding: 70px 8.3vw;
  animation: ${fadeInAnimation} 2s;
  .title {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 5vh;
  }
  .machineBox {
    display: flex;
    justify-content: center;
    margin-bottom: 36px;
    .machine {
      width: 280px;
      height: 320px;
      img {
        width: 100%;
      }
      .name {
        display: none;
      }
      &:hover {
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        background-color: #365d77;
        padding: 10px;
        img {
          width: 280px;
          margin-right: 5%;
        }
        p {
          font-size: 18px;
          display: block;
          color: #fff;
        }
        &.none {
          width: 280px;
          background-color: #fff;
        }
      }
    }
    .mr {
      margin-right: 10%;
      &:hover {
        margin-left: -8%;
        margin-right: 3%;
      }
    }
    .ml {
      &:hover {
        margin-left: -3%;
      }
    }
    .mb {
      margin-bottom: 60px;
    }
  }
`;

export default styledElement;
