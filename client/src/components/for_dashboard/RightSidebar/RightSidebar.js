// external components
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

// internal components
import "./RightSidebar.css";

const RightSidebar = ({ setMenuT, menuT, getCottage, setUpdateCottage }) => {
	// detect outside click menu-bar hidden start
	const menuRef = useRef();

	const handleClickOutside = (e) => {
		if (!menuRef.current?.contains(e.target)) {
			setMenuT(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// detect outside click menu-bar hidden start

	// for edit right-bar toggle
	const [editRight, setEditRight] = useState("");

	// cottage edit start
	const [cottage_1, setCottage_1] = useState(getCottage.cottageList[0]);
	const [cottage_2, setCottage_2] = useState(getCottage.cottageList[1]);
	const [cottage_3, setCottage_3] = useState(getCottage.cottageList[2]);
	const [cottage_4, setCottage_4] = useState(getCottage.cottageList[3]);
	// cottage edit end

	// submit right-bar modify start
	const submitHandler = async () => {
		const cottageName = [cottage_1, cottage_2, cottage_3, cottage_4];

		if (
			cottage_1 === getCottage.cottageList[0] &&
			cottage_2 === getCottage.cottageList[1] &&
			cottage_3 === getCottage.cottageList[2] &&
			cottage_4 === getCottage.cottageList[3]
		) {
			toast("Nothing have to submit!", {
				position: "top-right",
				theme: "dark",
				autoClose: 3000
			});
			setEditRight(false);
		} else {
			try {
				const response = await fetch("/cottage", {
					method: "POST",
					body: JSON.stringify({
						_id: getCottage._id,
						cottageName
					}),
					headers: { "Content-Type": "application/json" }
				});

				const result = await response.json();

				if (response.status === 200) {
					toast.success(result.message, {
						position: "top-right",
						theme: "colored",
						autoClose: 2000
					});
					setUpdateCottage(Date.now());
					setMenuT(false);
					setEditRight(false);
				} else if (response.status === 400) {
					toast(result.error, {
						position: "top-right",
						theme: "dark",
						autoClose: 3000
					});
				} else if (result.error) {
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
		}
	};
	// submit right-bar modify end

	return (
		<>
			<div
				className="row m-0 right-sidebar"
				ref={menuRef}
				id={menuT ? "active" : ""}
			>
				<div className="col p-0">
					<div className="dropdown">
						<i className="fa-solid fa-handshake"></i> Booking
						<ul className="dropdown_menu dropdown_menu-1">
							<li className="dropdown_item-1" id={editRight ? "active" : ""}>
								All Cottages
							</li>
							<li className="dropdown_item-2" id={editRight ? "active" : ""}>
								<input
									value={cottage_1}
									readOnly={editRight ? false : true}
									onChange={(e) => setCottage_1(e.target.value)}
									id={editRight ? "active" : ""}
								/>
							</li>
							<li className="dropdown_item-3" id={editRight ? "active" : ""}>
								<input
									value={cottage_2}
									readOnly={editRight ? false : true}
									onChange={(e) => setCottage_2(e.target.value)}
									id={editRight ? "active" : ""}
								/>
							</li>
							<li className="dropdown_item-4" id={editRight ? "active" : ""}>
								<input
									value={cottage_3}
									readOnly={editRight ? false : true}
									onChange={(e) => setCottage_3(e.target.value)}
									id={editRight ? "active" : ""}
								/>
							</li>
							<li className="dropdown_item-5" id={editRight ? "active" : ""}>
								<input
									value={cottage_4}
									readOnly={editRight ? false : true}
									onChange={(e) => setCottage_4(e.target.value)}
									id={editRight ? "active" : ""}
								/>
							</li>

							{editRight && (
								<li
									className="dropdown_item-6 submit-btn"
									id={editRight ? "active" : ""}
								>
									<div className="submit-btn">
										<button
											type="button"
											className="btn btn-success"
											onClick={submitHandler}
										>
											Submit
										</button>
									</div>
								</li>
							)}
						</ul>
					</div>
				</div>
				<div className="edit-icon">
					<i
						className="fa-solid fa-pen-to-square"
						onClick={() => setEditRight(!editRight)}
					></i>
				</div>
			</div>
		</>
	);
};

export default RightSidebar;
