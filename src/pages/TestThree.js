import React from "react";
import ButtonCloseTest from "../components/UI/ButtonCloseTest/ButtonCloseTest";

const TestThree = () => {
	return (
		<div>
			<body class="test">
				<header>
					<h1>Практическое задание №3</h1>
					<p>
						10:<span class="time">00</span>
					</p>
				</header>
				<main class="main__test">
					<div class="text">
						Укажите какие из приведенных ниже утверждений характеризуют признаки
						натурального хозяйства, а какие - товарного производства:
					</div>
					<ol>
						<li>
							В замкнутой экономической единице ведется производство готового
							продукта и его потребление;
						</li>
						<li>
							Трудовой процесс базируется на традиционных обычаях, принудительно
							устанавливаемых хозяйственных связях в рамках отдельной общности;
						</li>
						<li>
							Производство основано как на индивидуальном труде собственника,
							так и на применении им наемной рабочей силы;
						</li>
						<li>
							Процесс производства ведется с применением малопроизводительных
							орудий труда, не дающих дополнительного продукта, сверх
							необходимого для потребления самих производителей;
						</li>
						<li>
							Изготовленная продукция принадлежит собственнику и предназначена
							для свободной реализации на рынке;
						</li>
						<li>
							Экономическая эволюция происходит очень медленно, отдельные
							усовершенствования и преобразования могут совершаться столетиями;
						</li>
						<li>
							Быстрый экономический прогресс общества является следствием
							высоких темпов роста производительности труда и динамического
							расширения ассортимента продукции.
						</li>
					</ol>
					<div class="container">
						<div class="container__button">
							<div class="container__box">Натуральное хозяйство</div>
							<div class="container__inputs">
								<input type="text" />
								<input type="text" />
								<input type="text" />
								<input type="text" />
							</div>
						</div>
						<div class="container__button">
							<div class="container__box">Товарное производство </div>
							<div class="container__inputs">
								<input type="text" />
								<input type="text" />
								<input type="text" />
							</div>
						</div>
					</div>
					<div class="wrap__btn">
						<ButtonCloseTest>Завершить задание</ButtonCloseTest>
					</div>
				</main>
			</body>
		</div>
	);
};

export default TestThree;
