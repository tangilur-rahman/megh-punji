// external modules
const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true
		},

		phone: {
			type: String,
			required: true,
			trim: true
		},

		password: {
			type: String,
			required: true,
			trim: true
		},
		profile_img: {
			type: String,
			trim: true,
			required: true
		}
	},
	{ timestamps: true }
);

const adminModel = mongoose.model("admin", schema);

module.exports = adminModel;
