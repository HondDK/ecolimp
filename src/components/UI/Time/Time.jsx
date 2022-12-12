import React from "react";
import { useState } from "react";

const Time = () => {
	const [seconds, setSeconds] = useState(60);
	const [minutes, setMinutes] = useState(2);
	const [timerActive, setTimerActive] = useState(true);

	React.useEffect(() => {
		if (seconds > 0 && timerActive) {
			setTimeout(setSeconds, 1000, seconds - 1);
		} else if (minutes == 0) {
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
