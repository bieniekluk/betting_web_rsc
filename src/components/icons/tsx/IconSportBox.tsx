interface IconSportBoxProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black" };
}

export const IconSportBox: React.FC<IconSportBoxProps> = ({
  iconWidth = "11",
  iconHeight = "14",
  IconColors = { color1: "black" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Vector"
            d="M1.86621 12.7141C1.86621 13.107 2.18764 13.4284 2.5805 13.4284H8.29478C8.68764 13.4284 9.00907 13.107 9.00907 12.7141V10.5713H1.86621V12.7141Z"
            fill={IconColors.color1}
          />
          <path
            id="Vector_2"
            d="M9.72321 3.42843C9.33036 3.42843 9.00893 3.74986 9.00893 4.14272V1.99986C9.00893 1.21415 8.36607 0.571289 7.58036 0.571289H1.86607C1.08036 0.571289 0.4375 1.21415 0.4375 1.99986V6.14272C0.4375 6.23557 0.444643 6.32843 0.466071 6.42129L1.0375 9.27843C1.10179 9.61414 1.39464 9.84986 1.7375 9.84986H9.1375C9.45893 9.84986 9.77321 9.59272 9.8375 9.27843L10.4089 6.42129C10.4304 6.32843 10.4375 6.23557 10.4375 6.14272V4.14272C10.4375 3.74986 10.1161 3.42843 9.72321 3.42843ZM6.86607 5.57129H2.58036C2.1875 5.57129 1.86607 5.24986 1.86607 4.857V4.14272C1.86607 3.74986 2.1875 3.42843 2.58036 3.42843H6.86607C7.25893 3.42843 7.58036 3.74986 7.58036 4.14272V4.857C7.58036 5.24986 7.25893 5.57129 6.86607 5.57129Z"
            fill={IconColors.color1}
          />
        </g>
      </g>
    </svg>
  );
};
