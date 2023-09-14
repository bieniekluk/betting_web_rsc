type ButtonCtaProps = {
	anchor: string
}

export const ButtonCta: React.FC<ButtonCtaProps> = ({ anchor }) => {
	return (
		<div className="text-mediumXs flex h-11 items-center justify-center rounded-md bg-brend text-center font-bold text-white">
			{anchor}
		</div>
	)
}
