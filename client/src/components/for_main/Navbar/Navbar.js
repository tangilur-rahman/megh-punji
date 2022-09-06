// external components
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

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
								<Link
									activeClass="active"
									to="gallery-container"
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
								>
									BRITTO
								</Link>
							</li>
							<li className="hover-link" onClick={() => setMenuT(false)}>
								<Link
									activeClass="active"
									to="virtual-container"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
								>
									SAJEK
								</Link>
							</li>
							<li className="hover-link" onClick={() => setMenuT(false)}>
								<Link
									activeClass="active"
									to="reservation-container"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
								>
									BOOK COTTAGE
								</Link>
							</li>
							<li className="hover-link" onClick={() => setMenuT(false)}>
								<Link
									activeClass="active"
									to="contact-container"
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
								>
									CONTACT US
								</Link>
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
