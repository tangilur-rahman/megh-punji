// external modules
const express = require("express");

// sub-router
const booking = express.Router();

// internal modules
const {
	createBooking,
	fetchingBooking,
	searchCottage
} = require("./../controllers/bookingController");

// for create booking
booking.post("/submit", createBooking);

// for fetching booking
booking.get("/:cottage", fetchingBooking);

// for searching cottage
booking.get("/searching/:date", searchCottage);

module.exports = booking;
