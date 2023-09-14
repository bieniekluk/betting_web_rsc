import Link from "next/link"

interface MenuItemProps {
	icon: React.ReactNode
	anchor: string
	rotateIcon?: boolean
	openMenu?: boolean
}

interface MenuItemLinkProps extends MenuItemProps {
	href: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, anchor, rotateIcon, openMenu }) => {
	return (
		<>
			<div className={`${rotateIcon ? "rotate-180" : null}`}>{icon}</div>
			<div className="text-mediumXs whitespace-nowrap font-semibold">{!openMenu ? "" : anchor}</div>
		</>
	)
}

export const MenuItemLink: React.FC<MenuItemLinkProps> = ({ icon, anchor, href, openMenu }) => (
	<Link className="flex flex-nowrap items-center gap-3" href={href}>
		<MenuItem icon={icon} anchor={anchor} openMenu={openMenu} />
	</Link>
)
