// external modules
const express = require("express");

// sub-router
const admin = express.Router();

// internal modules
const authUser = require("./../middleware/authUser");
const { loginAdmin, updateAdmin } = require("./../controllers/adminController");

// for get admin
admin.get("/", authUser, (req, res) => {
	try {
		res.status(200).json(req.currentUser);
	} catch (error) {
		res.status(500).json({ error: "Authentication Failed!" });
	}
});

// for admin login
admin.post("/login", loginAdmin);

admin.put("/update", authUser, updateAdmin);

module.exports = admin;
