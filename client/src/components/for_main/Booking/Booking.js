// external components
import { useEffect, useRef, useState } from "react";

// internal components
import "./Booking.css";
import CottageDropdown from "./CottageDropdown/CottageDropdown";
import NightDropdown from "./NightDropdown/NightDropdown";

const Booking = ({ setBookingT }) => {
	// get selected cottage
	const [getCottage, setCottage] = useState("");

	// get selected night
	const [getNight, setNight] = useState("");

	// get selected night
	const [detailsT, setDetailsT] = useState("");

	// for close outside clicked start
	const myRef = useRef();

	const handleClickOutside = (e) => {
		if (!myRef.current?.contains(e.target)) {
			setBookingT(false);
			setDetailsT(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// for close outside clicked end

	return (
		<>
			<div className=" row m-0 booking-container">
				<div
					className="col-xx-6 col-xl-8 col-lg-10 col-11 booking-wrapper"
					ref={myRef}
					id={detailsT ? "details" : ""}
					data-aos="fade-down"
				>
					<div className="header">
						<h2>Book a cottage</h2>
						<h6>(2 persons per cottage)</h6>
					</div>

					<form>
						<table>
							<tr>
								<td>
									<label htmlFor="cottage">Cottage:*</label>
								</td>
								<td>
									<CottageDropdown
										getCottage={getCottage}
										setCottage={setCottage}
									/>
								</td>
							</tr>

							<tr>
								<td>
									<label htmlFor="name">Full Name:*</label>
								</td>
								<td>
									<input type="text" name="name" id="name" required />
								</td>
							</tr>

							<tr>
								<td>
									<label htmlFor="phone">Phone No:*</label>
								</td>
								<td>
									<input type="number" name="phone" id="phone" required />
								</td>
							</tr>

							<tr>
								<td>
									<label htmlFor="email">Email:</label>
								</td>
								<td>
									<input type="email" name="email" id="email" required />
								</td>
							</tr>

							<tr>
								<td>
									<label htmlFor="date">Date:*</label>
								</td>
								<td>
									<input type="number" name="date" id="date" required />
								</td>
							</tr>

							<tr>
								<td>
									<label htmlFor="night">Nights:*</label>
								</td>
								<td>
									<NightDropdown getNight={getNight} setNight={setNight} />
								</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<button type="button" className="btn btn-success">
										Submit Request
									</button>
								</td>
							</tr>
						</table>
					</form>
					<div className="booking-config">
						<p>
							<span>Advance Payment:</span> Please pay at least 2040tk per
							cottage per night as advance via bKash no 01815761065 (personal)
							or 01814275755 (personal) within 24 hours and make a call
							immediately for verification and get a confirmation text-reply to
							your mobile. After 24hrs, your pre-booking will be cancelled if
							not paid. Please call 01815761065/01814275755 or &nbsp;
							<h6 className="hover-link" onClick={() => setDetailsT(true)}>
								click here
							</h6>
							&nbsp; for more query. <br />
							<span>Cancellation Policy:</span> Advance payment is completely
							non-refundable. You can change your booking date once depending on
							our cottages' availability. However, you have to inform us atleast
							05 days before your current booking.
						</p>

						{detailsT && (
							<p>
								<h5>Some Advices:</h5> 1. Bring your national id card along with
								you. <br /> 2. Don’t misbehave with the tribal or any other
								guests. <br /> 3. In Sajek, Only Robi & Airtel mobile network is
								strongly available. <br />
								4. Bring any kind of insecticide with you such as Odomos cream/
								lotion. <br /> 5. If you need any kind of assistance regarding
								your cottage and Sajek, please feel free to contact with the
								resort manager.
								<br />
								<br />
								<h5> Some Assistance:</h5> 1. There are many non-ac bus services
								available from Dhaka- Khagrachari or Dhaka- Dighinala. Soudia,
								Unique, Shyamoli, Eagle, S.Alam, Shanti Paribahan are the common
								names. Dhaka- Khagrachari bus fare is 520 taka and Dhaka-
								Dighinala bus fare is 570 taka. Only Hanif and Saint Martin
								Paribahan has the A.C bus service from Dhaka-Khagrachari and the
								fare is 900-1000tk. <br /> 2. It will take Jeep/ Chander gari
								both from Khagrachari and Dighinala. They have many packages
								starting from 6100-10000tk with one night stay in Sajek and
								other sightseeing like Hajachora Waterfall, Konglak Para,
								Alutila Cave, Risang Waterfall, Zilla Parishad Park, Tareng etc.{" "}
								<br />
								3. Sajek is a much secured place for the tourists as it is
								controlled by Bangladesh Army and BGB. Tourists can start their
								journey with the assistance of Army Escort to Sajek by
								registering their names in Baghaihat Army camp at 10-10:30 am
								and 3-3:30 pm. <br /> 4. Please, feel free to contact with us
								for any kind of further assistance. Help Line: 01815761065,
								01911722007, 01814275755
							</p>
						)}
					</div>

					{/* close button start  */}
					<div
						className="close-modal-button"
						onClick={() => {
							setBookingT(false);
							setDetailsT(false);
						}}
					></div>
					{/* close button end  */}
				</div>
			</div>
		</>
	);
};

export default Booking;
