import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Warning = () => {
	let navigate = useNavigate();
	const { t } = useTranslation();

	const buttonSubmit = () => {
		navigate("/ecolimp/testtwo", { replace: true });
	};

	return (
		<div>
			<body>
				<body className="content">
					<header class="header_text">Внимание!</header>
					<main>
						<p
							style={{
								fontSize: "35px",
							}}
						>
							Тест нельзя закрывать, он завершится!
						</p>
						<button class="btn__submit" onClick={buttonSubmit}>
							Продолжить
						</button>
					</main>
				</body>
			</body>
		</div>
	);
};

export default Warning;
