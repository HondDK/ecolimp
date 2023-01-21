import React, { useState } from "react";

const ButtonSelector = () => {
	const [selectedButton, setSelectedButton] = useState(null);

	const handleButtonClick = (button) => {
		setSelectedButton(button);
	};

	return (
		<div>
			<button
				style={{ backgroundColor: selectedButton === 1 ? "green" : "white" }}
				onClick={() => handleButtonClick(1)}
			>
				Нормативная
			</button>
			<button
				style={{ backgroundColor: selectedButton === 2 ? "green" : "white" }}
				onClick={() => handleButtonClick(2)}
			>
				Позитивная
			</button>
		</div>
	);
};

export default ButtonSelector;
