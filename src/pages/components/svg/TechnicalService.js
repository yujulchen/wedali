import * as React from "react";

function TechnicalService(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318 303" {...props}>
      <defs>
        <filter
          id="TechnicalService_a"
          x={0}
          y={0}
          width={318}
          height={303}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="blur" />
          <feFlood floodColor="#365d77" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g data-name="Group 219">
        <g filter="url(#TechnicalService_a)">
          <g data-name="Polygon 1" fill="#00283b">
            <path d="M245.895 289H72.105a5.985 5.985 0 01-5.705-4.144L12.7 119.774a5.984 5.984 0 012.182-6.712L155.476 11.029A5.963 5.963 0 01159 9.885c1.274 0 2.493.395 3.524 1.144l140.593 102.033a5.984 5.984 0 012.182 6.712L251.6 284.856a5.985 5.985 0 01-5.705 4.144z" />
            <path
              d="M159 11.885c-.85 0-1.662.263-2.35.762L16.059 114.681a3.99 3.99 0 00-1.455 4.474l53.698 165.082A3.99 3.99 0 0072.105 287h173.79a3.99 3.99 0 003.804-2.763l53.698-165.082a3.99 3.99 0 00-1.455-4.474L161.35 12.647a3.975 3.975 0 00-2.349-.762m0-4a7.99 7.99 0 014.699 1.525l140.593 102.033a8 8 0 012.908 8.95l-53.698 165.082a8 8 0 01-7.607 5.525H72.105a8 8 0 01-7.607-5.525L10.8 120.393a8 8 0 012.908-8.95L154.301 9.41A7.99 7.99 0 01159 7.885z"
              fill="#ffa000"
            />
          </g>
        </g>
        <g data-name="Group 186">
          <g data-name="Group 218" fill="#fff">
            <text
              transform="translate(103 128)"
              fontSize={28}
              fontFamily="NotoSansTC-Bold, Noto Sans TC"
              fontWeight={700}
            >
              <tspan x={0} y={0}>
                {"\u6280\u8853\u670D\u52D9"}
              </tspan>
            </text>
            <text
              data-name="\u63D0\u4F9BODM/OEM\u7522\u54C1\u958B\u767C\u5EFA\u8B70"
              transform="translate(92 149)"
              fontSize={16}
              fontFamily="NotoSansTC-Regular, Noto Sans TC"
            >
              <tspan x={4.888} y={19}>
                {"\u63D0\u4F9BODM/OEM\u7522"}
              </tspan>
              <tspan x={27} y={43}>
                {"\u54C1\u958B\u767C\u5EFA\u8B70"}
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default TechnicalService;
