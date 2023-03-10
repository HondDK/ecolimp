import React, { useState } from "react";
import ButtonOneAnswerQ from "./UI/ButtonOneAnswerQ";

const OneAnswerQ = (props) => {
	const { options, checkAnswer } = props;
	const [questions, setQuestions] = useState([]);
	const [score, setScore] = useState(0);
	const [showResults, setShowResults] = useState(false);

	function checkAnswer(questionIndex, optionIndex) {
		const selectedOption = questions[questionIndex].options[optionIndex];
		if (selectedOption === questions[questionIndex].answer) {
			setScore(score + 1);
		}
	}
	return (
		<>
			{options.map((option, index) => (
				<>
					<div class="test_btn">
						<ButtonOneAnswerQ
							key={index}
							onClick={() => checkAnswer(option, index)}
						>
							{option}
						</ButtonOneAnswerQ>
					</div>
				</>
			))}
		</>
	);
};

export default OneAnswerQ;
