import { Logo } from "@/ui/logo"
import { MenuHeader } from "@/ui/menuHeader"

type HeaderProps = {}

export const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="bg-brend fixed z-20 w-full pt-9">
			<div className="bg-workSpace border-lines flex items-center gap-7 rounded-t-3xl border-b pb-7 pl-6 pr-6 pt-6">
				<Logo />
				<MenuHeader />
			</div>
		</header>
	)
}
