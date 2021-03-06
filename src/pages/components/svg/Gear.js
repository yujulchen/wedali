import * as React from "react";

function MoldDesign(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={281.772}
      height={281.772}
      viewBox="0 0 281.772 281.772"
      {...props}
    >
      <defs>
        <filter
          id="prefix__mold"
          x={0}
          y={0}
          width={281.772}
          height={281.772}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="blur" />
          <feFlood floodColor="#c67100" floodOpacity={0.251} />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g filter="url(#prefix__mold)">
        <path
          data-name="Path 202"
          d="M45.793 153.504a98.124 98.124 0 006.632 21.614L40.55 187.345a10.965 10.965 0 00-.643 14.536l16.314 19.985a10.914 10.914 0 0014.372 2.277l14.258-9.12a96.401 96.401 0 0020.624 11.296l.264 17.19a10.934 10.934 0 009.818 10.724l25.674 2.594a10.935 10.935 0 0011.764-8.545l3.547-16.197a97.514 97.514 0 0024.037-7l11.75 11.397a10.96 10.96 0 0014.536.644l19.981-16.319a10.918 10.918 0 002.277-14.371l-8.66-13.607a95.283 95.283 0 0011.797-21.75l15.488-.217a10.935 10.935 0 0010.72-9.824l2.594-25.678a10.935 10.935 0 00-8.542-11.769l-14.916-3.284a95.898 95.898 0 00-6.85-23.373l10.479-10.809a10.965 10.965 0 00.643-14.536l-16.278-19.935a10.914 10.914 0 00-14.372-2.277l-12.308 7.882a96.187 96.187 0 00-22.61-12.278l-.231-14.925a10.934 10.934 0 00-9.818-10.725l-25.673-2.593a10.934 10.934 0 00-11.764 8.545l-3.21 14.577a95.785 95.785 0 00-25.246 7.791L89.484 37.08a10.961 10.961 0 00-14.537-.643L54.971 52.755a10.918 10.918 0 00-2.278 14.371l8.627 13.516a94.054 94.054 0 00-11.234 21.767l-16.009.203a10.935 10.935 0 00-10.724 9.823l-2.594 25.679a10.935 10.935 0 008.543 11.769z"
          fill="#ffa000"
        />
      </g>
    </svg>
  );
}

export default MoldDesign;
