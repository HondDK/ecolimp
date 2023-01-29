import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TestTwo = () => {
	const [selectedButton, setSelectedButton] = useState(null);

	const handleButtonClick = (button) => {
		setSelectedButton(button);
	};

	let navigate = useNavigate();
	const buttonSubmit = () => {
		navigate("/testtree", { replace: true });
	};
	
	return (
		<body class="test">
			<header>
				<h1>Практическое задание №2</h1>
				<p>
					1:<span class="time">00</span>
				</p>
			</header>

			<main class="main__test">
				<div class="text">
					Идеи какого известного экономиста иллюстрирует следующий текст? "В
					условиях стагнирующей экономики государство должно отойти от роли
					"ночного сторожа", лишь охраняющего и поддерживающего самые общие
					условия функционирования хозяйственной системы. Ему надлежит
					осуществлять активную бюджетную, кредитно-финансовую, социальную
					политику"
				</div>
				<div class="test_btn">
					<button
						style={{
							backgroundColor: selectedButton === 1 ? "green" : "white",
						}}
						onClick={() => handleButtonClick(1)}
					>
						А.Смит
					</button>
					<button
						style={{
							backgroundColor: selectedButton === 2 ? "green" : "white",
						}}
						onClick={() => handleButtonClick(2)}
					>
						Дж.М.Кейнс
					</button>
					<button
						style={{
							backgroundColor: selectedButton === 3 ? "green" : "white",
						}}
						onClick={() => handleButtonClick(3)}
					>
						К.Маркс
					</button>
					<button
						style={{
							backgroundColor: selectedButton === 4 ? "green" : "white",
						}}
						onClick={() => handleButtonClick(4)}
					>
						М.Фридмен
					</button>
				</div>
				<div class="wrap__btn">
					<button onClick={buttonSubmit} className="btn__close-task">
						Завершить задание
					</button>
				</div>
			</main>
		</body>
	);
};

export default TestTwo;
