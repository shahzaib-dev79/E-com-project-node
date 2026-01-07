const mongoose = require("mongoose");

async function dbConnect(url) {
	try {
		await mongoose.connect(url);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log("Error occured in connecting Database");
	}
}

module.exports = dbConnect;
