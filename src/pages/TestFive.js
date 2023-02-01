import React, { useState } from "react";
import Time from "../components/UI/Time/Time";
import { useTranslation } from "react-i18next";
import { removeSessionStorage } from "../libs/helpers/removeSessionStorage";
const TestFive = () => {
	const { t, i18n } = useTranslation();

	const [min, setMin] = useState(24);
	const [value, setValue] = useState();

	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
	const [value3, setValue3] = useState("");
	const [value4, setValue4] = useState("");
	const [value5, setValue5] = useState("");
	const [value6, setValue6] = useState("");
	const [value7, setValue7] = useState("");
	const [value8, setValue8] = useState("");
	const [value9, setValue9] = useState("");
	const [value10, setValue10] = useState("");
	const [value11, setValue11] = useState("");
	const [value12, setValue12] = useState("");
	const [value13, setValue13] = useState("");
	const [value14, setValue14] = useState("");
	const [value15, setValue15] = useState("");
	const [value16, setValue16] = useState("");
	const [value17, setValue17] = useState("");
	const [value18, setValue18] = useState("");
	const [value19, setValue19] = useState("");
	const [value20, setValue20] = useState("");
	const [value21, setValue21] = useState("");
	const [value22, setValue22] = useState("");
	const [value23, setValue23] = useState("");
	const [value24, setValue24] = useState("");

	const correctValues = [
		"110",
		"175",
		"175",
		"mc<mr",
		"60",
		"300",
		"125",
		"mc<mr",
		"46",
		"405",
		"105",
		"mc<mr",
		"34",
		"480",
		"75",
		"mc<mr",
		"45",
		"525",
		"45",
		"mc=mr",
		"65",
		"540",
		"15",
		"mc>mr",
	];

	const buttonSubmit = (e) => {
		e.preventDefault();
		removeSessionStorage();
		let correctCount = 0;

		const values = [
			value1,
			value2,
			value3,
			value4,
			value5,
			value6,
			value7,
			value8,
			value9,
			value10,
			value11,
			value12,
			value13,
			value14,
			value15,
			value16,
			value17,
			value18,
			value19,
			value20,
			value21,
			value22,
			value23,
			value24,
		];

		for (let i = 0; i < values.length; i++) {
			if (values[i].toLowerCase() === correctValues[i]) correctCount++;
		}
		console.log(correctCount);
	};

	const handleChange = (value) => {
		//setValue(value);
		if (value == false) {
			removeSessionStorage();
			//navigate("/testtwo", { replace: true });
		}
	};

	return (
		<body class="test">
			<header class="test5-header">
				<h1>{t("work5content")}</h1>
				<p>
					<Time min={min} onChange={handleChange} />
				</p>
			</header>

			<main class="main__test">
				<div class="text">{t("task5")}</div>
				<div
					class="divTable"
					style={{ width: "100%", border: "1px solid #000" }}
				>
					<div class="divTableBody">
						<div class="divTableRow">
							<div class="divTableCell">{t("task5-question1")}&nbsp;</div>
							<div class="divTableCell">{t("task5-question2")}</div>
							<div class="divTableCell">{t("task5-question3")}&nbsp;</div>
							<div class="divTableCell">&nbsp;{t("task5-question4")}</div>
							<div class="divTableCell">{t("task5-question5")}&nbsp;</div>
							<div class="divTableCell">{t("task5-question6")}</div>
							<div class="divTableCell">{t("task5-question7")}&nbsp;</div>
						</div>
						<div class="divTableRow">
							<div class="divTableCell">0</div>
							<div class="divTableCell">&nbsp;200</div>
							<div class="divTableCell">150&nbsp;</div>
							<div class="divTableCell">---</div>
							<div class="divTableCell">---</div>
							<div class="divTableCell">---</div>
							<div class="divTableCell">---</div>
						</div>
						<div class="divTableRow">
							<div class="divTableCell">1</div>
							<div class="divTableCell">&nbsp;175</div>
							<div class="divTableCell">
								<span style={{ fontWeight: "400" }}>260</span>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value1}
									onChange={(e) => setValue1(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value2}
									onChange={(e) => setValue2(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value3}
									onChange={(e) => setValue3(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value4}
									onChange={(e) => setValue4(e.target.value)}
								/>
							</div>
						</div>
						<div class="divTableRow">
							<div class="divTableCell">2</div>
							<div class="divTableCell">
								&nbsp;<span style={{ fontWeight: "400" }}>150</span>
							</div>
							<div class="divTableCell">
								<span style={{ fontWeight: "400" }}>320</span>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value5}
									onChange={(e) => setValue5(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value6}
									onChange={(e) => setValue6(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value7}
									onChange={(e) => setValue7(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value8}
									onChange={(e) => setValue8(e.target.value)}
								/>
							</div>
						</div>
						<div class="divTableRow">
							<div class="divTableCell">3</div>
							<div class="divTableCell">
								&nbsp;<span style={{ fontWeight: "400" }}>135</span>
							</div>
							<div class="divTableCell">
								<span style={{ fontWeight: "400" }}>366</span>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value9}
									onChange={(e) => setValue9(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value10}
									onChange={(e) => setValue10(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value11}
									onChange={(e) => setValue11(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value12}
									onChange={(e) => setValue12(e.target.value)}
								/>
							</div>
						</div>
						<div class="divTableRow">
							<div class="divTableCell">4</div>
							<div class="divTableCell">
								&nbsp;<span style={{ fontWeight: "400" }}>120</span>
							</div>
							<div class="divTableCell">
								&nbsp;<span style={{ fontWeight: "400" }}>400</span>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value13}
									onChange={(e) => setValue13(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value14}
									onChange={(e) => setValue14(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value15}
									onChange={(e) => setValue15(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value16}
									onChange={(e) => setValue16(e.target.value)}
								/>
							</div>
						</div>
						<div class="divTableRow">
							<div class="divTableCell">5</div>
							<div class="divTableCell">
								&nbsp;<span style={{ fontWeight: "400" }}>105</span>
							</div>
							<div class="divTableCell">
								&nbsp;<span style={{ fontWeight: "400" }}>445</span>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value17}
									onChange={(e) => setValue17(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value18}
									onChange={(e) => setValue18(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value19}
									onChange={(e) => setValue19(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value20}
									onChange={(e) => setValue20(e.target.value)}
								/>
							</div>
						</div>
						<div class="divTableRow">
							<div class="divTableCell">6</div>
							<div class="divTableCell">
								&nbsp;&nbsp;<span style={{ fontWeight: "400" }}>90</span>
							</div>
							<div class="divTableCell">
								&nbsp;<span style={{ fontWeight: "400" }}>510</span>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value21}
									onChange={(e) => setValue21(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value22}
									onChange={(e) => setValue22(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value23}
									onChange={(e) => setValue23(e.target.value)}
								/>
							</div>
							<div class="divTableCell">
								<input
									type="text"
									value={value24}
									onChange={(e) => setValue24(e.target.value)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="wrap__btn">
					<button class="btn__complete" onClick={buttonSubmit}>
						{t("closeTask")}
					</button>
				</div>
			</main>
		</body>
	);
};

export default TestFive;
