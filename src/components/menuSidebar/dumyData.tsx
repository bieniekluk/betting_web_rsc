import ReactCountryFlag from "react-country-flag"
import { IconSportFire, IconSportFootball, IconSportAll } from "@/ui/icons"

export const dumyData = [
	{
		sectionName: "Top mecze",
		icon: <IconSportFire />,
		items: [
			{
				anchor: "Piłka nozna",
				href: "/top-mecze/pilka-nozna",
				icon: <IconSportFootball />,
				items: [],
			},
			{ anchor: "Tenis", href: "/top-mecze/tenis", icon: <IconSportFootball />, items: [] },
			{
				anchor: "Koszykówka",
				href: "/top-mecze/koszykowka",
				icon: <IconSportFootball />,
				items: [],
			},
			{ anchor: "Siatkówka", href: "/top-mecze/siatkowka", icon: <IconSportFootball />, items: [] },
			{
				anchor: "Piłka Ręczna",
				href: "/top-mecze/pilka-reczna",
				icon: <IconSportFootball />,
				items: [],
			},
			{
				anchor: "Hokej na lodzie",
				href: "/top-mecze/hokej",
				icon: <IconSportFootball />,
				items: [],
			},
			{ anchor: "F1", href: "/top-mecze/f1", icon: <IconSportFootball />, items: [] },
		],
	},
	{
		sectionName: "Sport",
		icon: <IconSportAll />,
		items: [
			{
				anchor: "Piłka nozna",
				href: "/sport/pilka-nozna",
				icon: <IconSportFootball />,
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
					},
					{
						anchor: "Młodzieżowe",
						href: "/sport/pilka-nozna/mlodziezowe",
						icon: <IconSportFootball />,
						items: [],
					},
					{
						anchor: "Polska",
						href: "/sport/pilka-nozna/polska",
						icon: <ReactCountryFlag countryCode="PL" />,
						items: [
							{
								anchor: "Superpuchar",
								href: "/sport/pilka-nozna/polska/superpuchar",
								icon: <IconSportFootball />,
							},
							{
								anchor: "Ekstraklasa",
								href: "/sport/pilka-nozna/polska/ekstraklasa",
								icon: <IconSportFootball />,
							},
							{
								anchor: "1. Liga Polska",
								href: "/sport/pilka-nozna/polska/1-liga-polska",
								icon: <IconSportFootball />,
							},
							{
								anchor: "2. Liga Polska",
								href: "/sport/pilka-nozna/polska/2-liga-polska",
								icon: <IconSportFootball />,
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
						items: [
							{
								anchor: "Superpuchar",
								href: "/sport/tenis/polska/superpuchar",
								icon: <IconSportFootball />,
							},
							{
								anchor: "Ekstraklasa",
								href: "/sport/tenis/polska/ekstraklasa",
								icon: <IconSportFootball />,
							},
							{
								anchor: "1. Liga Polska",
								href: "/sport/tenis/polska/1-liga-polska",
								icon: <IconSportFootball />,
							},
							{
								anchor: "2. Liga Polska",
								href: "/sport/tenis/polska/2-liga-polska",
								icon: <IconSportFootball />,
							},
						],
					},
				],
			},
			{ anchor: "Koszykówka", href: "/sport/koszykowka", icon: <IconSportFootball />, items: [] },
			{ anchor: "Siatkówka", href: "/sport/siatkowka", icon: <IconSportFootball />, items: [] },
			{
				anchor: "Piłka Ręczna",
				href: "/sport/pilka-reczna",
				icon: <IconSportFootball />,
				items: [],
			},
			{ anchor: "Hokej na lodzie", href: "/sport/hokej", icon: <IconSportFootball />, items: [] },
			{ anchor: "F1", href: "sport/f1", icon: <IconSportFootball />, items: [] },
			{ anchor: "Motocykle", href: "/sport/motcykle", icon: <IconSportFootball />, items: [] },
			{ anchor: "Boks", href: "/sport/boks", icon: <IconSportFootball />, items: [] },
			{ anchor: "MMA", href: "/sport/mma", icon: <IconSportFootball />, items: [] },
			{ anchor: "Baseball", href: "/sport/baseball", icon: <IconSportFootball />, items: [] },
			{
				anchor: "LEAGUE OF LEGENDS",
				href: "/sport/league-of-legends",
				icon: <IconSportFootball />,
				items: [],
			},
			{ anchor: "DOTA", href: "/sport/dota", icon: <IconSportFootball />, items: [] },
			{ anchor: "DARTS", href: "/sport/darts", icon: <IconSportFootball />, items: [] },
			{ anchor: "FUTSAL", href: "/sport/futsal", icon: <IconSportFootball />, items: [] },
		],
	},
]
