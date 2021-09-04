import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import ProductMobileTitleEnglish from "./components/svg/ProductMobileTitleEnglish";

import p001 from "../products/p001.jpg";
import p002 from "../products/p002.jpg";
import p003 from "../products/p003.jpg";
import p004 from "../products/p004.jpg";
import p005 from "../products/p005.jpg";
import p006 from "../products/p006.jpg";
import p007 from "../products/p007.jpg";
import p008 from "../products/p008.jpg";
import p009 from "../products/p009.jpg";
import p010 from "../products/p010.jpg";
import p011 from "../products/p011.jpg";
import p012 from "../products/p012.jpg";
import p013 from "../products/p013.jpg";
import p014 from "../products/p014.jpg";
import p015 from "../products/p015.jpg";
import p016 from "../products/p016.jpg";
import p017 from "../products/p017.jpg";
import p018 from "../products/p018.jpg";
import p019 from "../products/p019.jpg";
import p020 from "../products/p020.jpg";

const fadeInAnimation = keyframes`${fadeIn}`;

const ProductMobileEnglish = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="title">
        <ProductMobileTitleEnglish style={{ width: "100%" }} />
      </div>
      <div className="categoryTitle">
        <p>
          Car
          <br />
          Accessories
        </p>
      </div>
      <div className="pictureBox">
        <div className="imageBox">
          <img src={p001} alt="p001" />
        </div>
        <div className="imageBox">
          <img src={p002} alt="p002" />
        </div>
        <div className="imageBox">
          <img src={p003} alt="p003" />
        </div>
        <div className="imageBox">
          <img src={p004} alt="p004" />
        </div>
        <div className="imageBox">
          <img src={p005} alt="p005" />
        </div>
        <div className="imageBox">
          <img src={p006} alt="p006" />
        </div>
        <div className="imageBox">
          <img src={p007} alt="p007" />
        </div>
        <div className="imageBox">
          <img src={p008} alt="p008" />
        </div>
        <div className="imageBox">
          <img src={p009} alt="p009" />
        </div>
        <div className="imageBox">
          <img src={p010} alt="p010" />
        </div>
        <div className="imageBox">
          <img src={p011} alt="p011" />
        </div>
        <div className="imageBox">
          <img src={p012} alt="p012" />
        </div>
        <div className="imageBox">
          <img src={p013} alt="p013" />
        </div>
        <div className="imageBox">
          <img src={p014} alt="p014" />
        </div>
        <div className="imageBox">
          <img src={p015} alt="p015" />
        </div>
        <div className="imageBox">
          <img src={p016} alt="p016" />
        </div>
        <div className="imageBox">
          <img src={p017} alt="p017" />
        </div>
        <div className="imageBox">
          <img src={p018} alt="p018" />
        </div>
        <div className="categoryTitle">
          <p>
            3C
            <br />
            Accessories
          </p>
        </div>
        <div className="imageBox">
          <img src={p019} alt="p019" />
        </div>
        <div className="imageBox">
          <img src={p020} alt="p020" />
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(ProductMobileEnglish)`
  padding: 56px;
  overflow: hidden;
  animation: ${fadeInAnimation} 2s;
  .title {
    margin: 36px auto;
    padding-left: 12px;
  }
  .categoryTitle {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background: #00283b;
    border-radius: 50%;
    p {
      padding-top: 25%;
      color: #fff;
      text-align: center;
    }
  }
  .pictureBox {
    width: 100%;
    .imageBox {
      margin: 24px 12px;
      img {
        width: 100%;
      }
    }
  }
`;

export default styledElement;
