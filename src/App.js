import React, { useState, useEffect } from "react";

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
	function handleCopy(e) {
		e.preventDefault();

		navigator.clipboard.writeText("...");
	}

	return (
		<div className="App" onCopy={handleCopy}>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
