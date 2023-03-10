import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Warning = () => {
	let navigate = useNavigate();
	const { t } = useTranslation();

	const buttonSubmit = () => {
		navigate("/ecolimp/testone", { replace: true });
	};

	return (
		<div>
			<body>
				<body className="content">
					<header class="header_text">{t("warning")}</header>
					<main>
						<p
							style={{
								textAlign: "justify",
								fontSize: "40px",
							}}
						>
							Внимание!
						</p>
						<button class="btn__submit" onClick={buttonSubmit}>
							Тест нельзя закрывать, он завершится!
						</button>
					</main>
				</body>
			</body>
		</div>
	);
};

export default Warning;
