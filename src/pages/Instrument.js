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
`;

export default styledElement;
