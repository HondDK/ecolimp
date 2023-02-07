import i18next from "i18next";
import React from "react";
import { useNavigate } from "react-router-dom";

const Language = () => {
	let navigate = useNavigate();

	const buttonSubmit = (e) => {
		i18next.changeLanguage(e);
		sessionStorage.clear();
		sessionStorage.setItem("lang", e);
		navigate("/ecolimp/reg");
	};
	return (
		<div>
			<body>
				<header class="header_text">Олимпиада по "Основам экономики"</header>
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
