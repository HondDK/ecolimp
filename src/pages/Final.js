import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { gglsheet } from "../libs/gglsheet";

const Final = () => {
	const [send, setSend] = useState(sessionStorage.getItem("send") || false);

	const totalScore = sessionStorage.getItem("score");

	const buttonSubmit = (e) => {
		if (send === false) {
			setSend(!send);
			setSend(sessionStorage.setItem("send", send));
			gglsheet(e);
		}
	};

	useEffect(() => {
		buttonSubmit();
	}, []);

	return (
		<div>
			<main className="main_final">
				<header className="header_text">Результаты теста</header>
				<div
					class="divTable"
					style={{
						width: "99%",
						textAlign: "center",
						border: "1px solid #fff",
					}}
				>
					<div class="divTableBody">
						<div class="divTableRow">
							<div
								style={{ width: "250px", height: "50px" }}
								class="divTableCell2 tableCell"
							>
								&nbsp;<strong>Участник</strong>
							</div>
							<div style={{ width: "130px" }} class="divTableCell2 tableCell2">
								&nbsp;<strong>Время</strong>
							</div>
							<div style={{ width: "150px" }} class="divTableCell2 tableCell">
								<strong>Общий результат</strong>&nbsp;
							</div>
						</div>
						<div class="divTableRow">
							<div class="divTableCell2 eTableCell">
								&nbsp;<strong>{sessionStorage.getItem("surname")}</strong>
								<br />
								<strong>{sessionStorage.getItem("name")}</strong>
								<br />
								<strong>{sessionStorage.getItem("patronymic")}</strong>
								<br />
								<strong>{sessionStorage.getItem("institution")}</strong>
								<br />
								<strong>{sessionStorage.getItem("profession")}</strong>
								<br />
								<strong>{sessionStorage.getItem("course")}</strong>
							</div>
							<div class="divTableCell2">
								{sessionStorage.getItem("time")}&nbsp;
							</div>
							<div class="divTableCell2">
								{totalScore}
								<form class="content" name="google-sheet">
									<input
										id="date"
										name="Name"
										style={{ display: "none" }}
										value={sessionStorage.getItem("name")}
									/>
									<input
										id="date"
										name="Surname"
										style={{ display: "none" }}
										value={sessionStorage.getItem("surname")}
									/>
									<input
										id="date"
										name="Patronymic"
										style={{ display: "none" }}
										value={sessionStorage.getItem("patronymic")}
									/>
									<input
										id="date"
										name="Institution"
										style={{ display: "none" }}
										value={sessionStorage.getItem("institution")}
									/>
									<input
										id="date"
										name="Profession"
										style={{ display: "none" }}
										value={sessionStorage.getItem("profession")}
									/>
									<input
										id="Scores"
										name="Scores"
										style={{ display: "none" }}
										value={totalScore}
									/>
									<input
										id="Course"
										name="Course"
										style={{ display: "none" }}
										value={sessionStorage.getItem("course")}
									/>
									<input
										id="date"
										name="Date"
										style={{ display: "none" }}
										value={sessionStorage.getItem("time")}
									/>
									<button
										style={{ display: "none" }}
										class="btn__submit"
										onClick={buttonSubmit}
									></button>
								</form>
								&nbsp;
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Final;
