import React from "react";

const ButtonCloseTest = (props) => {
	return (
		<a href={props.href} className="btn__close-task">
			{props.children}
		</a>
	);
};

export default ButtonCloseTest;
