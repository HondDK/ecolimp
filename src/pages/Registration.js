import React from "react";

const Registration = () => {
	return (
		<div>
			<body>
				<header>Олимпида по основам экономики</header>
				<form class="content" action="#">
					<div class="content__widget">
						<p>Фамилия</p>
						<input type="text" />
						<p>Имя</p>
						<input type="text" />
						<p>Отчество</p>
						<input type="text" />
						<p>Наименование учебной организации</p>
						<input type="text" />
						<p>Специальность</p>
						<input type="text" />
						<p>Курс</p>
						<input type="text" />
					</div>
					<button class="btn__submit">Приступить к выполнению заданий</button>
				</form>
			</body>
		</div>
	);
};

export default Registration;
