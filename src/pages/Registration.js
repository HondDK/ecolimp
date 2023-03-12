import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Registration = () => {
	const { t } = useTranslation();
	let navigate = useNavigate();

	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const [patronymic, setPatronymic] = useState("");
	const [institution, setInstitution] = useState("");
	const [profession, setProfession] = useState("");
	const [course, setCourse] = useState("");
	const [time, setTime] = useState();

	React.useEffect(() => {
		document.getElementById("noneSubmit").style.display = "none";
		currentTime();
		sessionStorage.clear();
	}, []);

	const currentTime = () => {
		let date = new Date().toString().slice(3, 21);
		setTime(date);
	};

	const buttonSubmit = (e) => {
		e.preventDefault();

		let inputs = Array.from(document.querySelectorAll("input"));
		let inputsValueTrue = inputs.every((input) => input.value);

		if (inputsValueTrue) {
			sessionStorage.setItem("surname", surname);
			sessionStorage.setItem("name", name);
			sessionStorage.setItem("patronymic", patronymic);
			sessionStorage.setItem("institution", institution);
			sessionStorage.setItem("profession", profession);
			sessionStorage.setItem("course", course);
			sessionStorage.setItem("time", time);

			navigate("/ecolimp/warning", { replace: true });

			console.log(surname, name, patronymic, institution, profession, course);
			document.getElementById("noneSubmit").style.display = "none";
		} else document.getElementById("noneSubmit").style.display = "block";
	};

	return (
		<div>
			<body>
				<header class="header_text">
					Отборочные тесты для участников Хакатона учителей Карагандинской
					области
				</header>
				<form class="content" name="google-sheet">
					<div class="content__widget">
						<p>Фамилия</p>
						<input
							name="Surname"
							type={"text"}
							onChange={(e) => {
								setSurname(e.target.value);
							}}
						/>
						<p>Имя</p>
						<input
							name="Name"
							type={"text"}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<p>Отчество</p>
						<input
							name="Patronymic"
							type={"text"}
							onChange={(e) => {
								setPatronymic(e.target.value);
							}}
						/>
						<p>Учебное заведение</p>
						<input
							name="Institution"
							type={"text"}
							onChange={(e) => {
								setInstitution(e.target.value);
							}}
						/>
						<p>Профессия</p>
						<input
							name="Profession"
							type={"text"}
							onChange={(e) => {
								setProfession(e.target.value);
							}}
						/>
						<input
							id="date"
							name="Date"
							style={{ display: "none" }}
							value={time}
						/>

						<p
							id="noneSubmit"
							style={{ color: "red", textAlign: "center", fontSize: "20px" }}
						>
							Заполните все поля!
						</p>
						<button class="btn__submit" onClick={buttonSubmit}>
							Продолжить
						</button>
					</div>
				</form>
			</body>
		</div>
	);
};

export default Registration;
