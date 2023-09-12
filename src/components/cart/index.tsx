"use client"
import { useState } from "react"
import { Notification } from "@/ui/notification"
import { IconArrowCollapseRight } from "@/ui/icons"

type CartProps = {}

export const Cart: React.FC<CartProps> = ({}) => {
	const [openMenu, setOpenMenu] = useState(false)
	const width = openMenu ? 278 : 61

	return (
		<div
			style={{ width: `${width}px`, transition: "all 300ms ease 0s" }}
			className="shadow-4xl fixed right-0 top-9 z-20 flex h-[calc(100%-2.25rem)] flex-col rounded-tr-3xl bg-white pb-2.5 pl-4 pr-4 pt-4"
		>
			<div className={`flex w-full justify-center`}>
				<Notification />
			</div>
			{openMenu ? (
				<div>
					<div>content</div>
				</div>
			) : null}
			<div
				onClick={() => setOpenMenu(!openMenu)}
				className={`mt-auto flex w-full items-center gap-1.5 ${
					openMenu ? "justify-end" : "justify-center"
				}`}
			>
				{openMenu ? <div className="text-[10px] font-semibold">Zwiń</div> : null}
				<IconArrowCollapseRight />
			</div>
		</div>
	)
}
