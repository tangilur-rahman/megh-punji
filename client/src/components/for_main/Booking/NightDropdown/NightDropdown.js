// external components
import { useState } from "react";

// internal components
import "./NightDropdown.css";

const NightDropdown = ({ getNight, setNight, selectedDay, aviNight }) => {
	const [nightDrop, setNightDrop] = useState("");

	const nightArray = [];

	for (let index = 1; index <= aviNight; index++) {
		nightArray.push(index);
	}

	return (
		<>
			<div
				className={nightDrop ? "night-container active" : "night-container"}
				onClick={() => setNightDrop(!nightDrop)}
			>
				<input
					type="text"
					placeholder="Select Night"
					readOnly
					id="night"
					value={getNight}
					required
				/>

				{selectedDay && (
					<div className="option">
						{nightArray &&
							nightArray.map((value, index) => {
								return (
									<div onClick={() => setNight(value)} key={index}>
										<span>{value}</span>
									</div>
								);
							})}
					</div>
				)}
			</div>
		</>
	);
};

export default NightDropdown;
