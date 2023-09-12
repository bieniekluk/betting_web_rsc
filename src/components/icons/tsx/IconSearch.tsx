interface IconSearchProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black" };
}

export const IconSearch: React.FC<IconSearchProps> = ({
  iconWidth = "13",
  iconHeight = "13",
  IconColors = { color1: "black" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M9.28566 8.27638H8.7541L8.5657 8.09471C9.2251 7.32765 9.62208 6.33183 9.62208 5.24854C9.62208 2.833 7.66408 0.875 5.24854 0.875C2.833 0.875 0.875 2.833 0.875 5.24854C0.875 7.66408 2.833 9.62208 5.24854 9.62208C6.33183 9.62208 7.32765 9.2251 8.09471 8.5657L8.27638 8.7541V9.28566L11.6406 12.6432L12.6432 11.6406L9.28566 8.27638ZM5.24854 8.27638C3.57314 8.27638 2.2207 6.92394 2.2207 5.24854C2.2207 3.57314 3.57314 2.2207 5.24854 2.2207C6.92394 2.2207 8.27638 3.57314 8.27638 5.24854C8.27638 6.92394 6.92394 8.27638 5.24854 8.27638Z"
        fill={IconColors.color1}
      />
    </svg>
  );
};
