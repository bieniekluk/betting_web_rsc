interface IconSportAllProps {
	iconWidth?: string
	iconHeight?: string
	IconColors?: { color1: "black"; color2: "white" }
}

export const IconSportAll: React.FC<IconSportAllProps> = ({
	iconWidth = "18",
	iconHeight = "18",
	IconColors = { color1: "black", color2: "white" },
}) => {
	return (
		<svg
			width={iconWidth}
			height={iconHeight}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Group work" clip-path="url(#clip0_31_31732)">
				<path
					id="Vector"
					d="M8 1.75C4.55 1.75 1.75 4.55 1.75 8C1.75 11.45 4.55 14.25 8 14.25C11.45 14.25 14.25 11.45 14.25 8C14.25 4.55 11.45 1.75 8 1.75ZM8 13C5.24375 13 3 10.7562 3 8C3 5.24375 5.24375 3 8 3C10.7562 3 13 5.24375 13 8C13 10.7562 10.7562 13 8 13Z"
					fill={IconColors.color1}
				/>
				<path
					id="Vector_2"
					d="M5.5 10.5C6.19036 10.5 6.75 9.94036 6.75 9.25C6.75 8.55964 6.19036 8 5.5 8C4.80964 8 4.25 8.55964 4.25 9.25C4.25 9.94036 4.80964 10.5 5.5 10.5Z"
					fill={IconColors.color1}
				/>
				<path
					id="Vector_3"
					d="M8 6.75C8.69036 6.75 9.25 6.19036 9.25 5.5C9.25 4.80964 8.69036 4.25 8 4.25C7.30964 4.25 6.75 4.80964 6.75 5.5C6.75 6.19036 7.30964 6.75 8 6.75Z"
					fill={IconColors.color1}
				/>
				<path
					id="Vector_4"
					d="M10.5 10.5C11.1904 10.5 11.75 9.94036 11.75 9.25C11.75 8.55964 11.1904 8 10.5 8C9.80964 8 9.25 8.55964 9.25 9.25C9.25 9.94036 9.80964 10.5 10.5 10.5Z"
					fill={IconColors.color1}
				/>
			</g>
			<defs>
				<clipPath id="clip0_31_31732">
					<rect width="15" height="15" fill={IconColors.color2} transform="translate(0.5 0.5)" />
				</clipPath>
			</defs>
		</svg>
	)
}