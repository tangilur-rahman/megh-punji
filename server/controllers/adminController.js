// external modules
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// internal modules
const adminModel = require("../models/adminModel");

// for admin login
const loginAdmin = async (req, res) => {
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
};

const updateAdmin = async (req, res) => {
	try {
		const { getName, getPhone, getCpassword, getNewPassword } = req.body;

		// check password
		const comparePassword = await bcrypt.compare(
			getCpassword,
			req.currentUser.password
		);

		if (!comparePassword) {
			throw new Error("Current password invalid!");
		}

		if (getName) {
			req.currentUser.name = getName;
		}

		if (getPhone) {
			req.currentUser.phone = getPhone;
		}

		if (getNewPassword) {
			function validatePassword(password) {
				if (password.length < 8) {
					throw Error("Password must be at least 8 characters.");
				}
				if (password.search(/[a-z]/i) < 0) {
					throw Error("Password must contain at least one letter.");
				}
				if (password.search(/[0-9]/) < 0) {
					throw Error("Password must contain at least one digit.");
				}
				return true;
			}

			const check = validatePassword(getNewPassword);

			if (check) {
				const hashPassword = await bcrypt.hash(getNewPassword, 10);
				req.currentUser.password = hashPassword;
			}
		}

		req.currentUser.save();
		res.status(200).json({ message: "Profile update successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { loginAdmin, updateAdmin };
