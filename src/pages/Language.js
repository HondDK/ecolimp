import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Language = () => {
	const { i18n } = useTranslation();
	let navigate = useNavigate();

	const buttonSubmit = (e) => {
		i18n.changeLanguage(e);
		navigate("/testone", { replace: true });
	};
	return (
		<div>
			<body>
				<header>Олимпиада по "Основам экономики"</header>
				<main>
					<div class="title">Выберете язык</div>
					<div class="list">
						<button class="list__item" onClick={() => buttonSubmit("kz")}>
							<img src="./image/kz.svg" alt="" />
							Қазақша
						</button>
						<button class="list__item" onClick={() => buttonSubmit("en")}>
							<img src="./image/en.svg" alt="" />
							English
						</button>
						<button class="list__item" onClick={() => buttonSubmit("ru")}>
							<img src="./image/ru.svg" alt="" />
							Русский
						</button>
					</div>
				</main>
			</body>
		</div>
	);
};

export default Language;
