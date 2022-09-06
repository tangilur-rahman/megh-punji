// external components
import { BrowserRouter, Route, Routes } from "react-router-dom";

// own pages
import Dashboard from "./pages/Dashboard/Dashboard";
import MainPage from "./pages/MainPage/MainPage";

import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
