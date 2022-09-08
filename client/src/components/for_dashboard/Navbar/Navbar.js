// external components
import { useEffect, useRef, useState } from "react";

// internal components
import "./Navbar.css";

const Navbar = () => {
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
						<ul id={menuT ? "mobile" : "desktop"} ref={myRef}>
							<li className="hover-link" onClick={() => setMenuT(false)}>
								All Cottages
							</li>
							<li className="hover-link" onClick={() => setMenuT(false)}>
								Meghla
							</li>
							<li className="hover-link" onClick={() => setMenuT(false)}>
								Purbasha
							</li>
							<li className="hover-link" onClick={() => setMenuT(false)}>
								Rodela
							</li>
							<li className="hover-link" onClick={() => setMenuT(false)}>
								Tarasha
							</li>

							<li onClick={() => setMenuT(false)}>
								<i
									className="fa-solid fa-user-pen"
									id="edit-profile"
									title="Edit Profile"
								></i>
							</li>
						</ul>

						<div className="menu-icon" onClick={() => setMenuT(!menuT)}>
							<i className="fa-solid fa-bars"></i>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
