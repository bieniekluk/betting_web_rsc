import { IconPlus } from "./iconPlus"

type AmountProps = {
	value: number
	currency?: string
}

export const Amount: React.FC<AmountProps> = ({ value, currency = "zł" }) => {
	return (
		<>
			<div className="border-1 flex items-center gap-1 rounded-full border border-lines pb-1.5 pl-1.5 pr-2.5 pt-1.5">
				<IconPlus />
				<div className="font-bold">
					{value} {currency}
				</div>
			</div>
		</>
	)
}
