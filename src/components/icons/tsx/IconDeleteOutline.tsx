interface IconDeleteOutlineProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "#323232" };
}

export const IconDeleteOutline: React.FC<IconDeleteOutlineProps> = ({
  iconWidth = "11",
  iconHeight = "12",
  IconColors = { color1: "#323232" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="delete_outline">
        <path
          id="Vector"
          d="M2.74984 9.20833C2.74984 9.7125 3.16234 10.125 3.6665 10.125H7.33317C7.83734 10.125 8.24984 9.7125 8.24984 9.20833V3.70833H2.74984V9.20833ZM3.6665 4.625H7.33317V9.20833H3.6665V4.625ZM7.104 2.33333L6.64567 1.875H4.354L3.89567 2.33333H2.2915V3.25H8.70817V2.33333H7.104Z"
          fill={IconColors.color1}
        />
      </g>
    </svg>
  );
};
