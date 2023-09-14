import { IconCoupon, IconDelete } from "./icons"
import { Input } from "@/ui/Forms"
import { ButtonCta } from "@/ui/Buttons"

type CartSummaryProps = {}

export const CartSummary: React.FC<CartSummaryProps> = ({}) => {
	const winningAmount = 1363.8
	return (
		<div className="">
			<header className="flex items-center gap-2.5 border-b border-menuLines bg-workSpace px-4 py-2.5 align-baseline">
				<div>
					<IconCoupon />
				</div>
				<div className="text-textLight text-mediumXs grow text-center font-semibold uppercase">
					9 zdarzeń na kuponie
				</div>
				<div>
					<IconDelete />
				</div>
			</header>
			<main className="flex flex-col space-y-5 px-4 py-5">
				<div className="flex flex-col space-y-3">
					<Input label="Stawka" inputId="stawka" value={100} />
					<div className="grid grid-cols-2 gap-2.5">
						<div className="text-mediumXs text-textLight flex h-11 items-center justify-center rounded-md border border-menuLines font-semibold uppercase">
							Bonus
						</div>
						<div className="bg-buttonGray flex h-11 flex-col items-center justify-center -space-y-1 rounded-md font-semibold uppercase">
							<div className="text-mediumXs text-textLight">Kurs</div>
							<div className="text-xs text-black">12.00</div>
						</div>
					</div>
					<ButtonCta anchor={`POSTAW ZAKŁAD I WYGRAJ ${winningAmount} ZŁ`} />
				</div>
				<div className="text-extraXs flex justify-between font-semibold uppercase text-black">
					<div>współczynnik:</div>
					<div>0.88</div>
				</div>
			</main>
		</div>
	)
}
