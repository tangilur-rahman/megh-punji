// internal modules
const bookingModel = require("../models/bookingModel");

// for create booking
const createBooking = async (req, res) => {
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

		const findCottage = await bookingModel.findOne({ cottage: getCottage });

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
			const createCottage = await bookingModel({
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
};

// for fetching booking
const fetchingBooking = async (req, res) => {
	try {
		const findCottage = await bookingModel.findOne({
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
};

// for searching cottage
const searchCottage = async (req, res) => {
	try {
		const pickedDate = JSON.parse(req.params.date);

		let bookCottage = [];

		const searchingCottage = async (cottage) => {
			const document = await bookingModel.findOne({ cottage });

			let getValue = null;
			if (document) {
				getValue = (() => {
					for (let i = 0; i < document.booking.length; i++) {
						for (let j = 0; j < document.booking[i].date.length; j++) {
							for (let k = 0; k < document.booking[i].date[j].length; k++) {
								let found =
									JSON.stringify(document.booking[i].date[j][k]) ===
									JSON.stringify(pickedDate);

								if (found) {
									return found;
								}
							}
						}
					}
				})();
			}
			return getValue;
		};

		bookCottage.push(await searchingCottage("meghla"));
		bookCottage.push(await searchingCottage("purbasha"));
		bookCottage.push(await searchingCottage("rodela"));
		bookCottage.push(await searchingCottage("tarasha"));

		res.status(200).json(bookCottage);
	} catch (error) {
		res.status(500).json({ error: "Server problem, Try again!" });
	}
};

module.exports = { createBooking, fetchingBooking, searchCottage };
