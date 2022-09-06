/* eslint-disable jsx-a11y/anchor-is-valid */

// external components
import { useState } from "react";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// internal components
import "./Contact.css";

const Contact = () => {
	const [tarashaT, setTarashaT] = useState("");
	const [purbashaT, setPurbashaT] = useState("");
	const [rodelaT, setRodelaT] = useState("");
	const [meghlaT, setMeghlaT] = useState("");

	const tarashaArray = [
		"/assets/cottage/Tarasha/Tarasha_1.jpg",
		"/assets/cottage/Tarasha/Tarasha_2.jpg",
		"/assets/cottage/Tarasha/Tarasha_3.jpg"
	];

	const purbashaArray = [
		"/assets/cottage/Purbasha/Purbasha_1.jpg",
		"/assets/cottage/Purbasha/Purbasha_2.jpg",
		"/assets/cottage/Purbasha/Purbasha_3.jpg"
	];

	const rodelaArray = [
		"/assets/cottage/Rodela/Rodela_1.jpg",
		"/assets/cottage/Rodela/Rodela_2.jpg",
		"/assets/cottage/Rodela/Rodela_3.jpg"
	];

	const meghlaArray = [
		"/assets/cottage/Meghla/Meghla_1.jpg",
		"/assets/cottage/Meghla/Meghla_2.jpg",
		"/assets/cottage/Meghla/Meghla_3.jpg"
	];

	return (
		<>
			<div className="contact-container" id="contact-section">
				<div className="contact-organization row m-0">
					<div className="col-11 p-0">
						<div id="title">
							<h2>Contact Britto</h2>
							<hr />
						</div>

						<div className="row m-0" id="content">
							<div className="col-7 p-0 content-wrapper">
								<p>
									❝Traveling around the world, one day or another we will meet
									other certainly”. Bangladesh, the queen of beauty herself is a
									land of exhilarating places. Longest natural sea beach,
									mangrove forest, secret green hills and waterfalls, rich flora
									& fauna, monsoon mists over the delta, dazzling tribal &
									silent rural life, colorful festive, waterways like
									superhighways; “Britto – the circle of travel & tourism” will
									be your reliable planner for all of these explorations in
									Bangladesh.❞ <br />
									<br /> Happy and Safe Traveling... Be Traveler!!!
								</p>
							</div>

							<div className="col-4 p-0 organization-img-wrapper">
								<img
									src="/assets/images/organization.png"
									alt="our-logo"
									className="img-fluid organization-img"
								/>

								<div className="social-icon">
									<a href="#" target="_blank">
										<img
											src="/assets/logo/facebook.png"
											alt="social-icon"
											className="img-fluid"
										/>
									</a>

									<a href="#" target="_blank">
										<img
											src="/assets/logo/whatsapp.png"
											alt="social-icon"
											className="img-fluid"
										/>
									</a>

									<a href="#" target="_blank">
										<img
											src="/assets/logo/playstore.png"
											alt="social-icon"
											className="img-fluid"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="contact-us row m-0">
					<div className="col-11 p-0">
						<div id="title">
							<h2>Contact Us</h2>
						</div>

						<div className="footer-container">
							<div className="footer-left">
								<div>
									<h4>Address</h4>
									<p>
										Address: House: 836, Road: 2, <br /> Baitul Aman Housing
										Society, <br /> Adabor Dhaka, Bangladesh 1207
									</p>
								</div>

								<div>
									<h4>Phone</h4>
									<p>
										<a href="tel:+8801815-761065" className="hover-link">
											01815-761065
										</a>
										(Sajek)
										<br />
										<a href="tel:+8801911-722007" className="hover-link">
											01911-722007
										</a>
										(Dhaka)
									</p>
								</div>
							</div>
							<div className="footer-middle">
								<div>
									<h4>Facebook Page</h4>
									<p className="hover-link">Megh Punji</p>
								</div>

								<div>
									<h4>Instagram</h4>
									<p className="hover-link">@megh-punji</p>
								</div>
							</div>
							<div className="footer-right">
								<h4>Important Links</h4>
								<ul>
									<li className="hover-link" onClick={() => setTarashaT(true)}>
										Tarasha
									</li>
									<li className="hover-link" onClick={() => setPurbashaT(true)}>
										Purbasha
									</li>
									<li className="hover-link" onClick={() => setRodelaT(true)}>
										Rodela
									</li>
									<li className="hover-link" onClick={() => setMeghlaT(true)}>
										Meghla
									</li>
								</ul>

								<PhotoSlider
									images={tarashaArray.map((item, index) => ({
										src: item,
										key: index
									}))}
									visible={tarashaT}
									onClose={() => setTarashaT(false)}
								/>

								<PhotoSlider
									images={meghlaArray.map((item, index) => ({
										src: item,
										key: index
									}))}
									visible={meghlaT}
									onClose={() => setMeghlaT(false)}
								/>

								<PhotoSlider
									images={purbashaArray.map((item, index) => ({
										src: item,
										key: index
									}))}
									visible={purbashaT}
									onClose={() => setPurbashaT(false)}
								/>

								<PhotoSlider
									images={rodelaArray.map((item, index) => ({
										src: item,
										key: index
									}))}
									visible={rodelaT}
									onClose={() => setRodelaT(false)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
