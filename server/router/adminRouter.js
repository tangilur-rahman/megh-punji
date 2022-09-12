// external modules
const express = require("express");

// sub-router
const admin = express.Router();

// internal modules
const authUser = require("./../middleware/authUser");
const {
	loginAdmin,
	updateAdmin,
	chgProfileImg
} = require("./../controllers/adminController");
const { multerForImg } = require("./../Config/multerManager");
const { deleteFile } = require("./../Config/deleteManager");

// for get admin
admin.get("/", authUser, (req, res) => {
	try {
		res.status(200).json(req.currentUser);
	} catch (error) {
		res.status(500).json({ error: "Authentication Failed!" });
	}
});

// for admin login
admin.post("/login", authUser, loginAdmin);

// for update admin information
admin.put("/update", authUser, updateAdmin);

// for update admin profile-img
const upload = multerForImg("file");
admin.put(
	"/profile",
	authUser,
	deleteFile,
	upload.single("file"),
	chgProfileImg
);

module.exports = admin;
