interface IconSportsVolleyballProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black"; color2: "white" };
}

export const IconSportsVolleyball: React.FC<IconSportsVolleyballProps> = ({
  iconWidth = "13",
  iconHeight = "12",
  IconColors = { color1: "black", color2: "white" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Sports volleyball" clip-path="url(#clip0_31_31796)">
        <g id="Group">
          <g id="Group_2">
            <path
              id="Vector"
              d="M3.4375 2.00488C2.2275 2.91988 1.4375 4.36488 1.4375 5.99988C1.4375 6.72988 1.5975 7.42488 1.8825 8.05488L3.4375 7.15488V2.00488Z"
              fill={IconColors.color1}
            />
            <path
              id="Vector_2"
              d="M5.9375 5.7099V1.0249C5.4075 1.0799 4.9025 1.2149 4.4375 1.4199V6.5799L5.9375 5.7099Z"
              fill={IconColors.color1}
            />
            <path
              id="Vector_3"
              d="M6.43757 6.57471L2.38257 8.91471C2.68757 9.33471 3.05257 9.70971 3.47257 10.0147L7.93757 7.44471L6.43757 6.57471Z"
              fill={IconColors.color1}
            />
            <path
              id="Vector_4"
              d="M6.9375 3.97998V5.70998L10.9925 8.04998C11.2025 7.58498 11.3425 7.08498 11.4025 6.55998L6.9375 3.97998Z"
              fill={IconColors.color1}
            />
            <path
              id="Vector_5"
              d="M4.47241 10.6C5.07741 10.855 5.73741 11 6.43741 11C8.10741 11 9.58241 10.175 10.4924 8.92002L8.93741 8.02002L4.47241 10.6Z"
              fill={IconColors.color1}
            />
            <path
              id="Vector_6"
              d="M11.3975 5.4049C11.1225 3.0899 9.2675 1.2549 6.9375 1.0249V2.8249L11.3975 5.4049Z"
              fill={IconColors.color1}
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_31_31796">
          <rect
            width="12"
            height="12"
            fill={IconColors.color2}
            transform="translate(0.4375)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
