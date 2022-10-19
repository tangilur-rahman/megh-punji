// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import sortArray from "sort-array";

// internal components
import "./Display.css";

const Display = ({ bookedDocs, selectedTab, setCheck }) => {
	// for displaying document
	const [displayingDoc, setDisplayingDoc] = useState([]);

	// for toggle conformation
	const [conformPopup, setConformPopup] = useState("");

	// for get selected row
	const [selectedRow, setSelectedRow] = useState("");

	// display handler start
	useEffect(() => {
		let allDocs = [];

		if (bookedDocs) {
			if (selectedTab === "All Cottages") {
				bookedDocs.map((value) =>
					value.booking.map((result) =>
						allDocs.push({ ...result, cottage: value.cottage })
					)
				);
				setDisplayingDoc(allDocs);
			} else {
				const specificCot = bookedDocs?.filter((value) => {
					return value.cottage === selectedTab.toLowerCase();
				});

				specificCot &&
					specificCot[0].booking?.map((result) =>
						allDocs.push({ ...result, cottage: selectedTab })
					);

				setDisplayingDoc(allDocs);
			}
		}
	}, [bookedDocs, selectedTab]);
	// display handler end

	// remove booking date handler start

	const removeDateHandler = async () => {
		try {
			const response = await fetch(
				`/booking/${selectedRow.name}/${selectedRow._id}`
			);

			const result = await response.json();

			if (result.error) {
				toast.error(result.error, {
					position: "top-right",
					theme: "colored",
					autoClose: 3000
				});
			} else {
				toast.success(result.message, {
					position: "top-right",
					theme: "colored",
					autoClose: 3000
				});
				setCheck(Date.now());
				setConformPopup(false);
			}
		} catch (error) {
			toast.error(error.message, {
				position: "top-right",
				theme: "colored",
				autoClose: 3000
			});
		}
	};
	// remove booking date handler end

	return (
		<>
			<div className="row m-0 display-container" data-aos="fade-up">
				<div className="col-11 p-0 display-wrapper">
					<h5>{selectedTab}</h5>
					<table className="table table-container">
						<thead>
							<th scope="col">#</th>
							<th scope="col">Cottage</th>
							<th scope="col">Name</th>
							<th scope="col">Phone</th>
							<th scope="col">Email</th>
							<th scope="col">Check_In</th>
							<th scope="col">Night</th>
							<th scope="col">Cancel</th>
						</thead>
						<tbody>
							{displayingDoc &&
								sortArray(displayingDoc, {
									by: "updatedAt",
									order: "desc"
								}).map((value, index) => {
									return (
										<tr
											key={index}
											onClick={() =>
												setSelectedRow({ _id: value._id, name: value.cottage })
											}
										>
											<td data-label="#">{index + 1}</td>
											<td data-label="Cottage:">{value.cottage}</td>
											<td data-label="Name:">{value.name}</td>
											<td data-label="Phone:">{value.phone}</td>
											<td data-label="Email:">
												<span id="email">
													{value.email ? value.email : "Null"}
												</span>
											</td>
											<td data-label="Check_In:">
												{value?.date.length > 0
													? `${value.date[0][0]?.day}-${value.date[0][0]?.month}-${value?.date[0][0]?.year}`
													: "Null"}
											</td>
											<td data-label="Night:">{value.night}</td>

											<td data-label="Cancel:">
												<i
													className="bi bi-x-circle"
													onClick={() => setConformPopup(!conformPopup)}
												></i>
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
				{/* for popup model section start  */}
				{conformPopup && (
					<div
						className="conformation-popup"
						data-aos="fade-down"
						data-aos-delay="0"
					>
						<h5>Do you want to cancel that booking?</h5>
						<div className="delete-controller">
							<button
								className="btn btn-dark"
								onClick={() => {
									setConformPopup(!conformPopup);
								}}
							>
								Cancel
							</button>

							<button className="btn btn-danger" onClick={removeDateHandler}>
								Submit
							</button>
						</div>
					</div>
				)}
				{/* for popup model section end  */}
			</div>
		</>
	);
};

export default Display;
