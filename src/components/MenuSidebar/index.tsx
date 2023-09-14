import { dumyData } from "./dumyData"
import { MenuSection } from "./MenuSection"

type MenuSidebarProps = {
	openMenu: boolean
	width: number
}

const menu = dumyData

export const MenuSidebar: React.FC<MenuSidebarProps> = ({ openMenu, width }) => {
	return (
		<div
			style={{ width: width, transition: "all 300ms ease 0s" }}
			className="h-full overflow-y-auto pb-[118px]"
		>
			{menu.map((item, index) => (
				<MenuSection
					key={index}
					name={item.sectionName}
					icon={item.icon}
					index={index}
					openMenu={openMenu}
					menuItemsCount={menu.length}
				/>
			))}
		</div>
	)
}
