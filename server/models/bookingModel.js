// external modules
const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		cottage: {
			type: String,
			required: true,
			trim: true
		},
		booking: [
			{
				name: {
					type: String,
					trim: true
				},

				phone: {
					type: Number,
					trim: true
				},

				email: {
					type: String,
					trim: true,
					default: ""
				},

				date: Array,

				night: {
					type: Number,
					trim: true
				}
			}
		]
	},
	{ timestamps: true }
);

const bookingModel = mongoose.model("booking", schema);

module.exports = bookingModel;
