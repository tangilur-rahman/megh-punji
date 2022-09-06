/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Contact.css";

const Contact = () => {
	return (
		<>
			<div className="contact-container">
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
									<a href="" target="_blank">
										<img
											src="/assets/logo/facebook.png"
											alt="social-icon"
											className="img-fluid"
										/>
									</a>

									<a href="" target="_blank">
										<img
											src="/assets/logo/whatsapp.png"
											alt="social-icon"
											className="img-fluid"
										/>
									</a>

									<a href="" target="_blank">
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
					<div className="col-11 p-0">contact us</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
