import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Registration = () => {
	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const [patronymic, setPatronymic] = useState("");
	const [institution, setInstitution] = useState("");
	const [profession, setProfession] = useState("");
	const [course, setCourse] = useState("");
	const [time, setTime] = useState("");
	let navigate = useNavigate();
	let isAuth;

	const { t, i18n } = useTranslation();

	React.useEffect(() => {
		document.getElementById("noneSubmit").style.display = "none";
		currentTime();
	}, []);

	const scriptUrl =
		"https://script.google.com/macros/s/AKfycbywnZDRN58kTS3j18l0v6EfqfOsztt8rUP-3cS8zOpkFy_1jVOaiv6TMJfNIOK_-qbQJA/exec";

	const currentTime = () => {
		let date = new Date().toString().slice(3, 21);
		setTime(date);
	};

	function Submit(e) {
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
		e.preventDefault();
		let inputs = Array.from(document.querySelectorAll("input"));
		let inputsValueTrue = inputs.every((input) => input.value);
		if (inputsValueTrue) {
			Submit(e);
			navigate("/testone", { replace: true });
			isAuth = true;
			console.log(surname, name, patronymic, institution, profession, course);
			document.getElementById("noneSubmit").style.display = "none";
		} else document.getElementById("noneSubmit").style.display = "block";
	};

	return (
		<div>
			<body>
				<header>{t("header")}</header>
				<form class="content" name="google-sheet">
					<div class="content__widget">
						<p>{t("surname")}</p>
						<input
							name="Surname"
							type={"text"}
							onChange={(e) => {
								setSurname(e.target.value);
							}}
						/>
						<p>{t("name")}</p>
						<input
							name="Name"
							type={"text"}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<p>{t("patronymic")}</p>
						<input
							name="Patronymic"
							type={"text"}
							onChange={(e) => {
								setPatronymic(e.target.value);
							}}
						/>
						<p>{t("institution")}</p>
						<input
							name="Institution"
							type={"text"}
							onChange={(e) => {
								setInstitution(e.target.value);
							}}
						/>
						<p>{t("prof")}</p>
						<input
							name="Profession"
							type={"text"}
							onChange={(e) => {
								setProfession(e.target.value);
							}}
						/>
						<p>{t("course")}</p>
						<input
							name="Course"
							type={"number"}
							onChange={(e) => {
								setCourse(e.target.value);
							}}
						/>
						<input
							id="date"
							name="Date"
							style={{ display: "none" }}
							value={time}
						/>
					</div>
					<p
						id="noneSubmit"
						style={{ color: "red", textAlign: "center", fontSize: "20px" }}
					>
						{t("error")}
					</p>

					<button class="btn__submit" onClick={buttonSubmit}>
						{t("send")}
					</button>
				</form>
			</body>
		</div>
	);
};

export default Registration;
