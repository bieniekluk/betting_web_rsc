import Link from "next/link"

interface MenuItemProps {
	icon: React.ReactNode
	anchor: string
	rotateIcon?: boolean
}

interface MenuItemLinkProps extends MenuItemProps {
	href: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ icon, anchor, rotateIcon }) => {
	return (
		<>
			<div className={`${rotateIcon ? "rotate-180" : null}`}>{icon}</div>
			<div className="whitespace-nowrap text-[10px] font-semibold">{!rotateIcon ? "" : anchor}</div>
		</>
	)
}

export const MenuItemLink: React.FC<MenuItemLinkProps> = ({ icon, anchor, href, rotateIcon }) => (
	<Link className="flex flex-nowrap items-center gap-3" href={href}>
		<MenuItem icon={icon} anchor={anchor} rotateIcon={rotateIcon} />
	</Link>
)
