import * as React from "react";

function CarAccessories(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" {...props}>
      <g transform="translate(-260 -501)">
        <circle
          data-name="Ellipse 29"
          cx={70}
          cy={70}
          r={70}
          transform="translate(260 501)"
          fill="#00283b"
        />
        <g data-name="Group 175" fill="#fff">
          <text
            transform="translate(298 566)"
            fontSize={16}
            fontFamily="NotoSansTC-Regular, Noto Sans TC"
          >
            <tspan x={0} y={0}>
              {"\u6C7D\u8ECA\u914D\u4EF6"}
            </tspan>
          </text>
          <text
            data-name="Car Accessories"
            transform="translate(289 592)"
            fontSize={12}
            fontFamily="SegoeUI, Segoe UI"
          >
            <tspan x={0} y={0}>
              {"Car Accessories"}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}

export default CarAccessories;
