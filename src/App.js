import React, { useState, useEffect } from "react";

import TestOne from "./pages/TestOne";
import TestTwo from "./pages/TestTwo";

import Registration from "./pages/Registration";
import ErrorPage from "./pages/ErrorPage";
import Final from "./pages/Final";
import "./style/style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Warning from "./pages/Warning";

const router = createBrowserRouter([
	{
		path: "/ecolimp/reg",
		element: <Registration></Registration>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/ecolimp/warning",
		element: <Warning></Warning>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/ecolimp/testone",
		element: <TestOne></TestOne>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/ecolimp/testtwo",
		element: <TestTwo></TestTwo>,
		errorElement: <ErrorPage />,
	},

	{
		path: "/ecolimp/final",
		element: <Final></Final>,
		errorElement: <ErrorPage />,
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
