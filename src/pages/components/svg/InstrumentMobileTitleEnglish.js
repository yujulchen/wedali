import * as React from "react";

function InstrumentMobileTitleEnglish(props) {
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
          id="InstrumentMobileTitleEnglish__a"
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
      <g
        transform="translate(.002 .003)"
        filter="url(#InstrumentMobileTitleEnglish__a)"
      >
        <path
          data-name="Rectangle 456"
          fill="#ffa000"
          d="M0 10.47L199.726.003l1.799 34.328L1.799 44.798z"
        />
      </g>
      <text
        data-name="MACHINERY and EQUIPMENT"
        transform="rotate(-3 613.772 -378.198)"
        fill="#fff"
        fontSize={12}
        fontFamily="SegoeUI, Segoe UI"
      >
        <tspan x={0} y={0}>
          {"MACHINERY and EQUIPMENT"}
        </tspan>
      </text>
    </svg>
  );
}

export default InstrumentMobileTitleEnglish;
