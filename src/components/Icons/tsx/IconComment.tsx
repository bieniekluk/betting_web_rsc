interface IconCommentProps {
	iconWidth?: string
	iconHeight?: string
	IconColors?: { color1: "black" }
}

export const IconComment: React.FC<IconCommentProps> = ({
	iconWidth = "18",
	iconHeight = "18",
	IconColors = { color1: "black" },
}) => {
	return (
		<svg
			width={iconWidth}
			height={iconHeight}
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M12.6 0H1.4C1.0287 0 0.672601 0.1475 0.41005 0.41005C0.1475 0.672601 0 1.0287 0 1.4V14L2.8 11.2H12.6C12.9713 11.2 13.3274 11.0525 13.5899 10.7899C13.8525 10.5274 14 10.1713 14 9.8V1.4C14 1.0287 13.8525 0.672601 13.5899 0.41005C13.3274 0.1475 12.9713 0 12.6 0ZM2.8 4.9H11.2V6.3H2.8M8.4 8.4H2.8V7H8.4M11.2 4.2H2.8V2.8H11.2"
				fill={IconColors.color1}
			/>
		</svg>
	)
}
