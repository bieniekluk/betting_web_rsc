interface IconArrowCollapseLeftProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black" };
}

export const IconArrowCollapseLeft: React.FC<IconArrowCollapseLeftProps> = ({
  iconWidth = "18",
  iconHeight = "18",
  IconColors = { color1: "black" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-collapse-left">
        <path
          id="Vector"
          d="M9.05683 3.39016L14.6668 9.00016L9.05683 14.6102L8.05808 13.6043L11.9539 9.7085L1.91683 9.7085L1.91683 8.29183L11.9539 8.29183L8.051 4.396L9.05683 3.39016ZM14.6668 9.00016L14.6668 16.0835L16.0835 16.0835L16.0835 1.91683L14.6668 1.91683L14.6668 9.00016Z"
          fill={IconColors.color1}
        />
      </g>
    </svg>
  );
};
