import { useState, useEffect } from "react";

export function useCheckVisible() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleVisibilityChange = () => {
			setIsVisible(document.visibilityState === "visible");
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, []);
	return isVisible;
}
