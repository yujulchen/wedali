import * as React from "react";

function Intention(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 655.5 595.5"
      {...props}
    >
      <defs>
        <filter
          id="Intention_a"
          x={255}
          y={0}
          width={165.5}
          height={165.5}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={0.5} result="blur" />
          <feFlood floodColor="#365d77" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Intention_b"
          x={0}
          y={209}
          width={165.5}
          height={165.5}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={0.5} result="blur-2" />
          <feFlood floodColor="#365d77" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Intention_c"
          x={490}
          y={209}
          width={165.5}
          height={165.5}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={0.5} result="blur-3" />
          <feFlood floodColor="#365d77" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Intention_d"
          x={255}
          y={430}
          width={165.5}
          height={165.5}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={4} dy={4} />
          <feGaussianBlur stdDeviation={0.5} result="blur-4" />
          <feFlood floodColor="#365d77" />
          <feComposite operator="in" in2="blur-4" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g data-name="Group 183">
        <path
          data-name="Path 217"
          d="M335 40c138.071 0 250 111.929 250 250S473.071 540 335 540 85 428.071 85 290 196.929 40 335 40z"
          fill="#ffd149"
        />
        <path
          data-name="Path 216"
          d="M335 39c121.5 0 220 98.5 220 220s-98.5 220-220 220-220-98.5-220-220S213.5 39 335 39z"
          fill="#fff"
        />
        <g data-name="Group 215">
          <g filter="url(#Intention_a)">
            <path
              data-name="Path 200"
              d="M335 0a80 80 0 11-80 80 80 80 0 0180-80z"
              fill="#00283b"
            />
          </g>
          <text
            transform="translate(299 95)"
            fill="#fff"
            fontSize={36}
            fontFamily="NotoSansTC-Regular, Noto Sans TC"
          >
            <tspan x={0} y={0}>
              {"\u6C42\u7CBE"}
            </tspan>
          </text>
        </g>
        <g data-name="Group 216">
          <g filter="url(#Intention_b)">
            <path
              data-name="Path 201"
              d="M80 209a80 80 0 11-80 80 80 80 0 0180-80z"
              fill="#00283b"
            />
          </g>
          <text
            transform="translate(44 304)"
            fill="#fff"
            fontSize={36}
            fontFamily="NotoSansTC-Regular, Noto Sans TC"
          >
            <tspan x={0} y={0}>
              {"\u6C42\u8B8A"}
            </tspan>
          </text>
        </g>
        <g data-name="Group 217">
          <g filter="url(#Intention_c)">
            <path
              data-name="Path 199"
              d="M570 209a80 80 0 11-80 80 80 80 0 0180-80z"
              fill="#00283b"
            />
          </g>
          <text
            transform="translate(534 304)"
            fill="#fff"
            fontSize={36}
            fontFamily="NotoSansTC-Regular, Noto Sans TC"
          >
            <tspan x={0} y={0}>
              {"\u6C42\u8CEA"}
            </tspan>
          </text>
        </g>
        <text
          transform="translate(239 309.5)"
          fill="#365d77"
          fontSize={48}
          fontFamily="NotoSansTC-Regular, Noto Sans TC"
          data-name="Group 175"
        >
          <tspan x={0} y={0}>
            {"\u7D93\u71DF\u7406\u5FF5"}
          </tspan>
        </text>
        <g data-name="Group 331">
          <g filter="url(#Intention_d)">
            <path
              data-name="Path 198"
              d="M335 430a80 80 0 11-80 80 80 80 0 0180-80z"
              fill="#00283b"
            />
          </g>
          <text
            transform="translate(299 525)"
            fill="#fff"
            fontSize={36}
            fontFamily="NotoSansTC-Regular, Noto Sans TC"
          >
            <tspan x={0} y={0}>
              {"\u5171\u4EAB"}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}

export default Intention;
