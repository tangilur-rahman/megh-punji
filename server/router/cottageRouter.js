// external modules
const express = require("express");

// sub-router
const cottage = express.Router();

// internal modules
const cottageModel = require("./../models/cottageModel");

cottage.post("/submit", async (req, res) => {
	console.log(req.body);

	try {
		const { getCottage, getName, getPhone, getEmail, selectedDay, getNight } =
			req.body;

		// email validate
		if (getEmail) {
			function validateEmail(email) {
				var emailRegex =
					/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				return emailRegex.test(email);
			}

			if (!validateEmail(getEmail)) {
				throw new Error("Invalid Email!");
			}
		}

		// checking phone number
		if (getPhone.toString().length !== 11) {
			throw new Error("Invalid Phone Number!");
		}

		const findCottage = await cottageModel.findOne({ cottage: getCottage });

		if (findCottage) {
			findCottage.booking.push({
				name: getName,
				phone: getPhone,
				email: getEmail,
				date: selectedDay,
				night: getNight
			});

			await findCottage.save();

			res.status(200).json({ message: `${getName}, Welcome To Sajek` });
		} else {
			const createCottage = await cottageModel({
				cottage: getCottage,
				booking: {
					name: getName,
					phone: getPhone,
					email: getEmail,
					date: selectedDay,
					night: getNight
				}
			});

			await createCottage.save();
			res.status(200).json({ message: `${getName}, Welcome To Sajek` });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = cottage;
