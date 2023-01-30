import { useState } from "react";
import Time from "../components/UI/Time/Time";
import { useNavigate } from "react-router-dom";

const TestThree = () => {
	let navigate = useNavigate();
	const correctValues = [1, 2, 4, 6, 3, 5, 7];

	const [value, setValue] = useState();
	const [min, setMin] = useState(9);

	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
	const [value3, setValue3] = useState("");
	const [value4, setValue4] = useState("");
	const [value5, setValue5] = useState("");
	const [value6, setValue6] = useState("");
	const [value7, setValue7] = useState("");

	const handleChange = (value) => {
		setValue(value);
		if (value == false) {
			navigate("/testfour", { replace: true });
		}
	};

	const buttonSubmit = (e) => {
		e.preventDefault();
		let correctCount = 0;
		const values = [value1, value2, value3, value4, value5, value6, value7];

		for (let i = 0; i < values.length; i++) {
			if (parseInt(values[i]) === correctValues[i]) correctCount++;
		}
		console.log(correctCount);
		navigate("/testfour", { replace: true });
	};

	return (
		<div>
			<body class="test">
				<header>
					<h1>Практическое задание №3</h1>
					<p>
						<Time min={min} onChange={handleChange} />
					</p>
				</header>
				<main class="main__test">
					<div class="text">
						Укажите какие из приведенных ниже утверждений характеризуют признаки
						натурального хозяйства, а какие - товарного производства:
					</div>
					<ol>
						<li>
							В замкнутой экономической единице ведется производство готового
							продукта и его потребление;
						</li>
						<li>
							Трудовой процесс базируется на традиционных обычаях, принудительно
							устанавливаемых хозяйственных связях в рамках отдельной общности;
						</li>
						<li>
							Производство основано как на индивидуальном труде собственника,
							так и на применении им наемной рабочей силы;
						</li>
						<li>
							Процесс производства ведется с применением малопроизводительных
							орудий труда, не дающих дополнительного продукта, сверх
							необходимого для потребления самих производителей;
						</li>
						<li>
							Изготовленная продукция принадлежит собственнику и предназначена
							для свободной реализации на рынке;
						</li>
						<li>
							Экономическая эволюция происходит очень медленно, отдельные
							усовершенствования и преобразования могут совершаться столетиями;
						</li>
						<li>
							Быстрый экономический прогресс общества является следствием
							высоких темпов роста производительности труда и динамического
							расширения ассортимента продукции.
						</li>
					</ol>
					<div class="container">
						<div class="container__button">
							<div class="container__box">Натуральное хозяйство</div>
							<div class="container__inputs">
								<input
									type="text"
									value={value1}
									onChange={(e) => setValue1(e.target.value)}
								/>
								<input
									type="text"
									value={value2}
									onChange={(e) => setValue2(e.target.value)}
								/>
								<input
									type="text"
									value={value3}
									onChange={(e) => setValue3(e.target.value)}
								/>
								<input
									type="text"
									value={value4}
									onChange={(e) => setValue4(e.target.value)}
								/>
							</div>
						</div>
						<div class="container__button">
							<div class="container__box">Товарное производство </div>
							<div class="container__inputs">
								<input
									type="text"
									value={value5}
									onChange={(e) => setValue5(e.target.value)}
								/>
								<input
									type="text"
									value={value6}
									onChange={(e) => setValue6(e.target.value)}
								/>
								<input
									type="text"
									value={value7}
									onChange={(e) => setValue7(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div class="wrap__btn">
						<button className="btn__close-task" onClick={buttonSubmit}>
							Завершить задание
						</button>
					</div>
				</main>
			</body>
		</div>
	);
};

export default TestThree;
