import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/ui/logo"
import { SocialsIcons } from "@/ui/socialsIcons"
import { MenuFooter } from "@/ui/menuFooter"

type FooterProps = {}

const copyContent = [
	"Działamy na podstawie zezwolenia na urządzanie zakładów wzajemnych - bukmacherskich przez sieć Internet wydanego przez Ministra Finansów dnia 9 grudnia 2020 roku na okres 6lat. Nr zezwolenia: PS4.6831.1.2020 z późniejszymi zmianami. Pamiętaj, że udział w nielegalnych grach hazardowych jest przestępstwem.",
	"Zakaz wstępu na stronę internetową i uczestnictwa w grze hazardowej dla osób poniżej 18roku życia. Hazard może prowadzić do uzależnienia i nieść ze sobą konsekwencje jak każde inne uzależnienie.",
]

const footerMenus = [
	{
		title: "Nasza oferta",
		items: [
			{ href: "/", anchor: "Zakłady bukmacherskie" },
			{ href: "/", anchor: "Zakłady live" },
			{ href: "/", anchor: "Nowa  aplikacja" },
			{ href: "/", anchor: "Promocje" },
			{ href: "/", anchor: "Jak zacząć" },
			{ href: "/", anchor: "Szybka rejestracja" },
			{ href: "/", anchor: "Błyskawiczne płatności" },
			{ href: "/", anchor: "Cashout" },
		],
	},
	{
		title: "Produkty",
		items: [
			{ href: "/", anchor: "Zakład bez ryzyka" },
			{ href: "/", anchor: "Oferta powitalna" },
			{ href: "/", anchor: "Kod promocyjny" },
			{ href: "/", anchor: "Cashback bez limitu" },
			{ href: "/", anchor: "Cashback na wirtuale" },
			{ href: "/", anchor: "Early payout" },
			{ href: "/", anchor: "Fuks ViP" },
			{ href: "/", anchor: "Mega kursy" },
			{ href: "/", anchor: "Fuks Kreator" },
			{ href: "/", anchor: "Freebet" },
		],
	},
	{
		title: "Zakłady Sportowe",
		items: [
			{ href: "/", anchor: "Ekstraklasa" },
			{ href: "/", anchor: "Premier League" },
			{ href: "/", anchor: "La Liga" },
			{ href: "/", anchor: "Serie A" },
			{ href: "/", anchor: "Bundesliga" },
			{ href: "/", anchor: "Ligue 1" },
			{ href: "/", anchor: "Liga Mistrzów" },
			{ href: "/", anchor: "NBA" },
		],
	},
	{
		title: "Informacje",
		items: [
			{ href: "/", anchor: "Informacje o Fuksiarz.pl" },
			{ href: "/", anchor: "Legalny bukmacher" },
			{ href: "/", anchor: "Fuksiarz opinie" },
			{ href: "/", anchor: "Pomoc" },
			{ href: "/", anchor: "Kariera" },
			{ href: "/", anchor: "Typy bukmacherskie" },
			{ href: "/", anchor: "Odpowiedzialna gra" },
			{ href: "/", anchor: "Polityka prywatności" },
			{ href: "/", anchor: "Regulamin" },
		],
	},
]

const footerPaymentMethods = [
	{ href: "/", imageSrc: "/images/ui/footer/payu.png" },
	{ href: "/", imageSrc: "/images/ui/footer/applepay.png" },
	{ href: "/", imageSrc: "/images/ui/footer/blik.png" },
	{ href: "/", imageSrc: "/images/ui/footer/visacard.png" },
	{ href: "/", imageSrc: "/images/ui/footer/mastercard.png" },
	{ href: "/", imageSrc: "/images/ui/footer/tpay.png" },
	{ href: "/", imageSrc: "/images/ui/footer/przelewy24.png" },
]

export const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className="max-w-[1220px] bg-white pb-16 pl-8 pr-16 pt-10">
			<header className="mb-9 flex items-center justify-between border-b pb-9">
				<Logo />
				<SocialsIcons />
			</header>
			<main>
				<div className="mb-9 md:flex md:justify-between">
					{footerMenus.map(({ title, items }, index) => (
						<MenuFooter key={index} title={title} items={items} />
					))}
				</div>
				<div className="flex items-center justify-between">
					{footerPaymentMethods.map(({ href, imageSrc }, index) => (
						<Link className="grayscale delay-75 hover:grayscale-0" key={index} href={href}>
							<Image src={imageSrc} width={58} height={35} alt="bramka plantosci" />
						</Link>
					))}
				</div>
			</main>
			<footer className="mt-9 border-t pt-9">
				<main>
					<div className="mb-9 flex items-center gap-1">
						<div className="text-[11px] font-semibold">Jesteśmy sponsorem</div>
						<Image
							src="/images/ui/footer/sponsors.png"
							width={232}
							height={41}
							alt="sponsorujemy"
						/>
					</div>
					<div className="flex flex-col space-y-4">
						{copyContent.map((paragraph, index) => (
							<p key={index} className="text-[11px]">
								{paragraph}
							</p>
						))}
					</div>
				</main>
			</footer>
		</footer>
	)
}
