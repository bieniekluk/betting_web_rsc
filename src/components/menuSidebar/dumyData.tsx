// eslint-disable-next-line import/no-named-as-default
import ReactCountryFlag from "react-country-flag"
import type { ItemSubMenuProps } from "./menuSection"
import { IconSportFire, IconSportFootball, IconSportAll } from "@/ui/icons"

type menuDataType = {
	sectionName: string
	icon: React.ReactNode
	live: boolean
	items: ItemSubMenuProps[]
}[]

export const dumyData: menuDataType = [
	{
		sectionName: "Top mecze",
		icon: <IconSportFire />,
		live: false,
		items: [
			{
				anchor: "Piłka nozna",
				href: "/top-mecze/pilka-nozna",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "Tenis",
				href: "/top-mecze/tenis",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "Koszykówka",
				href: "/top-mecze/koszykowka",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "Siatkówka",
				href: "/top-mecze/siatkowka",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "Piłka Ręczna",
				href: "/top-mecze/pilka-reczna",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "Hokej na lodzie",
				href: "/top-mecze/hokej",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{ anchor: "F1", href: "/top-mecze/f1", icon: <IconSportFootball />, items: [], live: false },
		],
	},
	{
		sectionName: "Sport",
		icon: <IconSportAll />,
		live: false,
		items: [
			{
				anchor: "Piłka nozna",
				href: "/sport/pilka-nozna",
				icon: <IconSportFootball />,
				live: false,
				items: [
					{
						anchor: "Złota piłka",
						href: "/sport/pilka-nozna/zlota-pilka",
						icon: <IconSportFootball />,
						items: [],
					},
					{
						anchor: "Międzynarodowe",
						href: "/sport/pilka-nozna/miedzynarodowe",
						icon: <IconSportFootball />,
						items: [],
						live: false,
					},
					{
						anchor: "Młodzieżowe",
						href: "/sport/pilka-nozna/mlodziezowe",
						icon: <IconSportFootball />,
						items: [],
						live: false,
					},
					{
						anchor: "Polska",
						href: "/sport/pilka-nozna/polska",
						icon: <ReactCountryFlag countryCode="PL" />,
						live: false,
						items: [
							{
								anchor: "Superpuchar",
								href: "/sport/pilka-nozna/polska/superpuchar",
								icon: <IconSportFootball />,
								live: false,
							},
							{
								anchor: "Ekstraklasa",
								href: "/sport/pilka-nozna/polska/ekstraklasa",
								icon: <IconSportFootball />,
								live: false,
							},
							{
								anchor: "1. Liga Polska",
								href: "/sport/pilka-nozna/polska/1-liga-polska",
								icon: <IconSportFootball />,
								live: false,
							},
							{
								anchor: "2. Liga Polska",
								href: "/sport/pilka-nozna/polska/2-liga-polska",
								icon: <IconSportFootball />,
								live: false,
							},
						],
					},
				],
			},
			{
				anchor: "Tenis",
				href: "/sport/tenis",
				icon: <IconSportFootball />,
				live: true,
				items: [
					{
						anchor: "Polska",
						href: "/sport/tenis/polska",
						icon: <ReactCountryFlag countryCode="PL" />,
						live: false,
						items: [
							{
								anchor: "Superpuchar",
								href: "/sport/tenis/polska/superpuchar",
								icon: <IconSportFootball />,
								live: false,
							},
							{
								anchor: "Ekstraklasa",
								href: "/sport/tenis/polska/ekstraklasa",
								icon: <IconSportFootball />,
								live: false,
							},
							{
								anchor: "1. Liga Polska",
								href: "/sport/tenis/polska/1-liga-polska",
								icon: <IconSportFootball />,
								live: false,
							},
							{
								anchor: "2. Liga Polska",
								href: "/sport/tenis/polska/2-liga-polska",
								icon: <IconSportFootball />,
								live: false,
							},
						],
					},
				],
			},
			{
				anchor: "Koszykówka",
				href: "/sport/koszykowka",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "Siatkówka",
				href: "/sport/siatkowka",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "Piłka Ręczna",
				href: "/sport/pilka-reczna",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "Hokej na lodzie",
				href: "/sport/hokej",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{ anchor: "F1", href: "sport/f1", icon: <IconSportFootball />, items: [], live: false },
			{
				anchor: "Motocykle",
				href: "/sport/motcykle",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{ anchor: "Boks", href: "/sport/boks", icon: <IconSportFootball />, items: [], live: false },
			{ anchor: "MMA", href: "/sport/mma", icon: <IconSportFootball />, items: [], live: false },
			{
				anchor: "Baseball",
				href: "/sport/baseball",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "LEAGUE OF LEGENDS",
				href: "/sport/league-of-legends",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{ anchor: "DOTA", href: "/sport/dota", icon: <IconSportFootball />, items: [], live: false },
			{
				anchor: "DARTS",
				href: "/sport/darts",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
			{
				anchor: "FUTSAL",
				href: "/sport/futsal",
				icon: <IconSportFootball />,
				items: [],
				live: false,
			},
		],
	},
]
