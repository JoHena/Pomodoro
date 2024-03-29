import React, { useState } from "react";
import { ITimer, timerState } from "../typing";
import { TaskForm } from "./TaskForm";
import { twMerge } from "tailwind-merge";
import { SortableList } from "./SortableList";
import { useAppSelector } from "../redux/store";

export function TaskManager({ timerMode, isTicking }: ITimer) {
	const [active, setActive] = useState(false);
	const { tasks, totalTime, totalFinished } = useAppSelector(
		(state) => state.tasksReducer.value,
	);

	return (
		<div className="flex w-[90vw] flex-col items-center gap-8 xl:w-[90%] xl:gap-6">
			<div
				className={twMerge(
					"flex w-full justify-evenly rounded-md bg-white bg-opacity-10 p-3 text-white",
					isTicking && timerMode === timerState.Work && "text-PomoInActive",
					tasks.length <= 0 && "hidden",
				)}
			>
				<span>
					{totalFinished}/{totalTime} Pomodros
				</span>
				|<span>Time remaining: {totalTime * 25} min</span>
			</div>
			<h2
				className={twMerge(
					"w-full border-b-2 p-3 text-center font-bold",
					isTicking && timerMode === timerState.Work
						? "border-[#13293D]"
						: "border-white",
				)}
			>
				Tasks
			</h2>

			{tasks.length > 0 && <SortableList tasks={tasks} />}

			{active ? (
				<TaskForm setActive={setActive} />
			) : (
				<button
					className={twMerge(
						"flex h-16 w-full rounded-md bg-white p-4 text-PomoInActive shadow-md",
						isTicking &&
							timerMode === timerState.Work &&
							"bg-PomoInActive text-white",
					)}
					onClick={() => {
						!active && setActive(!active);
					}}
				>
					<div className="w-full text-center">
						Add Task <span className="text-xl">+</span>
					</div>
				</button>
			)}
		</div>
	);
}
