import { useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import LoadingImage from "../../machine/1884165.png";
import LoadingIcon from "../../machine/Ripple-200px.gif";

const LoadingM = (props) => {
  const { className, isLoading } = props;

  useEffect(() => {
    if (isLoading) props.history.push("/mobile");
  }, [isLoading]);

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

const styledElement = styled(LoadingM)`
  overflow: hidden;
  .imageBox {
    height: 100vh;
    background-image: url(${LoadingImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.9;
    .loadingBox {
      position: relative;
      width: 50vw;
      display: flex;
      justify-content: center;
      img {
        height: 30vh;
        border-radius: 50rem;
        position: absolute;
        top: 30vh;
      }
    }
  }
`;

export default withRouter(styledElement);
