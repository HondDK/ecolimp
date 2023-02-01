import React from "react";
import { useTranslation } from "react-i18next";

const Final = () => {
	const { t, i18n } = useTranslation();

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
								&nbsp;<strong>{t("surname")}</strong>
								<br />
								<strong>{t("name")}</strong>
								<br />
								<strong>{t("patronymic")}</strong>
								<br />
								<strong>{t("institution")}</strong>
								<br />
								<strong>{t("prof")}</strong>
								<br />
								<strong>{t("course")}</strong>
							</div>
							<div class="divTableCell2">&nbsp;</div>
							<div class="divTableCell2">&nbsp;</div>
							<div class="divTableCell2">&nbsp;</div>
							<div class="divTableCell2">&nbsp;</div>
							<div class="divTableCell2">&nbsp;</div>
							<div class="divTableCell2">&nbsp;</div>
							<div class="divTableCell2">&nbsp;</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Final;
