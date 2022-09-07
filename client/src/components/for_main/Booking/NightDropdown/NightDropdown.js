// external components
import { useState } from "react";

// internal components
import "./NightDropdown.css";

const NightDropdown = ({ getNight, setNight, selectedDay }) => {
	const [nightDrop, setNightDrop] = useState("");

	const nightArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
