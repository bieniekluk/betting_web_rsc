interface IconSportsHockeyProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black"; color2: "white" };
}

export const IconSportsHockey: React.FC<IconSportsHockeyProps> = ({
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
      <g id="Sports hockey" clip-path="url(#clip0_31_31834)">
        <g id="Group">
          <g id="Group_2">
            <path
              id="Vector"
              d="M1.4375 8.5V10H2.4375V8H1.9375C1.6625 8 1.4375 8.225 1.4375 8.5Z"
              fill={IconColors.color1}
            />
            <path
              id="Vector_2"
              d="M4.9375 7.99978H2.9375V9.99978L5.2825 9.99478C5.4725 9.99478 5.6425 9.88979 5.7275 9.71979L6.1625 8.76979L5.3675 7.02979L4.9375 7.99978Z"
              fill={IconColors.color1}
            />
            <g id="Group_3">
              <path
                id="Vector_3"
                d="M11.2925 8.145C11.2025 8.055 11.0775 8 10.9375 8H10.4375V10H11.4375V8.5C11.4375 8.36 11.3825 8.235 11.2925 8.145Z"
                fill={IconColors.color1}
              />
            </g>
            <path
              id="Vector_4"
              d="M7.23755 6.42L9.26255 2H7.58755L6.70755 3.985L6.46255 4.535L6.43755 4.605L5.28755 2H3.61255L5.63755 6.42L6.39755 8.08L6.43755 8.17L7.14755 9.72C7.23255 9.89 7.40255 9.995 7.59255 9.995L9.93755 10V8H7.93755L7.23755 6.42Z"
              fill={IconColors.color1}
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_31_31834">
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
