import React from "react";
import ButtonCloseTest from "../components/UI/ButtonCloseTest/ButtonCloseTest";

const TestOne = () => {
	return (
		<div>
			<body class="test">
				<header>
					<h1>Практическое задание №1</h1>
					<p>
						2:<span class="time">00</span>
					</p>
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
						<button>Нормативная</button>
						<button>Позитивная</button>
						<p class="p__test-text">
							За последнее время в экономике страны наблюдается спад
							производства и высокие темпы инфляции
						</p>
						<button>Нормативная</button>
						<button>Позитивная</button>
						<p class="p__test-text">
							Структурная перестройка экономики страны, помимо других целей,
							направлена на повышение уровня потребления людей
						</p>
						<button>Нормативная</button>
						<button>Позитивная</button>
						<p class="p__test-text">
							Осуществление структурной перестройки неизбежно ведет к разрушению
							эгалитаризма, господствующего в мышлении многих людей, резкому
							росту безработицы, что потенциально влечет за собой социальную
							дестабилизации, и поэтому структурная перестройка должна
							осуществляться постепенно
						</p>
						<button>Нормативная</button>
						<button>Позитивная</button>
					</div>
					<ButtonCloseTest>Завершить задание</ButtonCloseTest>
				</main>
			</body>
		</div>
	);
};

export default TestOne;
