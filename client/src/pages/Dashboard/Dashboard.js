// external components
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// internal components
import Display from "../../components/for_dashboard/Display/Display";
import Navbar from "../../components/for_dashboard/Navbar/Navbar";
import ProfileEdit from "../../components/for_dashboard/ProfileEdit/ProfileEdit";
import RightSidebar from "../../components/for_dashboard/RightSidebar/RightSidebar";
import "./Dashboard.css";

const Dashboard = () => {
	// for redirect login-page
	const Navigate = useNavigate();

	// for get cottage info
	const [getCottage, setCottage] = useState("");

	// for menu-bar toggle
	const [menuT, setMenuT] = useState("");

	// for loading until fetching complete
	const [isLoading, setIsLoading] = useState(true);

	// for update cottage
	const [updateCottage, setUpdateCottage] = useState("");

	// for toggle profile-edit
	const [profileT, setProfileT] = useState("");

	// for update admin profile
	const [updateAdmin, setUpdateAdmin] = useState("");

	// for get admin start
	const [getAdmin, setAdmin] = useState("");

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("/admin");

				const result = await response.json();

				if (result.error) {
					toast.error(result.error, {
						position: "top-right",
						theme: "colored",
						autoClose: 3000
					});
					return Navigate("/admin/login");
				} else {
					setAdmin(result);
				}
			} catch (error) {
				toast.error(error.message, {
					position: "top-right",
					theme: "colored",
					autoClose: 3000
				});
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [updateAdmin]);
	// for get admin start

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
			{isLoading ? (
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
				<div className="container-fluid p-0">
					<div
						className="row m-0 dashboard-container"
						id={profileT ? "active" : ""}
					>
						<div className="col p-0">
							<Navbar
								getAdmin={getAdmin}
								profileT={profileT}
								setProfileT={setProfileT}
								menuT={menuT}
								setMenuT={setMenuT}
							/>
							<Display />
						</div>
						<RightSidebar
							menuT={menuT}
							setMenuT={setMenuT}
							getCottage={getCottage}
							setUpdateCottage={setUpdateCottage}
						/>
					</div>
					{profileT && (
						<ProfileEdit
							getAdmin={getAdmin}
							setProfileT={setProfileT}
							setUpdateAdmin={setUpdateAdmin}
						/>
					)}
				</div>
			)}
		</>
	);
};

export default Dashboard;
