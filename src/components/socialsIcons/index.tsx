import Link from "next/link"
import { IconFacebook, IconInstagram, IconTwitter } from "@/ui/icons"
type SocialsIconsProps = {}

export const SocialsIcons: React.FC<SocialsIconsProps> = () => {
	return (
		<div className="flex items-center gap-5">
			<Link href="/">
				<IconFacebook />
			</Link>
			<Link href="/">
				<IconTwitter />
			</Link>
			<Link href="/">
				<IconInstagram />
			</Link>
		</div>
	)
}
