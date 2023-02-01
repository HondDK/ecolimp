import React from "react";

const Final = () => {
	return (
		<div>
			<main className="main_final">
				<header>Результаты Теста</header>
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
								&nbsp;<strong>Время выполнения заданий, минут</strong>
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
								<strong>Общий результат</strong>&nbsp;
							</div>
						</div>
						<div class="divTableRow">
							<div class="divTableCell2 eTableCell">
								&nbsp;<strong>Фамилия</strong>
								<br />
								<strong>Имя</strong>
								<br />
								<strong>Отчество</strong>
								<br />
								<strong>Наименование учебной организации</strong>
								<br />
								<strong>Специальность</strong>
								<br />
								<strong>Курс</strong>
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
