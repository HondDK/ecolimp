import React, { useState } from "react";
import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";
import { removeSessionStorage } from "../libs/helpers/removeSessionStorage";
import { useTranslation } from "react-i18next";
import { useCheckVisible } from "../libs/helpers/useCheckVisible";
const TestFour = () => {
	const [value, setValue] = useState();
	const [min, setMin] = useState(11);
	const { t } = useTranslation();
	let navigate = useNavigate();

	const handleChange = (value) => {
		setValue(value);
		if (value == false) {
			checkCorrectCount();
			removeSessionStorage();
			navigate("/ecolimp/testfive", { replace: true });
		}
	};

	const buttonSubmit = (e) => {
		e.preventDefault();

		removeSessionStorage();
		checkCorrectCount();
		navigate("/ecolimp/testfive", { replace: true });
	};

	const checkCorrectCount = () => {
		let correctCount = 0;
		card.map((c) => {
			if (c.id === c.order) {
				correctCount++;
				sessionStorage.setItem("correct4", correctCount);
			}
		});
	};

	const [card, setCard] = useState([
		{
			id: 1,
			order: 6,
			text: t("task4-answer1"),
		},
		{
			id: 2,
			order: 2,
			text: t("task4-answer2"),
		},
		{
			id: 3,
			order: 10,
			text: t("task4-answer3"),
		},
		{
			id: 4,
			order: 7,
			text: t("task4-answer4"),
		},
		{
			id: 5,
			order: 12,
			text: t("task4-answer5"),
		},
		{
			id: 6,
			order: 9,
			text: t("task4-answer6"),
		},
		{
			id: 7,
			order: 11,
			text: t("task4-answer7"),
		},
		{
			id: 8,
			order: 3,
			text: t("task4-answer8"),
		},
		{
			id: 9,
			order: 5,
			text: t("task4-answer9"),
		},
		{
			id: 10,
			order: 8,
			text: t("task4-answer10"),
		},
		{
			id: 11,
			order: 4,
			text: t("task4-answer11"),
		},
		{
			id: 12,
			order: 1,
			text: t("task4-answer12"),
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

	const isVisible = useCheckVisible();
	console.log(isVisible);

	if (isVisible === false) {
		removeSessionStorage();
		navigate("/ecolimp/testfive", { replace: true });
	}

	return (
		<div>
			<body class="test">
				<header>
					<h1>Практическое задание №4</h1>
					<p>
						<Time min={min} onChange={handleChange} />
					</p>
				</header>

				<main
					class="main__test"
					style={{
						msUserSelect: "none",
						mozUserSelect: "none",
						webkitUserSelect: "none",
						UserSelect: "none",
					}}
				>
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
												{t(set.text)}
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
												{t(set.text)}
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
												{t(set.text)}
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
												{t(set.text)}
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
												{t(set.text)}
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
												{t(set.text)}
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
												{t(set.text)}
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
												{t(set.text)}
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
												{t(set.text)}
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
												{t(set.text)}
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
												{t(set.text)}
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
						{t("closeTask")}
					</button>
				</div>
			</body>
		</div>
	);
};

export default TestFour;
