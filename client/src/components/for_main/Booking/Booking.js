// external components
import DatePicker, {
	utils
} from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { useEffect, useRef, useState } from "react";
// react-toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// internal components
import "./Booking.css";
import CottageDropdown from "./CottageDropdown/CottageDropdown";
import NightDropdown from "./NightDropdown/NightDropdown";

const Booking = ({ setBookingT }) => {
	// for get input-fields values
	const [getCottage, setCottage] = useState("");
	const [getName, setName] = useState("");
	const [getPhone, setPhone] = useState("");
	const [getEmail, setEmail] = useState("");
	const [getNight, setNight] = useState("");

	// pick booking date
	const [selectedDay, setSelectedDay] = useState(null);

	// fetching date for disabled
	const [bookedDate, setBookedDate] = useState([]);

	// get selected night
	const [detailsT, setDetailsT] = useState("");

	// for close outside clicked start
	const myRef = useRef();

	const handleClickOutside = (e) => {
		if (!myRef.current?.contains(e.target)) {
			setBookingT(false);
			setDetailsT(false);
			setCottage("");
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// for close outside clicked end

	// selectedDay format start
	const formatDate = () => {
		if (selectedDay) {
			return `${
				selectedDay.day.toString().length > 1
					? selectedDay.day
					: "0" + selectedDay.day
			}-${
				selectedDay.month.toString().length > 1
					? selectedDay.month
					: "0" + selectedDay.month
			}-${selectedDay.year}`;
		} else {
			return "";
		}
	};
	// selectedDay format end

	// submit on database start
	const submitHandler = async () => {
		try {
			if (!(getCottage && getName && getPhone && selectedDay && getNight)) {
				toast("Fill-up all fields", {
					position: "top-right",
					theme: "dark",
					autoClose: 3000
				});
			} else {
				const response = await fetch("/cottage/submit", {
					method: "POST",
					body: JSON.stringify({
						getCottage,
						getName,
						getPhone,
						getEmail,
						selectedDay,
						getNight
					}),
					headers: { "Content-Type": "application/json" }
				});

				const result = await response.json();

				if (response.status === 200) {
					toast.success(result.message, {
						position: "top-right",
						theme: "colored",
						autoClose: 2500
					});
					setTimeout(() => {
						setBookingT(false);
						setDetailsT(false);
						setCottage("");
					}, 3000);
				} else if (response.status === 500) {
					toast.error(result.error, {
						position: "top-right",
						theme: "colored",
						autoClose: 3000
					});
				}
			}
		} catch (error) {
			toast.error(error.message, {
				position: "top-right",
				theme: "colored",
				autoClose: 3000
			});
		}
	};
	// submit on database end

	// fetching data for specific cottage start
	useEffect(() => {
		if (getCottage) {
			setBookedDate([]);
			(async () => {
				try {
					const response = await fetch(`/cottage/${getCottage}`);

					const result = await response.json();

					if (response.status === 200) {
						setBookedDate(result ? result : []);
					} else if (response.status === 500) {
						toast.error(result.error, {
							position: "top-right",
							theme: "colored",
							autoClose: 3000
						});
					}
				} catch (error) {
					toast.error(error.message, {
						position: "top-right",
						theme: "colored",
						autoClose: 3000
					});
				}
			})();
		}
	}, [getCottage]);
	// fetching data for specific cottage end

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
									<input
										type="text"
										id="name"
										required
										onChange={(e) => setName(e.target.value)}
										value={getName}
									/>
								</td>
							</tr>

							<tr>
								<td>
									<label htmlFor="phone">Phone No:*</label>
								</td>
								<td>
									<input
										type="number"
										id="phone"
										required
										onChange={(e) => setPhone(e.target.value)}
										value={getPhone}
									/>
								</td>
							</tr>

							<tr>
								<td>
									<label htmlFor="email">Email:</label>
								</td>
								<td>
									<input
										type="email"
										id="email"
										required
										onChange={(e) => setEmail(e.target.value)}
										value={getEmail}
									/>
								</td>
							</tr>

							<tr>
								<td>
									<label htmlFor="date">Date:*</label>
								</td>
								<td>
									{getCottage ? (
										<DatePicker
											value={selectedDay}
											onChange={setSelectedDay}
											inputPlaceholder="Pick a date..."
											calendarClassName="responsive-calendar"
											minimumDate={utils().getToday()}
											formatInputText={formatDate}
											disabledDays={bookedDate}
										/>
									) : (
										<input placeholder="Pick a date..." disabled readOnly />
									)}
								</td>
							</tr>

							<tr>
								<td>
									<label htmlFor="night">Nights:*</label>
								</td>
								<td>
									<NightDropdown
										getNight={getNight}
										setNight={setNight}
										selectedDay={selectedDay}
									/>
								</td>
							</tr>
							<tr>
								<td></td>
								<td>
									<button
										type="button"
										className="btn btn-success"
										onClick={submitHandler}
									>
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
