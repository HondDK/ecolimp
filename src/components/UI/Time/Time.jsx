import React from "react";
import { useState, useEffect } from "react";

const Time = ({ onChange, min }) => {
	const [seconds, setSeconds] = useState(
		() => sessionStorage.getItem("seconds") || 60
	);
	const [minutes, setMinutes] = useState(
		() => sessionStorage.getItem("minutes") || min
	);
	const [timerActive, setTimerActive] = useState(true);

	useEffect(() => {
		sessionStorage.setItem("seconds", seconds);
		sessionStorage.setItem("minutes", minutes);
	}, [seconds]);

	const handleChange = () => {
		onChange(timerActive);
	};

	React.useEffect(() => {
		if (seconds > 0 && timerActive) {
			setTimeout(setSeconds, 1000, seconds - 1);
		} else if (minutes === 0) {
			handleChange();
			setTimerActive(false);
		} else {
			setSeconds(60);
			setMinutes(minutes - 1);
		}
	}, [seconds, timerActive]);

	return (
		<div>
			<>
				<p>
					{minutes}:<span class="time">{seconds}</span>
				</p>
			</>
		</div>
	);
};

export default Time;
