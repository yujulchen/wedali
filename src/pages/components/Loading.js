import styled from "styled-components";
import { withRouter } from "react-router-dom";

import LoadingImage from "../../machine/5.jpg";
import LoadingIcon from "../../machine/Ripple-200px.gif";

const Loading = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="imageBox">
        <div className="loadingBox">
          <div className="loadingIcon">
            <img src={LoadingIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(Loading)`
  .imageBox {
    height: 100vh;
    background-image: url(${LoadingImage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    opacity: 0.9;
  }
  .loadingBox {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50rem;
      position: absolute;
    }
  }
`;

export default withRouter(styledElement);
