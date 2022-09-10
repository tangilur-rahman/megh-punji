// external components
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

// own pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.css";

function App() {
	// for get cottage info
	const [getCottage, setCottage] = useState("");

	// for update cottage
	const [updateCottage, setUpdateCottage] = useState("");

	// for loading until fetching complete
	const [isLoading, setIsLoading] = useState(true);

	// for fetching cottage start
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("/cottage");

				const result = await response.json();

				if (result.error) {
					toast.error(result.error, {
						position: "top-right",
						theme: "colored",
						autoClose: 3000
					});
				} else {
					setCottage(result);
					setIsLoading(false);
				}
			} catch (error) {
				toast.error(error.message, {
					position: "top-right",
					theme: "colored",
					autoClose: 3000
				});
			}
		})();
	}, [updateCottage]);
	// for fetching cottage end

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							isLoading ? (
								<div className="loading-animation">
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
								</div>
							) : (
								<MainPage getCottage={getCottage} />
							)
						}
					/>
					<Route
						path="admin/dashboard"
						element={
							isLoading ? (
								<div className="loading-animation">
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
									<div className="obj"></div>
								</div>
							) : (
								<Dashboard
									getCottage={getCottage}
									setUpdateCottage={setUpdateCottage}
								/>
							)
						}
					/>
					<Route path="admin/login" element={<Login />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;
