// external modules
const path = require("path");
let file = require("fs");

const deleteFile = async (req, res, next) => {
	const getFolder = path.resolve(
		`../client/public/assets/${req.query.folder}/${req.query.file}`
	);
	await file.unlinkSync(getFolder);
	next();
};

module.exports = { deleteFile };
