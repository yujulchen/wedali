import * as React from "react";

function IntentionEnglish(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={655.5}
      height={595.5}
      viewBox="0 0 655.5 595.5"
      {...props}
    >
      <defs>
        <filter
          id="IntentionEnglish_a"
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
          id="IntentionEnglish_b"
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
          id="IntentionEnglish_c"
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
          id="IntentionEnglish_d"
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
          <g filter="url(#IntentionEnglish_a)">
            <path
              data-name="Path 200"
              d="M335 0a80 80 0 11-80 80 80 80 0 0180-80z"
              fill="#00283b"
            />
          </g>
          <text
            transform="translate(270 90)"
            fill="#fff"
            fontSize={24}
            fontFamily="NotoSansTC-Regular, Noto Sans TC"
          >
            <tspan x={0} y={0}>
              {"Refinement"}
            </tspan>
          </text>
        </g>
        <g data-name="Group 216">
          <g filter="url(#IntentionEnglish_b)">
            <path
              data-name="Path 201"
              d="M80 209a80 80 0 11-80 80 80 80 0 0180-80z"
              fill="#00283b"
            />
          </g>
          <text
            transform="translate(27 299)"
            fill="#fff"
            fontSize={24}
            fontFamily="NotoSansTC-Regular, Noto Sans TC"
          >
            <tspan x={0} y={0}>
              {"Evolution"}
            </tspan>
          </text>
        </g>
        <g data-name="Group 217">
          <g filter="url(#IntentionEnglish_c)">
            <path
              data-name="Path 199"
              d="M570 209a80 80 0 11-80 80 80 80 0 0180-80z"
              fill="#00283b"
            />
          </g>
          <text
            data-name="Quality"
            transform="translate(527 299)"
            fill="#fff"
            fontSize={24}
            fontFamily="NotoSansTC-Regular, Noto Sans TC"
          >
            <tspan x={0} y={0}>
              {"Quality"}
            </tspan>
          </text>
        </g>
        <g data-name="Group 332">
          <g filter="url(#IntentionEnglish_d)">
            <path
              data-name="Path 198"
              d="M335 430a80 80 0 11-80 80 80 80 0 0180-80z"
              fill="#00283b"
            />
          </g>
          <text
            transform="translate(292 520)"
            fill="#fff"
            fontSize={24}
            fontFamily="NotoSansTC-Regular, Noto Sans TC"
          >
            <tspan x={0} y={0}>
              {"Sharing"}
            </tspan>
          </text>
        </g>
        <text
          data-name="Company Philosophy"
          transform="translate(335 279)"
          fill="#365d77"
          fontSize={36}
          fontFamily="NotoSansTC-Regular, Noto Sans TC"
        >
          <tspan x={-84.492} y={0}>
            {"Company "}
          </tspan>
          <tspan x={-94.086} y={50}>
            {"Philosophy"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default IntentionEnglish;
