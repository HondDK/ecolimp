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
		let correctCount = 0;

		removeSessionStorage();
		card.map((c) => {
			if (c.id === c.order) {
				correctCount++;
				sessionStorage.setItem("correct4", correctCount);
			}
		});
		navigate("/testfive", { replace: true });
	};

	const [card, setCard] = useState([
		{
			id: 1,
			order: 6,
			text: "Количество товара, которое покупатели хотят и могут приобрести при данном уровне цены",
		},
		{
			id: 2,
			order: 2,
			text: "График (или шкала), показывающий, сколько единиц товара покупатели хотят и могут купить во всем диапазоне цен в данный момент времени",
		},
		{
			id: 3,
			order: 10,
			text: "Закон, в соответствии с которым величина спроса на товар находится в обратной зависимости от цены этого товара",
		},
		{
			id: 4,
			order: 7,
			text: "Явление, которое возникает, когда вследствие снижения цены товара происходит относительное увеличение дохода покупателя, позволяющее последнему приобрести большее количество товара",
		},
		{
			id: 5,
			order: 12,
			text: "Явление, которое возникает, когда покупатель отдает предпочтение более дешевому товару, вытесняющему при выборе покупки товар, ставший относительно дороже",
		},
		{
			id: 6,
			order: 9,
			text: "с ростом потребления блага (при неизменном объёме потребления всех остальных благ) общая полезность, получаемая потребителем, возрастает, но скорость роста замедляется",
		},
		{
			id: 7,
			order: 11,
			text: "Явление, состоящее в том, что повышение цены товара ведет к росту объема спроса на него",
		},
		{
			id: 8,
			order: 3,
			text: "Факторы, вызывающие изменение спроса и сдвиг кривой спроса",
		},
		{
			id: 9,
			order: 5,
			text: "Товары, спрос на которые падает по мере роста доходов потребителей",
		},
		{
			id: 10,
			order: 8,
			text: "Товары, спрос на которые растет по мере увеличения доходов покупателей",
		},
		{
			id: 11,
			order: 4,
			text: "Товары, которые могут быть использованы вместо других товаров с аналогичными свойствами",
		},
		{
			id: 12,
			order: 1,
			text: "Товары, которые потребляются совместно; при этом один без другого, как правило, не может быть использован к потреблению",
		},
	]);

	const [currentCard, setCurrentCard] = useState(null);

	const dragStartHandle = (e, set) => {
		console.log("drag", set);
		setCurrentCard(set);
	};
	const dragEndHandle = (e) => {};
	const dragOverHandle = (e) => {
		e.preventDefault();
	};

	const dropHandler = (e, set) => {
		e.preventDefault();

		setCard(
			card.map((c) => {
				if (c.id === set.id) {
					return { ...c, order: currentCard.order };
				}
				if (c.id === currentCard.id) {
					return { ...c, order: set.order };
				}
				return c;
			})
		);
		console.log("drop", card);
	};
	const sortCard = (a, b) => {
		if (a.order > b.order) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
		<div>
			<body class="test">
				<header>
					<h1>{t("work4content")}</h1>
					<p>
						<Time min={min} onChange={handleChange} />
					</p>
				</header>

				<main class="main__test">
					<div class="text">{t("task4")}</div>
					<div
						class="divTable"
						style={{ width: "100%", border: "1px solid #000", height: "600px" }}
					>
						<div class="divTableBody">
							<div class="divTableRow">
								<div class="divTableCell">{t("task4-question1")}</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(0, 1)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question2")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(1, 2)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question3")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(2, 3)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question4")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(3, 4)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question5")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(4, 5)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question6")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(5, 6)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question7")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(6, 7)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question8")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(7, 8)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question9")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(8, 9)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
									&nbsp;
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question10")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(9, 10)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question11")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(10, 11)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
								</div>
							</div>
							<div class="divTableRow">
								<div class="divTableCell">
									<span style={{ fontWeight: "400" }}>
										{t("task4-question12")}
									</span>
								</div>
								<div class="divTableCell">
									{card
										.sort(sortCard)
										.slice(11, 12)
										.map((set) => (
											<div
												style={{ cursor: "grab" }}
												onDragStart={(e) => dragStartHandle(e, set)}
												onDragLeave={(e) => dragEndHandle(e)}
												onDragEnd={(e) => dragEndHandle(e)}
												onDragOver={(e) => dragOverHandle(e)}
												onDrop={(e) => dropHandler(e, set)}
												draggable={true}
												key={set.id}
											>
												{set.text}
											</div>
										))}
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
