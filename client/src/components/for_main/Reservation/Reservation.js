// external components
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// internal components
import "./Reservation.css";

const Reservation = () => {
	const cottageArray = [
		{
			title: "Meghla",
			rent: 5000,
			array: [
				"/Meghla/Meghla_1.jpg",
				"/Meghla/Meghla_2.jpg",
				"/Meghla/Meghla_3.jpg"
			]
		},
		{
			title: "Purbasha",
			rent: 4500,
			array: [
				"/Purbasha/Purbasha_1.jpg",
				"/Purbasha/Purbasha_2.jpg",
				"/Purbasha/Purbasha_3.jpg"
			]
		},

		{
			title: "Rodela",
			rent: 4500,
			array: [
				"/Rodela/Rodela_1.jpg",
				"/Rodela/Rodela_2.jpg",
				"/Rodela/Rodela_3.jpg"
			]
		},
		{
			title: "Tarasha",
			rent: 5000,
			array: [
				"/Tarasha/Tarasha_1.jpg",
				"/Tarasha/Tarasha_2.jpg",
				"/Tarasha/Tarasha_3.jpg"
			]
		}
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
												{value.array &&
													value.array.map((item, item_key) => {
														return (
															<PhotoView
																src={`assets/cottage/${item}`}
																key={item_key}
															>
																{item_key === 0 ? (
																	<img
																		src={`assets/cottage/${item}`}
																		alt="cottage-img"
																	/>
																) : (
																	""
																)}
															</PhotoView>
														);
													})}
												{console.log(value.array)}
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
