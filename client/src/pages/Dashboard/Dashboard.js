// external components
import { useState } from "react";

// internal components
import Display from "../../components/for_dashboard/Display/Display";
import Navbar from "../../components/for_dashboard/Navbar/Navbar";
import ProfileEdit from "../../components/for_dashboard/ProfileEdit/ProfileEdit";
import "./Dashboard.css";

const Dashboard = () => {
	// for toggle profile-edit
	const [profileT, setProfileT] = useState("");

	return (
		<>
			<div className="container-fluid p-0">
				<div
					className="row m-0 dashboard-container"
					id={profileT ? "active" : ""}
				>
					<div className="col p-0">
						<Navbar profileT={profileT} setProfileT={setProfileT} />
						<Display />
					</div>
				</div>
				{profileT && <ProfileEdit setProfileT={setProfileT} />}
			</div>
		</>
	);
};

export default Dashboard;
