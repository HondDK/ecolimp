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
import Warning from "./pages/Warning";

const router = createBrowserRouter([
	{
		path: "/ecolimp/",
		element: <Language></Language>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/ecolimp/reg",
		element: <Registration></Registration>,
	},
	{
		path: "/ecolimp/warning",
		element: <Warning></Warning>,
	},
	{
		path: "/ecolimp/testone",
		element: <TestOne></TestOne>,
	},
	{
		path: "/ecolimp/testtwo",
		element: <TestTwo></TestTwo>,
	},
	{
		path: "/ecolimp/testtree",
		element: <TestTree></TestTree>,
	},
	{
		path: "/ecolimp/testfour",
		element: <TestFour></TestFour>,
	},
	{
		path: "/ecolimp/testfive",
		element: <TestFive></TestFive>,
	},
	{
		path: "/ecolimp/final",
		element: <Final></Final>,
	},
]);

function App() {
	const [showModal, setShowModal] = useState(false);

	function handleCopy(e) {
		e.preventDefault();
		setShowModal(e);
		navigator.clipboard.writeText("...");
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
