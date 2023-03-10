import React, { useState } from "react";
import json from "../test.json";
import OneAnswerQ from "../components/OneAnswerQ";
import Time from "../components/UI/Time/Time";
function Quiz() {
	const [min, setMin] = useState(2);
	const [value, setValue] = useState();
	const data = json;
	console.log(data);

	const handleChange = (value) => {
		setValue(value);
	};

	return (
		<body class="test">
			<header class="header_text">
				<h1>
					Отборочные тесты для участников Хакатона учителей Карагандинской
					области
				</h1>
				<Time min={min} onChange={handleChange} />
			</header>

			<main className="main__test">
				{data.questions.map((item) => (
					<>
						<p>{item.question}</p>
						<img src={item.img} />
						<OneAnswerQ question={item.question} options={item.options}>
							{item.question}
						</OneAnswerQ>
					</>
				))}
			</main>
		</body>
	);
}

export default Quiz;
