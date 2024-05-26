import React from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { timerState } from "../typing";
import { setMode } from "../redux/features/timerSlice";
import { useAppDispatch } from "../redux/store";

export function ModeSelector({ timerMode }: { timerMode: timerState }) {
	const dispatch = useAppDispatch();

	return (
		<div className="flex gap-5 p-4">
			<Button
				variant="main"
				onClick={() => {
					dispatch(setMode(0));
				}}
				className={twMerge(
					"w-1/3",
					timerMode === timerState.Work &&
						"bg-white bg-opacity-100 text-PomoInActive",
				)}
			>
				Work
			</Button>
			<Button
				variant="main"
				onClick={() => {
					dispatch(setMode(1));
				}}
				className={twMerge(
					"w-1/3",
					timerMode === timerState.Rest &&
						"bg-white bg-opacity-100 text-PomoInActive",
				)}
			>
				Rest
			</Button>
			<Button
				variant="main"
				onClick={() => {
					dispatch(setMode(2));
				}}
				className={twMerge(
					"w-1/3",
					timerMode === timerState.LongRest &&
						"bg-white bg-opacity-100 text-PomoInActive",
				)}
			>
				Long Rest
			</Button>
		</div>
	);
}
