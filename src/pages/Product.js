import styled, { keyframes } from "styled-components";
import { fadeIn, zoomIn } from "react-animations";
import ProductTitle from "./components/svg/ProductTitle";
import CarAccessories from "./components/svg/CarAccessories";
import CCCAccessories from "./components/svg/CCCAccessories";

const fadeInAnimation = keyframes`${fadeIn}`;
const zoomInAnimation = keyframes`${zoomIn}`;

const Product = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="title">
        <ProductTitle style={{ width: "100%" }} />
      </div>
      <div className="session">
        <div className="categoryTitle">
          <CarAccessories />
        </div>
        <div className="productBox noPadding">
          <div className="imageBox">
            <img src="http://localhost:3000/products/p001.jpg" alt="p001" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p002.jpg" alt="p002" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p003.jpg" alt="p003" />
          </div>
        </div>
      </div>
      <div className="session">
        <div className="productBox">
          <div className="imageBox">
            <img src="http://localhost:3000/products/p004.jpg" alt="p004" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p005.jpg" alt="p005" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p006.jpg" alt="p006" />
          </div>
        </div>
      </div>
      <div className="session">
        <div className="productBox">
          <div className="imageBox">
            <img src="http://localhost:3000/products/p007.jpg" alt="p007" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p008.jpg" alt="p008" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p009.jpg" alt="p009" />
          </div>
        </div>
      </div>
      <div className="session">
        <div className="productBox">
          <div className="imageBox">
            <img src="http://localhost:3000/products/p010.jpg" alt="p010" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p011.jpg" alt="p011" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p012.jpg" alt="p012" />
          </div>
        </div>
      </div>
      <div className="session">
        <div className="productBox">
          <div className="imageBox">
            <img src="http://localhost:3000/products/p013.jpg" alt="p013" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p014.jpg" alt="p014" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p015.jpg" alt="p015" />
          </div>
        </div>
      </div>
      <div className="session">
        <div className="productBox">
          <div className="imageBox">
            <img src="http://localhost:3000/products/p016.jpg" alt="p016" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p017.jpg" alt="p017" />
          </div>
          <div className="imageBox">
            <img src="http://localhost:3000/products/p018.jpg" alt="p018" />
          </div>
        </div>
      </div>
      <div className="hr">
        <div className="line"></div>
      </div>
      <div className="session">
        <div className="categoryTitle">
          <CCCAccessories />
        </div>
        <div className="productBox noPadding">
          <div className="imageBox">
            <img src="http://localhost:3000/products/p019.jpg" alt="p019" />
          </div>
          <div className="imageBox imgMargin">
            <img src="http://localhost:3000/products/p020.jpg" alt="p020" />
          </div>
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(Product)`
  padding: 70px 8.3vw;
  animation: ${fadeInAnimation} 2s;
  .title {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .session {
    display: flex;
    justify-content: center;
    .categoryTitle {
      margin-right: 48px;
      width: 140px;
    }
    .productBox {
      display: flex;
      justify-content: center;
      padding-left: 188px;
      margin-bottom: 48px;
      .imageBox {
        width: 230px;
        margin-right: 24px;
        position: relative;
        img {
          width: 100%;
        }
        &:hover {
          img {
            border-radius: 10px;
            position: absolute;
            top: -10vh;
            left: -10vw;
            width: 300%;
            z-index: 100;
            box-shadow: 3px 3px 13px #ffa000;
            animation: ${zoomInAnimation} 2s;
          }
        }
      }
      .imgMargin {
        margin-right: 274px;
      }
    }
    .noPadding {
      padding: 0;
    }
  }
  .hr {
    display: flex;
    justify-content: center;
    .line {
      margin-top: 36px;
      margin-bottom: 36px;
      border-top: 7px solid #00283b;
      border-radius: 5px;
      width: 920px;
    }
  }
`;

export default styledElement;
