interface IconCouponProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "#949494" };
}

export const IconCoupon: React.FC<IconCouponProps> = ({
  iconWidth = "22",
  iconHeight = "18",
  IconColors = { color1: "#949494" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 9338">
        <path
          id="Vector"
          d="M21 4.75C21.1381 4.75 21.25 4.86193 21.25 5V13C21.25 13.1381 21.1381 13.25 21 13.25H16C15.8619 13.25 15.75 13.1381 15.75 13V5C15.75 4.86193 15.8619 4.75 16 4.75H21Z"
          stroke="#949494"
          stroke-width="1.5"
        />
        <path
          id="Vector_2"
          d="M5 4.75H12C12.1381 4.75 12.25 4.86193 12.25 5V13C12.25 13.1381 12.1381 13.25 12 13.25H5C4.86193 13.25 4.75 13.1381 4.75 13V5C4.75 4.86193 4.86193 4.75 5 4.75Z"
          stroke="#949494"
          stroke-width="1.5"
        />
        <path
          id="Vector_3"
          d="M20 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 15C20 15.5523 19.5523 16 19 16H3C2.44772 16 2 15.5523 2 15V3C2 2.44772 2.44772 2 3 2H20V15Z"
          fill={IconColors.color1}
        />
      </g>
    </svg>
  );
};
