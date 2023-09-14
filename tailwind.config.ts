import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				"3xl": "0 -3px 16px 0px rgba(0, 0, 0, 0.18)",
				"4xl": "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
				"5xl": "0px -2px 11px 0px rgba(0, 0, 0, 0.13)",
			},
			fontSize: {
				extraXs: "8px",
				mediumXs: "10px",
			},
		},
		colors: {
			brend: "#C62828",
			workSpace: "#F8F8F8",
			lines: "#E3E8EE",
			white: "#FFFFFF",
			black: "#000",
			transparent: "transparent",
			green: "#27C229",
			menuLines: "#E0E6ED",
			subMenuBg: "#F2F2F2",
			text: "#323232",
			textLight: "#949494",
			textExtraLight: "#D3D3D3",
			textInput: "#A1A1A1",
			buttonLight: "#FBFBFB",
			buttonGray: "#E6E6E6",
		},
	},
	plugins: [],
}
export default config
