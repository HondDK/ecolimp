import React, { useState } from "react";

const Select = () => {
	const [value, setValue] = useState("");

	function handleChange(event) {
		setValue(event.target.value);
	}
	return (
		<div>
			<select value={value} onChange={handleChange}>
				<option>Нормативная</option>
				<option>Позитивная</option>
			</select>
		</div>
	);
};

export default Select;
