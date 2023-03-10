import React, { useState, useEffect } from "react";
import json from "../test.json";
import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";
import OneAnswerQ from "../components/OneAnswerQ";

function Quiz() {
	let navigate = useNavigate();
	const [min, setMin] = useState(30);
	const [value, setValue] = useState();
	const [questions, setQuestions] = useState([]);
	const [score, setScore] = useState(0);

	const data = json;
	useEffect(() => {
		setQuestions(data.questions);
	}, []);
	console.log(data);

	const handleChange = (value) => {
		setValue(value);
	};

	const buttonSubmit = (e) => {
		e.preventDefault();

		navigate("/ecolimp/final", { replace: true });
	};

	function checkAnswer(questionIndex, optionIndex) {
		const selectedOption = questions[questionIndex].options[optionIndex];
		if (selectedOption === questions[questionIndex].answer) {
			setScore(score + 1);
		}
	}

	return (
		<body className="test">
			<header className="header_text">
				<h1>
					Отборочные тесты для участников Хакатона учителей Карагандинской
					области
				</h1>
				<Time min={min} onChange={handleChange} />
			</header>

			<main className="main__test">
				{data.questions.map((question, index) => (
					<div key={index}>
						<p>{question.question}</p>
						<img src={question.img} alt="" />
						<OneAnswerQ
							key={index}
							question={question.question}
							options={question.options}
							checkAnswer={(optionIndex) => checkAnswer(index, optionIndex)}
						/>
					</div>
				))}
				<div class="wrap__btn">
					<button onClick={buttonSubmit} className="btn__close-task">
						Завершить тест
					</button>
				</div>
			</main>
		</body>
	);
}

export default Quiz;
