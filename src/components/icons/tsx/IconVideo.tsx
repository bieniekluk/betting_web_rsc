interface IconVideoProps {
	iconWidth?: string
	iconHeight?: string
	IconColors?: { color1: "white" }
}

export const IconVideo: React.FC<IconVideoProps> = ({
	iconWidth = "8",
	iconHeight = "8",
	IconColors = { color1: "white" },
}) => {
	return (
		<svg
			width={iconWidth}
			height={iconHeight}
			viewBox="0 0 8 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="ondemand_video" clipPath="url(#clip0_359_429)">
				<path
					id="Vector"
					d="M3.48543 2.86356V4.68151L5.07613 3.77254L3.48543 2.86356ZM6.21234 1.95459H2.12197C1.872 1.95459 1.66748 2.15911 1.66748 2.40908V5.13599C1.66748 5.38596 1.872 5.59048 2.12197 5.59048H3.25818V6.04497H5.07613V5.59048H6.21234C6.46231 5.59048 6.66683 5.38596 6.66683 5.13599V2.40908C6.66683 2.15911 6.46231 1.95459 6.21234 1.95459ZM6.21234 5.13599H2.12197V2.40908H6.21234V5.13599Z"
					fill={IconColors.color1}
				/>
			</g>
			<defs>
				<clipPath id="clip0_359_429">
					<rect width="7" height="7" fill={IconColors.color1} transform="translate(0.666748 0.5)" />
				</clipPath>
			</defs>
		</svg>
	)
}
