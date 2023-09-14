type LabelProps = {
	text: string
}

export const Label: React.FC<LabelProps> = ({ text }) => {
	return (
		<div className="text-text text-extraXs rounded-3xl bg-lines pb-0.5 pl-1.5 pr-1.5 pt-0.5 font-semibold">
			{text}
		</div>
	)
}
