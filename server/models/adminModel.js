// external modules
const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		phone: {
			type: String,
			required: true,
			trim: true
		},

		password: {
			type: String,
			required: true,
			trim: true
		}
	},
	{ timestamps: true }
);

const adminModel = mongoose.model("admin", schema);

module.exports = adminModel;
