import React from "react";
import Input from "../components/UI/Input/Input";

const Registration = () => {
	return (
		<div>
			<body>
				<header>Олимпида по основам экономики</header>
				<form class="content" action="#">
					<div class="content__widget">
						<p>Фамилия</p>
						<Input />
						<p>Имя</p>
						<Input />
						<p>Отчество</p>
						<Input />
						<p>Наименование учебной организации</p>
						<Input />
						<p>Специальность</p>
						<Input />
						<p>Курс</p>
						<Input />
					</div>
					<button class="btn__submit">Приступить к выполнению заданий</button>
				</form>
			</body>
		</div>
	);
};

export default Registration;
