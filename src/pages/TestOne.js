import React, { useState, useEffect } from "react";
import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { removeSessionStorage } from "../libs/helpers/removeSessionStorage";

const TestOne = (props) => {
	let navigate = useNavigate();
	const { t, i18n } = useTranslation();
	i18n.changeLanguage(props.language);

	const correctOptions = [1, 4, 6, 7];

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
			removeSessionStorage();
			navigate("/testtwo", { replace: true });
		}
	};

	const buttonSubmit = (e) => {
		e.preventDefault();
		const correctCount = selectedOption.filter((e) =>
			correctOptions.includes(e)
		).length;
		removeSessionStorage();
		sessionStorage.setItem("correct1", correctCount);
		console.log(`правильных ${correctCount}`);
		navigate("/testtwo", { replace: true });
	};

	return (
		<div>
			<body class="test">
				<header>
					<h1>{t("work1content")}</h1>
					<Time min={min} onChange={handleChange} />
				</header>
				<main class="main__test">
					<div class="test-title">
						<p class="p__test-text">{t("task")}</p>
					</div>
					<div class="test-term">
						<p class="p__test-text">{t("question1")}</p>
						<div>
							<button
								style={{
									backgroundColor: selectedButtons.includes(1)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(1)}
							>
								{t("regulatory")}
							</button>
							<button
								style={{
									backgroundColor: selectedButtons.includes(2)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(2)}
							>
								{t("positive")}
							</button>
						</div>
						<p class="p__test-text">{t("question2")}</p>
						<div>
							<button
								style={{
									backgroundColor: selectedButtons.includes(3)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(3)}
							>
								{t("regulatory")}
							</button>
							<button
								style={{
									backgroundColor: selectedButtons.includes(4)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(4)}
							>
								{t("positive")}
							</button>
						</div>
						<p class="p__test-text">{t("question3")}</p>
						<div>
							<button
								style={{
									backgroundColor: selectedButtons.includes(5)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(5)}
							>
								{t("regulatory")}
							</button>
							<button
								style={{
									backgroundColor: selectedButtons.includes(6)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(6)}
							>
								{t("positive")}
							</button>
						</div>
						<p class="p__test-text">{t("question4")}</p>
						<div>
							<button
								style={{
									backgroundColor: selectedButtons.includes(7)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(7)}
							>
								{t("regulatory")}
							</button>
							<button
								style={{
									backgroundColor: selectedButtons.includes(8)
										? "green"
										: "white",
								}}
								onClick={() => handleButtonClick(8)}
							>
								{t("positive")}
							</button>
						</div>
					</div>

					<button className="btn__close-task" onClick={buttonSubmit}>
						{t("closeTask")}
					</button>
				</main>
			</body>
		</div>
	);
};

export default TestOne;
