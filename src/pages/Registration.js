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
						<Input type={"text"} />
						<p>Имя</p>
						<Input type={"text"} />
						<p>Отчество</p>
						<Input type={"text"} />
						<p>Наименование учебной организации</p>
						<Input type={"text"} />
						<p>Специальность</p>
						<Input type={"text"} />
						<p>Курс</p>
						<Input type={"number"} />
					</div>
					<button class="btn__submit">Приступить к выполнению заданий</button>
				</form>
			</body>
		</div>
	);
};

export default Registration;
