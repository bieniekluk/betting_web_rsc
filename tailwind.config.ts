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
			labelText: "#323232",
			subMenuBg: "#F2F2F2",
		},
	},
	plugins: [],
}
export default config
