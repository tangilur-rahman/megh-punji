// external components
import { useState } from "react";

// internal components
import "./CottageDropdown.css";

const CottageDropdown = ({ getCottage, setCottage }) => {
	const [cottageDrop, setCottageDrop] = useState("");

	const displayCottage = () => {
		if (getCottage === "meghla") {
			return "🌄  Meghla";
		} else if (getCottage === "purbasha") {
			return "🌄  Purbasha";
		} else if (getCottage === "rodela") {
			return "🌄  Rodela";
		} else if (getCottage === "tarasha") {
			return "🌄  Tarasha";
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
					required
				/>
				<div className="option">
					<div onClick={() => setCottage("meghla")}>
						<span>🌄 &nbsp; Meghla</span>
					</div>
					<div onClick={() => setCottage("purbasha")}>
						<span>🌄 &nbsp; Purbasha</span>
					</div>

					<div onClick={() => setCottage("rodela")}>
						<span>🌄 &nbsp; Rodela</span>
					</div>

					<div onClick={() => setCottage("tarasha")}>
						<span>🌄 &nbsp; Tarasha</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default CottageDropdown;
