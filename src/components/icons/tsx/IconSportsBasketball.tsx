interface IconSportsBasketballProps {
	iconWidth?: string
	iconHeight?: string
	IconColors?: { color1: "black"; color2: "white" }
}

export const IconSportsBasketball: React.FC<IconSportsBasketballProps> = ({
	iconWidth = "13",
	iconHeight = "12",
	IconColors = { color1: "black", color2: "white" },
}) => {
	return (
		<svg
			width={iconWidth}
			height={iconHeight}
			viewBox="0 0 13 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Sports basketball" clipPat="url(#clip0_31_31766)">
				<g id="Group">
					<g id="Group_2">
						<g id="Group_3">
							<path
								id="Vector"
								d="M8.98242 5.4998H11.4124C11.3324 4.6948 11.0574 3.9448 10.6424 3.2998C9.77742 3.7148 9.14742 4.5248 8.98242 5.4998Z"
								fill={IconColors.color1}
							/>
						</g>
						<g id="Group_4">
							<path
								id="Vector_2"
								d="M3.8924 5.4998C3.7274 4.5248 3.0974 3.7148 2.2324 3.2998C1.8174 3.9448 1.5424 4.6948 1.4624 5.4998H3.8924Z"
								fill={IconColors.color1}
							/>
						</g>
						<g id="Group_5">
							<path
								id="Vector_3"
								d="M7.9725 5.4999C8.1325 4.2049 8.9125 3.1049 10.0025 2.4999C9.2025 1.6849 8.1325 1.1449 6.9375 1.0249V5.4999H7.9725Z"
								fill={IconColors.color1}
							/>
						</g>
						<g id="Group_6">
							<path
								id="Vector_4"
								d="M4.90231 5.4999H5.93731V1.0249C4.74231 1.1449 3.66731 1.6849 2.87231 2.4999C3.96231 3.1049 4.74231 4.2049 4.90231 5.4999Z"
								fill={IconColors.color1}
							/>
						</g>
						<g id="Group_7">
							<path
								id="Vector_5"
								d="M7.9725 6.5H6.9375V10.975C8.1325 10.855 9.2075 10.315 10.0025 9.5C8.9125 8.895 8.1325 7.795 7.9725 6.5Z"
								fill={IconColors.color1}
							/>
						</g>
						<g id="Group_8">
							<path
								id="Vector_6"
								d="M2.2324 8.7C3.0924 8.285 3.7274 7.47 3.8924 6.5H1.4624C1.5424 7.305 1.8174 8.055 2.2324 8.7Z"
								fill={IconColors.color1}
							/>
						</g>
						<g id="Group_9">
							<path
								id="Vector_7"
								d="M8.98242 6.5C9.14742 7.475 9.77742 8.285 10.6424 8.7C11.0574 8.055 11.3324 7.305 11.4124 6.5H8.98242Z"
								fill={IconColors.color1}
							/>
						</g>
						<g id="Group_10">
							<path
								id="Vector_8"
								d="M4.90231 6.5C4.74231 7.795 3.96231 8.895 2.87231 9.5C3.67231 10.315 4.74231 10.855 5.93731 10.975V6.5H4.90231Z"
								fill={IconColors.color1}
							/>
						</g>
					</g>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_31_31766">
					<rect width="12" height="12" fill={IconColors.color2} transform="translate(0.4375)" />
				</clipPath>
			</defs>
		</svg>
	)
}
