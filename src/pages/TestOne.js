import React, { useState, useEffect } from "react";
import ButtonReply from "../components/UI/ButtonReply/ButtonReply";
import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";

const TestOne = () => {
	let navigate = useNavigate();
	const [value, setValue] = useState();

	const handleChange = (value) => {
		setValue(value);
		if (value == false) {
			navigate("/testtwo", { replace: true });
		}
	};
	const buttonSubmit = () => {
		console.log(value);
		navigate("/testtwo", { replace: true });
	};

	return (
		<div>
			<body class="test">
				<header>
					<h1>Практическое задание №1</h1>
					<Time onChange={handleChange} />
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
						<ButtonReply></ButtonReply>
						<p class="p__test-text">
							За последнее время в экономике страны наблюдается спад
							производства и высокие темпы инфляции
						</p>
						<ButtonReply></ButtonReply>
						<p class="p__test-text">
							Структурная перестройка экономики страны, помимо других целей,
							направлена на повышение уровня потребления людей
						</p>
						<ButtonReply></ButtonReply>
						<p class="p__test-text">
							Осуществление структурной перестройки неизбежно ведет к разрушению
							эгалитаризма, господствующего в мышлении многих людей, резкому
							росту безработицы, что потенциально влечет за собой социальную
							дестабилизации, и поэтому структурная перестройка должна
							осуществляться постепенно
						</p>
						<ButtonReply></ButtonReply>
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
