interface IconHeartProps {
	iconWidth?: string
	iconHeight?: string
	IconColors?: { color1: "black"; color2: "white" }
}

export const IconHeart: React.FC<IconHeartProps> = ({
	iconWidth = "18",
	iconHeight = "18",
	IconColors = { color1: "black", color2: "white" },
}) => {
	return (
		<svg
			width={iconWidth}
			height={iconHeight}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="favorite_border" clipPath="url(#clip0_31_31974)">
				<path
					id="Vector"
					d="M12.375 2.47461C11.07 2.47461 9.8175 3.06186 9 3.98986C8.1825 3.06186 6.93 2.47461 5.625 2.47461C3.315 2.47461 1.5 4.22911 1.5 6.46211C1.5 9.20261 4.05 11.4356 7.9125 14.8286L9 15.7784L10.0875 14.8214C13.95 11.4356 16.5 9.20261 16.5 6.46211C16.5 4.22911 14.685 2.47461 12.375 2.47461ZM9.075 13.7484L9 13.8209L8.925 13.7484C5.355 10.6236 3 8.55736 3 6.46211C3 5.01211 4.125 3.92461 5.625 3.92461C6.78 3.92461 7.905 4.64236 8.3025 5.63561H9.705C10.095 4.64236 11.22 3.92461 12.375 3.92461C13.875 3.92461 15 5.01211 15 6.46211C15 8.55736 12.645 10.6236 9.075 13.7484Z"
					fill={IconColors.color1}
				/>
			</g>
			<defs>
				<clipPath id="clip0_31_31974">
					<rect
						width="18"
						height="17.4"
						fill={IconColors.color2}
						transform="translate(0 0.299805)"
					/>
				</clipPath>
			</defs>
		</svg>
	)
}
