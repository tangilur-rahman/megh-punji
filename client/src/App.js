// external components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// own pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="admin/dashboard" element={<Dashboard />} />
					<Route path="admin/login" element={<Login />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;
