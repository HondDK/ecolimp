import { useState } from "react";
import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { removeSessionStorage } from "../libs/helpers/removeSessionStorage";
import { useCheckVisible } from "../libs/helpers/useCheckVisible";
const TestThree = () => {
	let navigate = useNavigate();
	const correctValues = [1, 2, 4, 6, 3, 5, 7];
	const { t } = useTranslation();

	const [value, setValue] = useState();
	const [min, setMin] = useState(9);

	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
	const [value3, setValue3] = useState("");
	const [value4, setValue4] = useState("");
	const [value5, setValue5] = useState("");
	const [value6, setValue6] = useState("");
	const [value7, setValue7] = useState("");

	const handleChange = (value) => {
		setValue(value);
		if (value == false) {
			checkCorrectCount();
			removeSessionStorage();
			navigate("/ecolimp/testfour", { replace: true });
		}
	};
	const checkCorrectCount = () => {
		let correctCount = 0;
		const values = [value1, value2, value3, value4, value5, value6, value7];

		for (let i = 0; i < values.length; i++) {
			if (parseInt(values[i]) === correctValues[i]) correctCount++;
		}
		sessionStorage.setItem("correct3", correctCount);
	};
	const buttonSubmit = (e) => {
		e.preventDefault();
		checkCorrectCount();
		removeSessionStorage();
		navigate("/ecolimp/testfour", { replace: true });
	};
	const isVisible = useCheckVisible();
	console.log(isVisible);

	if (isVisible === false) {
		removeSessionStorage();
		navigate("/ecolimp/testfour", { replace: true });
	}

	return (
		<div>
			<body className="test">
				<header className="header_text">
					<h1>{t("work3content")}</h1>
					<p>
						<Time min={min} onChange={handleChange} />
					</p>
				</header>
				<main className="main__test">
					<div className="text" style={{ marginBottom: "20px" }}>
						{t("task3")}
					</div>
					<ol сlassName="ol_list">
						<li>{t("task3-question1")}</li>
						<li>{t("task3-question2")}</li>
						<li>{t("task3-question3")}</li>
						<li>{t("task3-question4")}</li>
						<li>{t("task3-question5")}</li>
						<li>{t("task3-question6")}</li>
						<li>{t("task3-question7")}</li>
					</ol>
					<div className="container">
						<div className="container__button">
							<div className="container__box">{t("task3-question8")}</div>
							<div className="container__inputs">
								<input
									type="number"
									value={value1}
									onChange={(e) => setValue1(e.target.value)}
								/>
								<input
									type="number"
									value={value2}
									onChange={(e) => setValue2(e.target.value)}
								/>
								<input
									type="number"
									value={value3}
									onChange={(e) => setValue3(e.target.value)}
								/>
								<input
									type="number"
									value={value4}
									onChange={(e) => setValue4(e.target.value)}
								/>
							</div>
						</div>
						<div class="container__button">
							<div class="container__box">{t("task3-question9")} </div>
							<div class="container__inputs">
								<input
									type="number"
									value={value5}
									onChange={(e) => setValue5(e.target.value)}
								/>
								<input
									type="number"
									value={value6}
									onChange={(e) => setValue6(e.target.value)}
								/>
								<input
									type="number"
									value={value7}
									onChange={(e) => setValue7(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div class="wrap__btn">
						<button className="btn__close-task" onClick={buttonSubmit}>
							{t("closeTask")}
						</button>
					</div>
				</main>
			</body>
		</div>
	);
};

export default TestThree;
