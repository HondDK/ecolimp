import React, { useState } from "react";

const ButtonReply = ({ children, id }) => {
	const [active, setActive] = useState(false);
	const handleClick = () => {
		setActive(!active);
	};
	return (
		<button
			id={id}
			onClick={handleClick}
			style={{ backgroundColor: active ? "green" : "white" }}
		>
			{children}
		</button>
	);
};

export default ButtonReply;
