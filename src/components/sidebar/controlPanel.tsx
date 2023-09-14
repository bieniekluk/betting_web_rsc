"use client"
import { useState } from "react"
import { dumyData } from "./dumyData"
import { MenuItem, MenuItemLink } from "@/ui/MenuSidebar/MenuItems"

type ControlPanelProps = {
	width?: number
	onStateChange?: (newState: boolean) => void
}

const controlPanelItems = dumyData

export const ControlPanel: React.FC<ControlPanelProps> = ({ width, onStateChange }) => {
	const [openMenu, setOpenMenu] = useState(false)

	const handleChange = () => {
		const newState: boolean = !openMenu
		setOpenMenu(newState)
		if (onStateChange) {
			onStateChange(newState)
		}
	}

	return (
		<div
			style={{ width: width, transition: "all 300ms ease 0s" }} //TODO: transition to Taliwind CSS
			className={`pt fixed bottom-0 z-10 flex flex-col space-y-3 bg-workSpace p-3 shadow-3xl`}
		>
			{controlPanelItems.map(({ anchor, icon, href }) => (
				<>
					{href ? (
						<MenuItemLink icon={icon} anchor={anchor} href={href} openMenu={openMenu} />
					) : (
						<div
							className="flex flex-nowrap items-center gap-3 hover:cursor-pointer"
							onClick={() => handleChange()}
						>
							<MenuItem icon={icon} anchor={anchor} openMenu={openMenu} rotateIcon={openMenu} />
						</div>
					)}
				</>
			))}
		</div>
	)
}
