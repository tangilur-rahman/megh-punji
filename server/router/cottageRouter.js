// external modules
const express = require("express");

// sub-router
const cottage = express.Router();

// internal modules
const cottageModel = require("./../models/cottageModel");

// for create booking
cottage.post("/submit", async (req, res) => {
	try {
		const { getCottage, getName, getPhone, getEmail, dateArray, getNight } =
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
				date: dateArray,
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
					date: dateArray,
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

// for fetching booking
cottage.get("/:cottage", async (req, res) => {
	try {
		const findCottage = await cottageModel.findOne({
			cottage: req.params.cottage
		});

		if (findCottage) {
			const collectDate = [];

			findCottage.booking.map((value) => {
				value.date.map((result) => {
					result.map((date) => collectDate.push(date));
				});
			});

			res.status(200).json(collectDate);
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = cottage;
