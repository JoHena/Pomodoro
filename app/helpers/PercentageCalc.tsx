import { useAppSelector } from "../redux/store";
import { ITimer, timerState } from "../typing";

export function calculatePercentage(time: number, timer: timerState) {
	// Slope of the line
	let slope = 0;

	if (timer === timerState.Work) {
		slope = -100 / 25; // change in y / change in x
	}

	if (timer === timerState.LongRest) {
		slope = -100 / 25; // change in y / change in x
	}

	if (timer === timerState.Rest) {
		slope = -100 / 5; // change in y / change in x
	}

	// Y-intercept
	var yIntercept = 100;

	// Calculate the percentage
	var percentage = slope * time + yIntercept;

	return percentage;
}

export function getStyle({ isTicking, timerMode }: ITimer) {
	let timerStyle = {
		textColor: isTicking ? "#13293D" : "white",
		pathColor: isTicking ? "white" : "rgba(136, 209, 138, 100)",
		trailColor: "transparent",
	};

	if (timerMode !== timerState.Work) {
		timerStyle = {
			textColor: "white",
			pathColor: "#00",
			trailColor: "#13293D",
		};
	}

	return timerStyle;
}
