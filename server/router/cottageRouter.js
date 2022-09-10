// external modules
const express = require("express");

// sub-router
const cottage = express.Router();

// internal modules
const {
	getCottage,
	updateCottage
} = require("./../controllers/cottageController");

// for get cottage
cottage.get("/", getCottage);

// for update cottage
cottage.post("/", updateCottage);

module.exports = cottage;
