// external components
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// internal components
import "./Reservation.css";

const Reservation = () => {
	const cottageArray = [
		{ title: "Meghla", img: "Meghla.jpg", rent: 5000 },
		{ title: "Purbasha", img: "Purbasha.jpg", rent: 4500 },
		{ title: "Rodela", img: "Rodela.jpg", rent: 4500 },
		{ title: "Tarasha", img: "Tarasha.jpg", rent: 4500 }
	];

	return (
		<>
			<div className="reservation-container">
				<div className="row m-0 reserve-header-container">
					<div className="col-11 reserve-header p-0">
						<h2>Make A Reservation</h2>
						<h6>No mask, no service!</h6>
					</div>
				</div>

				<div className="row m-0 reserve-body-container">
					<div className="col-11 reserve-body p-0">
						<div className="pick-date">
							<label htmlFor="pick-date">Check a Date</label>
							<input type="text" id="pick-date" placeholder="Pick A Date..." />
						</div>

						<div className="cottage-container">
							{cottageArray &&
								cottageArray.map((value, index) => {
									return (
										<div className="cottage" key={index}>
											<h4>{value.title}</h4>

											<PhotoProvider>
												<PhotoView src={`assets/cottage/${value.img}`}>
													<img
														src={`assets/cottage/${value.img}`}
														alt="cottage-img"
													/>
												</PhotoView>
											</PhotoProvider>

											<h6>
												Per night:
												<span>{value.rent}৳</span>
											</h6>

											<button type="button" className="btn btn-success">
												Reserve
											</button>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Reservation;
