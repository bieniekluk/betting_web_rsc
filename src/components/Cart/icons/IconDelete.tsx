interface IconDeleteProps {
	iconWidth?: string
	iconHeight?: string
	IconColors?: { color1: string }
}

export const IconDelete: React.FC<IconDeleteProps> = ({
	iconWidth = "24",
	iconHeight = "24",
	IconColors = { color1: "#949494" },
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={iconWidth}
			height={iconHeight}
			fill="none"
			viewBox="0 0 24 24"
		>
			<g clipPath="url(#clip0_31_32281)">
				<path
					fill={IconColors.color1}
					d="M15 16h4v2h-4v-2zm0-8h7v2h-7V8zm0 4h6v2h-6v-2zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zm2-8h6v8H5v-8zm5-6H6L5 5H2v2h12V5h-3l-1-1z"
				></path>
			</g>
			<defs>
				<clipPath id="clip0_31_32281">
					<path fill="#fff" d="M0 0H24V24H0z"></path>
				</clipPath>
			</defs>
		</svg>
	)
}
