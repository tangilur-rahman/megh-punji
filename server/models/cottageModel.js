// external modules
const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		cottageList: Array
	},
	{ timestamps: true }
);

const bookingModel = mongoose.model("cottage", schema);

module.exports = bookingModel;
