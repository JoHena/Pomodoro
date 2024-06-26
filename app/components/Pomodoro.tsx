"use client";
import { Timer } from "@/app/components/Timer/Timer";
import { twMerge } from "tailwind-merge";
import { Navbar } from "./Navbar";
import { timerState } from "../typing";
import { useAppSelector } from "../redux/store";
import { ErrorPopup } from "./Error";
import { TaskManager } from "./Tasks/TaskManager";

export function Pomodoro({}) {
	const { ...timer } = useAppSelector((state) => state.timerReducer.value);

	return (
		<div
			className={twMerge(
				"pomo-section flex min-h-screen snap-start flex-col items-center text-white lg:gap-5",
				!timer.isTicking || timer.timerMode !== timerState.Work
					? "bg-PomoInActive"
					: "bg-PomoActive text-PomoInActive",
			)}
		>
			<Navbar />
			<ErrorPopup />

			<section className="flex flex-col items-center gap-12 pb-6 tracking-wide xl:w-1/3">
				<Timer {...timer} />
				<TaskManager {...timer} />
			</section>
		</div>
	);
}
