import React from "react";

const Language = () => {
	return (
		<div>
			<body>
				<header>Олимпиада по "Основам экономики"</header>
				<main>
					<div class="title">Выберете язык</div>
					<div class="list">
						<button class="list__item">
							<img src="./image/kz.svg" alt="" />
							Қазақша
						</button>
						<button class="list__item">
							<img src="./image/en.svg" alt="" />
							English
						</button>
						<button class="list__item">
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
