import Link from "next/link"

type MenuFooterProps = {
	title: string
	items: { href: string; anchor: string }[]
}

export const MenuFooter: React.FC<MenuFooterProps> = ({ title, items }) => {
	return (
		<div className="mt-6 md:mt-0">
			<div className="mb-5 text-sm font-bold uppercase">{title}</div>
			<div className="flex flex-col space-y-1">
				{items.map(({ href, anchor }, index) => (
					<Link className="text-[10px]" key={index} href={href}>
						{anchor}
					</Link>
				))}
			</div>
		</div>
	)
}
