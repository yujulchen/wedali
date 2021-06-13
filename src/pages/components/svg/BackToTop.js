import * as React from "react";

function BackToTop(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={80}
      viewBox="0 0 80 80"
      {...props}
    >
      <defs>
        <clipPath id="prefix__a">
          <path
            d="M7.142 29V18.125H0L12.5 5.437 25 18.125h-7.144V29zM0 3.625V0h25v3.625z"
            transform="translate(-.063 -.145)"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g transform="translate(-1240 -2505)">
        <circle
          data-name="Ellipse 28"
          cx={40}
          cy={40}
          r={40}
          transform="translate(1240 2505)"
          fill="#ffa000"
        />
        <g data-name="Icon / icon-upload">
          <path
            data-name="Shape"
            d="M1258.566 2523.566h42.868v42.868h-42.868z"
            fill="none"
          />
          <g data-name="Group 159">
            <path
              data-name="Shape"
              d="M1274.576 2559.566v-10.875h-7.142l12.5-12.688 12.5 12.688h-7.144v10.875zm-7.142-25.375v-3.625h25v3.625z"
              fill="#fff"
            />
            <g
              data-name="Mask Group 159"
              clipPath="url(#prefix__a)"
              transform="translate(1267.497 2530.711)"
            >
              <path
                fill="#fff"
                d="M-9.063-7.145h43v43h-43z"
                data-name="Icon Fill"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default BackToTop;
