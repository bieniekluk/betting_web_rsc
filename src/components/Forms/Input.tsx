type InputProps = {
	inputId: string
	label: string
	value?: string | number
}

export const Input: React.FC<InputProps> = ({ inputId, label, value }) => {
	return (
		<div className="flex h-11 items-center rounded-md border border-menuLines px-4">
			<label className="text-mediumXs text-textExtraLight uppercase" htmlFor={inputId}>
				{label}
			</label>
			<input
				className="text-textInput ml-3 w-full text-right font-semibold"
				value={value}
				id={inputId}
				type="text"
			/>
		</div>
	)
}
