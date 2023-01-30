import React, { useState, useEffect } from "react";
import ButtonReply from "../components/UI/ButtonReply/ButtonReply";
import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";

const TestOne = () => {
	let navigate = useNavigate();
	const correctOptions = [1, 5, 6, 7];

	const [value, setValue] = useState();
	const [min, setMin] = useState(2);
	const [selectedOption, setSelectedOption] = useState("");
	const [correctCount, setСorrectCount] = useState(0);
	const [selectedButtons, setSelectedButtons] = useState([]);

	const handleButtonClick = (button) => {
		setSelectedOption((prevOptions) => {
			if (prevOptions.includes(button)) {
				return prevOptions.filter((o) => o !== button);
			} else {
				return [...prevOptions, button];
			}
		});

		if (selectedButtons.includes(button)) {
			setSelectedButtons(
				selectedButtons.filter((selected) => selected !== button)
			);
		} else if (selectedButtons.length < 4) {
			setSelectedButtons([...selectedButtons, button]);
		}
	};

	const handleChange = (value) => {
		setValue(value);
		if (value == false) {
			navigate("/testtwo", { replace: true });
		}
	};

	const buttonSubmit = (e) => {
		e.preventDefault();
		const correctCount = selectedOption.filter((e) =>
			correctOptions.includes(e)
		).length;

		console.log(`правильных ${correctCount}`);
		navigate("/testtwo", { replace: true });
	};

	return (
		<div>
			<body class="test">
				<header>
					<h1>Практическое задание №1</h1>
					<Time min={min} onChange={handleChange} />
				</header>
				<main class="main__test">
					<div class="test-title">
						<p class="p__test-text">
							Определите позитивное и нормативное утверждение:
						</p>
					</div>
					<div class="test-term">
						<p class="p__test-text">
							Необходимо разработать комплекс мер по замедлению или прекращению
							спада производства и снижению темпов инфляции
						</p>
						<div>
							<button
								style={{
									backgroundColor: selectedButtons.includes(1)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(1)}
							>
								Нормативная
							</button>
							<button
								style={{
									backgroundColor: selectedButtons.includes(2)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(2)}
							>
								Позитивная
							</button>
						</div>
						<p class="p__test-text">
							За последнее время в экономике страны наблюдается спад
							производства и высокие темпы инфляции
						</p>
						<div>
							<button
								style={{
									backgroundColor: selectedButtons.includes(3)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(3)}
							>
								Нормативная
							</button>
							<button
								style={{
									backgroundColor: selectedButtons.includes(4)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(4)}
							>
								Позитивная
							</button>
						</div>
						<p class="p__test-text">
							Структурная перестройка экономики страны, помимо других целей,
							направлена на повышение уровня потребления людей
						</p>
						<div>
							<button
								style={{
									backgroundColor: selectedButtons.includes(5)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(5)}
							>
								Нормативная
							</button>
							<button
								style={{
									backgroundColor: selectedButtons.includes(6)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(6)}
							>
								Позитивная
							</button>
						</div>
						<p class="p__test-text">
							Осуществление структурной перестройки неизбежно ведет к разрушению
							эгалитаризма, господствующего в мышлении многих людей, резкому
							росту безработицы, что потенциально влечет за собой социальную
							дестабилизации, и поэтому структурная перестройка должна
							осуществляться постепенно
						</p>
						<div>
							<button
								style={{
									backgroundColor: selectedButtons.includes(7)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(7)}
							>
								Нормативная
							</button>
							<button
								style={{
									backgroundColor: selectedButtons.includes(8)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(8)}
							>
								Позитивная
							</button>
						</div>
					</div>

					<button className="btn__close-task" onClick={buttonSubmit}>
						Завершить задание
					</button>
				</main>
			</body>
		</div>
	);
};

export default TestOne;
