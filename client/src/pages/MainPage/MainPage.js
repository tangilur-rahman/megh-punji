// external components

// internal components
import Cover from "../../components/for_main/Cover/Cover";
import Gallery from "../../components/for_main/Gallery/Gallery";
import Navbar from "../../components/for_main/Navbar/Navbar";
import Virtual from "../../components/for_main/Virtual/Virtual";

import "./MainPage.css";

const MainPage = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<div className="row m-0 main-page-container">
					<div className="col p-0">
						<Navbar />
						<Cover />
						<Virtual />
						<Gallery />
					</div>
				</div>
			</div>
		</>
	);
};

export default MainPage;
