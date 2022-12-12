import React from "react";
import ButtonCloseTest from "../components/UI/ButtonCloseTest/ButtonCloseTest";
import Time from "../components/UI/Time/Time";
import ButtonReply from "../components/UI/ButtonReply/ButtonReply";
const TestOne = () => {
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
						<ButtonReply>Нормативная</ButtonReply>
						<ButtonReply>Позитивная</ButtonReply>
						<p class="p__test-text">
							За последнее время в экономике страны наблюдается спад
							производства и высокие темпы инфляции
						</p>
						<ButtonReply>Нормативная</ButtonReply>
						<ButtonReply>Позитивная</ButtonReply>
						<p class="p__test-text">
							Структурная перестройка экономики страны, помимо других целей,
							направлена на повышение уровня потребления людей
						</p>
						<ButtonReply>Нормативная</ButtonReply>
						<ButtonReply>Позитивная</ButtonReply>
						<p class="p__test-text">
							Осуществление структурной перестройки неизбежно ведет к разрушению
							эгалитаризма, господствующего в мышлении многих людей, резкому
							росту безработицы, что потенциально влечет за собой социальную
							дестабилизации, и поэтому структурная перестройка должна
							осуществляться постепенно
						</p>
						<ButtonReply>Нормативная</ButtonReply>
						<ButtonReply>Позитивная</ButtonReply>
					</div>
					<ButtonCloseTest>Завершить задание</ButtonCloseTest>
				</main>
			</body>
		</div>
	);
};

export default TestOne;
