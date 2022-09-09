// external modules
const jwt = require("jsonwebtoken");

// internal modules
const adminModel = require("./../models/adminModel");

const authUser = async (req, res, next) => {
	try {
		const user = await jwt.verify(
			req.cookies.megh_punji,
			process.env.SECRET_KEY
		);

		const document = await adminModel.findOne({
			mongodb_id: user._id
		});

		if (document) {
			req.currentUser = document;
			next();
		} else {
			res.status(500).json({ error: "Authentication Failed!" });
		}
	} catch (error) {
		res.status(500).json({ error: "Authentication Failed!" });
	}
};

module.exports = authUser;
