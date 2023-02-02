import React, { useState } from "react";

import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";
import { removeSessionStorage } from "../libs/helpers/removeSessionStorage";

const TestFour = () => {
	const [value, setValue] = useState();
	const [min, setMin] = useState(11);

	let navigate = useNavigate();
	const handleChange = (value) => {
		setValue(value);
		if (value == false) {
			navigate("/testfive", { replace: true });
			removeSessionStorage();
		}
	};

	const buttonSubmit = (e) => {
		e.preventDefault();
		removeSessionStorage();

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
					<div
						class="divTable"
						style={{ width: "100%", border: "1px solid #000" }}
					>
						<div class="divTableBody">
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Спрос</span>&nbsp;
								</div>
								<div class="divTableCell">
									Товары, которые потребляются совместно; при этом один без
									другого, как правило, не может быть использован к
									потреблению&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Величина спроса</span>
								</div>
								<div class="divTableCell">
									{" "}
									График (или шкала), показывающий, сколько единиц товара
									покупатели хотят и могут купить во всем диапазоне цен в данный
									момент времени&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Закон спроса</span>
								</div>
								<div class="divTableCell">
									Факторы, вызывающие изменение спроса и сдвиг кривой
									спроса&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Эффект дохода</span>
								</div>
								<div class="divTableCell">
									Товары, которые могут быть использованы вместо других товаров
									с аналогичными свойствами &nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Эффект замещения</span>
								</div>
								<div class="divTableCell">
									Количество товара, которое покупатели хотят и могут приобрести
									при данном уровне цены &nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										Принцип убывания маржинальной полезности
									</span>
								</div>
								<div class="divTableCell">
									Явление, которое возникает, когда вследствие снижения цены
									товара происходит относительное увеличение дохода покупателя,
									позволяющее последнему приобрести большее количество
									товара&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Эффект Гиффена</span>
								</div>
								<div class="divTableCell">
									Товары, спрос на которые растет по мере увеличения доходов
									покупателей&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Детерминанты спроса</span>
								</div>
								<div class="divTableCell">
									с ростом потребления блага (при неизменном объёме потребления
									всех остальных благ) общая полезность, получаемая
									потребителем, возрастает, но скорость роста замедляется&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Низшие товары</span>
								</div>
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										Закон, в соответствии с которым величина спроса на товар
										находится в обратной зависимости от цены этого товара
									</span>
									&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Нормальные товары</span>
								</div>
								<div class="divTableCell">
									Явление, состоящее в том, что повышение цены товара ведет к
									росту объема спроса на него&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Товары-субституты</span>
								</div>
								<div class="divTableCell">
									Явление, которое возникает, когда покупатель отдает
									предпочтение более дешевому товару, вытесняющему при выборе
									покупки товар, ставший относительно дороже&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>Товары-комплементы</span>
								</div>
								<div class="divTableCell">
									Товары, спрос на которые падает по мере роста доходов
									потребителей&nbsp;
								</div>
							</div>
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
