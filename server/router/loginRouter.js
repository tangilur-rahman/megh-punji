// external modules
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// sub-router
const login = express.Router();

// internal modules
const adminModel = require("./../models/adminModel");

login.post("/", async (req, res) => {
	const { phone, password } = req.body;

	try {
		const document = await adminModel.findOne({ phone });

		if (document) {
			const comparePassword = await bcrypt.compare(password, document.password);

			if (comparePassword) {
				// create token
				const token = await jwt.sign(
					{ mongodb_id: document._id },
					process.env.SECRET_KEY,
					{ expiresIn: "365d" }
				);

				await res.cookie(process.env.COOKIES_NAME, token, {
					expires: new Date(Date.now() + 31556952000)
				});

				res.status(200).json({ message: "Welcome to dashboard" });
			} else {
				res.status(400).json({ error: "Authentication Failed!" });
			}
		} else {
			res.status(400).json({ error: "Invalid Phone Number!" });
		}
	} catch (error) {
		res.status(500).json({ error: "Invalid Account!" });
	}
});

module.exports = login;
