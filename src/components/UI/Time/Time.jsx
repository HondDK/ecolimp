import React from "react";
import { useState } from "react";

const Time = ({ onChange, min }) => {
	const [seconds, setSeconds] = useState(60);
	const [minutes, setMinutes] = useState(min);
	const [timerActive, setTimerActive] = useState(true);

	const handleChange = () => {
		onChange(timerActive); // callback-функция
	};

	React.useEffect(() => {
		if (seconds > 0 && timerActive) {
			setTimeout(setSeconds, 1000, seconds - 1);
		} else if (minutes === 0) {
			handleChange();
			setTimerActive(false);
		} else {
			secondReset();
		}
	}, [seconds, timerActive]);

	const secondReset = () => {
		setSeconds(60);
		setMinutes(minutes - 1);
	};

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
