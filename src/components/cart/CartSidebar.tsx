"use client"
import { useState } from "react"
import { Toggle } from "./Toggle"
import { coupons } from "./dumyData"
import { CartSummary } from "./CartSummary"
import { Amount } from "@/ui/Amount"
import { Notification } from "@/ui/Notification"
import { IconArrowCollapseRight } from "@/ui/Icons"
import { BoxType } from "@/ui/BoxType"

type CartSidebarProps = {
	summary?: React.ReactNode
	simpleView?: React.ReactNode
	systemView?: React.ReactNode
}

export const CartSidebar: React.FC<CartSidebarProps> = ({}) => {
	const [openMenu, setOpenMenu] = useState(false)
	const width = openMenu ? 278 : 61
	const [toggleClick, setToggleClick] = useState([true, false])
	const isSimpleView = toggleClick[0] ? true : false

	return (
		<div
			style={{ width: `${width}px`, transition: "all 300ms ease 0s" }}
			className="shadow-4xl fixed right-0 top-9 z-20 flex h-[calc(100%-2.25rem)] flex-col rounded-tr-3xl bg-white px-4 pt-4"
		>
			<div
				className={`flex w-full ${
					openMenu ? "justify-between" : "justify-center"
				} mb-2.5 items-center`}
			>
				<Notification />
				{openMenu ? <Amount value={134.93} /> : null}
			</div>
			{openMenu ? (
				<>
					<div className="bg-buttonLight mb-3.5 flex items-center gap-1 rounded-full border border-lines p-1.5">
						<Toggle
							label="prosty"
							isActive={toggleClick[0]}
							onClick={() => setToggleClick([true, false])}
						/>
						<Toggle
							label="systemowy"
							isActive={toggleClick[1]}
							onClick={() => setToggleClick([false, true])}
						/>
					</div>
					{isSimpleView ? (
						<div className="flex flex-col space-y-2 overflow-y-auto pb-3">
							{/* {simpleView} */}
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
						</div>
					) : (
						<div>
							{/* {systemView} */}
							system
						</div>
					)}
				</>
			) : null}
			<div className={`${openMenu ? "shadow-5xl" : ""} -mx-4 mt-auto bg-white pb-2.5`}>
				{/* {summary} */}
				{openMenu ? <CartSummary /> : null}
				<div
					onClick={() => setOpenMenu(!openMenu)}
					className={`flex w-full items-center gap-1.5 px-4 hover:cursor-pointer ${
						openMenu ? "justify-end" : "justify-center"
					}`}
				>
					{openMenu ? <div className="text-mediumXs font-semibold">Zwiń</div> : null}
					<div className={`${openMenu ? "rotate-180" : "rotate-0"}`}>
						<IconArrowCollapseRight />
					</div>
				</div>
			</div>
		</div>
	)
}
