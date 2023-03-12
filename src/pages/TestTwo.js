import React, { useState, useEffect } from "react";
import json from "../test.json";
import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";
import OneAnswerQ from "../components/OneAnswerQ";

function Quiz() {
	let navigate = useNavigate();
	const [min, setMin] = useState(29);
	const [value, setValue] = useState();
	const [questions, setQuestions] = useState([]);
	const [score, setScore] = useState(0);

	const data = json;
	useEffect(() => {
		setQuestions(data.questions);
	}, []);

	const handleChange = (value) => {
		setValue(value);

		if (value === false) {
			sessionStorage.setItem("score", score);
			navigate("/ecolimp/final", { replace: true });
		}
	};

	const buttonSubmit = (e) => {
		e.preventDefault();
		sessionStorage.setItem("score", score);
		navigate("/ecolimp/final", { replace: true });
	};

	function checkAnswer(questionIndex, optionIndex) {
		const selectedOption = questions[questionIndex].options[optionIndex];

		// был ли уже дан ответ на вопрос
		if (questions[questionIndex].answered) {
			// был ли ранее выбранный параметр правильным
			const previousOption = questions[questionIndex].selectedOption;
			if (questions[questionIndex].correctAnswers.includes(previousOption)) {
				if (!questions[questionIndex].correctAnswers.includes(selectedOption)) {
					setScore(score - 1);
				}
			} else {
				if (questions[questionIndex].correctAnswers.includes(selectedOption)) {
					setScore(score + 1);
				}
			}
		} else {
			// проверка на правильность
			if (questions[questionIndex].correctAnswers.includes(selectedOption)) {
				setScore(score + 1);
			}
		}
		const updatedQuestions = [...questions];
		updatedQuestions[questionIndex].selectedOption = selectedOption;
		updatedQuestions[questionIndex].answered = true;
		setQuestions(updatedQuestions);
	}

	useEffect(() => {
		console.log(score);
	}, [score]);
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
