import Language from "./pages/Language";
import TestOne from "./pages/TestOne";
import TestTwo from "./pages/TestTwo";
import TestTree from "./pages/TestThree";
import TestFour from "./pages/TestFour";
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
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
