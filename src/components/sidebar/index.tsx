"use client"
import React, { useState } from "react"
import { ControlPanel } from "./controlPanel"
import { MenuSidebar } from "@/ui/menuSidebar"

type SidebarProps = {
	pt?: number
	width?: number
}

export const Sidebar: React.FC<SidebarProps> = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const closedWidth = 40
	const openWidth = 226
	const width = openMenu ? openWidth : closedWidth

	const hendleOpenMenu = (newState: boolean) => {
		setOpenMenu(newState)
	}

	return (
		<div className={`relative flex h-screen flex-col justify-between pt-[123px]`}>
			<MenuSidebar width={width} openMenu={openMenu} />
			<ControlPanel width={width} onStateChange={hendleOpenMenu} />
		</div>
	)
}
