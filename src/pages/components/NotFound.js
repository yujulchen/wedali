import React, { useState, useEffect } from "react";
import { withRouter, Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Sorry from "../../image/sorry.jpg";

function GetUrl() {
  const location = useLocation();
  return location.pathname;
}

const NotFound = (props) => {
  const { className } = props;
  const [url, setUrl] = useState("");
  const getLink = GetUrl();

  useEffect(() => {
    console.log(getLink);
    switch (getLink) {
      case "/":
        props.history.push("/");
        break;
      case "/product":
        props.history.push("/product");
        break;
      case "/instrument":
        props.history.push("/instrument");
        break;
      case "/about":
        props.history.push("/about");
        break;
      case "/contact":
        props.history.push("/contact");
        break;
      case "/english":
        props.history.push("/english");
        break;
      case "/english/product":
        props.history.push("/english/product");
        break;
      case "/english/instrument":
        props.history.push("/english/instrument");
        break;
      case "/english/about":
        props.history.push("/english/about");
        break;
      case "/english/contact":
        props.history.push("/english/contact");
        break;
      default:
        return "error";
    }
  }, []);

  return (
    <div className={className}>
      <div className="imageBox">
        <div className="textBox">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>
              <h4>不好意思好像出錯了</h4>
              連接至首頁
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styledElement = styled(NotFound)`
  .imageBox {
    height: 100vh;
    background-image: url(${Sorry});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    opacity: 0.9;
    .textBox {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h4 {
        text-align: center;
      }
      p {
        margin: 0 0 10em;
        padding: 2em;
        background-color: #eff0f1;
        display: inline-block;
        background-color: "white";
        font-size: 24px;
        text-decoration: none;
        color: #d94600;
        border-radius: 10px;
        text-align: center;
        &:hover {
          background-color: #d0d0d0;
          color: #3c3c3c;
        }
      }
    }
  }
`;

export default withRouter(styledElement);
