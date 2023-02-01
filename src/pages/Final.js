import React from "react";
import { useTranslation } from "react-i18next";

const Final = () => {
	const { t, i18n } = useTranslation();

	const correct1 = sessionStorage.getItem("correct1");
	const correct2 = sessionStorage.getItem("correct2");
	const correct3 = sessionStorage.getItem("correct3");
	//const correct4 = sessionStorage.getItem("correct4");
	const correct5 = sessionStorage.getItem("correct5");

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
								{Number(correct1) +
									Number(correct2) +
									Number(correct3) +
									Number(correct5)}
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
