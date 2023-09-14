import { coupons } from "./dumyData"
import { BoxType } from "@/ui/BoxType"

type CartSimpleViewProps = {}

export const CartSimpleView: React.FC<CartSimpleViewProps> = ({}) => {
	return (
		<>
			{coupons.map((coupon, index) => {
				const { breadcrumbs, date, competitors, course, typeNumber, type } = coupon
				return (
					<BoxType
						key={index}
						breadcrumbs={breadcrumbs}
						date={date}
						competitors={competitors}
						course={course}
						typeNumber={typeNumber}
						type={type}
					/>
				)
			})}
		</>
	)
}
