import { IconWifi } from "./IconWifi"
import { IconLive } from "./IconLive"
import { IconDeleteOutline } from "@/ui/Icons"

export type BoxTypeProps = {
	breadcrumbs: string
	date: { time: string; day: string }
	competitors: [string, string]
	course: number
	type: string
	typeNumber: string
}

export const BoxType: React.FC<BoxTypeProps> = ({
	breadcrumbs,
	date,
	competitors,
	course,
	type,
	typeNumber,
}) => {
	return (
		<div className="flex flex-col space-y-2 rounded-xl border border-lines p-2.5">
			<div className="flex items-center justify-between">
				<div className="text-textLight text-extraXs font-semibold">{breadcrumbs}</div>
				<div>
					<IconDeleteOutline />
				</div>
			</div>
			<div className="text-text text-extraXs flex items-center justify-between gap-2.5 font-semibold">
				<div>{date.time}</div>
				<div className="h-px w-full bg-menuLines"></div>
				<div>{date.day}</div>
			</div>
			<div className="text-extraXs flex items-center gap-1 font-bold">
				<div className="text-text">{competitors[0]}</div>
				<div className="text-textLight">vs</div>
				<div className="text-text">{competitors[1]}</div>
			</div>
			<div className="flex flex-nowrap justify-between gap-2.5">
				<div
					style={{ width: "calc(100% - 55px)" }}
					className="flex items-center gap-2.5 rounded-md bg-workSpace p-2.5"
				>
					<div>
						<IconWifi />
					</div>
					<div className="flx flex-col space-y-0 overflow-hidden">
						<div className="text-extraXs text-textLight font-semibold">{typeNumber}</div>
						<div className="text-text text-mediumXs whitespace-nowrap font-bold">Typ: {type}</div>
					</div>
				</div>
				<div className="text-text relative flex w-[45px] items-center justify-center rounded-md border border-menuLines bg-workSpace p-2.5 text-[12px] font-bold">
					{course}
					<div className="absolute right-1 top-1 ">
						<IconLive />
					</div>
				</div>
			</div>
		</div>
	)
}
