import React from "react"

type ToggleProps = {
	label: string
	isActive: boolean
	onClick: () => void
}

export const Toggle: React.FC<ToggleProps> = ({ label, isActive, onClick }) => {
	return (
		<div
			onClick={onClick}
			style={{ transition: "all 300ms ease 0s" }}
			className={`text-mediumXs w-1/2 rounded-full pb-2 pt-2 text-center font-bold uppercase hover:cursor-pointer ${
				isActive ? "bg-brend text-white" : "text-black"
			}`}
		>
			{label}
		</div>
	)
}
