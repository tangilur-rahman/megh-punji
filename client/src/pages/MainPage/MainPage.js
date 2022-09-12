// external components
import { useEffect, useState } from "react";

// internal components
import Booking from "../../components/for_main/Booking/Booking";
import Contact from "../../components/for_main/Contact/Contact";
import Copyright from "../../components/for_main/Copyright/Copyright";
import Cover from "../../components/for_main/Cover/Cover";
import Gallery from "../../components/for_main/Gallery/Gallery";
import Navbar from "../../components/for_main/Navbar/Navbar";
import Reservation from "../../components/for_main/Reservation/Reservation";
import Virtual from "../../components/for_main/Virtual/Virtual";

import "./MainPage.css";

const MainPage = ({ getCottage }) => {
	// for booking container toggle
	const [bookingT, setBookingT] = useState("");

	// scroll stop when model is opened start
	useEffect(() => {
		if (bookingT) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "visible";
	}, [bookingT]);
	// scroll stop when model is opened start

	return (
		<>
			<div className="container-fluid p-0">
				<div
					className="row m-0 main-page-container"
					id={bookingT ? "active" : ""}
				>
					<div className="col p-0">
						<Navbar />
						<Cover />
						<Virtual />
						<Gallery />
						<Reservation setBookingT={setBookingT} getCottage={getCottage} />
						<Contact />
						<Copyright />
					</div>
				</div>
				{bookingT && (
					<Booking setBookingT={setBookingT} getCottageObj={getCottage} />
				)}
			</div>
		</>
	);
};

export default MainPage;
