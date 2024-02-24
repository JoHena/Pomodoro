import React, { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { twMerge } from "tailwind-merge";
import { TaskCard } from "./TaskCard";
import { Task } from "../typing";

export function TaskManager({ ticking }: { ticking: boolean }) {
	const [active, setActive] = useState(false);
	const [tasks, setTasks] = useState<Task[]>([]);

	return (
		<div className="w-1/3 flex flex-col gap-5 transition-all">
			<h2
				className={twMerge(
					"border-b-2 text-center p-3 font-bold",
					ticking ? "border-[#13293D]" : "border-white"
				)}
			>
				Task
			</h2>

			{tasks.length > 0 && (
				<ul className="flex flex-col gap-5">
					{tasks.map((task) => (
						<TaskCard task={task} setTasks={setTasks} />
					))}
				</ul>
			)}

			{active ? (
				<TaskForm setActive={setActive} setTasks={setTasks} />
			) : (
				<button
					className={twMerge(
						"p-4 rounded-md bg-white text-PomoInActive flex transition-all duration-500 h-16 shadow-xl mb-32",
						ticking && "bg-PomoInActive text-white"
					)}
					onClick={() => {
						!active && setActive(!active);
					}}
				>
					<div className="text-PomoInActive w-full text-center">
						Add Task <span className="text-xl">+</span>
					</div>
				</button>
			)}
		</div>
	);
}
