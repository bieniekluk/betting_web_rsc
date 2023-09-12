interface IconSportF1Props {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black" };
}

export const IconSportF1: React.FC<IconSportF1Props> = ({
  iconWidth = "11",
  iconHeight = "12",
  IconColors = { color1: "black" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M6.4375 1.66683L5.9575 0.700163C5.84417 0.473496 5.61083 0.333496 5.3575 0.333496H1.10417C0.7375 0.333496 0.4375 0.633496 0.4375 1.00016V11.0002C0.4375 11.3668 0.7375 11.6668 1.10417 11.6668C1.47083 11.6668 1.77083 11.3668 1.77083 11.0002V7.00016H5.10417L5.58417 7.96683C5.6975 8.1935 5.93083 8.3335 6.1775 8.3335H9.77083C10.1375 8.3335 10.4375 8.0335 10.4375 7.66683V2.3335C10.4375 1.96683 10.1375 1.66683 9.77083 1.66683H6.4375ZM9.10417 7.00016H6.4375L5.77083 5.66683H1.77083V1.66683H5.10417L5.77083 3.00016H9.10417V7.00016Z"
        fill={IconColors.color1}
      />
    </svg>
  );
};
