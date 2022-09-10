// external modules
const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		cottages: [
			{
				name: String,
				rent: Number,
				images: Array
			}
		]
	},
	{ timestamps: true }
);

const bookingModel = mongoose.model("cottage", schema);

module.exports = bookingModel;
