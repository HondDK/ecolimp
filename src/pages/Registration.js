import React from "react";

import { useState } from "react";

const Registration = () => {
	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const [patronymic, setPatronymic] = useState("");
	const [institution, setInstitution] = useState("");
	const [profession, setProfession] = useState("");
	const [course, setCourse] = useState("");

	React.useEffect(() => {
		document.getElementById("noneSubmit").style.display = "none";
	}, []);

	const scriptUrl =
		"https://script.google.com/macros/s/AKfycbw_0QL1M0DbXh18VxjaHY1MaSi8NbzueGgGZlI9DUnKO7eoTq2lltv14udpB_kn1hbLfg/exec";

	function Submit(e) {
		e.preventDefault();
		const formEle = document.querySelector("form");
		const formDatab = new FormData(formEle);
		fetch(scriptUrl, {
			method: "POST",
			body: formDatab,
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const buttonSubmit = (e) => {
		let inputs = Array.from(document.querySelectorAll("input"));
		let inputsValueTrue = inputs.every((input) => input.value);
		if (inputsValueTrue) {
			Submit(e);
			console.log(surname, name, patronymic, institution, profession, course);
			document.getElementById("noneSubmit").style.display = "none";
		} else document.getElementById("noneSubmit").style.display = "block";
	};

	return (
		<div>
			<body>
				<header>Олимпида по основам экономики</header>
				<form class="content" name="google-sheet">
					<div class="content__widget">
						<p>Фамилия </p>
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
						<p>Наименование учебной организации</p>
						<input
							name="Institution"
							type={"text"}
							onChange={(e) => {
								setInstitution(e.target.value);
							}}
						/>
						<p>Специальность</p>
						<input
							name="Profession"
							type={"text"}
							onChange={(e) => {
								setProfession(e.target.value);
							}}
						/>
						<p>Курс</p>
						<input
							name="Course"
							type={"number"}
							onChange={(e) => {
								setCourse(e.target.value);
							}}
						/>
					</div>
					<p
						id="noneSubmit"
						style={{ color: "red", textAlign: "center", fontSize: "20px" }}
					>
						Заполните все поля
					</p>
					<button class="btn__submit" onClick={buttonSubmit}>
						Отправить
					</button>
				</form>
			</body>
		</div>
	);
};

export default Registration;
