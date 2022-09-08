// external components
import "./Dashboard.css";

// internal components
import Navbar from "../../components/for_dashboard/Navbar/Navbar";

const Dashboard = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<div className="row m-0 dashboard-container">
					<div className="col p-0">
						<Navbar />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
