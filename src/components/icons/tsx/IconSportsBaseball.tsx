interface IconSportsBaseballProps {
	iconWidth?: string
	iconHeight?: string
	IconColors?: { color1: "black"; color2: "white" }
}

export const IconSportsBaseball: React.FC<IconSportsBaseballProps> = ({
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
			<g id="Sports baseball" clipPat="url(#clip0_31_31901)">
				<g id="Group">
					<g id="Group_2">
						<g id="Group_3">
							<path
								id="Vector"
								d="M2.3425 3.14014C1.7725 3.95014 1.4375 4.93514 1.4375 6.00014C1.4375 7.06514 1.7725 8.05014 2.3425 8.86014C3.5525 8.47514 4.4375 7.34014 4.4375 6.00014C4.4375 4.66014 3.5525 3.52514 2.3425 3.14014Z"
								fill={IconColors.color1}
							/>
						</g>
						<g id="Group_4">
							<path
								id="Vector_2"
								d="M10.5325 3.14014C9.3225 3.52514 8.4375 4.66014 8.4375 6.00014C8.4375 7.34014 9.3225 8.47514 10.5325 8.86014C11.1025 8.05014 11.4375 7.06514 11.4375 6.00014C11.4375 4.93514 11.1025 3.95014 10.5325 3.14014Z"
								fill={IconColors.color1}
							/>
						</g>
						<g id="Group_5">
							<path
								id="Vector_3"
								d="M7.43748 6C7.43748 4.36 8.42248 2.955 9.83248 2.335C8.94248 1.51 7.75248 1 6.43748 1C5.12248 1 3.93248 1.51 3.04248 2.335C4.45248 2.955 5.43748 4.36 5.43748 6C5.43748 7.64 4.45248 9.045 3.04248 9.665C3.93248 10.49 5.12248 11 6.43748 11C7.75248 11 8.94248 10.49 9.83248 9.665C8.42248 9.045 7.43748 7.64 7.43748 6Z"
								fill={IconColors.color1}
							/>
						</g>
					</g>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_31_31901">
					<rect width="12" height="12" fill={IconColors.color2} transform="translate(0.4375)" />
				</clipPath>
			</defs>
		</svg>
	)
}
