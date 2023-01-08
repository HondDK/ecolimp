import React, { useState } from "react";
import ButtonCloseTest from "../components/UI/ButtonCloseTest/ButtonCloseTest";
import Select from "../components/UI/Select/Select";
import Time from "../components/UI/Time/Time";

const TestOne = () => {
	const [value, setValue] = useState("");

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<div>
			<body class="test">
				<header>
					<h1>Практическое задание №1</h1>
					<Time />
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
						<Select></Select>
						<p class="p__test-text">
							За последнее время в экономике страны наблюдается спад
							производства и высокие темпы инфляции
						</p>
						<Select></Select>
						<p class="p__test-text">
							Структурная перестройка экономики страны, помимо других целей,
							направлена на повышение уровня потребления людей
						</p>
						<Select></Select>
						<p class="p__test-text">
							Осуществление структурной перестройки неизбежно ведет к разрушению
							эгалитаризма, господствующего в мышлении многих людей, резкому
							росту безработицы, что потенциально влечет за собой социальную
							дестабилизации, и поэтому структурная перестройка должна
							осуществляться постепенно
						</p>
						<Select></Select>
					</div>
					<ButtonCloseTest>Завершить задание</ButtonCloseTest>
				</main>
			</body>
		</div>
	);
};

export default TestOne;
