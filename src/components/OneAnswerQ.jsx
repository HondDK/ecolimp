import React, { useState, useEffect } from "react";
import ButtonOneAnswerQ from "./UI/ButtonOneAnswerQ";

const OneAnswerQ = (props) => {
	const { options, checkAnswer } = props;
	const [buttonColor, setButtonColor] = useState("white");
	return (
		<>
			<>
				{options.map((option, index) => (
					<div class="test_btn">
						<ButtonOneAnswerQ
							key={index}
							checkAnswer={(optionIndex) => checkAnswer(index, optionIndex)}
						>
							{option}
						</ButtonOneAnswerQ>
					</div>
				))}
			</>
		</>
	);
};

export default OneAnswerQ;
