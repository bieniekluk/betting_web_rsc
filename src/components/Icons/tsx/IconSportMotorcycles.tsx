interface IconSportMotorcyclesProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black" };
}

export const IconSportMotorcycles: React.FC<IconSportMotorcyclesProps> = ({
  iconWidth = "13",
  iconHeight = "10",
  IconColors = { color1: "black" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Vector"
            d="M6.43844 4.63396C6.43844 4.2439 6.2044 3.89584 5.85035 3.74582L2.5018 2.32959C1.61366 3.33775 1.10958 4.54995 0.821533 5.60012H5.47228C6.00637 5.60012 6.43844 5.16805 6.43844 4.63396Z"
            fill={IconColors.color1}
          />
          <path
            id="Vector_2"
            d="M12.4154 4.53174C12.1694 1.88531 9.67899 0.0370102 7.02656 0.211038C5.52032 0.307054 4.36213 0.775129 3.46799 1.43524L6.31245 2.64143C7.11058 2.98349 7.63266 3.76361 7.63266 4.63375C7.63266 5.82795 6.66051 6.8001 5.46631 6.8001H0.56352C0.4375 7.58623 0.4375 8.12032 0.4375 8.12032V8.60039C0.4375 9.2605 0.977587 9.80059 1.63769 9.80059H7.63866C10.4411 9.80059 12.6855 7.3942 12.4154 4.53174Z"
            fill={IconColors.color1}
          />
        </g>
      </g>
    </svg>
  );
};
