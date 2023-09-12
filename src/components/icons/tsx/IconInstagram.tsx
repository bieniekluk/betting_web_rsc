interface IconInstagramProps {
  iconWidth?: string;
  iconHeight?: string;
  IconColors?: { color1: "black" };
}

export const IconInstagram: React.FC<IconInstagramProps> = ({
  iconWidth = "26",
  iconHeight = "21",
  IconColors = { color1: "black" },
}) => {
  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M25.1267 0.895264C24.1579 1.47032 22.2141 2.25404 21.0715 2.48009C21.0379 2.48879 21.0106 2.49996 20.9783 2.50866C19.9685 1.51255 18.5849 0.895264 17.0535 0.895264C13.9671 0.895264 11.4644 3.39795 11.4644 6.48439C11.4644 6.64709 11.4507 6.94642 11.4644 7.1054C7.29986 7.1054 4.13021 4.9244 1.8573 2.13729C1.61013 2.75831 1.50208 3.73951 1.50208 4.66109C1.50208 6.40117 2.8621 8.1102 4.97976 9.16965C4.58976 9.27026 4.16002 9.3423 3.71289 9.3423C2.99127 9.3423 2.22742 9.15226 1.52816 8.57596C1.52816 8.59708 1.52816 8.61695 1.52816 8.63931C1.52816 11.0712 4.10909 12.7268 6.40436 13.1876C5.9386 13.4621 4.99963 13.4894 4.54132 13.4894C4.21839 13.4894 3.07573 13.3416 2.77019 13.2845C3.40859 15.2779 5.71131 16.3983 7.90597 16.438C6.18949 17.7844 4.99839 18.2837 1.48345 18.2837H0.286133C2.50688 19.707 5.33498 20.769 8.16928 20.769C17.3976 20.769 22.6426 13.7353 22.6426 7.1054C22.6426 6.99859 22.6402 6.77502 22.6364 6.55022C22.6364 6.52786 22.6426 6.50674 22.6426 6.48439C22.6426 6.45085 22.6327 6.41856 22.6327 6.38503C22.629 6.21611 22.6252 6.05837 22.6215 5.9764C23.6027 5.26844 24.4535 4.38536 25.1267 3.37932C24.2262 3.77925 23.2599 4.04753 22.2452 4.16925C23.281 3.54824 24.7528 2.06774 25.1267 0.895264ZM20.1586 7.1054C20.1586 12.1729 16.4859 17.5372 9.64357 18.2129C10.5701 17.5558 11.4644 16.6231 11.4644 16.6231C11.4644 16.6231 7.7383 13.3168 7.45884 8.99701C8.74434 9.38949 10.0832 9.58946 11.4644 9.58946H13.9484V6.48439C13.9509 4.77039 15.3395 3.38056 17.0535 3.38056C18.7687 3.38056 20.1586 4.77039 20.1586 6.48563C20.1586 6.48563 20.1586 7.00728 20.1586 7.1054Z"
        fill={IconColors.color1}
      />
    </svg>
  );
};
