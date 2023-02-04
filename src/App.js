import React, { useState, useEffect } from "react";
import Language from "./pages/Language";
import TestOne from "./pages/TestOne";
import TestTwo from "./pages/TestTwo";
import TestTree from "./pages/TestThree";
import TestFour from "./pages/TestFour";
import TestFive from "./pages/TestFive";
import Registration from "./pages/Registration";
import ErrorPage from "./pages/ErrorPage";
import Final from "./pages/Final";
import "./style/style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCheckVisible } from "./libs/helpers/useCheckVisible";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Language></Language>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/reg",
		element: <Registration></Registration>,
	},
	{
		path: "/testone",
		element: <TestOne></TestOne>,
	},
	{
		path: "/testtwo",
		element: <TestTwo></TestTwo>,
	},
	{
		path: "/testtree",
		element: <TestTree></TestTree>,
	},
	{
		path: "/testfour",
		element: <TestFour></TestFour>,
	},
	{
		path: "/testfive",
		element: <TestFive></TestFive>,
	},
	{
		path: "/final",
		element: <Final></Final>,
	},
]);

function App() {
	const [showModal, setShowModal] = useState(false);

	function handleCopy(e) {
		e.preventDefault();
		setShowModal(e);
		navigator.clipboard.writeText("не получается да?");
	}

	
	return (
		<div className="App" onCopy={handleCopy}>
			{showModal && (
				<div className="modal">
					<header
						style={{
							fontSize: "25px",
							color: "red",
						}}
					>
						Текст нельзя копировать!
					</header>
				</div>
			)}

			<RouterProvider router={router} />
		</div>
	);
}

export default App;
