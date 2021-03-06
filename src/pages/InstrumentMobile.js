import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import InstrumentMobileTitle from "./components/svg/InstrumentMobileTitle";

import m001 from "../machine/m001.png";
import m002 from "../machine/m002.png";
import m003 from "../machine/m003.png";
import m004 from "../machine/m004.png";
import m005 from "../machine/m005.png";
import m006 from "../machine/m006.png";
import m007 from "../machine/m007.png";

const fadeInAnimation = keyframes`${fadeIn}`;

const InstrumentMobile = (props) => {
  const { className } = props;
  const [clickItem, setClickItem] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log(clickItem, show);
  }, [clickItem, show]);

  return (
    <div className={className}>
      <div className="title">
        <InstrumentMobileTitle style={{ width: "100%" }} />
      </div>
      <div className="pictureBox">
        <div className="imageBox">
          <img
            src={m001}
            alt="m001"
            style={{ display: clickItem === "m001" ? "none" : "block" }}
            onClick={() => {
              setClickItem("m001");
              setShow(true);
            }}
          />
          {show && (
            <div
              className="name"
              style={{ display: clickItem === "m001" ? "flex" : "none" }}
              onClick={() => {
                setClickItem("");
                setShow(!show);
              }}
            >
              切斷機
            </div>
          )}
        </div>
        <div className="imageBox">
          <img
            src={m002}
            alt="m002"
            style={{ display: clickItem === "m002" ? "none" : "block" }}
            onClick={() => {
              setClickItem("m002");
              setShow(true);
            }}
          />
          {show && (
            <div
              className="name"
              style={{ display: clickItem === "m002" ? "flex" : "none" }}
              onClick={() => {
                setClickItem("");
                setShow(!show);
              }}
            >
              洗床
            </div>
          )}
        </div>
        <div className="imageBox">
          <img
            src={m003}
            alt="m003"
            style={{ display: clickItem === "m003" ? "none" : "block" }}
            onClick={() => {
              setClickItem("m003");
              setShow(true);
            }}
          />
          {show && (
            <div
              className="name"
              style={{ display: clickItem === "m003" ? "flex" : "none" }}
              onClick={() => {
                setClickItem("");
                setShow(!show);
              }}
            >
              放電機
            </div>
          )}
        </div>
        <div className="imageBox">
          <img
            src={m004}
            alt="m004"
            style={{ display: clickItem === "m004" ? "none" : "block" }}
            onClick={() => {
              setClickItem("m004");
              setShow(true);
            }}
          />
          {show && (
            <div
              className="name"
              style={{ display: clickItem === "m004" ? "flex" : "none" }}
              onClick={() => {
                setClickItem("");
                setShow(!show);
              }}
            >
              車床
            </div>
          )}
        </div>
        <div className="imageBox">
          <img
            src={m005}
            alt="m005"
            style={{ display: clickItem === "m005" ? "none" : "block" }}
            onClick={() => {
              setClickItem("m005");
              setShow(true);
            }}
          />
          {show && (
            <div
              className="name"
              style={{ display: clickItem === "m005" ? "flex" : "none" }}
              onClick={() => {
                setClickItem("");
                setShow(!show);
              }}
            >
              頂針研磨切斷機
            </div>
          )}
        </div>
        <div className="imageBox">
          <img
            src={m006}
            alt="m006"
            style={{ display: clickItem === "m006" ? "none" : "block" }}
            onClick={() => {
              setClickItem("m006");
              setShow(true);
            }}
          />
          {show && (
            <div
              className="name"
              style={{ display: clickItem === "m006" ? "flex" : "none" }}
              onClick={() => {
                setClickItem("");
                setShow(!show);
              }}
            >
              磨床
            </div>
          )}
        </div>
        <div className="imageBox">
          <img
            src={m007}
            alt="m007"
            style={{ display: clickItem === "m007" ? "none" : "block" }}
            onClick={() => {
              setClickItem("m007");
              setShow(true);
            }}
          />
          {show && (
            <div
              className="name"
              style={{ display: clickItem === "m007" ? "flex" : "none" }}
              onClick={() => {
                setClickItem("");
                setShow(!show);
              }}
            >
              鋸床
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(InstrumentMobile)`
  padding: 56px;
  overflow: hidden;
  animation: ${fadeInAnimation} 2s;
  .title {
    margin: 36px auto 12px auto;
    padding-left: 12px;
  }
  .pictureBox {
    width: 100%;
    .name {
      margin: 12px 12px 48px 12px;
      padding: 100px 10px;
      border-radius: 10px;
      color: #fff;
      background: #365d77;
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .imageBox {
      margin: 12px 12px 48px 12px;
      img {
        width: 100%;
      }
    }
  }
`;

export default styledElement;
