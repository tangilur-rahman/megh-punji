// external components
import { useState } from "react";

// internal components
import "./CottageDropdown.css";

const CottageDropdown = ({ getCottage, setCottage, getCottageObj }) => {
	const [cottageDrop, setCottageDrop] = useState("");

	const displayCottage = () => {
		if (getCottage) {
			return `🌄 ${getCottage}`;
		}
	};

	return (
		<>
			<div
				className={
					cottageDrop ? "cottage-container active" : "cottage-container"
				}
				onClick={() => setCottageDrop(!cottageDrop)}
			>
				<input
					type="text"
					placeholder="Select Cottage"
					readOnly
					id="cottage"
					value={displayCottage()}
				/>
				<div className="option">
					{getCottageObj &&
						getCottageObj.cottages.map((value, index) => {
							return (
								<div onClick={() => setCottage(value.name)} key={index}>
									<span>🌄 &nbsp; {value.name}</span>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};

export default CottageDropdown;
