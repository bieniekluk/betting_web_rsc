import { Logo } from "@/ui/Logo"
import { MenuHeader } from "@/ui/MenuHeader"

type HeaderProps = {}

export const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="fixed z-20 w-full bg-brend pt-9">
			<div className="flex items-center gap-7 rounded-t-3xl border-b border-lines bg-workSpace pb-7 pl-6 pr-6 pt-6">
				<Logo />
				<MenuHeader />
			</div>
		</header>
	)
}
