// external components
import dateFormat from "dateformat";
import { useEffect, useRef, useState } from "react";

// internal components
import CngProfileImg from "./CngProfileImg/CngProfileImg";
import "./ProfileEdit.css";

const ProfileEdit = ({ getAdmin, setProfileT }) => {
	// for toggle edit option
	const [editT, setEditT] = useState(false);
	const [changeProfileT, setChangeProfileT] = useState(false);

	// for get & set input-fields values
	const [getName, setName] = useState("");
	const [getPhone, setPhone] = useState("");
	const [getCpassword, setCpassword] = useState("");
	const [getNewPassword, setNewPassword] = useState("");

	// for type toggle
	const [typeC_P_T, setTypeC_P_T] = useState("");
	const [typeP_T, setTypeP_T] = useState("");

	// for file handle
	const [getFile, setFile] = useState("");
	const [previewImg, setPreviewImg] = useState("");

	// detect outside click menu-bar hidden start
	const myRef = useRef();

	const handleClickOutside = (e) => {
		if (!myRef.current?.contains(e.target)) {
			setProfileT(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// detect outside click menu-bar hidden start

	// for preview image start
	const imgHandler = (event) => {
		setFile(event.target.files[0]);
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setPreviewImg(reader.result);
			}
		};
		reader.readAsDataURL(event.target.files[0]);
	};
	// for preview image end

	// submit handler start
	const submitHandler = () => {};
	// submit handler end

	// for displaying phone-number start
	const displayValue = () => {
		if (editT) {
			return getPhone;
		} else if (getAdmin.phone) {
			return "+88 " + getAdmin.phone;
		} else {
			return "Null";
		}
	};
	// for displaying phone-number end

	return (
		<>
			<div
				className="profile-edit-container"
				data-aos="fade-up"
				data-aos-delay="0"
			>
				<div className="row m-0 layout">
					<div className="col-xl-9 col-lg-10 col-11 p-0">
						<div
							ref={myRef}
							className="wrapper"
							id={changeProfileT ? "blur" : null}
						>
							<div className="curr-user-profile">
								<span className="img-wrapper">
									<img
										src={`/assets/profile-img/${getAdmin.profile_img}`}
										alt="profile-img"
										className={editT ? "img-fluid" : "img-fluid animation"}
									/>

									{editT && (
										<span
											className="change-img"
											onClick={() => setChangeProfileT(!changeProfileT)}
										>
											<label htmlFor="change-img">
												<i className="fa-solid fa-camera"></i>
											</label>
										</span>
									)}
								</span>
							</div>

							<div className="curr-user-info">
								<div className="row info m-0">
									<span className={editT ? "outline-style" : ""}>
										Name :&nbsp;
										<input
											value={editT ? getName : getAdmin.name}
											readOnly={editT ? false : true}
											onChange={(event) => setName(event.target.value)}
											style={{ maxWidth: "200px" }}
										/>
									</span>

									<span id={editT ? "phone-number" : ""}>
										<label htmlFor="phone">
											Phone : &nbsp; {editT && <h6>+88</h6>}
										</label>

										<form style={{ display: "inline-block" }}>
											<input
												type={editT ? "number" : "text"}
												name="phone"
												id="phone"
												autoComplete="off"
												value={displayValue()}
												readOnly={editT ? false : true}
												onChange={(event) => setPhone(event.target.value)}
											/>
										</form>
									</span>

									{editT && (
										<span id="current-p" className="password-field">
											<label htmlFor="currPassword">Current Pass..:</label>

											<input
												type={typeC_P_T ? "text" : "password"}
												name="current_p"
												id="currPassword"
												value={getCpassword}
												onChange={(event) => setCpassword(event.target.value)}
											/>

											{/* for type toggle start  */}
											{getCpassword && (
												<div id="eye">
													{typeC_P_T ? (
														<i
															className="fa-solid fa-eye"
															onClick={() => setTypeC_P_T(!typeC_P_T)}
															style={{ color: "#6930c3" }}
														></i>
													) : (
														<i
															className="fa-solid fa-eye-slash"
															onClick={() => setTypeC_P_T(!typeC_P_T)}
														></i>
													)}
												</div>
											)}

											{/* for type toggle end  */}
										</span>
									)}

									<span title="last-updated">
										Updated:&nbsp;
										<input
											value={dateFormat(
												getAdmin.updatedAt,
												"mmm dS, yyyy, h:MM:ss TT"
											)}
											readOnly
										/>
									</span>

									{editT && (
										<>
											<span
												className="password-field new-password-field"
												id="outline-style"
											>
												<label htmlFor="newPassword">New Pass..:</label>

												<input
													type={typeP_T ? "text" : "password"}
													name="new_p"
													id="newPassword"
													onChange={(event) =>
														setNewPassword(event.target.value)
													}
													value={getNewPassword}
													style={{
														maxWidth: "175px"
													}}
												/>

												{/* for type toggle start  */}
												{getNewPassword && (
													<div id="eye">
														{typeP_T ? (
															<i
																className="fa-solid fa-eye"
																onClick={() => setTypeP_T(!typeP_T)}
																style={{ color: "#6930c3" }}
															></i>
														) : (
															<i
																className="fa-solid fa-eye-slash"
																onClick={() => setTypeP_T(!typeP_T)}
															></i>
														)}
													</div>
												)}

												{/* for type toggle end  */}
											</span>

											<span className="profile-btn">
												<button
													className="btn btn-success"
													onClick={submitHandler}
												>
													Submit
												</button>
											</span>
										</>
									)}
								</div>
							</div>

							<div className="icon">
								<span onClick={() => setEditT(!editT)}>
									<i className="fa-solid fa-user-pen"></i>
								</span>

								<span
									onClick={() => {
										setProfileT(false);
									}}
								>
									<i className="fa-solid fa-circle-xmark"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
				<input
					type="file"
					name="profile-img"
					id="change-img"
					accept="image/png, image/gif, image/jpeg"
					onChange={imgHandler}
					style={{ display: "none" }}
				/>
				{changeProfileT && (
					<CngProfileImg
						setChangeProfileT={setChangeProfileT}
						previewImg={previewImg}
						getFile={getFile}
					/>
				)}
			</div>
		</>
	);
};

export default ProfileEdit;
