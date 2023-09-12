import { dumyData } from "./dumyData"
import { MenuSection } from "./menuSection"

type MenuSidebarProps = {
	openMenu: boolean
	width: number
}

const menu = dumyData

export const MenuSidebar: React.FC<MenuSidebarProps> = ({ openMenu, width }) => {
	return (
		<div style={{ width: width }} className="h-full overflow-y-auto pb-[118px]">
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
