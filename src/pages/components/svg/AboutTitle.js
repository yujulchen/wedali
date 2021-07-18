import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={937.904}
      height={153.675}
      viewBox="0 0 937.904 153.675"
      {...props}
    >
      <defs>
        <filter
          id="about_a"
          x={404}
          y={21}
          width={533.904}
          height={132.675}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={5} />
          <feGaussianBlur stdDeviation={3} result="blur" />
          <feFlood floodColor="#c67100" floodOpacity={0.251} />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="about_b"
          x={0}
          y={0}
          width={533.904}
          height={132.675}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={5} />
          <feGaussianBlur stdDeviation={3} result="blur-2" />
          <feFlood floodColor="#c67100" floodOpacity={0.6} />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(0 -.003)" filter="url(#about_a)">
        <path
          data-name="Rectangle 457"
          fill="#ffd149"
          d="M417.61 25l511.298 26.796-4.605 87.88-511.299-26.797z"
        />
      </g>
      <text
        data-name="ABOUT US"
        transform="rotate(3 -1392.43 11738.133)"
        fill="#fff"
        fontSize={24}
        fontFamily="NotoSansTC-Regular, Noto Sans TC"
      >
        <tspan x={0} y={0}>
          {"ABOUT US"}
        </tspan>
      </text>
      <g>
        <g transform="translate(-.004 .005)" filter="url(#about_b)">
          <path
            data-name="Rectangle 456"
            fill="#ffa000"
            d="M9 30.8L520.298 4.004l4.606 87.88-511.298 26.795z"
          />
        </g>
        <text
          transform="rotate(-3 1522.444 -4153.519)"
          fill="#fff"
          fontSize={24}
          fontFamily="NotoSansTC-Regular, Noto Sans TC"
        >
          <tspan x={0} y={0}>
            {"\u516C\u53F8\u4ECB\u7D39"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgComponent;
