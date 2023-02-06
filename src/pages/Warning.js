import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Warning = () => {
	let navigate = useNavigate();
	const { t } = useTranslation();

	const buttonSubmit = () => {
		navigate("/testone", { replace: true });
	};

	return (
		<div>
			<body>
				<body className="content">
					<header>{t("warning")}</header>
					<main>
						<p
							style={{
								textAlign: "justify",
								fontSize: "40px",
							}}
						>
							{t("modal")}
						</p>
						<button class="btn__submit" onClick={buttonSubmit}>
							{t("btn-true")}
						</button>
					</main>
				</body>
			</body>
		</div>
	);
};

export default Warning;
