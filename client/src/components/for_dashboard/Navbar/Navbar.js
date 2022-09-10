// external components

// internal components
import "./Navbar.css";

const Navbar = ({ getAdmin, profileT, setProfileT, menuT, setMenuT }) => {
	return (
		<>
			<div className="row navbar-container m-0">
				<div className="col-11 p-0 nav-wrapper">
					<div className="nav-left">
						<img src="/assets/logo/logo.png" alt="logo" className="img-fluid" />
					</div>

					<div className="nav-right">
						<div
							className="admin-profile"
							onClick={() => setProfileT(!profileT)}
						>
							<img
								src={`/assets/profile-img/${getAdmin.profile_img}`}
								alt="admin-profile"
								className="img-fluid"
							/>
							<div className="admin-info">
								<h5>{getAdmin.name}</h5>
								<p>{getAdmin.phone}</p>
							</div>
						</div>
						<div className="menu-icon">
							<i
								className="fa-solid fa-bars-staggered"
								onClick={() => setMenuT(!menuT)}
							></i>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
