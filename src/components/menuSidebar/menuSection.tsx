"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import PerfectScrollbar from "react-perfect-scrollbar"
import { dumyData } from "./dumyData"
import { Label } from "@/ui/labels"
import "react-perfect-scrollbar/dist/css/styles.css"

type MenuSectionProps = {
	name: string
	icon: React.ReactNode
	index: number
	openMenu: boolean
	menuItemsCount: number
}

const removeLastElement = (str: string) => {
	const index = str.lastIndexOf("/")
	return str.substring(0, index)
}

const remove2LastElement = (str: string) => {
	const index = str.lastIndexOf("/", str.lastIndexOf("/") - 1)
	return str.substring(0, index)
}

const remove3LastElement = (str: string) => {
	const elements = str.split("/")
	const result = elements.slice(0, 2).join("/")
	return result
}

const ItemSubMenu = ({ anchor, icon, live, counter = "723", openMenu, iconStyle }) => {
	return (
		<>
			<div className={iconStyle}>{icon}</div>
			{openMenu ? (
				<div className="flex w-full items-center justify-between whitespace-nowrap text-[11px] font-bold uppercase">
					<div className="flex items-center gap-2">
						{anchor}
						{live ? <div className="h-1.5 w-1.5 rounded-full bg-green"></div> : null}
					</div>
					<Label text={counter} />
				</div>
			) : null}
		</>
	)
}

export const MenuSection: React.FC<MenuSectionProps> = ({
	name,
	icon,
	index,
	openMenu,
	menuItemsCount,
}) => {
	const pathname = usePathname()
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
	const [menuItems, setMenuItem] = useState<
		{ anchor: string; href: string; icon: JSX.Element; live: boolean; items: [] }[]
	>([])
	const [iconStyle, setIconStyle] = useState<string>(
		openMenu ? "opacity-100" : "opacity-50 grayscale",
	)

	useEffect(() => {
		setIconStyle(openMenu ? "opacity-100" : "opacity-50 grayscale")
	}, [openMenu])

	useEffect(() => {
		if (isSubMenuOpen && menuItems.length === 0) {
			const items = dumyData[index].items
			setMenuItem(items)
		}
	}, [isSubMenuOpen])

	return (
		<div>
			<div
				onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
				className="flex h-[42px] flex-nowrap items-center gap-3 bg-white p-3 hover:cursor-pointer"
			>
				<div className={iconStyle}>{icon}</div>
				{openMenu ? (
					<div className="flex w-full items-center justify-between whitespace-nowrap text-[13px] font-semibold uppercase">
						<div>{name}</div>
						<div>
							<svg
								style={{ transition: "all 300ms ease 0s" }}
								className={`${isSubMenuOpen ? "rotate-180" : "rotate-0"}`}
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="6"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path fill="#000" d="M5 6l4.5-4.858L8.443 0 5 3.708 1.558 0 .5 1.142 5 6z"></path>
							</svg>
						</div>
					</div>
				) : null}
			</div>
			{isSubMenuOpen ? (
				<PerfectScrollbar
					style={{ maxHeight: `calc(100vh - (123px + 118px + ${menuItemsCount} * 42px))` }}
				>
					{menuItems.map(({ anchor, icon, href, live, items }, index) => {
						const currentPage = pathname === href ? true : false
						const openSubMenu =
							(index === 0 && pathname === href) ||
							(index === 0 && remove2LastElement(pathname) === removeLastElement(href)) ||
							(index === 0 && remove3LastElement(pathname) === removeLastElement(href))
								? true
								: false
						const itemSubMenutyles = (currentPage: boolean, index: number) => {
							return `border-menuLines ${
								index !== 0 ? "-mt-px" : "mt-0"
							} flex h-10 flex-nowrap items-center gap-3 ${
								openSubMenu ? "" : currentPage ? "border-t" : "border-b border-t"
							} p-3`
						}
						return (
							<div key={index}>
								{currentPage ? (
									<div className={itemSubMenutyles(currentPage, index)}>
										<ItemSubMenu
											anchor={anchor}
											icon={icon}
											live={live}
											openMenu={openMenu}
											iconStyle={iconStyle}
										/>
									</div>
								) : (
									<Link
										href={href}
										className={`${itemSubMenutyles(currentPage, index)} hover:cursor-pointer`}
									>
										<ItemSubMenu
											anchor={anchor}
											icon={icon}
											live={live}
											openMenu={openMenu}
											iconStyle={iconStyle}
										/>
									</Link>
								)}
								{openSubMenu || currentPage
									? items.map(({ anchor, icon, href, live, items }, index) => {
											const currentPage = pathname === href ? true : false
											const openSubMenu = removeLastElement(pathname) === href ? true : false
											return (
												<div key={index}>
													{currentPage ? (
														<div
															className={`${itemSubMenutyles(
																currentPage,
																index,
															)} bg-subMenuBg border-t`}
														>
															<ItemSubMenu
																anchor={anchor}
																icon={icon}
																live={live}
																openMenu={openMenu}
																iconStyle={iconStyle}
															/>
														</div>
													) : (
														<Link
															key={index}
															href={href}
															className={`${itemSubMenutyles(
																currentPage,
																index,
															)} bg-subMenuBg border-t hover:cursor-pointer`}
														>
															<ItemSubMenu
																anchor={anchor}
																icon={icon}
																live={live}
																openMenu={openMenu}
																iconStyle={iconStyle}
															/>
														</Link>
													)}
													{(openSubMenu || currentPage) && openMenu ? (
														<div className="flex flex-col space-y-1 pb-4 pl-7 pr-3 pt-4">
															{items.map(({ anchor, icon, href, live, items }, index) => {
																const currentPage = pathname === href ? true : false
																return (
																	<div key={index}>
																		{currentPage ? (
																			<div
																				className={`flex justify-between rounded-3xl bg-menuLines pb-0.5 pl-3 pr-1.5 pt-0.5 text-[10px]`}
																			>
																				<div>
																					{anchor}
																					{live ? (
																						<div className="h-1.5 w-1.5 rounded-full bg-green"></div>
																					) : null}
																				</div>
																				<div>9</div>
																			</div>
																		) : (
																			<Link key={index} href={href} className={``}>
																				<div
																					className={`flex justify-between rounded-3xl pb-0.5 pl-3 pr-1.5 pt-0.5 text-[10px]`}
																				>
																					<div>
																						{anchor}
																						{live ? (
																							<div className="h-1.5 w-1.5 rounded-full bg-green"></div>
																						) : null}
																					</div>
																					<div>9</div>
																				</div>
																			</Link>
																		)}
																	</div>
																)
															})}
														</div>
													) : null}
												</div>
											)
									  })
									: null}
							</div>
						)
					})}
				</PerfectScrollbar>
			) : null}
		</div>
	)
}
