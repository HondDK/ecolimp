import React from "react";
import ButtonCloseTest from "../components/UI/ButtonCloseTest/ButtonCloseTest";

const TestTwo = () => {
	return (
		<body class="test">
			<header>
				<h1>Практическое задание №2</h1>
				<p>
					1:<span class="time">00</span>
				</p>
			</header>

			<main class="main__test">
				<div class="text">
					Идеи какого известного экономиста иллюстрирует следующий текст? "В
					условиях стагнирующей экономики государство должно отойти от роли
					"ночного сторожа", лишь охраняющего и поддерживающего самые общие
					условия функционирования хозяйственной системы. Ему надлежит
					осуществлять активную бюджетную, кредитно-финансовую, социальную
					политику"
				</div>
				<div class="test_btn">
					<button>А.Смит</button>
					<button>Дж.М.Кейнс</button>
					<button>К.Маркс</button>
					<button>М.Фридмен</button>
				</div>
				<div class="wrap__btn">
					<ButtonCloseTest>Завершить задание</ButtonCloseTest>
				</div>
			</main>
		</body>
	);
};

export default TestTwo;
