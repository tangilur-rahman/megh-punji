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
			res.status(200).json(document);
		}
	} catch (error) {
		res.status(500).json({ error: "Server error!" });
	}
};

// for update cottage
const updateCottage = async (req, res) => {
	try {
		const { _id, cottageNames } = req.body;
		console.log(cottageNames);

		let document = await cottageModel.findOne({ _id });

		if (document.cottages === undefined || document.cottages.length === 0) {
			cottageNames.map((value) => {
				document.cottages.push({ name: value });
			});
		} else {
			cottageNames.map((value, index) => {
				document.cottages[index].name = value;
			});
		}
		document.save();
		res.status(200).json({ message: "updated successfully!" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getCottage, updateCottage };
