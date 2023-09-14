interface IconArrowCollapseRightProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black" };
}

export const IconArrowCollapseRight: React.FC<IconArrowCollapseRightProps> = ({
  iconWidth = "17",
  iconHeight = "18",
  IconColors = { color1: "black" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-collapse-left">
        <path
          id="Vector"
          d="M8.44341 14.6098L2.83341 8.99984L8.44341 3.38984L9.44216 4.39567L5.54633 8.2915L15.5834 8.2915L15.5834 9.70817L5.54633 9.70817L9.44924 13.604L8.44341 14.6098ZM2.83341 8.99984L2.83341 1.9165L1.41675 1.9165L1.41675 16.0832L2.83341 16.0832L2.83341 8.99984Z"
          fill={IconColors.color1}
        />
      </g>
    </svg>
  );
};
