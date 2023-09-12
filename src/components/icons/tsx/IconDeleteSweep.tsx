interface IconDeleteSweepProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "#949494"; color2: "white" };
}

export const IconDeleteSweep: React.FC<IconDeleteSweepProps> = ({
  iconWidth = "24",
  iconHeight = "24",
  IconColors = { color1: "#949494", color2: "white" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="delete_sweep" clip-path="url(#clip0_31_32281)">
        <path
          id="Vector"
          d="M15 16H19V18H15V16ZM15 8H22V10H15V8ZM15 12H21V14H15V12ZM3 18C3 19.1 3.9 20 5 20H11C12.1 20 13 19.1 13 18V8H3V18ZM5 10H11V18H5V10ZM10 4H6L5 5H2V7H14V5H11L10 4Z"
          fill={IconColors.color1}
        />
      </g>
      <defs>
        <clipPath id="clip0_31_32281">
          <rect width="24" height="24" fill={IconColors.color2} />
        </clipPath>
      </defs>
    </svg>
  );
};