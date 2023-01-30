import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Time from "../components/UI/Time/Time";

const TestTwo = () => {
	let navigate = useNavigate();
	const correctOption = [3];

	const [selectedButton, setSelectedButton] = useState(null);
	const [value, setValue] = useState();
	const [min, setMin] = useState(0);
	const [selectedOption, setSelectedOption] = useState("");

	const handleButtonClick = (button) => {
		setSelectedButton(button);
		setSelectedOption(button);
	};

	const buttonSubmit = (e) => {
		e.preventDefault();
		let correctCount = 0;

		if (selectedOption == correctOption) {
			correctCount++;
		}

		console.log(`правильных ${correctCount}`);
		navigate("/testtree", { replace: true });
	};

	const handleChange = (value) => {
		setValue(value);
		if (value == false) {
			navigate("/testtree", { replace: true });
		}
	};

	return (
		<body class="test">
			<header>
				<h1>Практическое задание №2</h1>
				<p>
					<Time min={min} onChange={handleChange} />
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
