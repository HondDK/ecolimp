import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gglsheet } from "../libs/gglsheet";

const Final = () => {
	const { t } = useTranslation();

	const correct1 = sessionStorage.getItem("correct1");
	const correct2 = sessionStorage.getItem("correct2");
	const correct3 = sessionStorage.getItem("correct3");
	//const correct4 = sessionStorage.getItem("correct4");
	const correct5 = sessionStorage.getItem("correct5");

	const totalScore =
		Number(correct1) + Number(correct2) + Number(correct3) + Number(correct5);

	const buttonSubmit = (e) => {
		gglsheet(e);
	};
	useEffect(() => {
		buttonSubmit();
	}, []);

	return (
		<div>
			<main className="main_final">
				<header>{t("result")}</header>
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
								&nbsp;<strong>{t("site")}</strong>
							</div>
							<div style={{ width: "130px" }} class="divTableCell2 tableCell2">
								&nbsp;<strong>{t("timeZ")}</strong>
							</div>
							<div class="divTableCell2 tableCell">
								<strong>№ 1</strong>&nbsp;
							</div>
							<div class="divTableCell2 tableCell">
								<strong>№ 2</strong>&nbsp;
							</div>
							<div class="divTableCell2 tableCell">
								<strong>№ 3</strong>&nbsp;
							</div>
							<div class="divTableCell2 tableCell">
								<strong>№ 4</strong>&nbsp;
							</div>
							<div class="divTableCell2 tableCell">
								<strong>№ 5</strong>&nbsp;
							</div>
							<div style={{ width: "150px" }} class="divTableCell2 tableCell">
								<strong>{t("allResult")}</strong>&nbsp;
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
							<div class="divTableCell2">123&nbsp;</div>
							<div class="divTableCell2">{correct1}&nbsp;</div>
							<div class="divTableCell2">{correct2}&nbsp;</div>
							<div class="divTableCell2">{correct3}&nbsp;</div>
							<div class="divTableCell2">{correct1}&nbsp;</div>
							<div class="divTableCell2">{correct5}&nbsp;</div>
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
										id="Scores"
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
									>
										{t("send")}
									</button>
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
