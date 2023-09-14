import Link from "next/link"

type MenuHeaderProps = {}

const menuItems = [
	{
		href: "/",
		anchor: "Sport",
		active: true,
	},
	{
		href: "/",
		anchor: "Na Żywo",
		live: true,
	},
	{
		href: "/",
		anchor: "Promocje",
	},
	{
		href: "/",
		anchor: "Aplikacja",
	},
	{
		href: "/",
		anchor: "Wirtualne",
	},
	{
		href: "/",
		anchor: "Karciane",
	},
	{
		href: "/",
		anchor: "VIP",
	},
	{
		href: "/",
		anchor: "Pomoc",
	},
	{
		href: "/",
		anchor: "O firmie",
	},
]

export const MenuHeader: React.FC<MenuHeaderProps> = () => {
	return (
		<div className="mt-px flex gap-5">
			<>
				{menuItems.map(({ href, anchor, active, live }, index) => (
					<Link
						className={`flex items-center gap-1 border-b-2 font-bold ${
							active ? "border-black" : "border-transparent"
						} pb-2 pt-2 text-xs uppercase transition-all  delay-75 hover:border-black `}
						key={index}
						href={href}
					>
						{anchor}
						{live ? <div className="bg-green h-1.5 w-1.5 rounded-full"></div> : null}
					</Link>
				))}
			</>
		</div>
	)
}
