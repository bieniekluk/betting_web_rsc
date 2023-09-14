interface IconFacebookProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black" };
}

export const IconFacebook: React.FC<IconFacebookProps> = ({
  iconWidth = "21",
  iconHeight = "21",
  IconColors = { color1: "black" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M10.3489 0.895264C4.87275 0.895264 0.412109 5.3559 0.412109 10.8321C0.412109 16.3083 4.87275 20.7689 10.3489 20.7689C15.8251 20.7689 20.2858 16.3083 20.2858 10.8321C20.2858 5.3559 15.8251 0.895264 10.3489 0.895264ZM10.3489 2.88263C14.7511 2.88263 18.2984 6.42996 18.2984 10.8321C18.2984 14.8212 15.3823 18.0989 11.56 18.6806V13.2018H13.8734L14.2363 10.8515H11.56V9.5667C11.56 8.58991 11.8782 7.72295 12.7924 7.72295H14.2596V5.67154C14.0013 5.63676 13.456 5.56091 12.4256 5.56091C10.2733 5.56091 9.01174 6.69769 9.01174 9.28722V10.8515H6.79924V13.2018H9.01174V18.6612C5.25163 18.0272 2.39948 14.7772 2.39948 10.8321C2.39948 6.42996 5.9468 2.88263 10.3489 2.88263Z"
        fill={IconColors.color1}
      />
    </svg>
  );
};
