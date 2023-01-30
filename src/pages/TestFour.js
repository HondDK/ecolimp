import React, { useState } from "react";

import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";

const TestFour = () => {
	const [value, setValue] = useState();
	const [min, setMin] = useState(11);

	let navigate = useNavigate();
	const handleChange = (value) => {
		setValue(value);
		if (value == false) {
			navigate("/testfour", { replace: true });
		}
	};

	const buttonSubmit = (e) => {
		e.preventDefault();

		navigate("/testfive", { replace: true });
	};
	return (
		<div>
			<body class="test">
				<header>
					<h1>Практическое задание №4</h1>
					<p>
						<Time min={min} onChange={handleChange} />
					</p>
				</header>

				<main class="main__test">
					<div class="text">
						Для каждого из приведенных здесь понятий и терминов подберите
						соответствующее ему определение:
					</div>
					<div class="blocks">
						<div class="block__text">Cпрос</div>
						<div class="block__desk">
							Товары, которые потребляются совместно; при этом один без другого,
							как правило, не может быть использован к потреблению
						</div>
						<div class="block__text">Величина спроса</div>
						<div class="block__desk">
							График (или шкала), показывающий, сколько единиц товара покупатели
							хотят и могут купить во всем диапазоне цен в данный момент времени
						</div>
						<div class="block__text">Закон спроса</div>
						<div class="block__desk">
							Факторы, вызывающие изменение спроса и сдвиг кривой спроса
						</div>
						<div class="block__text">Эффект дохода</div>
						<div class="block__desk">
							Товары, которые могут быть использованы вместо других товаров с
							аналогичными свойствами
						</div>
						<div class="block__text">Эффект замещения</div>
						<div class="block__desk">
							Товары, спрос на которые падает по мере роста доходов потребителей
						</div>
						<div class="block__text">
							Принцип убывания маржинальной полезности
						</div>
						<div class="block__desk">
							Количество товара, которое покупатели хотят и могут приобрести при
							данном уровне цены
						</div>
						<div class="block__text">Эффект Гиффена</div>
						<div class="block__desk">
							Явление, которое возникает, когда вследствие снижения цены товара
							происходит относительное увеличение дохода покупателя, позволяющее
							последнему приобрести большее количество товара
						</div>
						<div class="block__text">Детерминанты спроса</div>
						<div class="block__desk">
							Товары, спрос на которые растет по мере увеличения доходов
							покупателей
						</div>
						<div class="block__text">Низшие товары</div>
						<div class="block__desk">
							С ростом потребления блага (при неизменном объёме потребления всех
							остальных благ) общая полезность, получаемая потребителем,
							возрастает, но скорость роста замедляется
						</div>
						<div class="block__text">Нормальные товары</div>
						<div class="block__desk">
							Закон, в соответствии с которым величина спроса на товар находится
							в обратной зависимости от цены этого товара
						</div>
						<div class="block__text">Товары-субституты</div>
						<div class="block__desk">
							Явление, состоящее в том, что повышение цены товара ведет к росту
							объема спроса на него
						</div>
						<div class="block__text">Товары-комплементы</div>
						<div class="block__desk">
							Явление, которое возникает, когда покупатель отдает предпочтение
							более дешевому товару, вытесняющему при выборе покупки товар,
							ставший относительно дороже
						</div>
					</div>
				</main>
				<div class="wrap__btn">
					<button className="btn__close-task" onClick={buttonSubmit}>
						Завершить задание
					</button>
				</div>
			</body>
		</div>
	);
};

export default TestFour;
