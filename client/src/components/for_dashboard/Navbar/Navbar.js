// external components
import { useEffect, useRef, useState } from "react";

// internal components
import "./Navbar.css";

const Navbar = ({ getAdmin, profileT, setProfileT }) => {
	// for menu-bar toggle
	const [menuT, setMenuT] = useState("");

	// detect outside click menu-bar hidden start
	const myRef = useRef();

	const handleClickOutside = (e) => {
		if (!myRef.current?.contains(e.target)) {
			setMenuT(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	// detect outside click menu-bar hidden start

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
							<i className="fa-solid fa-bars-staggered"></i>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
