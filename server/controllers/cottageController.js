// internal modules
const cottageModel = require("./../models/cottageModel");

// for get cottage
const getCottage = async (req, res) => {
	try {
		let document = await cottageModel.find({});

		if (document.length > 0) {
			res.status(200).json(document[0]);
		} else {
			document = await cottageModel({});
			document.save();
			console.log(document);

			res.status(200).json(document);
		}
	} catch (error) {
		res.status(500).json({ error: "Server error!" });
	}
};

// for update cottage
const updateCottage = async (req, res) => {
	try {
		const { _id, cottageName } = req.body;

		const document = await cottageModel.findOne({ _id });

		if (document) {
			document.cottageList = cottageName;
		} else {
			document = await cottageModel({
				cottageList: cottageName
			});
		}

		document.save();
		res.status(200).json({ message: "updated successfully!" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getCottage, updateCottage };
