import * as React from "react";

function MainProcessMEnglish(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={212.525}
      height={57.795}
      viewBox="0 0 212.525 57.795"
      {...props}
    >
      <defs>
        <filter
          id="MainProcessMEnglish__a"
          x={0}
          y={0}
          width={212.525}
          height={57.795}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={8} dy={10} />
          <feGaussianBlur stdDeviation={1} result="blur" />
          <feFlood floodColor="#ffd149" floodOpacity={0.6} />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(.002 .003)" filter="url(#MainProcessMEnglish__a)">
        <path
          data-name="Rectangle 456"
          fill="#ffa000"
          d="M0 10.47L199.726.003l1.799 34.328L1.799 44.798z"
        />
      </g>
      <text
        data-name="MAIN PROCESS"
        transform="rotate(-3 652.989 -704.05)"
        fill="#fff"
        fontSize={18}
        fontFamily="NotoSansTC-Regular, Noto Sans TC"
      >
        <tspan x={0} y={0}>
          {"MAIN PROCESS"}
        </tspan>
      </text>
    </svg>
  );
}

export default MainProcessMEnglish;
