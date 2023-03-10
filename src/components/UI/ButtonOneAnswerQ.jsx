import React, { useState } from "react";

const ButtonOneAnswerQ = (props) => {
	const [buttonColor, setButtonColor] = useState("white");

	return (
		<button
			style={{ backgroundColor: buttonColor }}
			onClick={() =>
				setButtonColor(buttonColor === "white" ? "green" : "white")
			}
		>
			{props.children}
		</button>
	);
};

export default ButtonOneAnswerQ;
