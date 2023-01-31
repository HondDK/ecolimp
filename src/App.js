import Language from "./pages/Language";
import TestOne from "./pages/TestOne";
import TestTwo from "./pages/TestTwo";
import TestTree from "./pages/TestThree";
import TestFour from "./pages/TestFour";
import TestFive from "./pages/TestFive";
import Registration from "./pages/Registration";
import ErrorPage from "./pages/ErrorPage";
import "./style/style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

function handleCopy(e) {
	e.preventDefault();
	alert("Текст нельзя копировать!");
}

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} onCopy={handleCopy} />
		</div>
	);
}

export default App;
