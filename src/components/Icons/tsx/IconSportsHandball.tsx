interface IconSportsHandballProps {
	iconWidth?: string
	iconHeight?: string
	IconColors?: { color1: "black"; color2: "white" }
}

export const IconSportsHandball: React.FC<IconSportsHandballProps> = ({
	iconWidth = "15",
	iconHeight = "14",
	IconColors = { color1: "black", color2: "white" },
}) => {
	return (
		<svg
			width={iconWidth}
			height={iconHeight}
			viewBox="0 0 15 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Sports handball" clipPath="url(#clip0_31_31816)">
				<g id="Group">
					<g id="Group_2">
						<path
							id="Vector"
							d="M8.76182 3.50015C8.44098 4.05432 8.63348 4.77182 9.18765 5.09265C9.74182 5.41348 10.4593 5.22098 10.7802 4.66682C11.101 4.11265 10.9085 3.39515 10.3543 3.07432C9.80015 2.75348 9.08265 2.94598 8.76182 3.50015Z"
							fill={IconColors.color1}
						/>
						<path
							id="Vector_2"
							d="M9.67755 6.07222C9.67755 6.07222 8.72671 5.52389 8.16088 5.19722C6.91838 4.47389 6.40505 2.96305 6.88921 1.65639C6.98838 1.38805 6.88338 1.09055 6.63838 0.950553C6.32921 0.775553 5.92671 0.90972 5.80421 1.24222C5.25005 2.70639 5.60005 4.36305 6.65588 5.48305L3.94338 10.1789C3.78005 10.4589 3.87921 10.8147 4.15921 10.9781C4.43921 11.1414 4.79505 11.0422 4.95838 10.7622L5.54171 9.75305L6.55088 10.3364L5.09255 12.8622C4.92921 13.1422 5.02838 13.4981 5.30838 13.6614C5.58838 13.8247 5.94421 13.7256 6.10755 13.4456L9.48505 7.60055C10.0567 8.38222 10.22 9.42055 9.87005 10.3539C9.77088 10.6164 9.88171 10.9139 10.1209 11.0539C10.43 11.2347 10.8325 11.1006 10.9609 10.7622C11.5267 9.23389 11.2 7.35555 9.67755 6.07222Z"
							fill={IconColors.color1}
						/>
						<path
							id="Vector_3"
							d="M7.87504 2.21663C8.29504 2.45579 8.82588 2.31579 9.07088 1.89579C9.31004 1.47579 9.17004 0.944961 8.75004 0.699961C8.33004 0.460795 7.79921 0.600795 7.55421 1.02079C7.31504 1.44079 7.45504 1.97746 7.87504 2.21663Z"
							fill={IconColors.color1}
						/>
					</g>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_31_31816">
					<rect width="14" height="14" fill={IconColors.color2} transform="translate(0.4375)" />
				</clipPath>
			</defs>
		</svg>
	)
}
