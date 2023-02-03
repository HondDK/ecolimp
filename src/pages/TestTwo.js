import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Time from "../components/UI/Time/Time";
import { useTranslation } from "react-i18next";
import { removeSessionStorage } from "../libs/helpers/removeSessionStorage";

const TestTwo = () => {
	let navigate = useNavigate();

	const { t } = useTranslation();

	const [selectedButton, setSelectedButton] = useState(null);
	const [value, setValue] = useState();
	const [min, setMin] = useState(0);

	const handleButtonClick = (button) => {
		setSelectedButton(button);
	};

	const checkCorrectCount = () => {
		let correctCount = 0;
		if (selectedButton === 2) {
			correctCount++;
		}
		sessionStorage.setItem("correct2", correctCount);
	};

	const buttonSubmit = (e) => {
		e.preventDefault();
		checkCorrectCount(e);
		removeSessionStorage();
		navigate("/testtree", { replace: true });
	};

	const handleChange = (value) => {
		setValue(value);
		if (value === false) {
			checkCorrectCount(value);
			removeSessionStorage();
			navigate("/testtree", { replace: true });
		}
	};

	return (
		<body class="test">
			<header>
				<h1>{t("work2content")}</h1>
				<p>
					<Time min={min} onChange={handleChange} />
				</p>
			</header>

			<main class="main__test">
				<div class="text">{t("task2")}</div>
				<div class="test_btn">
					<button
						style={{
							backgroundColor: selectedButton === 1 ? "green" : "white",
						}}
						onClick={() => handleButtonClick(1)}
					>
						{t("task2-question1")}
					</button>
					<button
						style={{
							backgroundColor: selectedButton === 2 ? "green" : "white",
						}}
						onClick={() => handleButtonClick(2)}
					>
						{t("task2-question2")}
					</button>
					<button
						style={{
							backgroundColor: selectedButton === 3 ? "green" : "white",
						}}
						onClick={() => handleButtonClick(3)}
					>
						{t("task2-question3")}
					</button>
					<button
						style={{
							backgroundColor: selectedButton === 4 ? "green" : "white",
						}}
						onClick={() => handleButtonClick(4)}
					>
						{t("task2-question4")}
					</button>
				</div>
				<div class="wrap__btn">
					<button onClick={buttonSubmit} className="btn__close-task">
						{t("closeTask")}
					</button>
				</div>
			</main>
		</body>
	);
};

export default TestTwo;
