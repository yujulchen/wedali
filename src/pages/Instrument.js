import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import InstrumentTitle from "./components/svg/InstrumentTitle";

import m001 from "../machine/m001.png";
import m002 from "../machine/m002.png";
import m003 from "../machine/m003.png";
import m004 from "../machine/m004.png";
import m005 from "../machine/m005.png";
import m006 from "../machine/m006.png";
import m007 from "../machine/m007.png";

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
          <img src={m001} alt="m001" />
          <p className="name">切斷機</p>
        </div>
        <div className="machine ml">
          <img src={m002} alt="m002" />
          <p className="name">洗床</p>
        </div>
      </div>
      <div className="machineBox">
        <div className="machine mr">
          <img src={m003} alt="m003" />
          <p className="name">放電機</p>
        </div>
        <div className="machine ml">
          <img src={m004} alt="m004" />
          <p className="name">車床</p>
        </div>
      </div>
      <div className="machineBox">
        <div className="machine mr">
          <img src={m005} alt="m005" />
          <p className="name">頂針研磨切斷機</p>
        </div>
        <div className="machine ml">
          <img src={m006} alt="m006" />
          <p className="name">磨床</p>
        </div>
      </div>
      <div className="machineBox mb">
        <div className="machine mr">
          <img src={m007} alt="m007" />
          <p className="name">鋸床</p>
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
