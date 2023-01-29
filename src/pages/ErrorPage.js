import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	let navigate = useNavigate();
	const ClickBtn = () => {
		navigate(-1);
	};
	return (
		<body>
			<main id="error-page">
				<h1 class="title">Вернитесь на страницу своего теста!</h1>
				<div class="wrap__btn">
					<button onClick={ClickBtn} class="error-btn">
						Вернуться на свою страницу
					</button>
				</div>
			</main>
		</body>
	);
}
