// external modules
const express = require("express");

// sub-router
const booking = express.Router();

// internal modules
const {
	createBooking,
	fetchingBooking,
	searchCottage,
	allBookingDocs,
	removingDate
} = require("./../controllers/bookingController");
const authUser = require("./../middleware/authUser");

// for create booking
booking.post("/submit", createBooking);

// for fetching specific booking
booking.get("/:cottage", fetchingBooking);

// for searching specific cottage
booking.get("/searching/:date", searchCottage);

// for get all booking documents
booking.get("/", authUser, allBookingDocs);

// for removing booking date
booking.get("/:cottage_name/:_id", removingDate);

module.exports = booking;
